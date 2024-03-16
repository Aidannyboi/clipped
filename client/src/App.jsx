import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import GameForm from './views/gameForm'
import GetGames from './components/getGames'
import GetOneGame from './components/getOneGame'
import GameUpdate from './views/gameUpdate'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/games/create' element={<GameForm/>}></Route>
          <Route path='/games' element={<GetGames/>}></Route>
          <Route path='/game/:id/details' element={<GetOneGame/>}></Route>
          <Route path='/game/:id/update' element={<GameUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
