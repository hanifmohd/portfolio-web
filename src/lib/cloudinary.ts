export interface GalleryImage {
  id: string;
  thumbnailUrl: string;
  fullUrl: string;
  width: number;
  height: number;
  category: string;
}

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!;
const API_KEY = process.env.CLOUDINARY_API_KEY!;
const API_SECRET = process.env.CLOUDINARY_API_SECRET!;

function addTransform(secureUrl: string, transform: string): string {
  return secureUrl.replace("/upload/", `/upload/${transform}/`);
}

async function searchByFolder(folder: string): Promise<GalleryImage[]> {
  if (!CLOUD_NAME || !API_KEY || !API_SECRET) return [];

  const credentials = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
  const category = folder.split("/").pop() ?? folder;
  const all: GalleryImage[] = [];
  let nextCursor: string | null = null;

  try {
    do {
      const body: Record<string, unknown> = {
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
          cache: "no-store",
        }
      );

      if (!res.ok) break;
      const data = await res.json();

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
  } catch {
    return [];
  }

  return all;
}

const FOLDERS: Record<string, string> = {
  poster: "portfolio/poster",
  banner: "portfolio/banner",
  logo: "portfolio/logo",
  infografik: "portfolio/infografik",
};

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  const results = await Promise.all(
    Object.values(FOLDERS).map((folder) => searchByFolder(folder))
  );
  return results.flat();
}
