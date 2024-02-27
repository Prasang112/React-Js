import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Slider from './component/Slider/Slider';
import About from './component/about/about';
import Service from './component/Service/service';
import Client from './component/client/client';
import Contact from './component/contact/contact';
import Team from './component/team/team';
import Info from './component/Info/Info';
import Footer from './component/footer/footer';


function App() {
  return <>

    <Header />
    <Slider />
    <About />
    <Service />
    <Client />
    <Contact />
    <Team />
    <Info />
    <Footer />
  </>

}

export default App;
