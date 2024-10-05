import { ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/providers/Auth";

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
      "/invite",
      "/forgotpassword",
      "/resetpassword",
    ];
    const exactPaths = [
      "/",
    ]

    const pathIsPublic = publicPaths.some(path => pathname.startsWith(path))
      || exactPaths.includes(pathname);

    console.log(user, pathname, pathIsPublic);
    if (!user && !pathIsPublic) {
      // console.log(user);
      router.push("/login");
    }
  }, [user, pathname, router]);

  return <>{children}</>;
};

export default AuthPages;
