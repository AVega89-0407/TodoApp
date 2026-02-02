import Greeting from "../components/Greeting";
import WeatherApi from "../services/WeatherApi";
import QuoteApi from "../services/QuoteApi";


function Home() {
  return (
    <>
    <p className="greeting">{<Greeting />}</p>
       <section className="widgets">
          <div className="card"> {<WeatherApi />}</div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card">{<QuoteApi />}</div>
        </section>
    </>
  )
}

export default Home