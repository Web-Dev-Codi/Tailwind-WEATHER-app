import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home';




function App() {
  return (
    <div className="flex flex-col justify-between h-screen">

      <NavBar />
      <main className='container mx-auto px-3 pt-12 pb-12'>

        <Home />

      </main>
      <Footer />

    </div >

  );
}

export default App;
