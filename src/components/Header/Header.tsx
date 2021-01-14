import './style/Header.scss';
import { HeaderProps } from './HeaderProps';
import { Link } from 'react-router-dom';

export const Header = (props: HeaderProps) => {
  return (
    <div className="header__container">
      <div className="header__text">
        <Link to="/">
          {props.headerText}
        </Link>
      </div>
    </div>
  )
}
