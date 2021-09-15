import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
