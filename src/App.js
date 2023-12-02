import { Route, Routes } from "react-router-dom";
import { Home, Login, Public, Personal, Album, WeekRank, ZingChart, Search, SearchAll, SearchSong, Singer, SearchAlbum } from './containers/public';
import path from './utils/path';
import { useEffect, useState } from "react";
import * as action from './store/actions'
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiGetChartHome } from "./apis";


function App() {
  const dispatch = useDispatch()
  const [weekChart, setWeekChart] = useState(null)
  useEffect(() => {
    dispatch(action.getHome())
    const fetchChartData = async () => {
      const res = await apiGetChartHome()
      if (res.data.err === 0) {
        setWeekChart(res.data.data.weekChart)
      }
    }
    fetchChartData()
  }, [dispatch])

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.ALBUM_TITLE_PID} element={<Album />} />
            <Route path={path.PLAYLIST_TITLE_PID} element={<Album />} />
            <Route path={path.WEEKRANK_TITLE_PID} element={<WeekRank weekChart={weekChart && Object.values(weekChart)} />} />
            <Route path={path.ZING_CHART} element={<ZingChart />} />
            <Route path={path.HOME_SINGER} element={<Singer />} />
            <Route path={path.HOME_ARTIST_SINGER} element={<Singer />} />
            <Route path={path.STAR} element={<Home />} />
            <Route path={path.SEARCH} element={<Search />}>
              <Route path={path.ALL} element={<SearchAll />} />
              <Route path={path.SONG} element={<SearchSong />} />
              <Route path={path.PLAYLIST_SEARCH} element={<SearchAlbum />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
