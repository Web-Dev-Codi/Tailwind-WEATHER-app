import './App.css';
import Home from './components/Home';
import Nav from './components/NavBar'
import Footer from './components/Footer'




function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Nav />
      <main className='container mx-auto px-3 pb-12'>
        <Home />
      </main>
      <Footer />
    </div >

  );
}

export default App;
