import { Route, Routes } from "react-router-dom";
import { Home, Login, Public, Personal, Album } from './containers/public';
import path from './utils/path';
import { useEffect } from "react";
import * as action from './store/actions'
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action.getHome())
  }, [dispatch])

  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />
          <Route path={path.ALBUM_TITLE_PID} element={<Album />} />
          <Route path={path.PLAYLIST_TITLE_PID} element={<Album />} />
          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
