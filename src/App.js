import React, {useState, useEffect} from "react";
import Posts from "./components/Posts";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

const url = "https://restcountries.com/v3.1/all";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {

      const response = await fetch(url);
      const data = await response.json();
      setCountries( data );
      setIsLoading( false );
      setError( null );
    } catch ( e ) {
      setIsLoading(false);
      setError( e );
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      {/*<h1>Country App</h1>*/}
      <Navbar />
      <Search />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Posts countries={countries}/>}
    </>
  );
}

export default App;
