"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    mounted ? <ThemeProvider attribute="class" >
      {children}
    </ThemeProvider> : <></>
  );
}

export default Providers;