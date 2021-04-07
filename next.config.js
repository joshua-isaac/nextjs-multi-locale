module.exports = {
  // Here we configure and set up the Agility CDN domain config so we can take advantage of the next/image component
  // Read more about next/image here: https://nextjs.org/docs/api-reference/next/image
  images: {
    domains: [
      `cdn.aglty.io`,
      `cdn-dev.aglty.io`,
      `${process.env.AGILITY_GUID}-cdn.agilitycms.cloud`,
    ],
  },
  // Here we configure and set up Next.js' built-in support for internationalized routing
  // Read more about i18n here: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    // These are all the locales you want to support in your application
    locales: ["en-us", "fr-ca"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-us",
  },
  future: {
    webpack5: true,
  },
};
