import React, {useContext, useEffect, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroNode} from "react-viro";
import {ArContext, NavigationContext} from "./Contexts";
import {useSelector} from "react-redux";
import {dispatchStore} from "./redux";

const EnigmaOne = {
  ARScene: () => {
    const {navToAndMayResetSession, navTo, setARSession} = useContext(NavigationContext);
    const ar = useSelector((s) => s.ar);
    const [origin, setOrigin] = useState(undefined);
    console.log("render SCENE EnigmaOne");
    useEffect(() => {
      console.log("mount SCENE EnigmaOne");
      return () => {
        console.log("unmount SCENE EnigmaOne");
      };
    }, []);

    const {viroSceneRef,arError} = useContext(ArContext);
    console.log("EnigmaOne, arError: ",arError);
    useEffect(() => {
      if (ar["one"] && ar["one"].show && !ar["one"].origin) {
        viroSceneRef.current.getCameraOrientationAsync().then(cam => {
          setOrigin(cam);
        });
      }
    }, [ar]);

    const visible = ar["one"] !== undefined && ar["one"].show === true && origin !== undefined && arError===false;
    console.log("visible: ", visible);
    return <ViroNode
      position={
        origin !== undefined
          ? [
            origin.position[0],
            origin.position[1],
            origin.position[2]
          ]
          : [0, 0, 0]
      }
      rotation={
        origin !== undefined ? [0, origin.rotation[1], 0] : [0, 0, 0]
      }
      visible={visible}
    >
      <ViroAmbientLight color={"#aaaaaa"}/>
      <Viro3DObject
        source={require("./res/heavy2.glb")}
        type="GLB"
        position={[0, 0, -2]}

      />
      <Viro3DObject
        source={require("./res/clickable0.glb")}
        type="GLB"
        position={[-0.4, 0, -1]}
        onClick={() => {
          navTo("ScreenOne")
        }}
      />
      <Viro3DObject
        source={require("./res/clickable1.glb")}
        type="GLB"
        position={[0, 0, -1]}
        onClick={() => {
          navTo("ObjectOne");
        }}
      />
      <Viro3DObject
        source={require("./res/clickable2.glb")}
        type="GLB"
        position={[0.4, 0, -1]}
        onClick={() => {
          setARSession("EnigmaOne");
        }}
      />
    </ViroNode>
  },
  Overlay: () => {
    return <View style={{position: "absolute", top: 30}}>
      <TouchableOpacity
        onPress={() => {
          dispatchStore("ar/one/show", true)
        }}
      ><Text style={{fontSize: 30}}>Show</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatchStore("ar/one/show", false)
        }}
      ><Text style={{fontSize: 30}}>Hie</Text>
      </TouchableOpacity>
    </View>;
  }
};

export default EnigmaOne;
