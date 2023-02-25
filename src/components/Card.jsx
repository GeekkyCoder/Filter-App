import {useMemo } from "react";

const Card = ({ users, filteredUsers, isLoading }) => {
  const cardJSX = useMemo(() => {
    return (
      <div>
        {!isLoading ? (
          <div className="users-container">
            {filteredUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <h3 className="user-name">{user.name}</h3>
                <p>{user.userName}</p>
                <p>{user.email}</p>
                <div>
                  <p>{user.address.street}</p>
                  <p>{user.address.city}</p>
                  <p>{user.address.suite}</p>
                  <p>{user.address.zipcode}</p>
                  <p>{user.address.geo.lat}</p>
                  <p>{user.address.geo.lng}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    );
  }, [users,filteredUsers]);

  return <>{cardJSX}</>;
};

export default Card;
