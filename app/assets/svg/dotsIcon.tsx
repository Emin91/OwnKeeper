import React, { FC } from "react"
import Svg, { Circle } from "react-native-svg"

export const DotsIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
    return (
      <Svg
        width={4}
        height={14}
        viewBox="0 0 4 14"
        fill="none"
      >
        <Circle cx={1.75} cy={1.75} r={1.75} fill="#fff" />
        <Circle cx={1.75} cy={7} r={1.75} fill="#fff" />
        <Circle cx={1.75} cy={12.25} r={1.75} fill="#fff" />
      </Svg>
    );
};