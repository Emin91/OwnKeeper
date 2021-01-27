import React, { FC } from "react"
import Svg, { Path} from "react-native-svg"

export const EditIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
	return (
		<Svg
			width={26}
			height={26}
			viewBox="0 0 19 19"
			fill="none"
		>
			<Path
				d="M0 14.252v3.75h3.75l11.06-11.06-3.75-3.75L0 14.253zm17.71-10.21a.996.996 0 000-1.41L15.37.292a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
				fill="#FFF"
			/>
		</Svg>
	);
};