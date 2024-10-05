"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/providers/Auth";
import AuthPages from "@/components/AuthPages";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AuthProvider api="rest">
      {mounted ? (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      ) : (
        <></>
      )}
    </AuthProvider>
  );
};

export default Providers;
