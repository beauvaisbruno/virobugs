import React, {useContext, useEffect} from "react";
import {Viro3DObject, ViroAmbientLight, ViroNode} from "react-viro";
import {Text, View} from "react-native";
import {NavigationContext} from "./Contexts";

const EnigmaTwo = {
  ARScene : () => {
    console.log("render EnigmaTwo");
    useEffect(() => {
      console.log("mount EnigmaTwo");
      return () => {
        console.log("unmount EnigmaTwo");
      };
    }, []);
    const {navToAndMayResetSession, navTo, setARSession} = useContext(NavigationContext);
    return <ViroNode>
      <ViroAmbientLight color={"#aaaaaa"}/>
      <Viro3DObject
        source={require("./res/heavy1.glb")}
        type="GLB"
        position={[0, 0, -2]}
      />
      <Viro3DObject
        source={require("./res/clickable1.glb")}
        type="GLB"
        position={[-0.3, 0, -1]}
        onClick={() => {
          navTo("ScreenTwo")
        }}
      />
      <Viro3DObject
        source={require("./res/clickable0.glb")}
        type="GLB"
        position={[0.3, 0, -1]}
        onClick={() => {
          navToAndMayResetSession("EnigmaOne");
        }}
      />
    </ViroNode>
  },
    Overlay : ()=>{
      return <View style={{ flex:1 }}><Text>EnigmaTwo</Text></View>;
    }
  };

export default EnigmaTwo;
