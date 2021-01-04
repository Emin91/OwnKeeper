import React, { FC } from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const BackIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
    return (
      <Svg width={7} height={13} viewBox="0 0 7 13" fill="none">
        <G clipPath="url(#prefix__clip0)" fill="#fff">
          <Path d="M6.842.947l-5.8 5.951a.627.627 0 01-.847.035.542.542 0 01-.037-.798l5.8-5.952A.627.627 0 016.806.15a.54.54 0 01.036.798z" />
          <Path d="M.158 6.865l5.8 5.951c.224.23.603.245.848.035a.542.542 0 00.036-.798l-5.8-5.951a.627.627 0 00-.848-.034.542.542 0 00-.036.797z" />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0">
            <Path fill="#fff" d="M0 0h7v13H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
};