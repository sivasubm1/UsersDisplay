import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tabs } from "antd";
import { getOrganization } from "../../functions/users";

const { TabPane } = Tabs;

const GetOrganization = ({ userId }) => {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllOrganization();
  }, []);

  const loadAllOrganization = async () => {
    try {
      setLoading(true);
      const orgsDetails = await getOrganization(userId);
      setOrgs(orgsDetails.data);
      setLoading(false);
    } catch {
      console.log("Error while fetching repositories");
    }
  };

  const noOrganization = () => {
    {
      return (
        <div className="pt-4 text-danger">
          <h4>No Organization Found</h4>
        </div>
      );
    }
  };

  return (
    <div className="col-md-7">
      {orgs.length > 0 ? (
        <Carousel showArrows={true} className="pt-2" autoPlay infiniteLoop>
          {orgs.map((org) => {
            return (
              <div key={org.id}>
                {org.avatar_url && (
                  <img src={org.avatar_url ? org.avatar_url : "No Image"} />
                )}
                <Tabs type="card">
                  <TabPane
                    tab={org.description && org.description}
                    key="1"
                  ></TabPane>
                </Tabs>
              </div>
            );
          })}
        </Carousel>
      ) : (
        noOrganization()
      )}
    </div>
  );
};

export default GetOrganization;
