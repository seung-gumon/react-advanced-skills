import React, {useMemo, useState} from 'react';
import {Dialog} from "./Components/Dialog/Dialog";
import {RenderList} from "./List";
import {Breadcrumb, BreadcrumbItem} from "./BreadCrumb";
import {Route, Router} from "react-router-dom";


function App() {
    return (
        <>
            <RenderList/>
            <Dialog isOpen={true}>
                <Dialog.Title>제목</Dialog.Title>
                <Dialog.Title>제목123</Dialog.Title>
            </Dialog>
        </>
    )
}

export default App;
