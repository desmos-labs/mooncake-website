const DefaultSEO = {
  title: {
    template: "%s | Mooncake",
    default: "Mooncake",
  },
  description: "Engage, Empower, Endorse",
  metadataBase: new URL("https://mooncake.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    url: "https://mooncake.app",
    title: "Mooncake",
    description:
      "Experience a censorship resistance platform where your engagement can turn into tangible rewards and your endorsement shapes credibility.",
    images: [
      {
        url: "https://mooncake.app/cover.png",
        width: 1500,
        height: 500,
        alt: "Mooncake cover picture",
        type: "image/png",
      },
    ],
    siteName: "Mooncake",
  },
  twitter: {
    creator: "@mooncakeapp",
    card: "summary_large_image",
    title: "Mooncake",
    description:
      "Experience a censorship resistance platform where your engagement can turn into tangible rewards and your endorsement shapes credibility.",
    images: ["https://mooncake.app/cover.png"],
  },
  keywords: ["Social", "Web3", "Desmos"],
};

export default DefaultSEO;
