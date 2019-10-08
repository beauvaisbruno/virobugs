import {AppRegistry, View, Text} from 'react-native';
import {Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator, ViroNode, ViroText} from "react-viro";
import React, {useContext, useEffect, useState} from "react";
import {createAppContainer, NavigationActions, NavigationContext} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'

let navRef;

const Navigator0 = () => {
  const isFocus = useFocusState();
  console.log("Navigator0 isFocus: ", isFocus);
  if (!isFocus) {
    return null;
  }
  return <View style={{flex: 1}}><ViroARSceneNavigator
    initialScene={{
      scene: () => {
        return <ViroARScene>
          <ViroAmbientLight color={"#ffffff"}/>
          <Viro3DObject
            source={require("./res/heavy0.glb")}
            type="GLB"
            position={[0, 0, -1]}
          />
          <Viro3DObject
            source={require("./res/clickable0.glb")}
            type="GLB"
            position={[0, 0, -1]}
            onClick={() => {
              console.log("Clicked Navigator0");
              navRef.dispatch(NavigationActions.navigate({routeName: "Intermediate0"}));
              const clear = setTimeout(() => {
                navRef.dispatch(NavigationActions.navigate({routeName: "Navigator1"}));
                clearTimeout(clear);
              }, 3000);
            }}
          />
        </ViroARScene>;
      }
    }}
    //https://viromedia.com/signup/
    apiKey={"SOME_API_KEY"}/>
  </View>;
};
const Navigator1 = () => {
  const isFocus = useFocusState();
  console.log("Navigator1 isFocus: ", isFocus);
  if (!isFocus) {
    return null;
  }
  return <View style={{flex: 1}}><ViroARSceneNavigator
    initialScene={{
      scene: () => {
        return <ViroARScene>
          <ViroAmbientLight color={"#ffffff"}/>
          <Viro3DObject
            source={require("./res/heavy1.glb")}
            type="GLB"
            position={[0, 0, -1]}
          />
          <Viro3DObject
            source={require("./res/clickable1.glb")}
            type="GLB"
            position={[0, 0, -1]}
            onClick={() => {
              console.log("Clicked Navigator1");
              navRef.dispatch(NavigationActions.navigate({routeName: "Intermediate1"}));
              const clear = setTimeout(() => {
                navRef.dispatch(NavigationActions.navigate({routeName: "Navigator0"}));
                clearTimeout(clear);
              }, 3000);
            }}
          />
        </ViroARScene>;
      }
    }}
    //https://viromedia.com/signup/
    apiKey={"SOME_API_KEY"}/>
  </View>;
};

export function useFocusState() {
  const navigation = useContext(NavigationContext);
  const [focusState, setFocusState] = useState(navigation.isFocused() ? "didFocus" : "didBlur");
console.log("navigation: ",navigation.state);
  const handleEvt = ({type:newState}) => {
    console.log("handleEvt, newState: ", newState);
    if (focusState === newState)
      return;
    const clear = setTimeout(() => {
      setFocusState(newState);
      clearTimeout(clear);
    }, 100);
  };
  useEffect(
    () => {
      const subsDF = navigation.addListener("didFocus", handleEvt);
      const subsDB = navigation.addListener("willBlur", handleEvt);
      return () => {
        subsDF.remove();
        subsDB.remove();
      };
    },
    [navigation.state.key]
  );
  if (focusState === "willBlur")
    return false;
  if (focusState === "didFocus")
    return true;
  console.error("unknown state: ", focusState);
  return true;
}
const Intermediate0 = ()=>{
  return <View><Text>Intermediate0</Text></View>;
  }
const Intermediate1 = ()=>{
  return <View><Text>Intermediate1</Text></View>;
}
const StackNavigation = createStackNavigator({
  "Navigator0": Navigator0,
  "Intermediate0": Intermediate0,
  "Navigator1": Navigator1,
  "Intermediate1": Intermediate1,
  "Navigator2": Navigator0,
}, {
  initialRouteName: "Navigator0",
  headerMode: "none",
  defaultNavigationOptions: {
    gesturesEnabled: false
  },
});

const NavigationContainer = createAppContainer(StackNavigation);

AppRegistry.registerComponent('virobugs', () => () => <NavigationContainer ref={ ref => {navRef = ref;}} />);

