import React, {useEffect, useRef, useState} from "react";
import {Text, View} from "react-native";
import ScreenOne from "./ScreenOne";
import {getScreens} from "./screens";

let navRef;
let unmountLastArRef;

function getViroScreen(currentScreenName) {
  if (currentScreenName.includes("Enigma") || currentScreenName.includes("Object"))
    return true;
  return false;
}

export const navTo = (route) => {
  navRef.current(route);
};

export const unmountLastAr = () => {
  unmountLastArRef.current();
};

const Navigation = () => {
  const [currentScreenName, setCurrentScreenName] = useState("ScreenOne");
  const [lastARName, setLastARName] = useState();
  const [unmountLastAr, setUnmountLastAr] = useState();

  navRef = useRef((newScene) => {
    setCurrentScreenName(newScene);
  });
  unmountLastArRef = useRef(() => {
    setUnmountLastAr(true);
  });

  let isViroScreen = getViroScreen(currentScreenName);

  useEffect(() => {
    if (!isViroScreen && unmountLastAr) {
      setLastARName(undefined);
      setUnmountLastAr(false);
    }
  });

  useEffect(() => {
    if (isViroScreen && currentScreenName !== lastARName) {
      const clear = setTimeout(() => {
        setLastARName(currentScreenName);
        clearTimeout(clear);
      }, 1);
    }

  }, [currentScreenName]);

  const rows = [];

  if (!isViroScreen) {
    const Screen2D = getScreens()[currentScreenName];
    rows.push(<Screen2D key={currentScreenName}/>);
    if (lastARName !== undefined) {
      const ARScreen = getScreens()[lastARName];
      rows.push(<View style={{flex: 1, display: "none"}} key="AR"><ARScreen/></View>);
    }
  }
  if (isViroScreen) {
    if (currentScreenName === lastARName) {
      const ARScreen = getScreens()[currentScreenName];
      rows.push(<View style={{flex: 1}} key="AR"><ARScreen/></View>);
    } else {
      rows.push(<View style={{flex: 1}} key="wait"><Text style={{fontSize: 30}}>wait</Text></View>)
    }
  }

  return (
    <View style={{flex: 1}}>
      {rows}
    </View>
  );
};

export default Navigation;


