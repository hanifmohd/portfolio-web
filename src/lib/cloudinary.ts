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

async function fetchFolder(folder: string): Promise<GalleryImage[]> {
  if (!CLOUD_NAME || !API_KEY || !API_SECRET) return [];

  const credentials = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
  const category = folder.split("/").pop() ?? folder;

  try {
    const all: GalleryImage[] = [];
    let nextCursor: string | null = null;

    do {
      const url = new URL(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`
      );
      url.searchParams.set("prefix", folder);
      url.searchParams.set("type", "upload");
      url.searchParams.set("max_results", "500");
      if (nextCursor) url.searchParams.set("next_cursor", nextCursor);

      const res = await fetch(url.toString(), {
        headers: { Authorization: `Basic ${credentials}` },
        cache: "no-store",
      });

      if (!res.ok) break;
      const data = await res.json();

      for (const r of data.resources ?? []) {
        all.push({
          id: r.public_id,
          thumbnailUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_500,q_auto,f_auto/${r.public_id}`,
          fullUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1400,q_auto,f_auto/${r.public_id}`,
          width: r.width,
          height: r.height,
          category,
        });
      }

      nextCursor = data.next_cursor ?? null;
    } while (nextCursor);

    return all;
  } catch {
    return [];
  }
}

const FOLDERS: Record<string, string> = {
  poster: "portfolio/poster",
  banner: "portfolio/banner",
  logo: "portfolio/logo",
  infografik: "portfolio/infografik",
};

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  const results = await Promise.all(
    Object.values(FOLDERS).map((folder) => fetchFolder(folder))
  );
  return results.flat();
}
