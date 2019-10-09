import React, {useContext, useEffect} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {NavigationContext} from "./Navigation";

const ScreenTwo = () => {
  console.log("render ScreenTwo");
  useEffect(() => {
    console.log("mount ScreenTwo");
    return () => {
      console.log("unmount ScreenTwo");
    };
  }, []);
  const {navToAndMayResetSession, navTo} = useContext(NavigationContext);
  return (
    <View style={{flex: 1}}>
      <Text style={{ fontSize:30 }}>ScreenTwo</Text>
      <TouchableOpacity
        onPress={() => {
          navTo("ScreenOne");
        }}
      ><Text style={{ fontSize:30 }}>ScreenOne</Text>
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
    </View>
  );
};

export default ScreenTwo;
