import { ChangeEvent, useState } from 'react';
import { changeLanguage } from '../../locales/i18n';
import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import style from './Navbar.module.css';

type Cake = {
  type: string;
  id: string;
};

const agarCakes: Cake[] = [
  { type: 'Home', id: 'home' },
  { type: 'Cakes by Object', id: 'object' },
  { type: 'Cakes by Theme', id: 'theme' },
  { type: 'Cakes by Holiday', id: 'holiday' },
  { type: 'Offering Cakes', id: 'offering' },
  { type: 'Party Cake Set', id: 'party' },
  { type: 'Mini Gift Cakes', id: 'gift' },
  { type: 'Daily Cakes', id: 'daily' },
  { type: 'Decorative Accessories', id: 'accessories' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.navbar}>
      <div onClick={toggleMenu} className={style.hamburger}>
        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </div>

      <div className={style.logo}>
        {/* <img src="logo.png" alt="Logo" /> */}
        <div className={style.logo_text}>TAMITI</div>
      </div>
      <div className={`${style.menu} ${isOpen ? style.open : ''}`}>
        <ul>
          {agarCakes.map((cake: Cake) => (
            <li key={cake.id}>{t(cake.type)}</li>
          ))}
        </ul>
      </div>
      <div className={style.language_selector}>
        <select onChange={handleLanguageChange}>
          <option value="vn">Tiếng Việt</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
  );
};
