import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [testData, setTestData] = useState<any>(null);

  useEffect(() => {
    axios.get("/api/test").then((res) => {
      setTestData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Kmock React Example</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <section className="sub-section">
          <div className="col">
            <p>
              <code>`/api/test`</code>
            </p>
            <pre className="read-the-docs">
              {testData && JSON.stringify(testData, null, 2)}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
