import { CSSProperties } from 'react';

interface IconProps {
  icon: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  containerStyle?: CSSProperties;
  [key: string]: any; // Allow additional props
}

export default IconProps;
