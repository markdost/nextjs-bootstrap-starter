import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Logo from "./Logo";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Active class
  const router = useRouter();
  return (
    <Navbar
      expand="lg"
      variant="light"
      className={navBackground ? "sticky-nav" : "bg-white"}
    >
      <Container>
        <Link href="/">
          <a aria-label="Next.js Bootstrap Starter">
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <a
                className={
                  router.pathname == "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </Link>
            <Link href="#!">
              <a
                className={
                  router.pathname == "/blog" ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </a>
            </Link>
            <Link href="#!">
              <a
                className={
                  router.pathname == "/pricing" ? "nav-link active" : "nav-link"
                }
              >
                Pricing
              </a>
            </Link>
            <Link href="#!">
              <a
                className={
                  router.pathname == "/faq" ? "nav-link active" : "nav-link"
                }
              >
                FAQ
              </a>
            </Link>
            <Link href="#!">
              <a
                className={
                  router.pathname == "/about" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </Link>
          </Nav>
          <Link href="#!" className="nav-link">
            <a className="btn btn-primary px-4 ms-lg-3">Contact</a>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
