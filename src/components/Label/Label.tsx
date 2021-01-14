import { LabelProps } from './LabelProps';
import './style/Label.scss';

export const Label = (props: LabelProps) => {
    return (
        <div className="label" style={{ 
            fontWeight: (props.boldFont ? ('bold') : 'normal'), 
            textTransform: props.caps ? 'uppercase' : 'none',
            fontSize: props.fontSize
        }}>{props.text}</div>
    )
}