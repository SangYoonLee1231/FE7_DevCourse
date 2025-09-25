// import { useState } from "react";
import NotFound from "./components/NotFound.tsx";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-blue-500 text-white px-4">버튼</button>
      <button className="btn-primary">버튼</button>
      <NotFound />
    </>
  );
}

export default App;
