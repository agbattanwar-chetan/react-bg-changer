import './App.css'

function App() {

  const bgColors = ['red', 'blue', 'green', 'yellow', 'purple']
  const handleBgChanger = (event) => {
    document.body.style.backgroundColor = event.target.textContent
    console.log(event.target.textContent);
  }

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      padding: '16px',
      background: 'rgba(255,255,255,0.8)'
    }}>
      {bgColors.map((color) => (
        <button key={color} style={{ color: color }} onClick={handleBgChanger}>{color}</button>
      ))}
    </div>
  )
}

export default App
