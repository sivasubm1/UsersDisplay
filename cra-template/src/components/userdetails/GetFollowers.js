import React, { useEffect, useState } from "react";
import { getFollowers } from "../../functions/users";
import { Card } from "antd";

const { Meta } = Card;

const GetFollowers = ({ userId }) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllFollowers();
  }, []);

  const loadAllFollowers = async () => {
    try {
      setLoading(true);
      const follow = await getFollowers(userId);
      setFollowers(follow.data);
      console.log("follow", follow.data);
      setLoading(false);
    } catch {
      console.log("Error while fetching followers");
    }
  };

  const noFollowers = () => {
    {
      return (
        <div className="pt-4 text-danger">
          <h4>No Followers Found</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <h4 style={{ color: "green" }}>Total Followers: {followers.length}</h4>
      <div className="col">
        <div className="row">
          {followers && followers.length
            ? followers.slice(0, 5).map((val) => {
                return (
                  <div key={val.id}>
                    <Card
                      cover={
                        <img
                          src={val.avatar_url ? val.avatar_url : "No Image"}
                          style={{ height: "100px", objectFit: "cover" }}
                          className="p-1"
                        />
                      }
                    >
                      <Meta description={val.login} />
                    </Card>
                  </div>
                );
              })
            : () => noFollowers()}
        </div>
      </div>
    </div>
  );
};

export default GetFollowers;
