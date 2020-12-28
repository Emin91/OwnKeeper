import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const SettingsIcon: FC<{ width?: number, height?: number, color?: string }> = ({ color }) => {
    return (
      <Svg width={42} height={35} viewBox="0 0 42 35" fill="none">
        <Path d="M0 0h42v30a5 5 0 01-5 5H5a5 5 0 01-5-5V0z" fill={color || "#EAEAEA"} />
        <Path
          d="M32.029 12.203h-2.586c-.42 1.4-1.706 2.427-3.24 2.427-1.534 0-2.819-1.028-3.24-2.427H10.667a.971.971 0 010-1.942h12.296c.42-1.4 1.706-2.428 3.24-2.428 1.534 0 2.819 1.029 3.24 2.428h2.586a.97.97 0 110 1.942zm-5.826-2.428c-.803 0-1.457.654-1.457 1.457s.654 1.456 1.457 1.456 1.456-.653 1.456-1.456c0-.803-.653-1.457-1.456-1.457zM32.029 27.74h-2.586c-.421 1.398-1.706 2.427-3.24 2.427-1.534 0-2.819-1.029-3.24-2.428H10.667a.971.971 0 010-1.942h12.296c.421-1.4 1.706-2.428 3.24-2.428 1.534 0 2.819 1.029 3.24 2.428h2.586a.97.97 0 110 1.942zm-5.826-2.428c-.803 0-1.457.653-1.457 1.456 0 .803.654 1.457 1.457 1.457s1.456-.654 1.456-1.457-.653-1.456-1.456-1.456zM32.029 19.971H19.733c-.421 1.4-1.706 2.427-3.24 2.427-1.534 0-2.82-1.028-3.24-2.427h-2.586a.971.971 0 010-1.942h2.585c.422-1.4 1.707-2.428 3.24-2.428 1.535 0 2.82 1.029 3.241 2.428h12.296a.97.97 0 110 1.942zm-15.536-2.427c-.803 0-1.457.653-1.457 1.456 0 .803.654 1.456 1.457 1.456s1.456-.653 1.456-1.456c0-.803-.653-1.456-1.456-1.456z"
          fill="#fff"
        />
      </Svg>
    );
};