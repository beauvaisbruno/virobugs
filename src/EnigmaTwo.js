import React, {useState, useRef, useEffect, useContext} from "react";
import { Text, View } from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator} from "react-viro";
import {NavigationContext} from "./Navigation";

const EnigmaTwo = ({ARNavigator}) => {
  console.log("render EnigmaTwo");
  useEffect(() => {
    console.log("mount EnigmaTwo");
    return () => {
      console.log("unmount EnigmaTwo");
    };
  }, []);
  return  <ARNavigator
    key="AR"
      Scene={ () => {
        const {navToAndMayResetSession, navTo, setARSession} = useContext(NavigationContext);
          console.log("render SCENE EnigmaTwo");
          useEffect(() => {
            console.log("mount SCENE EnigmaTwo");
            return () => {
              console.log("unmount SCENE EnigmaTwo");
            };
          }, []);
          return <ViroARScene>
            <ViroAmbientLight color={"#aaaaaa"} />
            <Viro3DObject
              source={require("./res/heavy1.glb")}
              type="GLB"
              position={[0, 0, -2]}
            />
            <Viro3DObject
              source={require("./res/clickable1.glb")}
              type="GLB"
              position={[-0.3, 0, -1]}
              onClick={()=> {
                navTo("ScreenTwo")
              }}
            />
            <Viro3DObject
              source={require("./res/clickable0.glb")}
              type="GLB"
              position={[0.3, 0, -1]}
              onClick={()=> {
                navToAndMayResetSession("EnigmaOne");
              }}
            />
          </ViroARScene>
        }
      }
    />
};

export default EnigmaTwo;
