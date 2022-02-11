import Link from "next/link";
import Image from "next/image";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "./Icons";

const Footer = () => {
  return (
    <footer className="space-2">
      <Container>
        <Row>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col md={2} key={idx}>
              <h2 className="h5">Section</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#!">
                    <a className="nav-link p-0 text-muted">Home</a>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#!">
                    <a className="nav-link p-0 text-muted">Blog</a>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#!">
                    <a className="nav-link p-0 text-muted">Pricing</a>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#!">
                    <a className="nav-link p-0 text-muted">FAQ</a>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#!">
                    <a className="nav-link p-0 text-muted">About</a>
                  </Link>
                </li>
              </ul>
            </Col>
          ))}
          <Col md={4} className="ms-auto">
            <Form>
              <h2 className="h5">Subscribe to our newsletter</h2>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <Form.Label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </Form.Label>
                <Form.Control
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <Button className="btn btn-primary" type="button">
                  Subscribe
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#" aria-label="Twitter">
                <Twitter />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#" aria-label="Instagram">
                <Instagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#" aria-label="Facebook">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
