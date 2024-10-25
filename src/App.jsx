import sound from './assets/sauuti.mp3';
import './index.css';
function App() {
  

  return (
    <>
    <article className='mid'>
      <div className ='space'>
      <h2>KELVIN KAMAU</h2>
      <p>In this instance we are deploying an audio file on a React + VITE website...</p>
      <p>And it has worked ...</p>

    <audio controls>
        <source src={sound} type="audio/mpeg"/>
        
        </audio>
        </div>
    </article>
        
    </>
  )
}

export default App
