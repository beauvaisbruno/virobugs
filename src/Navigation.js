import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {getScreens} from "./screens";
import {NavigationContext} from "./Contexts";
import {ARNavigator} from "./ARNavigator";


function getIsViroScreen(screenName) {
  if (screenName.includes("Enigma") || screenName.includes("Object"))
    return true;
  return false;
}

const Navigation = () => {
  const [currentScreenName, setCurrentScreenName] = useState("ScreenOne");
  const [currentARName, setCurrentARName] = useState();
  const [ARSessionName, setARSessionName] = useState(null);
  const [showAR, setShowAR] = useState(true);

  console.log("----\ncurrentScreenName: ", currentScreenName);
  console.log("currentARName: ", currentARName);
  console.log("ARSessionName: ", ARSessionName);
  console.log("showAR: ", showAR, "\n----");

  const isViroScreen = getIsViroScreen(currentScreenName);

  useEffect(() => {
    if (isViroScreen && !showAR) {
      const clear = setTimeout(() => {
        setShowAR(true);
        clearTimeout(clear);
      }, 1);
    }
    if (!isViroScreen) {
      if (ARSessionName != null)
        setCurrentARName(ARSessionName);
    }
  }, [currentScreenName]);
  let Screen2DComp;
  let Screen3DComp;
  let OverlayComp;

  if (!isViroScreen) {
    const Screen2D = getScreens()[currentScreenName];
    Screen2DComp = <Screen2D key={currentScreenName}/>;
    if (ARSessionName != null && currentARName !== undefined) {
      Screen3DComp = <View style={{flex: 1, display: "none"}} key="AR"><ARNavigator key="AR"/></View>;
    }
  }
  if (isViroScreen) {
    if (showAR) {

      Screen3DComp = <View style={{flex: 1, display: "flex"}} key="AR"><ARNavigator key="AR"/></View>;
      const {Overlay} = getScreens()[currentARName];
      OverlayComp = <Overlay key="Overlay"/>;
    } else {
      Screen2DComp =
        <View style={{flex: 1, backgroundColor: "black"}} key="wait"><Text style={{fontSize: 30}}>wait</Text></View>;
    }
  }

  return (
    <NavigationContext.Provider value={{
      currentScreenName: currentScreenName,
      currentARName: currentARName,
      ARSessionName: currentARName,
      navTo: (newScene) => {
        if (getIsViroScreen(newScene))
          setCurrentARName(newScene);
        setCurrentScreenName(newScene);
      },
      setARSession: (ARScreen) => {
        if (ARScreen !== null && !getIsViroScreen(ARScreen))
          console.error("navToAndMayResetSession must be call with AR screen");
        setARSessionName(ARScreen);
      },
      navToAndMayResetSession: (newARSessionName) => {
        if (ARSessionName === null && getIsViroScreen(currentScreenName)
          || ARSessionName !== null && ARSessionName !== newARSessionName) {
          setShowAR(false);
          setARSessionName(null);
        }
        if (getIsViroScreen(newARSessionName))
          setCurrentARName(newARSessionName);
        setCurrentScreenName(newARSessionName);
      },

    }}>
      <View style={{flex: 1, backgroundColor: "black"}}>
        {Screen2DComp}
        {Screen3DComp}
        {OverlayComp}
      </View>
    </NavigationContext.Provider>
  );
};

export default Navigation;


