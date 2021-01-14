import { ReactNode } from "react";

export interface CardProps {
    height: number | string;
    children: ReactNode | Array<ReactNode>;
}