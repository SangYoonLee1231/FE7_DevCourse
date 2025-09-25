// import React from "react";
import styles from "./App.module.css";
import classnames from 'classnames';
import Article from "./components/Article";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import First from "./components/First";

function App() {
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello, React!")
  // );
  const isCancel = true;
  const cx = classnames.bind(styles); // styles 객체를 바인딩

  return (
    <>
      {/* JSX 주석 */}
      <Header />
      <Nav />
      <Article />
      <Section />
      <Aside />
      <Footer />
      <First />
      <h1
        // className={`${styles.title} ${isCancel ? styles.line_through : ""}`}
        className={cx("title", { line_through: isCancel })}
      ></h1>
    </>
  );
}

export default App;
