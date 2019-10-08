import React, {useEffect, useRef, useState} from "react";
import {Text,View} from "react-native";
import ScreenOne from "./ScreenOne";
import {getScreens} from "./screens";
import {ViroARScene, ViroARSceneNavigator} from "react-viro";

let navRef;
const Navigation = () => {
  const [currentScreenName, setCurrentScreenName] = useState("ScreenOne")
  navRef = useRef(setCurrentScreenName);
  const sceneRef = useRef(undefined);
  let show = "2D";
  if (currentScreenName.includes("Enigma"))
    show = "AR";

  useEffect(() => {
    if (!sceneRef)
      console.error("no sceneRef ", sceneRef)
    if (show === "AR")
      sceneRef.current.replace({scene: CurrentScreen});
  }, [currentScreenName]);

  const CurrentScreen = getScreens()[currentScreenName];
  if (!CurrentScreen) {
    console.error("no sceneRef ", sceneRef)
    return <View style={{flex: 1}}><Text>No routeName {CurrentScreen}</Text>
    </View>
  }

  return (
    <View style={{flex: 1}}>
      {show === "2D" && <CurrentScreen/>}
      <View style={{flex: 1, display: (show === "AR" ? "flex" : "none")}}>
        <ViroARSceneNavigator
          initialScene={{
            scene: () => {
              return <ViroARScene/>
            }
          }}
          apiKey={"SOME_API_KEY"}
          ref={ref => sceneRef.current = ref}
        />
      </View>
    </View>
  );
};


export default Navigation;

export const navTo = (route) => {
  navRef.current(route);
}
