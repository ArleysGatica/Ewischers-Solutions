import '../css/navigation.css'
import Logo from '../../assets/logoG.png'

export const NavigationView = () => {
  return (
    <div className="home__navigation">
      <div className="home__navigation__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="home__navigation__options">
        <p>Features</p>
        <p>Products</p>
        <p>Company</p>
        <p>Pricing</p>
        <p>Support</p>
      </div>
      
    </div>
  )
}