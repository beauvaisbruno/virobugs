import {AppRegistry, View} from 'react-native';
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator} from "react-viro";
import React from "react";

const Navigator = ()=>{
  return  <View style={{ flex:1}}><ViroARSceneNavigator
    initialScene={{scene:  () => {
        return  <ViroARScene>
          <ViroAmbientLight color={"#aaaaaa"} />
          <Viro3DObject
            source={require("./res/outside.glb")}
            type="GLB"
            position={[0, 0, -1]}
            onClick={()=> {
              console.log("Clicked outside");
            }}
          />
          <Viro3DObject
            source={require("./res/inside.glb")}
            type="GLB"
            position={[0, 0, -1]}
            onClick={()=> {
              console.log("Clicked inside");
            }}
          />
        </ViroARScene>;
      }}}
    //https://viromedia.com/signup/
    apiKey={"SOME_API_KEY"} />
  </View>;
}

AppRegistry.registerComponent('virobugs', () => Navigator);

