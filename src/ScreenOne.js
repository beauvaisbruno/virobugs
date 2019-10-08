import React, {useEffect} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {navTo} from "./Navigation";

const ScreenOne = () => {
  console.log("render ScreenOne");
  useEffect(() => {
    console.log("mount ScreenOne");
    return () => {
      console.log("unmount ScreenOne");
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text>ScreenOne</Text>
      <TouchableOpacity
        onPress={() => {
          navTo("ScreenTwo");
        }}
      ><Text>ScreenTwo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navTo("EnigmaOne");
        }}
      ><Text>EnigmaOne</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navTo("EnigmaTwo");
        }}
      ><Text>EnigmaTwo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOne;
