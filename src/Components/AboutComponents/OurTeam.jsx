import React from "react";
import { Users, Target, BookOpen, Award } from "lucide-react";
import Team from "./AboutMainComponents/Team";
import TeamDesc from "./OurTeam/TeamDesc";
import OurTeamHero from "./OurTeam/OurTeamHero";
import OurTeamsCopy from "./OurTeamsCopy";

export default function OurTeam() {
  return (
    <>
      <div className="pb-12">
        <OurTeamHero />
        <TeamDesc />
        <Team />
      </div>
    </>
  );
}
