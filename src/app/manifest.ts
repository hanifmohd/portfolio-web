import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohd Hanif Mohamad",
    short_name: "Hanif",
    description:
      "Administrative Officer / Special Officer at Universiti Pendidikan Sultan Idris (UPSI).",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/android-chrome.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
