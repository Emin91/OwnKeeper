import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const CopyIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height }) => {
	return (
		<Svg width={width || 19} height={height || 23} viewBox="0 0 19 23" fill="none">
			<Path
				d="M14 0H2C.9 0 0 .94 0 2.09v14.637h2V2.091h12V0zm3 4.182H6c-1.1 0-2 .94-2 2.09V20.91C4 22.06 4.9 23 6 23h11c1.1 0 2-.94 2-2.09V6.272c0-1.15-.9-2.091-2-2.091zm0 16.727H6V6.273h11v14.636z"
				fill="#BFBFBF"
			/>
		</Svg>
	);
};