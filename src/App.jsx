import './App.css';
import games from './data/games.json';

function App() {

  return (
    <>
      <h1>Games Data</h1>
      <p>There are {games.length} games.</p>
      <div>
        {games.map(game => {
          return (
            <>
              <div key={game.id}>{game.title}</div>
              <img src={`images/${game.image}.jpg`} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
