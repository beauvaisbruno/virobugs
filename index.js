import {AppRegistry, View} from 'react-native';
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator,ViroCamera} from "react-viro";
import React from "react";

const Navigator = ()=>{
  return  <View style={{ flex:1}}><ViroARSceneNavigator
    initialScene={{scene:  () => {
        return  <ViroARScene>
          <ViroCamera position={[0,0,0]} active={true} >
          <ViroAmbientLight color={"#aaaaaa"} />
          <Viro3DObject
            source={require("./res/object.glb")}
            type="GLB"
            position={[0, 0, -1]}
          />
          </ViroCamera>
        </ViroARScene>;
      }}}
    //https://viromedia.com/signup/
    apiKey={"SOME_APIKEY"} />
  </View>;
};

AppRegistry.registerComponent('virobugs', () => Navigator);

