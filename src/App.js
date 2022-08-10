import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import AbsoluteFooter from './components/AbsoluteFooter';
import Content from './components/Content';
import Frame from './components/Frame';

function App() {
  
  return <>
    <div className=" font-inter bg-sky-bg w-full h-auto">
      <Header />
      <Banner />
      <Content />
      <Frame />
      <Footer />
      <AbsoluteFooter />
    </div>
  </>
}

export default App;
