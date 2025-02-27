import { useState } from "react";
import { MenuHeader } from "./MenuHeader/MenuHeader";
import { MenuButton } from "./MenuButton/MenuButton";
import "./Header.css";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible((state) => !state);
  };

  const handleClose = () => {
    setMenuVisible(false);
  };

  return (
    <header className="riot-header">
      <MenuButton onClick={handleClick} />
      {menuVisible && <MenuHeader onClose={handleClose} />}
    </header>
  );
};
