import ContainerWrapper from "@/components/common/ContainerWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constants";

const FAQ = ({ bg }: { bg?: string }) => {
  return (
    <div className={`${bg ? bg : ""}`}>
      <ContainerWrapper>
        <div className="flex flex-col items-center py-16 gap-5">
          <h3 className="text-3xl font-semibold">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((a, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="my-5">
                <AccordionTrigger className="text-lg font-medium border-l-[3px] px-4 py-2 border-l-[#325AED] group">
                  {a.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg px-4 py-2 border-l-[3px] border-l-[#325AED]">
                  {a.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default FAQ;
