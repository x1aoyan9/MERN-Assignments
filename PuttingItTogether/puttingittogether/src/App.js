import PersonCard from "./components/PersonCard";

let people = [
  {fName : "Jane",
  lName : "Doe",
  hColor : "Black",
  },

  {fName : "John",
  lName : "Smith",
  hColor : "Brown",
  },
]

function App() {
  return (
    <div className="App">
      {people.map((item, index) =>
      <PersonCard
        key={index}
        fName={item.fName}
        lName={item.lName}
        age={item.age}
        hColor={item.hColor}
      />
      )}
    </div>
  );
}

export default App;