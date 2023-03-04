import { useTheme as _useTheme } from "react-native-paper";
import { AppTheme } from "@twikkl/configs/theme";

export const useTheme = (): NonNullable<AppTheme> => _useTheme<AppTheme>();

export const useColors = (): NonNullable<AppTheme["colors"]> => useTheme().colors;
