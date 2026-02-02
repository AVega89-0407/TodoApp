import Navbar from "../components/Navbar";
import Greeting from "../components/Greeting";

function SideBar() {
  return (
    <>
    <div>
      <img className="profileimg" src="/src/assets/1c369b9f-5b2f-41c8-94e0-ed96a1e13bb9.jpg" alt="profil bild" />
      <p className="greeting">{<Greeting />}</p>
      <Navbar />
      </div>
    </>
  );
}

export default SideBar;
