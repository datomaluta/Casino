import Header from "./components/header/Header";
import UpBanners from "./components/mainContent/upperBanner/UpBanners";
import "./App.css";
import Category from "./components/mainContent/filterAndSearch/Category";
import Gametypes from "./components/mainContent/gameTypes/GameTypes";
import { useEffect, useState } from "react";
import GamesList from "./components/mainContent/gamesList/GamesList";
// import { Redirect, Route } from "react-router-dom";

function App() {
  const [data, setdata] = useState([]);
  const [allGamesCount, setAllGamesCount] = useState();
  const [gamesNames, setGamesNames] = useState([]);
  const [gamesImgs, setGamesImgs] = useState([]);
  const [searchedNames, setSearchedNames] = useState([]);
  const [searchedImgs, setSearchedImgs] = useState([]);
  const [userSearching, setUserSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://mystake.com/api/game/getgametemplates_dev/1/1/1 "
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responsedata = await response.json();

    setdata(responsedata);
    setAllGamesCount(responsedata.GameTemplates.length);
  };

  const display = (data, count) => {
    if (data.length === 0) {
      return;
    }

    const sixtyGames = data.GameTemplates.filter((_, id) => id < count).sort(
      (a, b) => {
        return a.DefaultOrdering - b.DefaultOrdering;
      }
    );

    const sixtyGamesIds = sixtyGames.map((item) => item.ID);
    const sixtyGamesNames = data.GameTemplateNameTranslations.filter((item) =>
      sixtyGamesIds.includes(item.GameTemplateId)
    );
    const sixtyGamesImgs = data.GameTemplateImages.filter(
      (item) =>
        sixtyGamesIds.includes(item.GameTemplateId) &&
        item.GameTemplateImageGroupId === 1
    );

    setGamesNames(sixtyGamesNames);
    setGamesImgs(sixtyGamesImgs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData().catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  // display  first 60 games
  useEffect(() => {
    display(data, 60);
  }, [data]);

  const searchHandler = (enteredValue) => {
    setUserSearching(true);

    if (enteredValue.length === 0) {
      setUserSearching(false);
    }

    const searchedNames = gamesNames.filter((item) =>
      item.Value.includes(enteredValue)
    );

    const searchedNamesIds = searchedNames.map((item) => item.GameTemplateId);
    const searchImgs = gamesImgs.filter((item) =>
      searchedNamesIds.includes(item.GameTemplateId)
    );

    setSearchedNames(searchedNames);
    setSearchedImgs(searchImgs);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <UpBanners />
        <Category gamesCount={allGamesCount} onSearch={searchHandler} />
        <Gametypes />
        {error && !isLoading && <p className="message">{error}</p>}
        {isLoading && <p className="message">Loading...</p>}
        {!isLoading && !error && (
          <GamesList
            userSearching={userSearching}
            searchedGames={searchedNames}
            searchedImgs={searchedImgs}
            gamesNames={gamesNames}
            gamesImgs={gamesImgs}
            loadmore={display}
            data={data}
          />
        )}
      </div>

      {/* 

      just for example If the site were complete :D

      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path='/inplay'>
        <InplayPage/>
      </Route>
      <Route path='/sport'>
        <SportPage/>
      </Route>
      <Route path='/casino'>
        <CasinoPage/>
      </Route>
      <Route path='/liveCasino'>
        <LiveCasinoPage/>
      </Route>
      <Route path='/virtualsport'>
        <VirtualSportsPage/>
      </Route> */}
    </div>
  );
}

export default App;
