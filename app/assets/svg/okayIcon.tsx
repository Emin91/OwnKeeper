import React, { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const OkayIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
	return (
		<Svg
			width={42}
			height={42}
			viewBox="0 0 42 42"
			fill="none"
		>
			<Circle cx={21} cy={21} r={20} stroke="#3192EC" strokeWidth={2} />
			<Path
				d="M18.046 25.866l-4.535-4.702L12 22.731 18.046 29 31 15.567 29.489 14 18.045 25.866z"
				fill="#3192EC"
			/>
		</Svg>
	);
};