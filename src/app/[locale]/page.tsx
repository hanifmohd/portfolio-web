import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Awards />
      <Works />
      <Contact />
    </>
  );
}
