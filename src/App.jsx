
import './App.css'
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { Courses } from './components/Courses';
import { Welcome } from './components/Welcome';

function App() {
  

  return (
    <>
    <Header />
    <Welcome />
    <Courses />
    <Profile />
    <Footer />
    </>
  )
}

export default App
