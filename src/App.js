import './App.css';
import HamBurgerMenu from './components/HamBurgerMenu'

function App() {
  return (
    <div className="App">
      <HamBurgerMenu />
      <div className='section'>
        <h1>Jelentkezés</h1>
        <input type="text" placeholder="Név"></input>
        <input type="email" placeholder="Email cím"/>
        <input type="tel" placeholder="Telefonszám"/>
        <label class="container">Elolvastam és elfogadom az <span className="adatk">Adatkezelési Tájékoztatót.</span>
          <input type="checkbox" checked="checked"/>
          <span class="checkmark"></span>
        </label>
        <input type="submit">ELKÜLD</input>
      </div>
      
    </div>
  );
}

export default App;
