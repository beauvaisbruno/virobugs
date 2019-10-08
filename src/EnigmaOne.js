import React, { useState, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator} from "react-viro";
import {navTo, unmountLastAr} from "./Navigation";

const EnigmaOne = () => {
  console.log("render EnigmaOne");
  useEffect(() => {
    console.log("mount EnigmaOne");
    return () => {
      console.log("unmount EnigmaOne");
    };
  }, []);
  return (
  <ViroARSceneNavigator
    apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
    initialScene={{
      scene: () => {
        console.log("render SCENE EnigmaOne");
        useEffect(() => {
          console.log("mount SCENE EnigmaOne");
          return () => {
            console.log("unmount SCENE EnigmaOne");
          };
        }, []);
        const [show,setShow] = useState(true);
        return <ViroARScene>
          <ViroAmbientLight color={"#aaaaaa"} />
          {show && <Viro3DObject
            source={require("./res/heavy0.glb")}
            type="GLB"
            position={[0, 0, -2]}

          />}
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
              setShow(!show);
              // navTo("EnigmaTwo");
            }}
          />
          <Viro3DObject
            source={require("./res/clickable2.glb")}
            type="GLB"
            position={[0.4, 0, -1]}
            onClick={()=> {
              unmountLastAr();
            }}
          />
        </ViroARScene>
      }
    }}
  />
  );
};

export default EnigmaOne;
