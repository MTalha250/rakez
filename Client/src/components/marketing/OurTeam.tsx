import ContainerWrapper from "../common/ContainerWrapper";
import TeamCard from "./TeamCard";

import Person1 from "@/assets/person1.jpg";
import Person2 from "@/assets/person2.jpg";
import Person3 from "@/assets/person3.jpg";
import Person4 from "@/assets/person4.jpg";
import Person5 from "@/assets/person5.jpg";
import Person6 from "@/assets/person6.jpg";

const OurTeam = () => {
  return (
    <div className="py-14 md:py-24 bg-c_blue/50">
      <ContainerWrapper>
        <h1
          className={`text-3xl sm:text-5xl  font-semibold drop-shadow-2xl mb-5 text-center`}
        >
          About Our <span className="text-tertiary">Team</span>
          <p className="text-[14px] text-center text-black mt-5 font-normal leading-5">
            We believe that actions speak louder than words. Our management team
            will show you how we’re your company’s ideal marketing support
            system. We have over a decade of regional experience helping new and
            existing brands establish themselves. We love to meet ambitious
            entrepreneurs with truly inspiring ideas and will do everything we
            can to help you turn your vision into a tangible, lasting brand
            experience.
          </p>
        </h1>

        <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <TeamCard
            name="Tasnia Tasnim"
            role="Senior Consultant"
            img={Person1}
          />
          <TeamCard
            name="James Smith"
            role="Digital Marketing Manager"
            img={Person2}
          />
          <TeamCard
            name="Michael Wilson"
            role="Senior Consultant"
            img={Person3}
          />
          <TeamCard name="Shaheen Afridi" role="IT Consultant" img={Person4} />
          <TeamCard
            name="Henry James Miller"
            role="Senior Web Developer"
            img={Person5}
          />
          <TeamCard
            name="David William"
            role="Business Advisor"
            img={Person6}
          />
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default OurTeam;
