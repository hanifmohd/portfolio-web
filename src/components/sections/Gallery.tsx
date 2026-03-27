import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryClient from "@/components/ui/GalleryClient";
import { getAllGalleryImages } from "@/lib/cloudinary";

export default async function Gallery() {
  const t = await getTranslations("Gallery");
  const images = await getAllGalleryImages();

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />
        <GalleryClient images={images} />
      </div>
    </section>
  );
}
