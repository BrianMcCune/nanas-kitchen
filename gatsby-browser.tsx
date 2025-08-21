import React from "react";
import Layout from "./src/pages/Layout";

export const wrapPageElement = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>;
};

// ✅ GA4 snippet goes here
export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    // Inject the GA4 script
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-MWFPKN7SKW";
    document.head.appendChild(gaScript);

    // Inline GA init script
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MWFPKN7SKW');
    `;
    document.head.appendChild(inlineScript);
  }
};
