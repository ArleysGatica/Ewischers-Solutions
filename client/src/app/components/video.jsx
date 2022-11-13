import '../css/video.css'
import unsplash from '../../assets/Video.png'
import play from '../../assets/play.png'

export const Video = () => {
  return (
    <div className="video-wrapper">
      <section className="video-wrap">
        <article className="video__info">
          <p>Let’s introduce with</p>
          <h2>Your Writing Partner!</h2>
          <p>
                      We are proud to work with truly innovative clients.These are just a few of the companies we have had the privilege of working with....
          </p>
        </article>
        <section className="video__content">
          <img src={unsplash} alt="unsplash" />
        </section>
      </section>
    </div>
  )
}
