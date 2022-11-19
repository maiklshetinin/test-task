import './App.css';
import { Header } from './components/Header/Header';
import { Ball } from './components/Ball/Ball';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">

      <div className='desktop'>
        <Ball width='311px' left='-102px' top='256px' className='red_light' />
        <Ball width='259px' left='602px' top='-154px' className='purpule_light' />
        <Ball width='83px' left='519px' top='83px' className='red_ball' />
        <Ball width='28px' left='851px' top='547px' className='red_ball' />
        <Ball width='60px' left='868px' top='-2px' className='purple_ball' />
      </div>
      <div className="mobile">
        <Ball width='259px' left='258px' top='162px' className='purpule_light' />
        <Ball width='211px' left='-55px' top='296px' className='red_light' />
        <Ball width='200px' left='-66px' top='574px' className='yellow_light' />
        <Ball width='43px' left='29px' top='457px' className='red_ball' />
        <Ball width='40px' left='296px' top='291px' className='purple_ball' />
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
