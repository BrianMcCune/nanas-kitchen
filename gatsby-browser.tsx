import React from "react";
import Layout from "./src/pages/Layout"; // Make sure this is your correct Layout

// Wrap every page with Layout so navbar/footer appear
export const wrapPageElement = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>;
};
