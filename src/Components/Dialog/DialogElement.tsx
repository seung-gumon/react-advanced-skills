import {DialogLabelButtonProps, DialogTitleProps} from "./DialogType";
import React from "react";



/** Label Button **/
export function DialogLabelButton({children}: DialogLabelButtonProps) {
    return <div>{children}</div>
}
export const DIALOG_BUTTON_TYPE = (<DialogLabelButton/>).type;


/** Title **/
export function DialogTitle({children}: DialogTitleProps) {
    return <div>{children}</div>
}
export const DIALOG_TITLE_TYPE = (<DialogTitle/>).type;