import { Button } from "../../functional-components/ButtonGroup/ButtonGroup";

type TGameRegistrationModal = {
  className: string,
  setVisible: (visible: boolean) => void,
};

export const GameRegistrationModal: React.FC<TGameRegistrationModal> = ({
  className,
  setVisible, // Поменять на onClose
}) => {
  const checkTargetClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  }

  return (
    <section className={className} onClick={checkTargetClick}>
      <div className="menu">
        <Button labelText="" className="close-btn" onClick={() => setVisible(false)}>
          X
        </Button>
        <div className="main-content">
          <div className="header">
            <p>ПОДГОТОВКА К ИГРЕ</p>
          </div>
          <div className="buttons">
            <Button
              labelText="У меня нет учетной записи Riot"
              className="registration-btn"
              onClick={() => {}}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
            <Button
              labelText="У меня есть учетная запись Riot"
              className="login-btn"
              onClick={() => {}}
            >
              ВОЙТИ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
