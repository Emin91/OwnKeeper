import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const NoteIcon: FC<{ width?: number, height?: number, color?: string }> = ({ color }) => {
    return (
      <Svg width={42} height={35} viewBox="0 0 42 35" fill="none">
        <Path d="M0 0h42v30a5 5 0 01-5 5H5a5 5 0 01-5-5V0z" fill={color || "#EAEAEA"} />
        <Path
          d="M34.459 6H7.54C5.59 6 4 7.613 4 9.594v15.812C4 27.388 5.59 29 7.541 29h26.917c1.952 0 3.541-1.613 3.541-3.594V9.594C38 7.614 36.41 6 34.46 6zm2.125 19.406c0 1.19-.954 2.157-2.125 2.157H7.54c-1.171 0-2.125-.968-2.125-2.157V9.594c0-1.19.954-2.157 2.125-2.157h26.917c1.171 0 2.125.968 2.125 2.157v15.812z"
          fill="#fff"
        />
        <Path
          d="M15.484 12.876h-6.34c-.054 0-.097-.264-.097-.59V11.7c0-.325.043-.589.097-.589h6.34c.053 0 .097.264.097.59v.587c0 .325-.044.589-.097.589zM24.194 12.876h-7.702c-.065 0-.117-.264-.117-.59V11.7c0-.325.052-.589.117-.589h7.702c.065 0 .118.264.118.59v.587c0 .325-.053.589-.118.589zM32.836 12.876h-7.702c-.065 0-.118-.264-.118-.59V11.7c0-.325.053-.589.118-.589h7.702c.065 0 .117.264.117.59v.587c0 .325-.052.589-.117.589zM22.396 16.547H9.247c-.11 0-.2-.264-.2-.59v-.587c0-.325.09-.589.2-.589h13.148c.111 0 .2.264.2.59v.587c.001.325-.088.589-.2.589zM32.81 16.547H23.44c-.079 0-.143-.264-.143-.59v-.587c0-.325.063-.589.143-.589h9.369c.079 0 .143.264.143.59v.587c0 .325-.064.589-.143.589zM32.599 20.219H9.4c-.195 0-.354-.264-.354-.59v-.587c0-.325.159-.589.354-.589H32.6c.196 0 .355.264.355.59v.587c0 .325-.16.589-.355.589zM32.871 23.89h-5.36c-.044 0-.08-.264-.08-.59v-.587c0-.325.036-.589.08-.589h5.36c.046 0 .082.264.082.59v.587c0 .325-.036.589-.082.589zM26.421 23.89h-6.685c-.056 0-.102-.264-.102-.59v-.587c0-.325.046-.589.102-.589h6.685c.056 0 .102.264.102.59v.587c0 .325-.045.589-.102.589zM18.48 23.89H9.188c-.078 0-.142-.264-.142-.59v-.587c0-.325.064-.589.142-.589h9.29c.079 0 .142.264.142.59v.587c0 .325-.063.589-.142.589z"
          fill="#fff"
        />
      </Svg>
    );
};