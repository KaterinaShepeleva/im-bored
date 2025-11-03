import './App.css';
import RandomActivity from 'components/RandomActivity/RandomActivity.tsx';
import FilterByType from 'components/FilterByType/FilterByType.tsx';
import FilterByParticipants from 'components/FilterByParticipants/FilterByParticipants.tsx';
import FilterByAccessibility from 'components/FilterByAccessibility/FilterByAccessibility.tsx';
import FilterByAccessibilityRange from 'components/FilterByAccessibilityRange/FilterByAccessibilityRange.tsx';

function App() {
  return (
    <>
      <h1 style={{ fontSize: '32px' }}>
        If I'm Bored
      </h1>
      
      <RandomActivity/>
      <br/>
      
      <FilterByType/>
      <br/>
      
      <FilterByParticipants/>
      <br/>
      
      <FilterByAccessibility/>
      <br/>
      
      <FilterByAccessibilityRange/>
    </>
  );
}

export default App;
