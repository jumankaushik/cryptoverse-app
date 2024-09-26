import React from "react";
import { Row, Typography, Col } from "antd";

import BgImage from "../images/full-stack.png";

// Exchanges (Commin Soon)
const Exchanges = () => {
  return (
    <Col gutter={[32, 32]} className="exchanges-card-container">
      <img src={BgImage} alt="Coming Soon" className="exchanges-image" loading="lazy" />
      <Typography.Title level={2} className="exchanges-heading">
        Coming Soon
      </Typography.Title>
    </Col>
  );
};

export default Exchanges;