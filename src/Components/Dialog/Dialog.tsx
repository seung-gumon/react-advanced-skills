import React, {ReactNode, useMemo} from 'react';
import {createPortal} from "react-dom";
import {GET_CHILDREN_TYPE} from "./Components/Dialog/DialogUtil";
import {DIALOG_BUTTON_TYPE, DIALOG_TITLE_TYPE, DialogLabelButton, DialogTitle} from "./Components/Dialog/DialogElement";


interface IDialogMain {
    children?: ReactNode;
    isOpen: boolean;
}

function DialogMain({children, isOpen}: IDialogMain) {

    const dialogLabelButtons = useMemo(() => GET_CHILDREN_TYPE(children, DIALOG_BUTTON_TYPE), []);
    const dialogTitle = useMemo(() => GET_CHILDREN_TYPE(children, DIALOG_TITLE_TYPE), []);

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div>
            {dialogTitle && <h2>{dialogTitle}</h2>}
            {dialogLabelButtons && <div>{dialogLabelButtons}</div>}
        </div>, document.body)
}


export const Dialog = Object.assign(DialogMain, {
    Title: DialogTitle,
    LabelButton: DialogLabelButton,
});