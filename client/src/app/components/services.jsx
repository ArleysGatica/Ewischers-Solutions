import { ServicesItem } from './services-item'
import image from '../../assets/customui.png'
import rafiki from '../../assets/rafiki.png'
import '../css/services.css'

export const Services = () => {
    return (
        <div className="services-wrapper">
            <section className="services-wrap">
                <ServicesItem
                    subtitle="what are services"
                    title="web and mobile development"
                    text="Our brilliant mobile and web teams pride themselves on taking on the toughest challenges and bringing them to life on Android and iOS devices, Android, as well as web apps."
                    image={image}
                />
                <ServicesItem
                    subtitle="You can maintain your"
                    title="development in 3d and AI"
                    text="We partner with your leading platforms to design your 3d product and apply canvas, mobility and AI to your product. We can help you to create a 3d product that is easy to use and easy to maintain."
                    image={rafiki}
                    direction="right"
                />
            </section>
        </div>
    )
}
