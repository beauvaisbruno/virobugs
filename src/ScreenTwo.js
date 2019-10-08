import React, { useState, useRef, useEffect } from "react";
import { Text, View,TouchableOpacity } from "react-native";
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
    <View style={{ flex:1 }}>
      <Text>ScreenTwo</Text>
      <TouchableOpacity
        onPress={() => {
          navTo("ScreenOne");
        }}
      ><Text>ScreenOne</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTwo;
