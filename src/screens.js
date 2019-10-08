import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import EnigmaOne from "./EnigmaOne";
import EnigmaTwo from "./EnigmaTwo";

let data;
export const getScreens = () => {
  if (data) return data;
  data = {
    ScreenOne,
    ScreenTwo,
    EnigmaOne,
    EnigmaTwo
  };

  return data;
};
