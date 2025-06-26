import React from "react";
import OurTeamHero from "./OurTeam/OurTeamHero";
import TeamDesc from "./OurTeam/TeamDesc";
import Team from "./AboutMainComponents/Team";
// bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-[#FFFAE9]
export default function OurTeamsCopy() {
  return (
    <>
      <div>
        <OurTeamHero />
        <TeamDesc />
        <Team />
      </div>
    </>
  );
}
