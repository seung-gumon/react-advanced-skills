import React, {PropsWithChildren , useState} from 'react';


interface SelectProps {
    label: string;
    trigger: React.ReactNode;
    value: string
    onChange: (value: string) => void;
    options: string[]
}


function FrameworkSelect() {


    const [selected, setSelected] = useState();

    return (
        <Select
            label={}
            trigger={}
            value={}
            onChange={}
            options={}
        />
    )

}


function Select({label, trigger, onChange, options, value}: SelectProps) {
    return (
        <DropDown label={label} value={value} onChange={onChange} options={options}>
            <DropDown.Menu>
                {options.map((option) => (
                    <DropDown.Item key={option} value={option}>
                        {option}
                    </DropDown.Item>
                ))}
            </DropDown.Menu>
        </DropDown>
    )
}


interface DropDownProps {
    trigger: React.ReactNode;
}

function DropDown({children, trigger}: PropsWithChildren<DropDownProps>) {
    return (
        <div>
            {trigger}
            {children}
        </div>
    )
}