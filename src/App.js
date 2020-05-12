import React from 'react';
import classNames from 'classnames';
import './App.scss';

import RankPlanner from './rank';
import HonorCap from './honor';

function App() {
  const [mode, setMode] = React.useState("rank");
  return (
    <div className="App">
      <ul className="tabs">
        <li className={classNames({active: mode === "rank"})} onClick={() => setMode("rank")}>
          Rank Planner
        </li>
        <li className={classNames({active: mode === "honor"})} onClick={() => setMode("honor")}>
          Honor Cap
        </li>
      </ul>
      {mode === "rank" && <RankPlanner/>}
      {mode === "honor" && <HonorCap/>}
    </div>
  );
}

export default App;
