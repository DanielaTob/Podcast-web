import './App.css'
import bg from '../public/assets/bg.png'
import img1 from '../public/assets/img-earth.png'
import Header from './components/Header'

function App() {


  return (

    <div className="App bg-bluedark max-w-screen-2xl mx-auto min-h-screen">
      <Header />
      <div>
        <img className='img1' src={bg} />
        <img className='img2 px-4' src={img1} />
      </div>
    </div>
  )
}

export default App
