import {Children, isValidElement, ReactNode} from "react";

export function GET_CHILDREN_TYPE(children: ReactNode, childrenType: any) {
    const childrenArray = Children.toArray(children);
    return childrenArray
        .filter(child => isValidElement(child) && child.type === childrenType)
        .slice(0, 2);
}