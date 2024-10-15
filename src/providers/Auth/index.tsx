"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { User } from "../../payload-types";
import { gql, USER } from "../../lib/gql";
import { rest } from "../../lib/rest";
import {
  AuthContext,
  Create,
  ForgotPassword,
  Login,
  Logout,
  ResetPassword,
} from "./types";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Context = createContext({} as AuthContext);

const SUCCESS_REDIRECT_PATH = "/onboarding"; // TODO: change to "/dashboard"
const FAIL_REDIRECT_PATH = "/login";

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  api?: "rest" | "gql";
}> = ({ children, api = "rest" }) => {
  const [user, setUser] = useState<User | null>();
  const router = useRouter();
  const currentPath = usePathname();

  const create = useCallback<Create>(
    async (args) => {
      if (api === "rest") {
        const user = await rest(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users`,
          args
        );
        setUser(user);
        return user;
      }

      if (api === "gql") {
        const { createUser: user } = await gql(`mutation {
        createUser(data: { email: "${args.email}", password: "${args.password}", name: "${args.name}" }) {
          ${USER}
        }
      }`);

        setUser(user);
        return user;
      }
    },
    [api]
  );

  const login = useCallback<Login>(
    async (args) => {
      if (api === "rest") {
        const user = await rest(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/login`,
          args
        );

        setUser(user);
        return user;
      }

      if (api === "gql") {
        const { loginUser } = await gql(`mutation {
        loginUser(email: "${args.email}", password: "${args.password}") {
          user {
            ${USER}
          }
          exp
        }
      }`);

        setUser(loginUser?.user);
        return loginUser?.user;
      }
    },
    [api]
  );

  const logout = useCallback<Logout>(async () => {
    if (api === "rest") {
      await rest(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/logout`);
      setUser(null);
      return;
    }

    if (api === "gql") {
      await gql(`mutation {
        logoutUser
      }`);

      setUser(null);
    }
  }, [api]);

  const autoRedirect = (me: User | null | undefined) => {
    const authPaths = [
      "/login",
      "/signup",
      "/invite",
      "/forgotpassword",
      "/resetpassword",
    ];
    const exactPaths = ["/"];
    const isAuthPath = authPaths.some((path) => currentPath.startsWith(path));
    const isExactPath = exactPaths.includes(currentPath);

    if (me && isAuthPath) router.push(SUCCESS_REDIRECT_PATH);
    if (!me && !isAuthPath && !isExactPath) {
      router.push(`${FAIL_REDIRECT_PATH}?redirect=${currentPath}`);
    }
  };

  const fetchMe = async () => {
    if (api === "rest") {
      const me = await rest(
        `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/me`,
        {},
        {
          method: "GET",
        }
      );
      autoRedirect(me);
      setUser(me);
    }

    if (api === "gql") {
      const { meUser } = await gql(`query {
        meUser {
          user {
            ${USER}
          }
          exp
        }
      }`);

      autoRedirect(meUser.user);
      setUser(meUser.user);
    }
  };

  // On mount, get user and set
  useEffect(() => {
    if (!user) {
      fetchMe();
    }
  }, [api]);

  const forgotPassword = useCallback<ForgotPassword>(
    async (args) => {
      if (api === "rest") {
        const user = await rest(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/forgot-password`,
          args
        );
        setUser(user);
        return user;
      }

      if (api === "gql") {
        const { forgotPasswordUser } = await gql(`mutation {
        forgotPasswordUser(email: "${args.email}")
      }`);

        return forgotPasswordUser;
      }
    },
    [api]
  );

  const resetPassword = useCallback<ResetPassword>(
    async (args) => {
      if (api === "rest") {
        const user = await rest(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/reset-password`,
          args
        );
        setUser(user);
        return user;
      }

      if (api === "gql") {
        const { resetPasswordUser } = await gql(`mutation {
        resetPasswordUser(password: "${args.password}", token: "${args.token}") {
          user {
            ${USER}
          }
        }
      }`);

        setUser(resetPasswordUser.user);
        return resetPasswordUser.user;
      }
    },
    [api]
  );

  return (
    <Context.Provider
      value={{
        user,
        fetchMe,
        setUser,
        login,
        logout,
        create,
        resetPassword,
        forgotPassword,
      }}
    >
      {children}
    </Context.Provider>
  );
};

type UseAuth<T = User> = () => AuthContext; // eslint-disable-line no-unused-vars

export const useAuth: UseAuth = () => useContext(Context);
