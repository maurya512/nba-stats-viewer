// ! import dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetRankingQuery } from "../../services/rankingApi";

const EasternConference = () => {
  const { data: rankingList, isFetching } = useGetRankingQuery();
  console.log(rankingList);
  return rankingList.map((team) => {
    return <>
    <Card>
      <p>Team: {team.name}</p>
      </Card>    
    </>;
  });
};

export default EasternConference;
