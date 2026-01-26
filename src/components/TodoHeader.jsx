import WeatherApi from "../services/WeatherApi";

function TodoHeader() {

      function showDate() {
    // Returnerar dagens datum på svenska
    let today = new Date();
    
    return today.toLocaleDateString("sv-SE", {
        weekday: "long", // veckodag med fullständigt namn
        day: "numeric", // dag i månaden (siffra)
        month: "long", // månad med fullständigt namn
    });
  }

  return (
    <>
    <header>
      <article>
    <h2>Min dag</h2>
    <p className="date">{showDate()}</p>
    </article>
    <WeatherApi />
    </header>
    </>
  )
}

export default TodoHeader