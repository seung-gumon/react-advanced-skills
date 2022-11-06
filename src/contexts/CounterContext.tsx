import React, {createContext, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react';


interface IContextAction {
    increase: () => void
    decrease: () => void
    reset : () => void
}


const CounterValueContext = createContext<number | null>(null);
const CounterActionsContext = createContext<IContextAction | null>(null);


interface ICounterProvider extends PropsWithChildren {}


export function CounterProvider({children}: ICounterProvider) {
    const [counter, setCounter] = useState<number>(0);

    const actions : IContextAction = useMemo(() => ({
        increase() {
            setCounter((prev) => prev + 1);
        },
        decrease() {
            setCounter((prev) => prev - 1);
        },
        reset() {
            setCounter(0)
        }
    }), []);

    useEffect(() => {
       return () => actions.reset()
    },[])


    return (
        <CounterActionsContext.Provider value={actions}>
            <CounterValueContext.Provider value={counter}>
                {children}
            </CounterValueContext.Provider>
        </CounterActionsContext.Provider>
    )
}


export function useCounterValue() {
    const value = useContext(CounterValueContext);
    if (value === undefined) {
        throw new Error('useCounterValue should be used within CounterProvider');
    }
    return value;
}

export function useCounterActions() {
    const actions = useContext(CounterActionsContext);
    if (actions === undefined) {
        throw new Error('useCounterActions should be used within CounterProvider');
    }
    return actions;
}
