import image from '../../assets/avatar1.png'

export const CustomerItem = ({ name, job }) => {
  return (
    <div className="customer__list__item-wrapper">
      <div className="customer__list__item-wrap">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis
          tellus nec aliquam volutpat. Dui dictum tortor dapibus integer
          convallis ut facilisi leo semper. Tristique nisl risus tristique nunc
          quis id elit. Suspendisse felis, tellus in sollicitudin.
        </p>
        <div className="customer-avatar">
          <img src={image} alt="avatar" />
          <article className="customer-avatar__info">
            <h3>{name}</h3>
            <p>{job}</p>
          </article>
        </div>
      </div>
    </div>
  )
}
