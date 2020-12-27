import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const GeneratorIcon: FC<{ width?: number, height?: number, color?: string }> = ({ color }) => {
    return (
      <Svg
        width={42}
        height={35}
        viewBox="0 0 42 35"
        fill="none">
        <Path d="M0 0h42v30a5 5 0 01-5 5H5a5 5 0 01-5-5V0z" fill={color || "#EAEAEA"} />
        <Path
          d="M7.88 12.194h26.24c1.101 0 2.124 1.074 2.124 2.561v9.184c0 1.487-1.023 2.561-2.124 2.561H7.88c-1.101 0-2.124-1.074-2.124-2.561v-9.184c0-1.487 1.023-2.56 2.124-2.56zM34.12 25.97c1.069 0 1.812-.985 1.812-2.03v-9.184c0-1.045-.743-2.03-1.812-2.03H7.88c-1.069 0-1.812.986-1.812 2.03v9.184c0 1.045.743 2.03 1.812 2.03h26.24z"
          fill="#FAFAFA"
          stroke="#fff"
        />
        <Path
          d="M12.984 18.038h0c.084.169.011.354-.071.41 0 0 0 0 0 0l-.72.484-.616.415.616.415.72.485s0 0 0 0c.082.055.155.24.071.409h0c-.046.094-.104.104-.12.104-.007 0-.013 0-.02-.003a.104.104 0 01-.028-.014h0l-.72-.485-.78-.525v1.91a.334.334 0 01-.072.216c-.037.043-.068.05-.084.05s-.047-.007-.084-.05a.334.334 0 01-.072-.216v-1.91l-.78.525-.72.485h0a.104.104 0 01-.027.014.066.066 0 01-.02.003c-.017 0-.074-.01-.121-.104h0c-.084-.169-.01-.354.071-.41l.72-.484.616-.415-.616-.415-.72-.485s0 0 0 0c-.082-.055-.155-.24-.071-.409h0c.035-.071.078-.095.099-.101.018-.006.04-.007.07.014l.72.485.78.525v-1.91c0-.097.033-.171.07-.216.038-.043.069-.05.085-.05s.047.007.085.05a.333.333 0 01.071.216v1.91l.78-.525.72-.485h0c.03-.02.05-.02.068-.014.022.007.065.03.1.101zm-3.2-.502c-.313-.21-.715-.087-.896.28l.896-.28zM19.375 17.951h.001c.03-.02.05-.02.068-.014.021.006.065.03.1.102.084.168.011.353-.071.408 0 0 0 0 0 0l-.72.485-.616.415.616.415.72.485s0 0 0 0 0 0 0 0c.082.055.155.24.071.409h0c-.047.094-.104.104-.12.104-.007 0-.013 0-.02-.003a.103.103 0 01-.028-.014h0l-.72-.485-.78-.525v1.91a.333.333 0 01-.072.216c-.037.043-.068.05-.084.05s-.047-.007-.084-.05a.333.333 0 01-.072-.216v-1.91l-.78.525-.72.485h0a.104.104 0 01-.027.014.066.066 0 01-.02.003c-.017 0-.074-.01-.121-.104h0c-.084-.169-.01-.354.071-.41l.72-.484.616-.415-.616-.415-.72-.485s0 0 0 0c-.082-.055-.155-.24-.071-.409v-.001c.035-.07.078-.094.098-.1.018-.006.04-.007.071.014 0 0 0 0 0 0l.72.485.78.525v-1.91c0-.097.033-.171.07-.216.038-.043.069-.05.085-.05s.047.007.084.05a.333.333 0 01.072.216v1.91l.78-.525.72-.485zM26.104 18.038h0c.084.169.01.354-.071.41 0 0 0 0 0 0l-.72.484-.616.415.616.415.72.485s0 0 0 0c.082.055.154.24.071.409h0c-.047.094-.104.104-.12.104-.007 0-.014 0-.02-.003a.104.104 0 01-.029-.014h0l-.72-.485-.78-.525v1.91a.333.333 0 01-.07.216c-.038.043-.069.05-.085.05s-.047-.007-.084-.05a.333.333 0 01-.072-.216v-1.91l-.78.525-.72.485h0a.105.105 0 01-.027.014.066.066 0 01-.02.003c-.017 0-.075-.01-.121-.104h0c-.084-.169-.011-.354.071-.41l.72-.484.616-.415-.616-.415-.72-.485s0 0 0 0c-.082-.055-.155-.24-.071-.409h0c.035-.071.078-.095.099-.101.018-.006.04-.007.07.014l.72.485.779.525v-1.91c0-.097.034-.171.072-.216.037-.043.068-.05.084-.05s.047.007.084.05a.333.333 0 01.072.216v1.91l.78-.525.72-.485h0c.029-.02.05-.02.068-.014.022.007.065.03.1.101zM32.664 18.038h0c.083.169.01.354-.072.41l-.72.484-.615.415.615.415.72.485s0 0 0 0c.083.055.155.24.072.409h0c-.047.094-.104.104-.12.104-.007 0-.014 0-.02-.003a.105.105 0 01-.029-.014h0l-.72-.485-.78-.525v1.91a.333.333 0 01-.07.216c-.038.043-.07.05-.085.05-.016 0-.048-.007-.085-.05a.333.333 0 01-.071-.216v-1.91l-.78.525-.72.485h0a.104.104 0 01-.028.014.065.065 0 01-.02.003c-.016 0-.074-.01-.12-.104h0c-.084-.169-.011-.354.071-.41l.72-.484.616-.415-.616-.415-.72-.485s0 0 0 0c-.082-.055-.155-.24-.071-.409h0c.035-.072.078-.095.099-.101.017-.006.038-.007.07.014 0 0 0 0 0 0l.72.485.779.525v-1.91c0-.097.034-.171.071-.216.037-.043.069-.05.085-.05s.047.007.084.05a.333.333 0 01.072.216v1.91l.78-.525.72-.485h0c.03-.02.05-.02.069-.014.021.007.064.03.099.1z"
          fill="#FAFAFA"
          stroke="#fff"
        />
      </Svg>
    );
};