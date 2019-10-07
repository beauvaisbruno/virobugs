import {AppRegistry, View} from 'react-native';
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator, ViroImage,ViroNode} from "react-viro";
import React from "react";

const Navigator = ()=>{
  return  <View style={{ flex:1}}><ViroARSceneNavigator
    initialScene={{scene:  () => {
        return  <ViroARScene>
          <ViroAmbientLight color={"#aaaaaa"} />
          <ViroNode
            position={[0, -0.7, -0.3]}
          >
          <Viro3DObject
            source={require("./res/background.glb")}
            type="GLB"
            position={[0, 0, 0]}
          />
          <ViroImage
            source={require("./res/imgWithAlpa.png")}
            position={[0, 0.62 ,0]}
            rotation={[-90, 0, 0]}
            height={0.07}
            width={0.05}
          />
          </ViroNode>
        </ViroARScene>;
      }}}
    //https://viromedia.com/signup/
    apiKey={"SOME_API_KEY"} />
  </View>;
}

AppRegistry.registerComponent('virobugs', () => Navigator);

