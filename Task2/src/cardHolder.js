import React from "react";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
        alt="Loading icon"
        className="load"
      />
      <h1 className="load-header">Loading...</h1>
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="user-col">
          {console.log(user)}
          <div className="user-profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <p>
              <b>ID:</b> {user.id}
            </p>
            <p className="name">
              <b>Name: </b>
              {user.first_name} {user.last_name}
            </p>

            <p className="email">
              <b>Email: </b>
              {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
