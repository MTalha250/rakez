import ContainerWrapper from "../common/ContainerWrapper";
import { Heading1 } from "../common/Headings/Headings";

const AboutDIFC = () => {
  return (
    <ContainerWrapper classes="py-14 md:py-24">
      <Heading1 title="About DIFC" classes="text-center" />

      <p className="text-[14px] mb-5">
        Dubai International Financial Centre (DIFC) holds a prominent position
        as the primary global financial center in the Middle East, Africa, and
        South Asia (MEASA) region. With nearly two decades of experience, DIFC
        has played a pivotal role in facilitating trade and investment flows
        throughout MEASA, a region encompassing 72 countries and boasting a
        combined population of around three billion people.
      </p>
      <p className="text-[14px] mb-5">
        The DIFC Innovation Hub is a premier ecosystem for Tech Startups
        offering innovation license and DIFC fintech license in the prestigious
        DIFC jurisdiction. Located between Burj Khalifa and Emirates Towers, it
        is the perfect location for your tech startup with affordable DIFC trade
        license cost.
      </p>
      <p className="text-[14px] mb-5">
        Apply for innovation license at DIFC and join the vibrant tech community
        at this prime DIFC innovation hub location with Creative Zone!
      </p>
    </ContainerWrapper>
  );
};

export default AboutDIFC;
