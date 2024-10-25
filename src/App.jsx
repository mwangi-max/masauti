import sound from './assets/sauuti.mp3';
function App() {
  

  return (
    <>
      <audio controls>
        <source src={sound} type="audio/mpeg"/>
        
        </audio>  
    </>
  )
}

export default App
