import React, {useContext, useEffect, useRef, useState} from "react";
import {default as ViroConstants, ViroARScene, ViroARSceneNavigator} from "react-viro";
import {ArContext, NavigationContext} from "./Contexts";
import {getScreens} from "./screens";
import {Text, View} from "react-native";

export const ARNavigator = ({ARScene}) => {
  console.log("render ARNavigator");
  useEffect(() => {
    console.log("mounted ARNavigator");
    return () => {
      console.log("unmounted ARNavigator");
    };
  }, []);
  const [arError, setArNavigatorError] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ViroARSceneNavigator
        apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
        key={"AR"}
        initialScene={{
          //ARSessionName != null && currentARName !== undefined && isViro
          scene: () => {
            const viroSceneRef = useRef();
            const {currentARName} = useContext(NavigationContext);
            const {ARScene} = getScreens()[currentARName];
            const [arError, setArError] = useState(false);
            console.log("render initialScene: ", currentARName);
            console.log("initialScene, arError: ",arError);
            return (

              <ViroARScene key={"AR"}
                           ref={ref => {
                             viroSceneRef.current = ref;
                           }}
                           onTrackingUpdated={(state, reason) => {
                             if (state === 3) {//ViroConstants.TRACKING_NORMAL
                               setArError(false);
                               setArNavigatorError(false);
                             } else {
                               setArError(true);
                               setArNavigatorError(true);
                             }
                           }}
              ><ArContext.Provider value={{viroSceneRef, arError}}>
                <ARScene/>
              </ArContext.Provider>
              </ViroARScene>);
          }
        }
        }/>
      {arError && <View style={{position: "absolute"}}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Tracking Error</Text>
        </View>
      </View>}
    </View>)
};
