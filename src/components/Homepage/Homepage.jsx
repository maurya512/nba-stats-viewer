// * import dependencies
import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card, Carousel } from "antd";
import { Link } from "react-router-dom";

import { useGetStatsQuery } from "../../services/scoreApi";
import { EasternConference, WesternConference } from "../../components";

const Homepage = () => {
  const { data, isFetching } = useGetStatsQuery();
  // const globalStats = data?.
  console.log(data);

  if (isFetching) return "Loading....";

  return (
    <>
      {/* Title Live Score section */}
      <Typography.Title
        level={2}
        className="heading"
        style={{ textAlign: "center" }}
      >
        Trending News
      </Typography.Title>
      {/* rows for cards */}
      <Row gutter={16}>
        {/* ! card displays scores from each game */}
        <Col span={8}>
          <Card title="Current Score" bordered={false}>
            {data.source}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Current Score" bordered={false}>
            <Statistic title="Team 1" value="5" />
            <Statistic title="Team 2" value="5" />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Current Score" bordered={false}>
            <Statistic title="Team 1" value="5" />
            <Statistic title="Team 2" value="5" />
          </Card>
        </Col>
      </Row>
      {/* Fetching data about each conference team and displaying it on the home page */}
      <div className="home-heading-container">
        <Typography.Title
          level={2}
          className="home-title"
          style={{ textAlign: "center" }}
        >
          Top 10 Eastern Conference Teams
        </Typography.Title>
        {/* link to remaining teams in the conference */}
        <Typography.Title
          level={3}
          className="show-more"
          style={{ textAlign: "center" }}
        >
          <Link to="/easternconference">Show More</Link>
        </Typography.Title>
      </div>
      {/* * passing in simplified props to limit displaying only top 10 teams in the eastern conference */}
      <EasternConference simplified />
      {/* fetching data about western conference team and displaying it on the home page */}
      <div className="home-heading-container">
        <Typography.Title
          level={2}
          className="home-title"
          style={{ textAlign: "center" }}
        >
          Top 10 Western Conference Teams
        </Typography.Title>
        {/* link to remaining teams in the conference */}
        <Typography.Title
          level={3}
          className="show-more"
          style={{ textAlign: "center" }}
        >
          <Link to="/westernconference">Show More</Link>
        </Typography.Title>
      </div>
      {/* * passing in simplified props to limit displaying only top 10 teams in the western conference */}
      <WesternConference simplified />
    </>
  );
};

export default Homepage;
