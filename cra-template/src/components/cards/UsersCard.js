import React, { useState } from "react";
import { Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const UsersCard = ({ user }) => {
  const { avatar_url, login } = user;

  return (
    <>
      <Card
        cover={
          <img
            src={avatar_url ? avatar_url : "No Image"}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/UserDetails/${login}`}>
            <EyeOutlined className="text-warning" /> View User Details
          </Link>,
        ]}
      >
        <Meta description={login} />
      </Card>
    </>
  );
};

export default UsersCard;
