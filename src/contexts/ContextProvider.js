import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // Check for selected
  const [isClicked, setIsClicked] = useState(initialState);

  //Screensize
  const [screenSize, setScreenSize] = useState(undefined);

  // active menu
  const [activeMenu, setActiveMenu] = useState(true);

  // funct for handle clicked button
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
