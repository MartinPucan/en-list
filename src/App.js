import './App.css';
import './FetchWords';
import FetchWords from "./FetchWords";
import Header from "./Header";

function App() {
  return (
    <section className="App">
      <Header />
      <FetchWords />
    </section>
  );
}

export default App;
