import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Footer from './components/Footer'




function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <main className='container mx-auto text-white'>
        <Home />
      </main>
      <Footer />
    </div >

  );
}

export default App;
