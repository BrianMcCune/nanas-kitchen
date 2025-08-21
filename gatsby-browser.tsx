import React from "react";
import Layout from "./src/pages/Layout";

export const wrapPageElement = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    // Load GA4 script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-MWFPKN7SKW";
    document.head.appendChild(script);

    // Initialize GA after script loads
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-MWFPKN7SKW");
    };
  }
};
