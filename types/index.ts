import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handLeClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
    manufacturer : string;
    setManufacturer: (manufacturer: string) => void;
}