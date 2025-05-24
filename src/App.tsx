import './App.css'
import Button from './components/Button'
import CenteredRectangle from './components/CenteredRectangle'

function App() {

  return (
    <>
      <CenteredRectangle>
        <h1>Giovanni Perez Colon</h1>
        <div className="linkContainer">
          <Button text="About Me"/>
          <Button text="Contact Info"/>
          <Button text="Projects"/>
        </div>
      </CenteredRectangle>
    </>
  )
}

export default App
