"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
type MenuContextType = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  registerOpen: boolean;
  setRegisterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openRegister: () => void;
  closeRegister: () => void;
};

// Create the context
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Provider component
export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        registerOpen,
        setRegisterOpen,
        openRegister,
        closeRegister,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

// Custom hook to consume the context
export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
