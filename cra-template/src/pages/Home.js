import React, { useEffect, useState } from "react";
import JumboTron from "../components/cards/JumboTron";
import { getUsers } from "../functions/users";
import UsersCard from "../components/cards/UsersCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllUsers();
  }, []);

  const loadAllUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setLoading(false);
      console.log("Hi", res.data);
      setUsers(res.data);
    } catch {
      console.log("Error while fetching Users");
    }
  };

  return (
    <div className="container-fluid">
      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <JumboTron text={["List of Users", "View their Followers"]} />
      </div>

      <div className="col">
        {loading ? (
          <h4 className="text-danger">Loading...</h4>
        ) : (
          <h4>All Users</h4>
        )}
        <div className="row">
          {users.map((user) => {
            return (
              <div className="col-md-4 pb-3" key={user.id}>
                <UsersCard user={user} data-testid="test-axios-content" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
