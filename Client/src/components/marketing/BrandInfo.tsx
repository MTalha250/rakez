import ContainerWrapper from "../common/ContainerWrapper";
import NormalParagraph from "../common/Paragraphs/Paragraphs";

const BrandInfo = () => {
  return (
    <div className="py-14 md:py-24 ">
      <ContainerWrapper>
        <h1
          className={`text-3xl sm:text-5xl  font-semibold drop-shadow-2xl mb-5 text-center`}
        >
          Let Us Help <span className="text-tertiary">Define Your Brand </span>{" "}
          Identity!
        </h1>

        <div className="mt-5">
          <NormalParagraph
            text="At SCC House, we assist with setting up over 200 new businesses each month
          and offer them a portfolio of services to get their businesses going.
          We understand the fine line between balancing invaluable brand
          awareness and crucial bottom-line return on investments. Our team of
          accomplished creative and digital marketers and strategists have
          mastered the art of enabling growing companies to stay ahead of the
          curve by giving them all the tools required to build a brand in the
          digital and offline landscape efficiently."
          />
          <NormalParagraph
            text="Our specialised team focuses on creating a favourable image by
          defining brand guidelines, tone of voice, look and feel, and brand
          persona. We offer various services, including Digital, Social, PR,
          Content, and Media Production, at highly affordable rates that best
          fit a start-up."
          />
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default BrandInfo;
