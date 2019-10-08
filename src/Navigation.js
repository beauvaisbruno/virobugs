import React, { useState, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import ScreenOne from "./ScreenOne";
import {getScreens} from "./screens";

let navRef;
const Navigation = () => {
  const [currentScreenName,setCurrentScreenName]=useState("ScreenOne")
  navRef = useRef(setCurrentScreenName);
  const CurrentScreen = getScreens()[currentScreenName];
  return (
      <CurrentScreen/>
  );
};

export default Navigation;

export const navTo = (route) => {
  navRef.current(route);
}
