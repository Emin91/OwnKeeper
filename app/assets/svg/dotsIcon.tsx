import React, { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const DotsIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
	return (
		<Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
			<Path fill="#1D1F2E" d="M0 0h18v18H0z" />
			<Circle cx={8.75} cy={2.25} r={2.25} fill="#fff" />
			<Circle cx={8.75} cy={9} r={2.25} fill="#fff" />
			<Circle cx={8.75} cy={15.75} r={2.25} fill="#fff" />
		</Svg>
	);
};