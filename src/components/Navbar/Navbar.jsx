// * importing react dependencies
import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

// * importing necessary icons
import {
  HomeOutlined,
  BulbOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";

// * import images for logo and avatar
import icon from "../../images/nba.jpg";

const Navbar = () => {
  return (
    <div className="nav-container">
      {/* * logo of the home page */}
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Nba Stats Viewer</Link>
        </Typography.Title>
      </div>
    </div>
  );
};

export default Navbar;
