import React, {useEffect} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {navTo} from "./Navigation";

const ScreenTwo = () => {
  console.log("render ScreenTwo");
  useEffect(() => {
    console.log("mount ScreenTwo");
    return () => {
      console.log("unmount ScreenTwo");
    };
  }, []);
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
          navTo("EnigmaOne");
        }}
      ><Text style={{ fontSize:30 }}>EnigmaOne</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navTo("EnigmaTwo");
        }}
      ><Text style={{ fontSize:30 }}>EnigmaTwo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTwo;
