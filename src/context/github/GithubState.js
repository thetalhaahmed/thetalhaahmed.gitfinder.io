import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import * as types from "./../../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async (searchText) => {
    setLoading();
    await fetch(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.SEARCH_USERS,
          payload: data.items,
        });
      })
      .catch((err) => console.log(err));
  };

  //Get User

  const getUser = async (username) => {
    setLoading();
    await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.GET_USER,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  //Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.GET_REPOS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: types.CLEAR_USERS });

  //Set Loading
  const setLoading = () => dispatch({ type: types.SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
