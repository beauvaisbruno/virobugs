import React, {useContext, useEffect, useState} from "react";
import {Text, View} from "react-native";
import {Viro3DObject, ViroAmbientLight, ViroNode, ViroCamera, ViroDirectionalLight} from "react-viro";
import {NavigationContext} from "./Contexts";
import {PanGestureHandler, PinchGestureHandler} from "react-native-gesture-handler";

let lastMovableObject;
let rotationY = 0;
let rotationX = 0;
let rotationZ = 0;
let scaleXYZ = 1;
const ObjectOne = {
  ARScene: () => {
    const [showCamera, setShowCamera] = useState(false);
    useEffect(() => {
      console.log("mount ObjectOne");

      const clear = setTimeout(() => {
        console.log("setShowCamera");
        setShowCamera(true);
        clearTimeout(clear);
      }, 1);
      return () => {
        console.log("unmount ObjectOne");
      };
    }, []);
    const {navToAndMayResetSession, navTo, setARSession, ARNavigator} = useContext(NavigationContext);

    console.log("render ObjectOne, showCamera: ",showCamera);
    if (!showCamera)
      return <ViroNode/>;

    return <ViroNode>
      <ViroCamera position={[0,0,0]} active={showCamera} >
      <Viro3DObject
        source={require("./res/object.glb")}
        type="GLB"
        position={[0, 0, -0.2]}
        rotation={[rotationX,rotationY,rotationZ]}
        scale={[scaleXYZ,scaleXYZ,scaleXYZ]}
        ref={pRef => {
          lastMovableObject = pRef;
        }}
      />
      {/*<Viro3DObject*/}
      {/*  source={require("./res/clickable0.glb")}*/}
      {/*  type="GLB"*/}
      {/*  position={[0, 0.3, -1]}*/}
      {/*  onClick={() => {*/}
      {/*    navTo("ScreenOne")*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Viro3DObject*/}
      {/*  source={require("./res/clickable1.glb")}*/}
      {/*  type="GLB"*/}
      {/*  position={[0, -0.3, -1]}*/}
      {/*  onClick={() => {*/}
      {/*    navToAndMayResetSession("EnigmaOne");*/}
      {/*  }}*/}
      {/*/>*/}
      <ViroDirectionalLight color="#ddd" direction={[-1, -1, 0]}/>
      <ViroDirectionalLight color="#ffffff" direction={[0, -1, -1]}/>

      <ViroAmbientLight color="#666"/>
      </ViroCamera>
    </ViroNode>;
  },
  Overlay: () => {

    return (
      <View style={{
        flex: 1, position: "absolute", top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}>
        <PanGestureHandler
          onGestureEvent={event => {
            rotationY += event.nativeEvent.translationX / 60;
            rotationY = rotationY + event.nativeEvent.translationX / 60;
            rotationY %= 360;
            if (rotationY < 0) rotationY = 360 + rotationY;
            if (90 < rotationY && rotationY < 270)
              rotationX -= event.nativeEvent.translationY / 60;
            else rotationX += event.nativeEvent.translationY / 60;
            if (lastMovableObject){
              lastMovableObject.setNativeProps({
                rotation:[rotationX,rotationY,rotationZ]
              });}
          }}
          maxPointers={1}
          style={{flex: 1, position: "absolute"}}
        >
          <PinchGestureHandler
            onGestureEvent={event => {
              scaleXYZ *= event.nativeEvent.scale ** 0.1;
              if (scaleXYZ < 0.5) scaleXYZ= 0.5;
              if (scaleXYZ > 10) scaleXYZ = 10;
              if (lastMovableObject)
                lastMovableObject.setNativeProps({
                  scale: [scaleXYZ, scaleXYZ, scaleXYZ]
                });
            }}
          >
            <View style={{flex: 1}}>
              <Text>ObjectOne</Text>
            </View>
          </PinchGestureHandler>
        </PanGestureHandler>
      </View>
  )
  }
};

export default ObjectOne;
