import React, { FC } from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const HideIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
    return (
      <Svg width={18} height={13} viewBox="0 0 18 13" fill="none">
        <G clipPath="url(#prefix__clip0)">
          <Path
            d="M9 .997c-4.973 0-9 3.878-9 5.688 0 1.81 4.027 5.687 9 5.687s9-3.877 9-5.687c0-1.81-4.027-5.688-9-5.688zm0 9.565c-2.394 0-4.345-1.737-4.345-3.877C4.655 4.545 6.605 2.8 9 2.8c2.394 0 4.345 1.744 4.345 3.884 0 2.14-1.95 3.877-4.345 3.877z"
            fill="#BFBFBF"
          />
          <Path
            d="M12.133 6.685c0 1.546-1.404 2.8-3.133 2.8-1.736 0-3.14-1.254-3.14-2.8 0-1.552 1.404-2.808 3.14-2.808 1.73 0 3.133 1.256 3.133 2.808z"
            fill="#BFBFBF"
          />
          <Path
            d="M5.326-.042L4.215.681l9.694 11.913 1.111-.723L5.326-.042z"
            fill="#314256"
          />
          <Path
            d="M4.707.361l-1.112.723 9.694 11.913 1.111-.723L4.707.36z"
            fill="#BFBFBF"
          />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0">
            <Path fill="#fff" d="M0 0h18v13H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
};