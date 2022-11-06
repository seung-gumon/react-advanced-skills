import React, {useMemo, useState} from 'react';
import {Dialog} from "./Components/Dialog/Dialog";
import {RenderList} from "./List";
import {CounterProvider} from "./contexts/CounterContext";
import {PlusMinus} from "./PlusMinus";



function App() {
    return (
        <>
            <CounterProvider>
                <PlusMinus/>
            </CounterProvider>
            <RenderList/>
            <Dialog isOpen={true}>
                <Dialog.Title>제목</Dialog.Title>
                <Dialog.Title>제목123</Dialog.Title>
            </Dialog>
        </>
    )
}

export default App;
