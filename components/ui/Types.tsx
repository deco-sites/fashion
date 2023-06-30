export type Colors = 
    "Transparent"
    | "Primary"
    | "Secondary"
    | "Tertiary"
    | "Base"
    | "Base inverted";

export type ButtonColor = 
    "Default"
    | "Primary"
    | "Secondary"
    | "Tertiary"

export interface ButtonType {
    color?: ButtonColor;
    outline?: boolean;
}


export const colorClasses = {
    "Transparent": "",
    "Primary": "bg-primary text-primary-content",
    "Secondary": "bg-secondary text-secondary-content",
    "Tertiary": "bg-accent text-accent-content",
    "Base": "bg-base-100 text-base-content",
    "Base inverted": "bg-base-content text-base-100",
}

export const buttonClasses = {
    "Default": "",
    "Primary": "btn-primary",
    "Secondary": "btn-secondary",
    "Tertiary": "btn-accent",
}