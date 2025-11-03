import './App.css';
import RandomActivity from 'components/RandomActivity/RandomActivity.tsx';
import FilterByType from 'components/FilterByType/FilterByType.tsx';

function App() {
  return (
    <>
      <h1 style={{ fontSize: '32px' }}>
        If I'm Bored
      </h1>
      
      <RandomActivity/>
      <br/>
      
      <FilterByType/>
    </>
  );
}

export default App;
