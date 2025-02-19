// import WelcomeVideo from "/public/welcome-video.webm"
import { Button } from "../Button/Button"
import "./WelcomeSection.css"

export const WelcomeSection = () => {
    return (
        <section className="welcome">
            {/* <video className="welcome-video" autoPlay muted loop playsInline> */}
            {/* <source src={WelcomeVideo} type="video/webm" /> */}
            {/* <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm" type="video/webm" /> */}
            {/* </video> */}
            <div className='start-content'>
                <img className='start-content-text' src='/public/lol-text.webp' />
                <Button className="start-content-button">
                    ИГРАТЬ БЕСПЛАТНО
                </Button>
            </div>
        </section>
    )
}
