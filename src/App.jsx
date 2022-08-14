import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {

  const newData = data.map(item => {
    return <Card 
      key = {item.id}
      item = {item}
    />
  })

  return (
    <div className="app">
      {/* <h1>Hello World</h1> */}
      <Navbar />
      {newData}
    </div>
  )
}

export default App
