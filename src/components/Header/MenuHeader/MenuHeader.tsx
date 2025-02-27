import "./MenuHeader.css";
import { MenuButton } from "../MenuButton/MenuButton";
import { Button } from "../../functional-components/ButtonGroup/ButtonGroup";

type TMenuHeader = {
  onClose: () => void;
};

export const MenuHeader: React.FC<TMenuHeader> = ({ onClose }) => {
  const checkTargetClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <section className="menu-header" onClick={checkTargetClick}>
      <div className="content">
        <div className="content-header">
          <MenuButton onClick={onClose} color="#000000" />
          <Button className="close-btn" onClick={onClose}>
            <p>X</p>
          </Button>
        </div>
      </div> 
    </section>
  );
};
