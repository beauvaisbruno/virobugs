import React, { useState, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroARScene} from "react-viro";
import {navTo} from "./Navigation";

const EnigmaOne = () => {
  console.log("render EnigmaOne");
  useEffect(() => {
    console.log("mount EnigmaOne");
    return () => {
      console.log("unmount EnigmaOne");
    };
  }, []);
  return  <ViroARScene>
    <ViroAmbientLight color={"#aaaaaa"} />
    <Viro3DObject
      source={require("./res/heavy0.glb")}
      type="GLB"
      position={[0, 0, -2]}

    />
    <Viro3DObject
      source={require("./res/clickable0.glb")}
      type="GLB"
      position={[-0.3, 0, -1]}
      onClick={()=> {
        navTo("ScreenOne")
      }}
    />
    <Viro3DObject
      source={require("./res/clickable1.glb")}
      type="GLB"
      position={[0.3, 0, -1]}
      onClick={()=> {
        navTo("EnigmaTwo");
      }}
    />
  </ViroARScene>;
};

export default EnigmaOne;
