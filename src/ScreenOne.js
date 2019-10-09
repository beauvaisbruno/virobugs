import React, {useContext, useEffect} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import ObjectOne from "./ObjectOne";
import {NavigationContext} from "./Contexts";

const ScreenOne = () => {
  // console.log("render ScreenOne");
  // useEffect(() => {
  //   console.log("mount ScreenOne");
  //   return () => {
  //     console.log("unmount ScreenOne");
  //   };
  // }, []);
  const {navToAndMayResetSession, navTo, setARSession} = useContext(NavigationContext);
  return (
    <View style={{flex: 1, backgroundColor:"white"}}>
      <Text style={{ fontSize:30 }}>ScreenOne</Text>
      <TouchableOpacity
        onPress={() => {
          navTo("ScreenTwo");
        }}
      ><Text style={{ fontSize:30 }}>ScreenTwo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navTo("ObjectOne");
        }}
      ><Text style={{ fontSize:30 }}>ObjectOne</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navToAndMayResetSession("EnigmaOne");

        }}
      ><Text style={{ fontSize:30 }}>EnigmaOne</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navToAndMayResetSession("EnigmaTwo");
        }}
      ><Text style={{ fontSize:30 }}>EnigmaTwo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setARSession(null);
        }}
      ><Text style={{ fontSize:30 }}>Release AR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOne;
