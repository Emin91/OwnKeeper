import React, { FC } from "react"
import Svg, { Circle } from "react-native-svg"

export const CirlceIcon: FC<{ width?: number, height?: number, color?: string }> = ({ color }) => {
	return (
		<Svg
			width={14}
			height={14}
			viewBox="0 0 14 14"
			fill="none"
		>
			<Circle cx={7} cy={7} r={6.5} stroke={color || "#B9C3CD"} />
			<Circle cx={7} cy={7} r={5} fill={color || "#212336"} />
		</Svg>
	);
};