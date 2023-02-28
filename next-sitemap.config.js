/** @types {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://electrodemo.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/admin",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [`https://electrodemo.com/sitemap-index.xml`],
  },
  exclude: ["/admin", "/admin/*"],
};
