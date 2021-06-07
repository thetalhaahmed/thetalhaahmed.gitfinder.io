import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { html_url, login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        atl="Avatar Alterate"
        className="round-img"
        style={{
          width: 60,
        }}
      />

      <h3>{login}</h3>
      <div>
        <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
