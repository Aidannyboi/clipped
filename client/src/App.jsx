import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import GameForm from './views/gameForm'
import GetGames from './components/getGames'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/games/create' element={<GameForm/>}></Route>
          <Route path='/games' element={<GetGames/>}></Route>
          <Route path='/game/:id/details'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
