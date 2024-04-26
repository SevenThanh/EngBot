export type ButtonLabel = {
    label?: string,
    text: string
} | string

export interface ButtonGroupStyle {
    buttonStyle: string,
    wrapperStyle: string,
    submitStyle?: string,
    activeStyle?: string
}

export interface ButtonGroupProps {
    labels: ButtonLabel[],
    onSubmit: (active: number[]) => void,
    style: ButtonGroupStyle,
    type?: string,
}

export interface SelectionButtonProps {
    text: string,
    label?: string,
    active: boolean,
    onClick: () => void,
    style?: string,
    activeStyle?: string
}
