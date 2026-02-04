import Greeting from "../components/Greeting";
import WeatherApi from "../services/WeatherApi";
import QuoteApi from "../services/QuoteApi";
import Calender from "../components/Calender";

import { FaEnvelope, FaList } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


function Home() {
  return (
    <>
    <span className="greeting">{<Greeting />}</span>
       <section className="widgets">
          <div className="card"><FaList />Att göra idag</div>
          <div className="card"><FaEnvelope />Inkorg</div>
          <Calender />
          <div className="card">{<WeatherApi />}</div>
          <div className="card">{<QuoteApi />}</div>
          <div className="card"><FaMessage />Meddelanden</div>
        </section>
    </>
  )
}

export default Home