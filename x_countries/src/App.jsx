import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  const imageStyle = {
    width: "100px",
    height: "100px",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const cardsStyle = {
    display: "flex",
    flexDBirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "200px",
  };
  return (
    <div style={containerStyle}>
      {countries.map((country) => {
        return (
          <div key={country.cca2} style={cardsStyle}>
            <img
              src={country.flags.png}
              style={imageStyle}
              alt={`Flag of ${country.name.common}`}
            />
            <h3>{country.name.common}</h3>
          </div>
        );
      })}
    </div>
  );
}
