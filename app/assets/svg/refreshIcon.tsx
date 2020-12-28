import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const RefreshIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
    return (
      <Svg width={32} height={30} viewBox="0 0 32 30" fill="none">
        <Path
          d="M21.95 11.564l-2.975 1.718 6.242 1.65 1.693-6.23-2.976 1.717c-2.513-4.353-8.1-5.83-12.483-3.298a9.129 9.129 0 00-3.52 3.66l2.278.602a6.76 6.76 0 012.38-2.292c3.282-1.896 7.48-.787 9.362 2.473zm2.119 7.655l-2.278-.602a6.93 6.93 0 01-2.38 2.292c-3.282 1.896-7.48.787-9.362-2.473l2.976-1.718-6.242-1.65-1.693 6.23 2.976-1.717c2.513 4.353 8.1 5.83 12.483 3.298a9.128 9.128 0 003.52-3.66z"
          fill="#fff"
        />
      </Svg>
    );
};