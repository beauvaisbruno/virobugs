import React, {useContext, useEffect, useState} from "react";
import {ViroARScene, ViroARSceneNavigator} from "react-viro";
import {Text, View} from "react-native";
import {getScreens} from "./screens";


function getIsViroScreen(screenName) {
  if (screenName.includes("Enigma") || screenName.includes("Object"))
    return true;
  return false;
}

const ARNavigator = ({ARScene}) => {
  console.log("render ARNavigator");
  useEffect(() => {
    console.log("mounted ARNavigator");
    return () => {
      console.log("unmounted ARNavigator");
    };
  }, []);
  return <ViroARSceneNavigator
    apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
    key={"AR"}
    initialScene={{
      //ARSessionName != null && currentARName !== undefined && isViro
      scene: () => {
        const {currentARName} = useContext(NavigationContext);
        const {ARScene} = getScreens()[currentARName];
        console.log("render initialScene: ",currentARName);
        return <ViroARScene key={"AR"}><ARScene/></ViroARScene>
      }}
    }/>
};

export const NavigationContext = React.createContext();
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
    if (!isViroScreen){
      if (ARSessionName != null)
        setCurrentARName(ARSessionName);
    }
  }, [currentScreenName]);

  const rows = [];
  if (!isViroScreen) {
    const Screen2D = getScreens()[currentScreenName];
    rows.push(<Screen2D
      key={currentScreenName}
    />);
    if (ARSessionName != null && currentARName !== undefined) {
      rows.push(<View style={{flex: 1, display: "none"}} key="AR">
        <ARNavigator key="AR"/>
      </View>);
    }
  }
  if (isViroScreen) {
    if (showAR) {
      const {Overlay} = getScreens()[currentARName];
      rows.push(<View style={{flex: 1}} key="AR">
        <ARNavigator key="AR"/>
      </View>);
      rows.push(<Overlay key="Overlay"/>);
    } else {
      rows.push(<View style={{flex: 1}} key="wait"><Text style={{fontSize: 30}}>wait</Text></View>)
    }
  }

  return (
    <NavigationContext.Provider value={{
      currentScreenName:currentScreenName,
      currentARName:currentARName,
      ARSessionName:currentARName,
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
        if (ARSessionName===null && getIsViroScreen(currentScreenName)
          || ARSessionName!==null && ARSessionName !== newARSessionName) {
          setShowAR(false);
          setARSessionName(null);
        }
        if (getIsViroScreen(newARSessionName))
          setCurrentARName(newARSessionName);
        setCurrentScreenName(newARSessionName);
      },

    }}>
      <View style={{flex: 1}}>
        {rows}
      </View>
    </NavigationContext.Provider>
  );
};

export default Navigation;


