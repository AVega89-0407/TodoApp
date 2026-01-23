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
    <h2>Min dag</h2>
    <p className="date">{showDate()}</p>
    </header>
    </>
  )
}

export default TodoHeader