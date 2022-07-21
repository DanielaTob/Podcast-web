import Header from './components/Header'
import Banner from './components/Banner'
import Episodes from './components/Episodes'
import Ours from './components/Ours'
import Slider from './components/Slider'
import Footer from './components/Footer'


function App() {


  return (

    <div className="App font-capriola bg-bluedark max-w-screen-2xl mx-auto">
      <Header />
      <Banner />
      <Episodes />
      <Ours />

      <Slider/>

      <Footer />
      
    </div>
  )
}

export default App
