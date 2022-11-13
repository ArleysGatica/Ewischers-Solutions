import '../css/feature.css'
import { FeatureItem } from './feature-item'
import world from '../../assets/Vector.png'
import glass from '../../assets/glass.png'
import gear from '../../assets/gear.png'
import statistics from '../../assets/statistics.png'
import desk from '../../assets/desk.png'

export const Feature = () => {
  return (
    <div className="feature-wrapper">
      <section className="feature-wrap">
        <article className="feature__info">
          <h2>Explore the features!</h2>
          <p>
            help with the features of the software development services, such as web development, mobile application development, product design, or software maintenance and support.
          </p>
        </article>
        <section className="feature__list">
          <FeatureItem image={world} text="Create Ai Based Website" />
          <FeatureItem image={glass} text="Write SEO Friendly Contents" />
          <FeatureItem
            image={gear}
            text="Maintain site with Artificial Intelligence"
          />
          <FeatureItem
            image={statistics}
            text="Response customer with analyzing data"
          />
          <FeatureItem image={desk} text="Show custom interface with Ai" />
        </section>
      </section>
    </div>
  )
}
