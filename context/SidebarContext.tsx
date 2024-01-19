import React, { createContext, ReactNode, useState } from "react";

interface SidebarContextProps {
  isCollapsed: boolean;
  toggleSidebarcollapse: () => void;
}

const initialValue: SidebarContextProps = {
  isCollapsed: false,
  toggleSidebarcollapse: () => {},
};

const SidebarContext = createContext(initialValue);

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  const contextValue: SidebarContextProps = {
    isCollapsed,
    toggleSidebarcollapse,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
