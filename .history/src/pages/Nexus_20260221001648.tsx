import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Censored from '../components/sections/Censored';
import Epilogue from '../components/sections/Epilogue';

function Nexus() {
  return (
    <div className="nexus">
      <Hero />
      <About />
      <Censored />
      <Epilogue />
    </div>
  )
}

export default Nexus;