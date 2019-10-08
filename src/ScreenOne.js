import React, {useEffect} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {navTo, unmountLastAr} from "./Navigation";
import ObjectOne from "./ObjectOne";

const ScreenOne = () => {
  // console.log("render ScreenOne");
  // useEffect(() => {
  //   console.log("mount ScreenOne");
  //   return () => {
  //     console.log("unmount ScreenOne");
  //   };
  // }, []);
  return (
    <View style={{flex: 1}}>
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
      <TouchableOpacity
        onPress={() => {
          unmountLastAr();
        }}
      ><Text style={{ fontSize:30 }}>Release AR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOne;
