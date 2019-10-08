import React, { useState, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroARScene} from "react-viro";
import {navTo} from "./Navigation";

const EnigmaOne = () => {
  return  <ViroARScene>
    <ViroAmbientLight color={"#aaaaaa"} />
    <Viro3DObject
      source={require("./src/res/outside.glb")}
      type="GLB"
      position={[0, 0, -1]}
      onClick={()=> {
        navTo()
      }}
    />
    <Viro3DObject
      source={require("./src/res/inside.glb")}
      type="GLB"
      position={[0, 0, -1]}
      onClick={()=> {
        console.log("Clicked inside");
      }}
    />
  </ViroARScene>;
};

export default EnigmaOne;
