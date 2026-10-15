
import { chromium } from "playwright";
import { preview } from "vite";
import fs from "node:fs/promises";
import path from "node:path";

const routes = [
  {
    path: "/",
    title: "Bhvesa | Digital Marketing Training",
    description:
      "Explore practical digital marketing training at Bhvesa. Learn SEO, Google Ads, Meta Ads, content creation, analytics and AI marketing."
  },
  {
    path: "/about",
    title: "About Us | Bhvesa",
    description:
      "Learn about Bhvesa, our Basics to Brilliance philosophy and our approach to practical digital marketing education."
  },
  {
    path: "/courses",
    title: "Digital Marketing Courses | Bhvesa",
    description:
      "Explore six core digital marketing courses covering SEO, PPC, social media, creative marketing, analytics and AI automation."
  },
  {
    path: "/batches",
    title: "Digital Marketing Batches | Bhvesa",
    description:
      "Explore weekend, evening and regular digital marketing batch options at Bhvesa."
  },
  {
    path: "/contact",
    title: "Contact Us | Bhvesa",
    description:
      "Contact Bhvesa to enquire about digital marketing courses, available batches and learning options."
  }
];

const distDir = path.resolve("dist");

let server;
let browser;

try {
  server = await preview({
    preview: {
      host: "127.0.0.1",
      port: 4179
    }
  });

  const address = server.httpServer.address();

  const baseUrl =
    `http://127.0.0.1:${address.port}`;

  browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`Pre-rendering ${route.path}`);

    await page.goto(
      `${baseUrl}${route.path}`,
      { waitUntil: "networkidle", timeout: 30000 }
    );

    // Wait for the React page content.
    await page.waitForSelector("main h1", {
      timeout: 15000
    });

    await page.evaluate(({ title, description }) => {
      document.title = title;

      let meta = document.querySelector(
        'meta[name="description"]'
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", description);
    }, route);

    const html = await page.content();

    const output = route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(
          distDir,
          route.path.slice(1),
          "index.html"
        );

    await fs.mkdir(path.dirname(output), {
      recursive: true
    });

    await fs.writeFile(output, html, "utf8");

    console.log(`Generated: ${output}`);
  }

  console.log("All Bhvesa pages pre-rendered.");
} finally {
  await browser?.close();
  await new Promise((resolve) => {
    if (server) {
      server.httpServer.close(resolve);
    } else {
      resolve();
    }
  });
}
