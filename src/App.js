import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import One from "./pages/One/One";
import { GlobalState } from "./components/Modal/ModalContext";
import { useContext } from "react";


function App() {

  const state = useContext(GlobalState)




  
  return (
      <BrowserRouter>
      <button onClick={state.onOpen}>aaaaa</button>
        <Link to='/one'>один</Link>
        <div className="App">
          <Routes>
           <Route path="one" element={<One />} />
          </Routes>
        </div>
        <Modal></Modal>
      </BrowserRouter>
  );

}

export default App;
