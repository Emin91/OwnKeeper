import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const SaveIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
	return (
		<Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
			<Path fill="#1D1F2E" d="M0 0h18v18H0z" />
			<Path
				d="M14 0H2a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V4l-4-4zM9 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H2V2h10v4z"
				fill="#fff"
			/>
		</Svg>
	);
};