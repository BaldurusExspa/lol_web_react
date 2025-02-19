// import WelcomeVideo from "/public/welcome-video.webm"
import { Button } from "../functional-components/ButtonGroup";
import { GameRegistrationSection } from "./GameRegistrationSection";
import "./WelcomeSection.css";

export const WelcomeSection = () => {
  return (
    <>
      <GameRegistrationSection className="game-registration-section" />
      <section className="welcome-section">
        {/* <video className="welcome-video" autoPlay muted loop playsInline> */}
        {/* <source src={WelcomeVideo} type="video/webm" /> */}
        {/* <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm" type="video/webm" /> */}
        {/* </video> */}
        <div className="welcome-content">
          <img className="welcome-content-text" src="/lol-text.webp" />
          <Button
            labelText=""
            className="welcome-content-button"
            onClick={() => {}}
          >
            ИГРАТЬ БЕСПЛАТНО
          </Button>
        </div>
      </section>
    </>
  );
};
