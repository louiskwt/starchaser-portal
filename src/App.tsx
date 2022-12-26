import { initializeApp } from "firebase/app";
import { config } from "./config/config";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="container w-100 mx-auto text-center p-8">
      <h1 className="text-3xl font-bold ">Hello world!</h1>
    </div>
  );
}

export default App;
