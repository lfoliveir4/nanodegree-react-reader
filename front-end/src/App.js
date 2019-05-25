import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllCategories from "./components/AllCategories";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";
import EditComment from "./components/EditComment";
import AddPost from "./components/AddPost";

import "./App";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addPost" component={AddPost} />>
        <Route exact path="/:category/" component={AllCategories} />
        <Route exact path="/editPost/:postId" component={EditPost} />
        <Route exact path="/editComment/:commentId" component={EditComment} />
        <Route exact path="/:category/:post_id" component={PostDetail} />
      </Switch>
    );
  }
}

export default App;
