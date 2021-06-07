import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./../layouts/Spinner";
import GithubContext from "./../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return users.length === 0 ? (
      <div className="margin-top-xtra container text-center">
        <h3>Type in the search bar to see the results</h3>
      </div>
    ) : (
      <div style={userStyles}>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

const userStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
