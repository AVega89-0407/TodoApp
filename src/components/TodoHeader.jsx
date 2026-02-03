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
    <img className="profileimg" 
    src="/src/assets/1c369b9f-5b2f-41c8-94e0-ed96a1e13bb9.jpg" alt="profil bild" />
      <article>
    <h2>Välkommen</h2>
    <p className="date">{showDate()}</p>
    </article>
    <WeatherApi />
    </header>
    </>
  )
}

export default TodoHeader