import {AppRegistry, View} from 'react-native';
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator} from "react-viro";
import React from "react";

const Navigator = ()=>{

  const objects = [];
  for (let i = 0; i < 20; i++) {
    objects.push(<Viro3DObject
      source={require("./res/cube.glb")}
      type="GLB"
      position={[-2 + i*0.2, 0, -1]}
      key={i}
    />);
  }

  return  <View style={{ flex:1}}><ViroARSceneNavigator
    initialScene={{scene:  () => {
        return  <ViroARScene>
          <ViroAmbientLight color={"#aaaaaa"} />
          {objects}
        </ViroARScene>;
      }}}
    //https://viromedia.com/signup/
    apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
    // apiKey={"SOME_API_KEY"}
  />

  </View>;
}

AppRegistry.registerComponent('virobugs', () => Navigator);

