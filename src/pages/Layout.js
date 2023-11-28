import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <>
      <Row className="navbar">
        <Col>
          <NavigationBar />
        </Col>
      </Row>
      <Row>
        <Outlet />
      </Row>
      <Row className="footer"></Row>
    </>
  );
};

export default Layout;
