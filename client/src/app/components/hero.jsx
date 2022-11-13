import '../css/hero.css'
import arrow from '../../assets/Arrow3.png'
import arrowDown from '../../assets/Vector438.png'

export const HeroView = () => {
    return (
        <div className="home__hero">
            <div className="home__hero__top">
                <p className="home__hero__top__subtitle">Let Ai help your</p>
                <h1 className="home__hero__top__title">Solutions at your hands</h1>
                <p className="home__hero__top__info">
                    We can provide you with a number of software development services, such as web development, mobile application development, product design, or software maintenance and support. Contact us and learn more about our software development services.
                </p>
                <button className="home__hero__top__button">
                    Let’s go <img src={arrow} alt="arrow" />{' '}
                </button>
            </div>
            <figure className="home__hero__bottom">
                <img src={arrowDown} alt="arrowDown" />
            </figure>
        </div>
    )
}
