import logo from './logo.svg';
import './App.css';
import ShoppingList from './shopping/ShoppingList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ShoppingList />

      </header>
    </div>
  );
}

export default App;
