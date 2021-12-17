import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./layouts/header/Header";
import Sidebar from "./layouts/sidebar/Sidebar";
import HomePage from "./Pages/homePage/HomePage";
import LoginPage from "./Pages/loginPage/LoginPage";
// import { history } from "./history";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import "./_app.scss";
import { useSelector } from "react-redux";
import WatchScreen from "./Pages/watchPage/WatchScreen";
import SearchScreen from "./Pages/SearchScreen";
// import { FaCentercode } from "react-icons/fa";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  // console.log("access", accessToken, loading);

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginPage />
      </Route>
      <Route path="/search/:query">
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

// const Home = () => {
//   return (
//     <Layout>
//       <HomePage />
//     </Layout>
//   );
// };

// const Login = () => {
//   return <LoginPage />;
// };

// const Search = () => {
//   return (
//     <Layout>
//       <h1>Search Results</h1>
//     </Layout>
//   );
// };
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/auth" element={<Login />} />
//         <Route path="/search" element={<Search />} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

export default App;
