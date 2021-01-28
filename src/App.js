import './App.css';
import { useState, useContext, useEffect  } from 'react';
import { Grid,SearchBar, 
  SearchContext, 
  SearchContextManager,
  SuggestionBar, } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
const gf = new GiphyFetch('IerGS074UR8ZHCBQGxWeoTh0GF47RRvy')

function App() {
  const { fetchGifs, searchKey } = useContext(SearchContext)
  const [searchWord, setSearchWord] = useState('dog');
  // const [gifs, setGifs] = useState([
  //   'https://media2.giphy.com/media/D8N4jDVEpZ2OCdGjpn/giphy.gif?cid=ecf05e47378735f3eef4f2349cc4c50212bf41457a047676&rid=giphy.gif',
  //   'https://media3.giphy.com/media/uSYQsJQWEv6O4/giphy.gif?cid=ecf05e47i23tohiuehyr7vxor564j1ptoj0xy61kquq8y8yv&rid=giphy.gif',
  // ]);
  const getGifs = async () => {
    const { data: gifs }  = await gf.search('dog', { sort: 'relevant', lang: 'es', limit: 10, type: 'stickers' })
    console.log({gifs})
  }

  useEffect(() => {
    getGifs();
  }, [])

  return (
    <SearchContextManager apiKey='IerGS074UR8ZHCBQGxWeoTh0GF47RRvy'>

    <div className="App">
      <section className="App-content">
      <div className="searchbar">
        <label htmlFor="searchbar">
        <input onChange={(e) => setSearchWord(e.target.value)}id="searchbar" type="text"/>
        </label>
        <button>검색</button>
        </div>
        <SearchBar />
            <SuggestionBar />
        <Grid key={searchKey} width={800} columns={3} fetchGifs={fetchGifs} />
      </section>
    </div>
    </SearchContextManager>
  );
}

export default App;
