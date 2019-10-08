import React, { useState, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroScene, Viro3DSceneNavigator} from "react-viro";
import {navTo} from "./Navigation";

const ObjectOne = () => {
  console.log("render ObjectOne");
  useEffect(() => {
    console.log("mount ObjectOne");
    return () => {
      console.log("unmount ObjectOne");
    };
  }, []);
  return  <Viro3DSceneNavigator
    apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
    initialScene={{
      scene: () => {
        console.log("render SCENE ObjectOne");
        useEffect(() => {
          console.log("mount SCENE ObjectOne");
          return () => {
            console.log("unmount SCENE ObjectOne");
          };
        }, []);
        return <ViroScene>
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
              navTo("ScreenOne")
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
        </ViroScene>
      }
    }}
  />
};

export default ObjectOne;
