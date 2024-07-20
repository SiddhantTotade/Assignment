import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  // console.log(data.length);

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function deletePeople(index) {
    const newPeopleData = [...data.slice(0, index), ...data.slice(index + 1)];
    console.log(newPeopleData);
    setData(newPeopleData);
  }

  const addPeople = async () => {
    const randomNum = random(50);

    const peopleData = await fetch(
      "https://swapi.dev/api/people/" + randomNum
    ).then((res) => res.json());

    setData([...data, { peopleData }]);
  };

  data.map((people, index) => {
    console.log(data[index]?.peopleData.name);
  });

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addPeople}>Add User</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((people, index) => (
              <tr key={index}>
                <td>{data[index]?.peopleData.name}</td>
                <div className="card">
                  <button onClick={() => deletePeople(index)}>
                    Delete User
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
