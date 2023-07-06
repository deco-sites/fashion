import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Layout {
    sectionWidth?: "Container" | "Full"
    contentWidth?: "Container" | "Two Thirds" | "Full"
}

export interface Section {
    bgColor?: Colors;
    bgImage?: LiveImage;
}

export type Colors = 
    "Transparent"
    | "Backdrop opacity"
    | "Primary"
    | "Secondary"
    | "Tertiary"
    | "Base"
    | "Base inverted";

export type TextColors = 
    "Auto"
    | "Primary"
    | "Secondary"
    | "Tertiary"
    | "Base"
    | "Base inverted";

export type ButtonColor = 
    "Default"
    | "Primary"
    | "Secondary"
    | "Tertiary";

export interface ButtonType {
    color?: ButtonColor;
    outline?: boolean;
}

export const layoutClasses = {
    "Full": "",
    "Container": "lg:container",
    "Two Thirds": "lg:mx-auto lg:w-2/3"
}

export const colorClasses = {
    "Transparent": "",
    "Backdrop opacity": "backdrop-opacity-30 bg-white/40",
    "Primary": "bg-primary text-primary-content",
    "Secondary": "bg-secondary text-secondary-content",
    "Tertiary": "bg-accent text-accent-content",
    "Base": "bg-base-100 text-base-content",
    "Base inverted": "bg-base-content text-base-100",
}

export const borderColorClasses = {
    "Transparent": "",
    "Backdrop opacity": "border-base-100",
    "Primary": "border-primary-content",
    "Secondary": "border-secondary-content",
    "Tertiary": "border-accent-content",
    "Base": "border-base-content",
    "Base inverted": "border-base-100",
}

export const lineColorClasses = {
    "Transparent": "",
    "Backdrop opacity": "bg-base-100",
    "Primary": "bg-primary-content",
    "Secondary": "bg-secondary-content",
    "Tertiary": "bg-accent-content",
    "Base": "bg-base-content",
    "Base inverted": "bg-base-100",
}

export const textColorClasses = {
    "Auto": "",
    "Primary": "text-primary",
    "Secondary": "text-secondary",
    "Tertiary": "text-accent",
    "Base": "text-base-100",
    "Base inverted": "text-base-content",
}

export const buttonClasses = {
    "Default": "",
    "Primary": "btn-primary",
    "Secondary": "btn-secondary",
    "Tertiary": "btn-accent",
}

export function getButtonClasses(style: ButtonType) {
    const allButtonClasses = `btn ${buttonClasses[style?.color || "Default"]} ${style?.outline ? "btn-outline" : ""}`;

    return allButtonClasses;
}