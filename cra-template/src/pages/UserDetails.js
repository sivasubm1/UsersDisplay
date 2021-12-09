import React from "react";
import { useParams } from "react-router-dom";
import GetRepository from "../components/userdetails/GetRepository";
import GetOrganization from "../components/userdetails/GetOrganization";
import GetFollowers from "../components/userdetails/GetFollowers";

const UserDetails = () => {
  const { userId } = useParams();
  return (
    <div className="container">
      <div className="row p-8 border border-warning border-5 ">
        <div className="col-md-7 text-center">
          <GetOrganization userId={userId} />

          <div className="row pt-2">
            <div className="col-md-7 text-center">
              <GetFollowers userId={userId} />
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <h4 style={{ color: "green" }}>Repository Details</h4>
          <br />
          <GetRepository userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
