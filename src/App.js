import UserList from './UserList';
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [erros, setErros] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUSer(res.data))
      .catch((err) => setErros(err));
  }, []);
  return (
    <div className="App">
      <div className="title">Users Cards</div>
      <header className="App-header">
        
        <UserList data={listOfUSer} />
      </header>
    </div>
  );
}

export default App;
