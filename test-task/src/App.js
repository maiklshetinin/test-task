import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { DesctopBalls } from './components/DesctopBalls/DesctopBalls';
import { MobileBalls } from './components/MobileBalls/MobileBalls';

function App() {
  return (
    <div className="wrapper">
      <DesctopBalls />
      <MobileBalls />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
