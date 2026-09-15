import axios from "axios";

function App() {
  async function clickHandler() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/health`);
      console.log(res.data);
  }
  return (
    <>
    <button onClick={clickHandler}>
      click here
    </button>
    </>
  )
}

export default App
