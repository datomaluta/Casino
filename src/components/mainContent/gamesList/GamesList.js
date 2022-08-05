import classes from "./GamesList.module.css";
import GamesListItem from "../gamesListItem/GamesListItem";

const GamesList = (props) => {
  let games;

  games = props.gamesNames.map((item, id) => (
    <GamesListItem
      key={item.GameTemplateId}
      name={item.Value}
      imgSrc={props.gamesImgs[id].Url}
    />
  ));

  if (props.userSearching) {
    games = props.searchedGames.map((item, id) => (
      <GamesListItem
        key={item.GameTemplateId}
        name={item.Value}
        imgSrc={props.searchedImgs[id].Url}
      />
    ));
  }

  const loadmoreHandler = () => {
    props.loadmore(props.data, props.gamesNames.length + 60);
  };

  return (
    <>
      <div className={classes.container}>
        {games}
        {props.searchedGames.length === 0 && props.userSearching && (
          <p className={classes.notFound}>Not Found</p>
        )}
      </div>
      {!props.userSearching && (
        <button className={classes.loadmore} onClick={loadmoreHandler}>
          Load More...
        </button>
      )}
    </>
  );
};

export default GamesList;
