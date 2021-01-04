import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const MasterCardIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
    return (
      <Svg width={46} height={36} viewBox="0 0 46 36" fill="none">
        <Path
          d="M8.283 35.346v-2.354c0-.887-.562-1.483-1.469-1.49-.476-.009-.969.14-1.313.666-.258-.416-.664-.667-1.234-.667-.399 0-.79.118-1.094.557v-.463H2.36v3.75h.82v-2.078c0-.652.36-.997.915-.997.539 0 .812.353.812.989v2.087h.821v-2.08c0-.65.375-.996.914-.996.555 0 .82.353.82.989v2.087h.821zm12.14-3.75h-1.328v-1.138h-.82v1.137h-.759v.746h.758v1.71c0 .871.336 1.389 1.297 1.389.352 0 .758-.11 1.016-.29l-.234-.699a1.495 1.495 0 01-.72.212c-.405 0-.538-.251-.538-.628v-1.694h1.328v-.746zm6.932-.095c-.47 0-.774.22-.985.55v-.456h-.805v3.75h.813v-2.102c0-.62.265-.965.797-.965.164 0 .336.023.508.094l.25-.769a1.729 1.729 0 00-.578-.102zm-10.48.392c-.39-.259-.93-.392-1.524-.392-.945 0-1.555.455-1.555 1.2 0 .613.454.99 1.29 1.107l.383.055c.445.063.656.18.656.392 0 .29-.297.455-.852.455-.562 0-.969-.18-1.242-.392l-.383.635c.445.33 1.008.487 1.617.487 1.079 0 1.704-.51 1.704-1.224 0-.66-.492-1.004-1.305-1.122l-.383-.055c-.351-.047-.633-.118-.633-.369 0-.274.266-.44.711-.44.477 0 .938.181 1.165.323l.351-.66zm21.767-.392c-.468 0-.773.22-.984.55v-.456h-.805v3.75h.813v-2.102c0-.62.265-.965.797-.965.164 0 .336.023.508.094l.25-.769a1.728 1.728 0 00-.578-.102zm-10.467 1.97c0 1.137.79 1.969 1.993 1.969.562 0 .937-.126 1.344-.447l-.39-.66c-.306.22-.626.338-.978.338-.648-.008-1.125-.479-1.125-1.2 0-.722.477-1.193 1.125-1.2.352 0 .672.117.977.336l.39-.659c-.406-.321-.78-.447-1.343-.447-1.204 0-1.993.832-1.993 1.97zm7.611 0v-1.876h-.812v.455c-.258-.337-.649-.549-1.18-.549-1.047 0-1.868.824-1.868 1.97 0 1.145.82 1.969 1.868 1.969.531 0 .922-.212 1.18-.55v.456h.812V33.47zm-3.024 0c0-.66.43-1.2 1.133-1.2.672 0 1.125.517 1.125 1.2 0 .682-.453 1.2-1.125 1.2-.703 0-1.133-.541-1.133-1.2zm-9.807-1.97c-1.094 0-1.86.8-1.86 1.97 0 1.192.797 1.969 1.915 1.969.562 0 1.078-.141 1.531-.526l-.398-.604a1.775 1.775 0 01-1.087.392c-.523 0-1-.243-1.117-.918h2.774c.008-.102.016-.204.016-.313-.008-1.17-.727-1.97-1.774-1.97zm-.016.73c.524 0 .86.33.946.91h-1.938c.086-.541.414-.91.992-.91zm20.384 1.24v-3.382h-.812v1.961c-.258-.337-.649-.549-1.18-.549-1.048 0-1.868.824-1.868 1.97 0 1.145.82 1.969 1.868 1.969.531 0 .922-.212 1.18-.55v.456h.812V33.47zm-3.024 0c0-.66.43-1.2 1.133-1.2.672 0 1.125.517 1.125 1.2 0 .682-.453 1.2-1.125 1.2-.703 0-1.133-.541-1.133-1.2zm-27.44 0v-1.876h-.813v.455c-.258-.337-.649-.549-1.18-.549-1.047 0-1.868.824-1.868 1.97 0 1.145.82 1.969 1.868 1.969.531 0 .922-.212 1.18-.55v.456h.813V33.47zm-3.025 0c0-.66.43-1.2 1.134-1.2.672 0 1.125.517 1.125 1.2 0 .682-.453 1.2-1.125 1.2-.704 0-1.134-.541-1.134-1.2zM44.68 34.8a.384.384 0 01.27.105.4.4 0 01.082.118.358.358 0 01-.082.408.357.357 0 01-.121.078.373.373 0 01-.297 0 .431.431 0 01-.121-.078.4.4 0 01-.082-.118.357.357 0 01.081-.408.36.36 0 01.122-.078.454.454 0 01.148-.028zm0 .662a.279.279 0 00.203-.086.302.302 0 00.086-.208.302.302 0 00-.176-.27.28.28 0 00-.227 0 .304.304 0 00-.093.062.306.306 0 00-.086.208.306.306 0 00.086.208.304.304 0 00.207.086zm.024-.463c.042 0 .078.012.101.032.024.02.035.047.035.082a.095.095 0 01-.027.07.133.133 0 01-.082.036l.113.13h-.09l-.105-.13h-.035v.13h-.075v-.346h.165V35zm-.086.063v.094h.086c.02 0 .035-.004.046-.011.012-.008.016-.02.016-.036 0-.015-.004-.027-.016-.035a.083.083 0 00-.046-.012h-.086zm-.442-12.192v-.455h.184v-.095h-.465v.095h.183v.455h.098zm.903 0v-.55h-.141l-.164.377-.164-.377h-.14v.55h.1v-.412l.153.357h.106l.152-.357v.416h.098v-.004zM21.513 25.6c.11.094.227.188.34.283a13.968 13.968 0 01-7.787 2.361C6.298 28.245 0 21.921 0 14.123 0 6.323 6.298 0 14.066 0c2.88 0 5.556.87 7.787 2.362-.113.094-.23.184-.34.282a15.247 15.247 0 00-5.216 11.479A15.26 15.26 0 0021.513 25.6zM31.453 0c-2.88 0-5.556.87-7.787 2.362.113.094.23.184.34.282a15.24 15.24 0 01.004 22.957c-.11.094-.227.188-.34.283a13.967 13.967 0 007.787 2.361c7.768 0 14.066-6.324 14.066-14.122C45.52 6.32 39.221 0 31.453 0zM22.76 3.025a14.106 14.106 0 00-5.372 11.098A14.106 14.106 0 0022.76 25.22c.18-.146.36-.29.531-.444a14.106 14.106 0 004.841-10.654c0-4.253-1.875-8.066-4.841-10.655a9.663 9.663 0 00-.531-.443z"
          fill="#fff"
        />
      </Svg>
    );
};