import { Button } from "../functional-components/ButtonGroup";

type TGameRegistrationSection = {
  className: string;
};

export const GameRegistrationSection: React.FC<TGameRegistrationSection> = ({
  className,
}) => {
  return (
    <section className={className}>
      <div className="menu">
        <Button labelText="" className="close-btn" onClick={() => {}}>
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
