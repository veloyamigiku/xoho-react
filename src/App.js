import './App.css';
import Header from './components/common/Header';

function App() {
  return (
    <div id="wrapper">
      <div id="header">
        <Header />
      </div>
      <div id="main">
        <div id="menu"></div>
        <div id="contents"></div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
