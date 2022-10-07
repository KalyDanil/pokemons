import Moment from 'react-moment';
import { HeaderStyled } from './Header.style';

const Header: React.FC = () => {
  const toMain = () => {
    window.location.href = '/';
  };
  return (
    <HeaderStyled>
      <button onClick={toMain}>To main page</button>
      <div className="time">
        Время:&nbsp;<Moment format="DD-MM-YYYY HH:mm:ss" interval={1000} />
      </div>
    </HeaderStyled>
  );
};

export default Header;
