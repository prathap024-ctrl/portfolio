"use client";

import ExperienceTimeline from "../compo/ExperienceTimeline";
import HeroSec from "../compo/HeroSec";
import Objective from "../compo/Objective";
import Skillsec from "../compo/Skillsec";
import ContactSec from "../compo/ContactSec";
import ProjectsPage from "./projects/page";

const MainLayout = () => {
  return (
    <>
      <div>
        <HeroSec />
        <Objective />
        <Skillsec />
        <ExperienceTimeline />
        <ProjectsPage />
        <ContactSec />
      </div>
    </>
  );
};

export default MainLayout;
