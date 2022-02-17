// * import dependencies
import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";

import { useGetScoreQuery } from "../../services/scoreApi";

const Homepage = () => {
  // const { data, isFetching } = useGetScoreQuery();

  // console.log(data);
  return (
    <>
      {/* Title Live Score section */}
      <Typography.Title
        level={2}
        className="heading"
        style={{ textAlign: "center" }}
      >
        Live Score
        {/* rows for cards */}
        <Row gutter={16}>
          {/* ! card displays scores from each game */}
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
          <Col span={8}>
            <Card title="Current Score" bordered={false}>
              <Statistic title="Team 1" value="5" />
              <Statistic title="Team 2" value="5" />
            </Card>
          </Col>
        </Row>
      </Typography.Title>
    </>
  );
};

export default Homepage;
