import { useEffect, useState } from 'react';
import { FooterStyled } from './Footer.style';

const Footer: React.FC = () => {
  const [width, setWidth] = useState(0);
  const checkWindow = () => {
    setWidth(document.documentElement.scrollWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkWindow);
    setWidth(document.documentElement.scrollWidth);
    return () => {
      window.removeEventListener('resize', checkWindow);
    };
  }, []);
  return (
    <FooterStyled>
      Ширина экарна: {width}
    </FooterStyled>
  );
};

export default Footer;
