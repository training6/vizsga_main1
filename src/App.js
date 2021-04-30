import '../src/style/App.css';
import HamBurgerMenu from './components/HamBurgerMenu'

function App() {
  return (
    <div className="App">
      <HamBurgerMenu />
      <form className='section'>
        <h1>Jelentkezés</h1>
        
          <input type="text" placeholder="Név" height="100"/>
          <input type="email" placeholder="Email cím"/>
          <input type="tel" placeholder="Telefonszám"/>
          <div className='check'>
          <input type="checkbox"/>
          <label className="container">Elolvastam és elfogadom az <span className="adatk">Adatkezelési Tájékoztatót.</span>
            <span className="checkmark"></span>
          </label>
          </div>
          <input type="submit" value="ELKÜLD"/>

      </form>
      
    </div>
  );
}

export default App;
