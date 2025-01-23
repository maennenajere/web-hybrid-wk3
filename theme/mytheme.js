import {MD3DarkTheme, MD3LightTheme} from "react-native-paper";
import { Colors } from "./colors";

const customLightTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: Colors.light
};

const customDarkTheme = {
    ...MD3DarkTheme,
    roundness: 2,
    colors: Colors.dark
};

export {
    customLightTheme,
    customDarkTheme
};