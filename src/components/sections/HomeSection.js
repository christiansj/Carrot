import React from "react";
import Book from "./../../services/book";

const HomeSection = (
  <section id="FeatureSection">
    <h2>Featured books</h2>
    <div className="row">
      <Book />
      <Book />
      <Book />
    </div>
  </section>
);

export default HomeSection;
