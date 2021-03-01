import React from "react";
import { ClearIcon } from "../../assets/svg/clearIcon";
import { FingerIcon } from "../../assets/svg/fingerIcon";

export const keyPad = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: 'FINGER', component: <FingerIcon />},
    { value: '0' },
    { value: 'CLEAR', component: <ClearIcon />},
];