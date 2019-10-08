import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";

let data;
export const getScreens = () => {
  if (data) return data;
  data = {
    ScreenOne,
    ScreenTwo
  };

  return data;
};
