import { useState } from "react";
import Navbar from "./component/Navbar";
import RemainSec from "./component/RemainSec";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="h-[100vh] bg-slate-300">
        <Navbar />
        <RemainSec />
      </main>
    </>
  );
}

export default App;
