import { createContext, useState, React } from "react";

export const SideBarContext = createContext();

function SideBarContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSection, setInitialSection] = useState(null);

  const sidebarOpenHandler = (section) => {
    setIsOpen(true);
    setInitialSection(section);
  };

  const sidebarCloseHandler = () => {
    setIsOpen(false);
    setInitialSection(null);
  };
  return (
    <SideBarContext.Provider
      value={{
        sidebarCloseHandler,
        sidebarOpenHandler, // Note: fixed the case to match camelCase convention
        isOpen,
        initialSection,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export default SideBarContextProvider; // Fix: Use 'export default' to export the component
