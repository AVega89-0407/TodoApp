import WeatherApi from "../services/WeatherApi";

function TodoHeader() {

      function showDate() {
    let today = new Date();
    
    return today.toLocaleDateString("sv-SE", {
        weekday: "long", 
        day: "numeric", 
        month: "long", 
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