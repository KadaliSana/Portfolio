"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PortfolioMode = "Pro" | "personal";

interface PortfolioContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>("Pro");

  // Load preference from localStorage if available
  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as PortfolioMode;
    if (savedMode && (savedMode === "Pro" || savedMode === "personal")) {
      setMode(savedMode);
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === "Pro" ? "personal" : "Pro";
      localStorage.setItem("portfolio-mode", next);
      return next;
    });
  };

  return (
    <PortfolioContext.Provider value={{ mode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
