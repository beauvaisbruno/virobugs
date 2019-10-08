import {AppRegistry, View} from 'react-native';
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator} from "react-viro";
import React from "react";


const SceneOne = ({sceneNavigator}) => {
  return <ViroARScene>
    <ViroAmbientLight color={"#aaaaaa"}/>
    <Viro3DObject
      source={require("./res/heavy0.glb")}
      type="GLB"
      position={[0, 0, -2]}
    />
    <Viro3DObject
      source={require("./res/clickable0.glb")}
      type="GLB"
      position={[0, 0, -1]}
      onClick={() => {
        sceneNavigator.replace({scene: SceneTwo});
      }}
    />
  </ViroARScene>;
};
const SceneTwo = ({sceneNavigator}) => {
  return <ViroARScene>
    <ViroAmbientLight color={"#aaaaaa"}/>
    <Viro3DObject
      source={require("./res/heavy1.glb")}
      type="GLB"
      position={[0, 0, -2]}
    />
    <Viro3DObject
      source={require("./res/clickable1.glb")}
      type="GLB"
      position={[0, 0, -1]}
      onClick={() => {
        sceneNavigator.replace({scene: SceneOne});
      }}
    />
  </ViroARScene>;
};

const Navigator = () => {
  return <View style={{flex: 1}}><ViroARSceneNavigator
    initialScene={{scene: SceneOne}}
    //https://viromedia.com/signup/
    apiKey={"SOME_API_KEY"}/>
  </View>;
};

AppRegistry.registerComponent('virobugs', () => Navigator);

