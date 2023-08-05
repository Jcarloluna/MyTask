import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./styles/index.scss";
import React, { Fragment } from "react";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <Header />
        <Hero />
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
