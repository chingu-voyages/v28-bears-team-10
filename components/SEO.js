import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ children, location, description, title, image }) {
  console.log(title);
  return (
    <Helmet titleTemplate={`%s - TECHVolunteer`}>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/tpic.png" />
      <link rel="alternate icon" href="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta name="description" />
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/portfolioPic.png"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        // content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      {children}
    </Helmet>
  );
}
