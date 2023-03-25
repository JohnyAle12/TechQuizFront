import { NavBar } from './components/NavBar'
import { Users } from './components/Users'

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <NavBar />
        </div>
        <div className="col-12">
          <h3 className='mt-4 mb-4'>Listado de usuarios</h3>
          <div className="row">
            <Users />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
