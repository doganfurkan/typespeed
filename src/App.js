import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Finished from "./components/Finished";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MyNavbar from "./components/MyNavbar";
import { bringWords } from "./redux/typingSlice";

function App() {
  const dispatch = useDispatch()
  const finished = useSelector((state) => state.typer.finished)
  
  useEffect(() => {
    dispatch(bringWords())
  },[dispatch])

  return (
    <>
      {finished ? <Finished/> : ""}
      <MyNavbar/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
