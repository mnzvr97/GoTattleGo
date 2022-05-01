import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <section className="about">
        <h2 className="about__title">Chat Page</h2>

        <div className="about__details">

        <div className="about__left">
        <h3 className="about__mainlefttitle">working line</h3>
                <p className="about__paragraph">working line</p>
                <button className="about__btn">Chat Page</button>
                <div className="about__social">
            <FontAwesomeIcon className="about__socialicons" icon={faInstagram} />
            <FontAwesomeIcon className="about__socialicons" icon={faLinkedin} />
            <FontAwesomeIcon className="about__socialicons" icon={faTwitter} />
            </div>
            </div>
            
            <div className="about__right">
                <img src={aboutus} alt="" className="about__image" />
            </div>
        </div>
            
        </section>
    )
}

export default AboutUs;