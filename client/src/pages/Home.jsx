import React from "react";
import { Hero } from "../components/Hero";
import { Benefits } from "../components/Benefits";
import { Quote } from "../components/Quote";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Quote />
      <Features />
      <Footer />
    </>
  );
};
