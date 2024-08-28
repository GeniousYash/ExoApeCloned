import LocomotiveScroll from 'locomotive-scroll';
import Landing from "./Componants/Landing"
import Navbar from "./Componants/Navbar"
import PlayReel from "./Componants/PlayReel"
import Work from "./Componants/Work"
import Images from "./Componants/Images"
import Spread from "./Componants/Spread"
import Footer from "./Componants/Footer"



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full'>
      <Navbar/>
      <Landing/>
      <Work/>
      <PlayReel/>
      <Images />
      <Spread />
      <Footer />
    </div>
  )
}

export default App
