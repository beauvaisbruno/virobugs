import {AppRegistry, View} from 'react-native';
import {
  Viro3DObject,
  Viro3DSceneNavigator,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroScene
} from "react-viro";
import React, {useState} from "react";

const ARNavigator = (props) => {
  return <ViroARSceneNavigator
    apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
    initialScene={{
      scene: () => {
        return <ViroARScene>
          <ViroAmbientLight color={"#aaaaaa"}/>
          <Viro3DObject
            source={require("./res/clickable.glb")}
            type="GLB"
            position={[0, 0, -1]}
            onClick={() => {
              props.setNavigator("3D");
            }}
          />
        </ViroARScene>;
      }
    }}/>

};

const _3DNavigator = (props) => {
  return <Viro3DSceneNavigator
    apiKey={"BDF01DAC-4F97-4D5D-8C8A-DD8C609019B1"}
    initialScene={{
      scene: () => {
        return <ViroScene>
          <ViroAmbientLight color={"#aaaaaa"}/>
          <Viro3DObject
            source={require("./res/clickable.glb")}
            type="GLB"
            position={[0, 0, -1]}
            onClick={() => {
              props.setNavigator("AR");
            }}
          />
        </ViroScene>
      }
    }}
  />
};

const Navigator = () => {
  const [navigatorType, setNavigatorType] = useState({current: "AR"});
  const setNavigator = (newNavigatorType) => {
    setNavigatorType({current: "waitUnmount"});
    const clear = setTimeout(() => {
      setNavigatorType({current: newNavigatorType});
      clearTimeout(clear);
    }, 1);
  };
  return <View style={{flex: 1}}>
    {navigatorType.current === "3D" &&
      <View style={{flex: 1}}>
        <_3DNavigator {...{setNavigator}}/>
      </View>
    }
    <View style={{flex: 1,display: navigatorType.current === "AR" ? "flex" : "none" }}    >
      <ARNavigator {...{setNavigator}}/>
    </View>
  </View>;
};

AppRegistry.registerComponent('virobugs', () => Navigator);
