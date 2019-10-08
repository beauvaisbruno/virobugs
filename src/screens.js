import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import EnigmaOne from "./EnigmaOne";
import EnigmaTwo from "./EnigmaTwo";
import ObjectOne from "./ObjectOne";

let data;
export const getScreens = () => {
  if (data) return data;
  data = {
    ScreenOne,
    ScreenTwo,
    ObjectOne,
    EnigmaOne,
    EnigmaTwo
  };

  return data;
};
