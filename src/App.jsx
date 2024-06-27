import Player from "./components/Player";

function App() {
  return( <main>
    <div id="game-container">
      <ol id="players">
        <Player name="Player 1" symbol="X"/>
        <Player name="Player 2" symbol="O"/>
      </ol>

      Game Board
    </div>
    Game log
  </main>
  )
}

export default App
