import React from 'react';
import './App.css';
import Header from './components/Header';
import CountrySelect from './components/Search/Search';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';

function App() {
  return (
    <div className="App">
      <Header />
      <CountrySelect />
      <div className="abc">
      {/* <LanguageSharpIcon /> */}
      <h1 style={{ Color: '#4E4E4E' }}>COVID-19 Pandemic Worldwide</h1>
    </div>
    </div >
  );
}

export default App;
