import { useTheme as _useTheme } from "react-native-paper";
import { AppTheme } from "@twikkl/configs/theme";

export const useTheme = () => _useTheme<AppTheme>();

export const useColors = () => useTheme().colors;
