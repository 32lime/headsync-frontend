// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'chevron.left': 'chevron-left',
  'drop.fill': 'water',
  'figure.run': 'directions-run',
  'eye.fill': 'visibility',
  'lungs.fill': 'favorite',
  'clock.fill': 'schedule',
  // Navigation icons
  'calendar': 'calendar-today',
  'plus.circle.fill': 'add-circle',
  'sparkles': 'auto-awesome',
  'link.circle.fill': 'link',
  'gearshape.fill': 'settings',
  // Today page icons
  'exclamationmark.triangle.fill': 'warning',
  // Report page icons
  'checkmark.circle.fill': 'check-circle',
  // Settings page icons
  'bell.fill': 'notifications',
  'chart.bar.fill': 'bar-chart',
  'lock.fill': 'lock',
  'doc.text.fill': 'description',
  'info.circle.fill': 'info',
  'questionmark.circle.fill': 'help',
  'star.fill': 'star',
  // Prediction page icons
  'shield.fill': 'shield',
  'chart.line.uptrend.xyaxis': 'trending-up',
  'brain.head.profile': 'psychology',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const iconName = MAPPING[name];
  if (!iconName) {
    console.warn(`Icon "${name}" not found in MAPPING, using "help" as fallback`);
    return <MaterialIcons color={color} size={size} name="help" style={style} />;
  }
  return <MaterialIcons color={color} size={size} name={iconName} style={style} />;
}
