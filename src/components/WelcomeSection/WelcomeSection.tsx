// import WelcomeVideo from "/public/welcome-video.webm"
import { useState } from "react";
import { Button } from "../functional-components/ButtonGroup/ButtonGroup";
import { GameRegistrationModal } from "./GameRegistrationModal/GameRegistrationModal";
import "./WelcomeSection.css";

export const WelcomeSection = () => {
  const [isGameModalVisible, setGameModalvisible] = useState(false);

  const gameModalState = () => {
    setGameModalvisible((state) => !state);
  };

  return (
    <>
      {isGameModalVisible && (
        <GameRegistrationModal
          className="game-registration-modal"
          setVisible={gameModalState}
        />
      )}
      
      <section className="welcome-section">
        {/* <video className="welcome-video" autoPlay muted loop playsInline>
          <source
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
            type="video/webm"
          />
        </video> */}
        <div className="welcome-content">
          <img className="welcome-content-text" src="/lol-text.webp" />
          <Button
            labelText=""
            className="welcome-content-button"
            onClick={() => {
              gameModalState();
            }}
          >
            ИГРАТЬ БЕСПЛАТНО
          </Button>
        </div>
      </section>
    </>
  );
};
