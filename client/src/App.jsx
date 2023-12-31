import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./styles/index.css";
import React, { Fragment } from "react";
import NotFound from "./pages/404";
import store from "./store/index";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Provider>
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
