
import Bingo from './components/Bingo'
function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center bg-primary text-white" style={{ height: '100px', padding: '20px' }}>Bingo Game</h1>
      </div>
      <div className="container-fluid" style={{ marginTop: '20px' }}>
        <Bingo />
      </div>
    </>

  );
}

export default App;
