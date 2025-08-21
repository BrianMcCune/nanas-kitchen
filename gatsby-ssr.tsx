import React from "react";
import Layout from "./src/pages/Layout";

export const wrapPageElement = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }: any) => {
  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
    <script
      key="ga4"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-MWFPKN7SKW"
    />,
    <script
      key="ga4-inline"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MWFPKN7SKW');
        `,
      }}
    />,
  ]);
};
