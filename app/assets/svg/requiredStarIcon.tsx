import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const RequiredStarIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
	return (
		<Svg width={7} height={7} viewBox="0 0 7 7" fill="none">
			<Path
				d="M2.36 3.695L0 2.992l.36-1.18 2.359.875L2.649 0h1.195l-.078 2.727 2.32-.86.36 1.188-2.4.71 1.548 2.118-.969.734-1.453-2.25-1.406 2.196-.977-.711 1.57-2.157z"
				fill="#C5C5C5"
			/>
		</Svg>
	);
};