import ProjectHero from "@/components/ProjectHero";
import ProjectGrid from "@/components/ProjectGrid";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CallToAction";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectHero />
      <ProjectGrid />
      <CallToAction />
      {/* <CaseStudies /> */}
    </main>
  );
}
