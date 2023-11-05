import "./App.css";
import axios from "axios";
import Search from "./Search";
import Current from "./Current";

export default function App(props) {
  function handleResponse(response) {
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="App">
      <h1>London</h1>
      <h2> Last updated: Friday 10:00 </h2>
      <Search />
      <Current />
    </div>
  );
}
<p class="footer">
  This project is coded by <strong>Laura Loriga</strong>
  <a class="githubLink" href="" target="_blank">
    GitHub{" "}
  </a>
</p>;




