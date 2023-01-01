import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import WeatherFetch from './components/WeatherFetch';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <main className='container mx-auto px-3 pb-12'>

        <WeatherFetch />

      </main>
      <Footer />
    </div>

  );
}

export default App;
