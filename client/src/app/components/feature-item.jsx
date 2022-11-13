export const FeatureItem = ({ image, text }) => {
  return (
    <div className="feature__list__item">
      <figure className="feature__list__item__wrap">
        <img src={image} alt="image" />
        <figcaption>{text}</figcaption>
      </figure>
    </div>
  )
}
