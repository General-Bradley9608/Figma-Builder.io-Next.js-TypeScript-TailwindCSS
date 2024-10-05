import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/Auth";
import { usePathname } from "next/navigation";

interface AuthPagesProps {
  children: ReactNode;
}

const AuthPages = ({ children }: AuthPagesProps) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  console.log(user);
  // console.log(router);
  // console.log(pathname);

  // console.log('🚀', user);

  useEffect(() => {
    const publicPaths = [
      "/login",
      "/signup",
      "/signup/invite",
      "/forgotpassword",
      "/forgotpassword/resetpassword",
      "/",
    ];

    const pathIsPublic = publicPaths.includes(pathname);

    if (!user && !pathIsPublic) {
      // console.log(user);
      router.push("/login");
    }
  }, [user, pathname, router]);

  return <>{children}</>;
};

export default AuthPages;
