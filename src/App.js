import { Route, Routes } from "react-router-dom"
import AllMeetupsPage from "./pages/AllMeetups"
import FavoritesPage from "./pages/Favorites"
import NewMeetupPage from "./pages/NewMeetup"

function App(){
  return (
  <div>
    <Routes>
      <Route path='/'>
        <AllMeetupsPage />
      </Route>
      <Route path="new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="favorites">
        <FavoritesPage />
      </Route>
    </Routes>
    
  </div>
  )
}

export default App