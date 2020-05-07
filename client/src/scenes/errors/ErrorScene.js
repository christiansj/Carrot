import React from "react";
import SiteHeader from "../../components/header/SiteHeader";
import { errorDescriptions, errorHeaders, errorIcons } from "./error-objects";


const ErrorSection = httpCode => (
  <section className="error-container" style={{ textAlign: 'center' }}>
    <h1 className="http-code">
      {httpCode}
    </h1>

    <h3 className="http-message">
      {errorHeaders[httpCode]}
      &nbsp;
      {errorIcons[httpCode]}
    </h3>
    <hr />
    <br />

    <h4>
      {errorDescriptions[httpCode]}
    </h4>

  </section>
);

const ErrorScene = (httpCode) => (
  <div className="App">
    <SiteHeader />
    {ErrorSection(httpCode)}
  </div>
);

export default ErrorScene;