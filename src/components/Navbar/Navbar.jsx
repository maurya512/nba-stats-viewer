// * importing react dependencies
import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

// * importing necessary icons
import {
  HomeOutlined,
  BulbOutlined,
  DribbbleOutlined,
  DribbbleCircleFilled,
} from "@ant-design/icons";

// * import images for logo and avatar
import icon from "../../images/nbasvg.png";

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
      {/* * menu items */}
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<DribbbleOutlined />}>
          <Link to="/easternconference">Eastern Conference</Link>
        </Menu.Item>
        <Menu.Item icon={<DribbbleCircleFilled />}>
          <Link to="/westernconference">Western Conference</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
