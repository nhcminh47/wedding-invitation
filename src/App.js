import './App.css';
import cover from './assets/images/cover_img.JPG';
import flower from './assets/images/icon_rose.png'
import flower2 from './assets/images/flower2.png'

import Cover from './components/Cover';
import Story from './components/Story';
import InvitationCard from './components/InvitationCard';
import Events from './components/Events';
import ThankYou from './components/ThankYou';
function App() {

  return (
    <div className='wrapper'>
      <div className='container'>
        <Cover cover={cover} flower={flower} />
        <div className='dv__img'>
          <img src={flower} alt="" />
        </div>
        <Story flower={flower} />
        <div className='dv__img'>
          <img src={flower} alt="" />
        </div>
        <InvitationCard flower={flower} flower2={flower2} />
        <div className='dv__img'>
          <img src={flower} alt="" />
        </div>
        <Events flower={flower} flower2={flower2} />
        <div className='dv__img'>
          <img src={flower} alt="" />
        </div>
        <ThankYou flower={flower} flower2={flower2} />
      </div>
    </div>
  );
}

export default App;
