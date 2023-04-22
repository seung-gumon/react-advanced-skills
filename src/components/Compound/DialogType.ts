import {ReactNode} from "react";

export interface DialogLabelButtonProps {
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
}

export interface DialogTitleProps {
    children?: ReactNode;
}