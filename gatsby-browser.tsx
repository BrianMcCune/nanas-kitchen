import React from "react";
import Layout from "./src/pages/Layout"; // Make sure this points to your correct Layout

// Wrap all pages with Layout so navbar/footer appear
export const wrapPageElement = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>;
};

// GA4: run once on first client entry
export const onClientEntry = () => {
  console.log("onClientEntry running");

  // Inject GA4 script
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-MWFPKN7SKW";
  document.head.appendChild(script);

  // Initialize GA after script loads
  script.onload = () => {
    console.log("GA script loaded");
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-MWFPKN7SKW");
    console.log("GA initialized");
  };
};

// GA4: track SPA pageviews on internal navigation
export const onRouteUpdate = ({ location }: { location: Location }) => {
  if ((window as any).gtag) {
    (window as any).gtag("config", "G-MWFPKN7SKW", {
      page_path: location.pathname,
    });
    console.log("GA pageview sent for:", location.pathname);
  }
};
