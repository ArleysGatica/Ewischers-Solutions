export const ServicesItem = ({
  subtitle,
  title,
  text,
  image,
  direction = 'left',
}) => {
  return (
    <div className={`services__item ${direction}`}>
      <div className="services__item__info">
        <div className="services__item__info__wrap">
          <p>{subtitle}</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <button>Learn More...</button>
        </div>
      </div>
      <div className="services__item__image">
        <img src={image} alt="image" />
      </div>
    </div>
  )
}
