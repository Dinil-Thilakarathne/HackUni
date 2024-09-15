import { GetServerSideProps } from "next";
import { format } from "date-fns";

const Sitemap = () => {
  // This page does not need to render anything
  return null;
};

const generateSiteMap = () => {
  const baseUrl = "http://localhost:3000/"; // Replace with your actual domain

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>
  `;
};

// Write the sitemap.xml file as response
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
