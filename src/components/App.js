import { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([])
  const [hideForm, setHideForm] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8004/poems")
    .then(resp => resp.json())
    .then(data => setPoems(data))
    .catch(err => alert(err))
  }, [])
  
  const handleClick = () => {
    setHideForm(currentValueForHideForm => !currentValueForHideForm)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {!hideForm ? <NewPoemForm setPoems={setPoems}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;