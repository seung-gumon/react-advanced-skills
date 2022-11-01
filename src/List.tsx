import React, {useContext, createContext, PropsWithChildren} from 'react';

const IsSmallContext = createContext(false);


interface IList {
    isSmall : any
}

const List: React.FC<PropsWithChildren<IList>> =
    ({
         isSmall = false,
         children,
         ...props
     }) => {
        return (
            <ul {...props} style={{padding: isSmall ? '5px' : '10px'}}>
                <IsSmallContext.Provider value={isSmall}>
                    {children}
                </IsSmallContext.Provider>
            </ul>
        )
    };


const ListItem: React.FC<PropsWithChildren> = ({children, ...props}) => {

    const isSmall = useContext(IsSmallContext);

    return (
        <li {...props} style={{color: isSmall ? 'red' : 'blue'}}>
            {children}
        </li>
    );
};


const RenderList = () => {
    return (
        <List isSmall={true}>
            <ListItem>Cats</ListItem>
            <ListItem>Dogs</ListItem>
        </List>
    )
}


export {List, ListItem , RenderList};