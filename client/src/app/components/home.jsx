import { Hero } from '../container/hero'
import { Navigation } from '../container/navigation'
import '../css/home.css'

export const HomeView = () => {
  return (
    <div className="home">
      <div className="background"></div>
      <div className="background2"></div>
      <Navigation />
      <Hero />
    </div>
  )
}
