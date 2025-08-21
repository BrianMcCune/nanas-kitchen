/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nana's Kitchen`,
    description: `New Braunfels' favorite food truck serving up hot, handmade breakfast tacos, fresh coffee, and local flavor daily.`,
    author: `Nana's Kitchen | New Braunfels Breakfast Tacos`,
    siteUrl: `https://your-actual-domain.com`, // replace with your live domain
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nana's Kitchen`,
        short_name: `Nana`,
        start_url: `/`,
        background_color: `#fff8e1`,
        display: `minimal-ui`,
        icon: `src/images/nanas-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-MWFPKN7SKW"], // Your GA4 Measurement ID
        pluginConfig: {
          head: true, // injects in <head>
        },
      },
    },
  ],
};
