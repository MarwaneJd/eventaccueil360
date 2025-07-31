import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Produits from './components/Produits'
import APropos from './components/APropos'
import NosRealisations from './components/NosRealisations'
import Tarif from './components/Tarif'
import Localisation from './components/Localisation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Produits />
      <APropos />
      <NosRealisations />
      <Tarif />
      <Localisation />
      <Footer />
    </div>
  )
}

export default App
