import React from 'react';
import {CounterProvider, useCounterActions, useCounterValue} from "./contexts/CounterContext";



export function PlusMinus () {


    return (
        <CounterProvider>
            <div>
                <Value/>
                <Buttons/>
            </div>
        </CounterProvider>
    )
}


function Value() {
    const counter = useCounterValue();
    return <h1>{counter}</h1>
}

function Buttons() {
    const actions = useCounterActions();

    return (
        <div>
            <button onClick={actions?.increase}>+</button>
            <button onClick={actions?.decrease}>-</button>
        </div>
    )
}

