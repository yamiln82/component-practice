import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import SecondComponent from './components/SecondComponent';
import { ThirdComponent } from './ThirdComponent';
import { Child } from "./components/Child";
import { useState } from "react";
import { FourthComponent } from "./components/FourthComponent";

function App() {
  const [name, setName] = useState("Jose");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  };

  const MedicalRecord = {
    height: "1.65",
    allergies:  "None",
    bloodGroup: "Rh0+"
 }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estructura inicial del proyecto y Limpia
         </p>

         
        <MyComponent  />
        <SecondComponent/>
        <div>
          <hr />
          <FourthComponent />
          <hr />
        </div>
        <h1>Estados - Hooks</h1>
        <h2>Mensaje del hijo: </h2>
        <p>{message}</p>

         <Child name={name}  setName={setName} addMessage={addMessage}/>
         
         <ThirdComponent
          name= "Jose"
          lastName= "Nuñez"
          card = {MedicalRecord}
         />
        
        
      </header>
    </div>
  );
}

export default App;
