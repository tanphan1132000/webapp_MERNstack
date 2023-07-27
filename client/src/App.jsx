import io from 'socket.io-client';
import './App.css'

const socket = io.connect("http://localhost:3001");

function App() {
  
  console.log(socket);
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
