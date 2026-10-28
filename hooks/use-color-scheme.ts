import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * React Native reports 'unspecified' when there is no preference; treat that as light
 */
export function useColorScheme() {
  const colorScheme = useRNColorScheme();

  return colorScheme === 'unspecified' ? 'light' : colorScheme;
}
