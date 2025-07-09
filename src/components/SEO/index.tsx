import React from "react";
import { seoConfig } from "@config/seo.config";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = seoConfig.title,
  description = seoConfig.description,
  image = seoConfig.image,
  url = seoConfig.url,
}) => {
  const siteTitle =
    title === seoConfig.title ? title : `${title} | ${seoConfig.title}`;

  React.useEffect(() => {
    // Update document title
    document.title = siteTitle;

    // Update meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "author", content: seoConfig.author },
      { name: "keywords", content: seoConfig.keywords.join(", ") },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:creator", content: seoConfig.twitterHandle },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attr = name ? "name" : "property";
      const key = name || property;
      let element = document.querySelector(`meta[${attr}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key!);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });
  }, [siteTitle, description, image, url]);

  return null;
};

export default SEO;
