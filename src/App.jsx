import './App.css';
import games from './data/games.json';

function App() {

  return (
    <>
      <h1>Games Data</h1>
      <p>There are {games.length} games.</p>
      <ul>
        {games.map(game => {
          return (
            <li key={game.id}>{game.title}</li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
