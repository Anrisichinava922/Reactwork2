import './App.css'
import Yellowcard from './components/Yellowcard/Yellowcard'
import { date } from './date'
function App() {

  return (
    <div className='main'>
      <div className="border-radius">
      {
        date.map((card, i ) =>{
          console.log(card)
          return(<Yellowcard 
            key = {i}
            imgSrc={card.imgSrc}
            name = {card.name}
            description = {card.description}
            bgColor={card.bgColor}
            buttonTxtColor={card.buttonTxtColor}
            />)
        })
      }
      </div>
    </div>
  )
}

export default App
