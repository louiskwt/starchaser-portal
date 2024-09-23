import "./App.css";
import {Hero, Navbar} from "./components";
import {app} from "./Firebase";

function App() {
  console.log(app);
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
