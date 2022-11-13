import '../css/customer.css'
import { CustomerItem } from './customer-item'

export const Customer = () => {
  return (
    <div className="customer-wrapper">
      <div className="customer-wrap">
        <h2>Our Customer’s Reviews</h2>
        <div className="customer__list">
          <CustomerItem name="Saul Ramirez" job="CEO, Mirrorly" />
          <CustomerItem name="Isiah Walls" job="Marketing Lead, Zamora" />
          <CustomerItem name="Forest Barrera" job="Managing Director, Teri" />
          <CustomerItem name="Ruby Schwartz" job="Marketing Intern, Thornton" />
          <CustomerItem name="Isaias Martinez" job="Head of Marketing, Moore" />
          <CustomerItem name="Deidre Braun" job="CEO, Wilbert" />
        </div>
      </div>
    </div>
  )
}
