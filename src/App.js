import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Middle from './Components/Middle';
import Footer from './Components/Footer';

function App() {

  const creations = [
    { imgMobile: 'mobile/image-deep-earth.jpg',
      imageDesktop: 'desktop/image-deep-earth.jpg',
      title:'DEEP EARTH'
    },

    { imgMobile: 'mobile/image-night-arcade.jpg',
      imageDesktop: 'desktop/image-night-arcade.jpg',
      title: 'NIGHT ARCADE'
    },

    { imgMobile: 'mobile/image-soccer-team.jpg',
      imageDesktop: 'desktop/image-soccer-team.jpg',
      title: 'SOCCER TEAM'
    },

    { imgMobile: 'mobile/image-grid.jpg',
      imageDesktop: 'desktop/image-grid.jpg',
      title: 'THE GRID'
    },

    { imgMobile: 'mobile/image-from-above.jpg',
      imageDesktop: 'desktop/image-from-above.jpg',
      title: 'FROM UP ABOVE VR'
    },
    { imgMobile: 'mobile/image-pocket-borealis.jpg',
      imageDesktop: 'desktop/image-pocket-borealis.jpg',
      title: 'POCKET BOREALIS'
    },

    { imgMobile: 'mobile/image-curiosity.jpg',
      imageDesktop: 'desktop/image-curiosity.jpg',
      title: 'THE CURIOSITY'
    },

    { imgMobile: 'mobile/image-fisheye.jpg',
      imageDesktop: 'desktop/image-fisheye.jpg',
      title: 'MAKE IT FISHEYE'
    }
  ]
  return (
    <div className=" ">
      <Hero />
      <Middle creations={creations} />
      <Footer />
    </div>
  );
}

export default App;
