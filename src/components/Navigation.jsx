import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();
  return (
    <>
    <button onClick={() => navigate(-1)}>← Tillbaka</button>
    </>
  )
}

export default Navigation