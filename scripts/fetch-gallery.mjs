import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Load .env.local for local development (Netlify sets env vars directly)
try {
  const envContent = readFileSync(".env.local", "utf-8");
  for (const line of envContent.split("\n")) {
    const eqIdx = line.indexOf("=");
    if (eqIdx > 0) {
      const key = line.slice(0, eqIdx).trim();
      const val = line.slice(eqIdx + 1).trim();
      if (key && !process.env[key]) process.env[key] = val;
    }
  }
} catch {
  // .env.local not found — using environment variables directly (Netlify)
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

const FOLDERS = {
  poster: "portfolio/poster",
  banner: "portfolio/banner",
  logo: "portfolio/logo",
  infografik: "portfolio/infografik",
};

function addTransform(secureUrl, transform) {
  return secureUrl.replace("/upload/", `/upload/${transform}/`);
}

async function searchByFolder(folder, category) {
  const credentials = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
  const all = [];
  let nextCursor = null;

  do {
    const body = {
      expression: `asset_folder="${folder}"`,
      max_results: 500,
    };
    if (nextCursor) body.next_cursor = nextCursor;

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      console.error(`[Gallery] Failed to fetch ${folder}: ${res.status}`);
      break;
    }

    const data = await res.json();
    console.log(`[Gallery] ${folder}: found ${data.total_count ?? 0} images`);

    for (const r of data.resources ?? []) {
      all.push({
        id: r.asset_id,
        thumbnailUrl: addTransform(r.secure_url, "w_500,q_auto,f_auto"),
        fullUrl: addTransform(r.secure_url, "w_1400,q_auto,f_auto"),
        width: r.width,
        height: r.height,
        category,
      });
    }

    nextCursor = data.next_cursor ?? null;
  } while (nextCursor);

  return all;
}

async function main() {
  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    console.warn("[Gallery] Cloudinary credentials missing — writing empty gallery.");
    const outPath = join(__dirname, "../src/data/gallery-images.json");
    writeFileSync(outPath, JSON.stringify([]));
    return;
  }

  console.log("[Gallery] Fetching images from Cloudinary...");

  const results = await Promise.all(
    Object.entries(FOLDERS).map(([category, folder]) =>
      searchByFolder(folder, category)
    )
  );

  const images = results.flat();
  console.log(`[Gallery] Total: ${images.length} images`);

  const outPath = join(__dirname, "../src/data/gallery-images.json");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(images, null, 2));
  console.log(`[Gallery] Written to ${outPath}`);
}

main().catch((err) => {
  console.error("[Gallery] Error:", err);
  process.exit(1);
});
