import './App.css';
import { useState } from 'react';
function App() {
  const [gifs, setGifs] = useState([
    'https://media2.giphy.com/media/D8N4jDVEpZ2OCdGjpn/giphy.gif?cid=ecf05e47378735f3eef4f2349cc4c50212bf41457a047676&rid=giphy.gif',
    'https://media3.giphy.com/media/uSYQsJQWEv6O4/giphy.gif?cid=ecf05e47i23tohiuehyr7vxor564j1ptoj0xy61kquq8y8yv&rid=giphy.gif',
  ]);
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((gif, idx) => (
          <img key={idx} src={gif} alt="gif" />
        ))}
      </section>
    </div>
  );
}

export default App;
