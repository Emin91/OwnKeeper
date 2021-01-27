import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const ShowIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
	return (
		<Svg width={18} height={13} viewBox="0 0 18 13" fill="none">
			<Path
				d="M9 .997c-4.973 0-9 3.878-9 5.688 0 1.81 4.027 5.687 9 5.687s9-3.877 9-5.687c0-1.81-4.027-5.688-9-5.688zm0 9.565c-2.394 0-4.345-1.737-4.345-3.877C4.655 4.545 6.605 2.8 9 2.8c2.394 0 4.345 1.744 4.345 3.884 0 2.14-1.95 3.877-4.345 3.877z"
				fill="#BFBFBF"
			/>
			<Path
				d="M12.133 6.685c0 1.546-1.404 2.8-3.133 2.8-1.736 0-3.14-1.254-3.14-2.8 0-1.552 1.404-2.808 3.14-2.808 1.73 0 3.133 1.256 3.133 2.808z"
				fill="#BFBFBF"
			/>
		</Svg>
	);
};