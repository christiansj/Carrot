import React from "react";
import SiteHeader from "./../../components/header/SiteHeader";
import { errorDescriptions, errorHeaders, errorIcons } from "./error-objects";
const ErrorSection = (httpCode) => (
  <section className="error-container" style={{ textAlign: 'center' }}>
    {httpCodeNumber(httpCode)}
    {errorHeading(httpCode)}
    <hr /><br/>
    {errorDescription(httpCode)}
    
  </section>
)
const httpCodeNumber = httpCode => (
  <h1 className="http-code">
    {httpCode}
  </h1>
)
const errorHeading = httpCode => (
  <h3 className="http-message">
    {errorHeaders[httpCode]}
    &nbsp;
    {errorIcons[httpCode]}
  </h3>
);
const errorDescription = httpCode => (
  <h4>
    {errorDescriptions[httpCode]}
  </h4>
)
const ErrorScene = (httpCode) => (
  <div className="App">
    <SiteHeader />
    {ErrorSection(httpCode)}
  </div>
)

export default ErrorScene;