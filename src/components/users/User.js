import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "./../layouts/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "./../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    //eslint-disable-nextline
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  const { repos, loading } = githubContext;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable : {"  "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            atl="Avatar Alterate"
            className="round-img"
            style={{
              width: 150,
            }}
          />
          <h1>{name}</h1>
          {location && <p>Location: {location}</p>}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-success">Followers: {followers}</div>
        <div className="badge badge-light">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-light">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
