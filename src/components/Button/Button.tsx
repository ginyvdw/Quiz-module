import { ButtonProps } from "./ButtonProps"
import "./style/Button.scss";

export const Button = (props: ButtonProps) => {

    return (
        <div style={{ backgroundColor: props.backgroundColor, color: props.color }} onClick={props.onClick} className="button">{props.buttonText}</div>
    )
}