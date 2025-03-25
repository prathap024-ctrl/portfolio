"use client";
import ContactForm from "../compo/Contactform";
import ExperienceTimeline from "../compo/ExperienceTimeline";
import HeroSec from "../compo/HeroSec";
import LearningSkills from "../compo/LearningSkills";
import Objective from "../compo/Objective";
import OtherSkills from "../compo/OtherSkills";
import ProjectSec from "../compo/ProjectSec";
import Skillsec from "../compo/Skillsec";

const MainLayout = () => {
  return (
    <>
      <div>
        <HeroSec />
        <Objective />
        <Skillsec />
        <LearningSkills />
        <OtherSkills />
        <ExperienceTimeline />
        <ProjectSec />
        <ContactForm />
      </div>
    </>
  );
};

export default MainLayout;
