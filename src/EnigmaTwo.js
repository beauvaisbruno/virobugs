import React, { useState, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator} from "react-viro";
import {navTo} from "./Navigation";

const EnigmaTwo = () => {
  console.log("render EnigmaTwo");
  useEffect(() => {
    console.log("mount EnigmaTwo");
    return () => {
      console.log("unmount EnigmaTwo");
    };
  }, []);
  return  <ViroARSceneNavigator
      apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
      initialScene={{
        scene: () => {
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
                navTo("EnigmaOne");
              }}
            />
          </ViroARScene>
        }
      }}
    />
};

export default EnigmaTwo;
