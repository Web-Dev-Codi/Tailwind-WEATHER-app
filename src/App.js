import './App.css';
import Home from './components/Home';
import Nav from './components/NavBar'
import Footer from './components/Footer'




function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <main className='container mx-auto'>
        <Home />
      </main>
    </div >

  );
}

export default App;
