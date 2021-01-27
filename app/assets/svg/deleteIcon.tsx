import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const DeleteIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
	return (
		<Svg
			width={26}
			height={26}
			viewBox="0 0 18 18"
			fill="none"
		>
			<Path
				d="M3 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H3v12zM16 1h-3.5l-1-1h-5l-1 1H2v2h14V1z"
				fill="#FFF"
			/>
		</Svg>
	);
};