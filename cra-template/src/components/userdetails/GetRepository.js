import React, { useEffect, useState } from "react";
import { getRepositories } from "../../functions/users";

const GetRepository = ({ userId }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllRepositories();
  }, []);

  const loadAllRepositories = async () => {
    try {
      setLoading(true);
      const repos = await getRepositories(userId);
      setRepositories(repos.data);
      setLoading(false);
    } catch {
      console.log("Error while fetching repositories");
    }
  };

  const noRepository = () => {
    {
      return (
        <div className="pt-4 text-danger">
          <h4>No Repositories Found</h4>
        </div>
      );
    }
  };

  return (
    <div>
      {repositories.length > 0
        ? repositories.map((repo) => {
            return (
              <div key={repo.id}>
                <br /> <label key={repo.id}>{repo.full_name}</label>
              </div>
            );
          })
        : noRepository()}
    </div>
  );
};

export default GetRepository;
