// import logo from './logo.svg';

// import Person1 from './components/Person1';
// import Person2 from './components/Person2';

// import Header from "./components/Header";

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      {/* <Person1 />
      <Person2 /> */}

      {/* <Header p1={"Bob"} p2={"Paul"}/> */}

      <PersonCard fName={"Jane"} lName={"Doe"} age={"45"} hColor={"Black"}/>
      <PersonCard fName={"John"} lName={"Smith"} age={"88"} hColor={"Brown"}/>
      <PersonCard fName={"Millard"} lName={"Fillmore"} age={"50"} hColor={"Black"}/>
      <PersonCard fName={"Maria"} lName={"Smith"} age={"62"} hColor={"Brown"}/>
    </div>
  );
}

export default App;