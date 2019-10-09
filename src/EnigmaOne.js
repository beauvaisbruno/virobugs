import React, {useState, useRef, useEffect, useContext} from "react";
import { Text, View } from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroNode, ViroARSceneNavigator} from "react-viro";
import {NavigationContext} from "./Navigation";

const EnigmaOne = {
  ARScene : () => {
    const {navToAndMayResetSession, navTo, setARSession} = useContext(NavigationContext);
    console.log("render SCENE EnigmaOne");
    useEffect(() => {
      console.log("mount SCENE EnigmaOne");
      return () => {
        console.log("unmount SCENE EnigmaOne");
      };
    }, []);
    return <ViroNode>
      <ViroAmbientLight color={"#aaaaaa"} />
      <Viro3DObject
        source={require("./res/heavy2.glb")}
        type="GLB"
        position={[0, 0, -2]}

      />
      <Viro3DObject
        source={require("./res/clickable0.glb")}
        type="GLB"
        position={[-0.4, 0, -1]}
        onClick={()=> {
          navTo("ScreenOne")
        }}
      />
      <Viro3DObject
        source={require("./res/clickable1.glb")}
        type="GLB"
        position={[0, 0, -1]}
        onClick={()=> {
          navTo("ObjectOne");
        }}
      />
      <Viro3DObject
        source={require("./res/clickable2.glb")}
        type="GLB"
        position={[0.4, 0, -1]}
        onClick={()=> {
          setARSession("EnigmaOne");
        }}
      />
    </ViroNode>
  },
  Overlay : ()=>{
    return <View style={{ flex:1 }}><Text>EnigmaOne</Text></View>;
    }
};

export default EnigmaOne;
