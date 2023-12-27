import './App.css'
import Yellowcard from './components/Yellocard/Yellowcard'

function App() {

  return (
    <div className='main'>
      <Yellowcard 
      imgSrc={"./assets/yellow.card.img.svg"}
      name = "SEDANS"
      description = "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      bgColor={"yellow"}
      />
      <Yellowcard 
      imgSrc={"./assets/card2.svg"}
      name = "SUVs"
      description = "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      bgColor={"green"}
      />
      <Yellowcard 
      imgSrc={"./assets/card3.svg"}
      name = "Luxury"
      description = "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
      bgColor={"blue"}
      />
    </div>
  )
}

export default App
