import React, {useContext, useEffect} from "react";
import {Text, View} from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroNode} from "react-viro";
import {NavigationContext} from "./Navigation";

const ObjectOne = {
  ARScene: () => {
    console.log("render ObjectOne");
    useEffect(() => {
      console.log("mount ObjectOne");
      return () => {
        console.log("unmount ObjectOne");
      };
    }, []);
    const {navToAndMayResetSession, navTo, setARSession, ARNavigator} = useContext(NavigationContext);
    return <ViroNode>
              <ViroAmbientLight color={"#aaaaaa"}/>
              <Viro3DObject
                source={require("./res/heavy2.glb")}
                type="GLB"
                position={[0, 0, -2]}

              />
              <Viro3DObject
                source={require("./res/clickable0.glb")}
                type="GLB"
                position={[0, 0.3, -1]}
                onClick={() => {
                  navTo("ScreenOne")
                }}
              />
              <Viro3DObject
                source={require("./res/clickable1.glb")}
                type="GLB"
                position={[0, -0.3, -1]}
                onClick={() => {
                  navToAndMayResetSession("EnigmaOne");
                }}
              />
            </ViroNode>;
  },
  Overlay: () => {
    return <View style={{flex: 1}}><Text>ObjectOne</Text></View>;
  }
};

export default ObjectOne;
