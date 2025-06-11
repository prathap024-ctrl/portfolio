"use client";

import ExperienceTimeline from "../compo/ExperienceTimeline";
import HeroSec from "../compo/HeroSec";
import Objective from "../compo/Objective";
import ProjectSec from "../compo/ProjectSec";
import Skillsec from "../compo/Skillsec";
import ContactSec from "../compo/ContactSec";

const MainLayout = () => {
  return (
    <>
      <div>
        <HeroSec />
        <Objective />
        <Skillsec />
        <ExperienceTimeline />
        <ProjectSec />
        <ContactSec />
      </div>
    </>
  );
};

export default MainLayout;
