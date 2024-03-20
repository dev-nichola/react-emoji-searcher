import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Emojis from './components/Emojis';
import Input from "./components/Input/input";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631"
        );

        setEmojisData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);


  const handleSearchEmojis = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <Navbar />
      <Container>

        <Input
        onChange={handleSearchEmojis}
        value={searchText}/>

        {loading && <Empty text='Loading...' />}
        {error && <Empty text='Oops...' />}
        {emojisData.length > 0 && <Emojis emojisData={emojisData} searchText={searchText} />}
      </Container>
    </div>
  );
}

export default App;
