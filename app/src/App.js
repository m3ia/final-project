import * as React from "react";
import { Fragment, useState, useEffect } from "react";

import ListItems from "./ListItems";
import ViewAllLists from "./ViewAllLists";
import logo from "./got-it-logo1.png";
// import * as apiClient from "./apiClient";

const App = () => {
  const [page, setPage] = useState("home");
  const [selectedListId, setSelectedListId] = useState(null);
  const back = () => {
    setPage("home");
    setSelectedListId(null);
  };

  return (
    <Fragment>
      <div className="jumbotron">
        <div className="logo">
          <img src={logo} className="logo" alt="Got It Logo" width="75%" />
        </div>
        <div className="description">
          <p>
            Got It! is the recurring to-do list for anyone who loves to prep and
            plan on the daily, weekly, or monthly basis! With shareable lists,
            Got It was made with families, friends, and collectives in mind.
          </p>
        </div>
      </div>
      <div className="container">
        {page === "home" && (
          <ViewAllLists
            selectList={(list) => {
              setPage("listItems");
              setSelectedListId(list.id);
            }}
          />
        )}
        {page === "listItems" && (
          <ListItems listId={selectedListId} back={back} />
        )}
      </div>
    </Fragment>
  );
};

export default App;
