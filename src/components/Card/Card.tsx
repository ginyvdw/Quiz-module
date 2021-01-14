import { CardProps } from './CardProps';
import './style/Card.scss';

export const Card = (props: CardProps) => {
    return (
        <div className="card__container" style={{ height: props.height}}>
            {props.children}
        </div>
    )
};
