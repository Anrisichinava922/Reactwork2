import './yellowcard.css'

const Yellowcard = ({ description , name , imgSrc , bgColor ,}) => {
  return (
    <div className={`yellow-card ${bgColor}`}>
      <header>
        <img src={imgSrc} alt="" />
      </header>
      <div className="textbox">
        <h1>{name}</h1>
        <h2>{description}</h2>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default Yellowcard