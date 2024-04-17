import ContainerWrapper from "../common/ContainerWrapper";
import QuestionCard from "./QuestionCard";

const DIFCBusinessActivities = () => {
  return (
    <div className="">
      <ContainerWrapper classes="py-14 md:py-24">
        <div>
          <h2 className="font-bold text-[30px] capitalize text-center">
            <span className="text-orange-500">Applicable</span> Business
            Activities
          </h2>
          <div className="grid gap-14 grid-cols-1 md:grid-cols-2 mt-10">
            <QuestionCard
              question="Computer Consultancies"
              answer="Includes firms which provide consultancy to enterprises and companies, prepare studies related to the analysis of user needs and uses computer hardware and software to provide the best solutions. This also includes the choice of software that corresponds to the company’s activities, the choice of operation specifications, the equipment and preparation of computer rooms, the preparation of purchase tender documents and offers, as well as other related services and consultancies."
            />
            <QuestionCard
              question="Data Classification & Analysis Services "
              answer="Includes firms specialised in evaluating and analyzing data provided by public and private entities, and arranging these data sets into a single repository to performs structured reviews and various analyses, as well as classifying according to their common characteristics, in order to discover useful information, informing conclusions, and supporting decision-making by said entities, with the goal of improving the investment returns and optimally utilize the resources."
            />
            <QuestionCard
              question="Cyber Security Consultancy "
              answer="Includes firms specialised in offering comprehensive professional cybersecurity consultancy to other organisations on how to prepare for, avoid and protect themselves against cyber-attacks and threats, such threats might involve networks, computers, programs and data damage, unauthorized access, evaluating cybersecurity or cyber readiness to comply with regulations and reactive services, including responding to cyber breaches and recovery activities following a cyber incident."
            />
            <QuestionCard
              question="Technology Research & Development "
              answer="Includes firms specialised in elaborating studies and experimental and development research related to technology businesses for conducting innovation, introduction and improvement of its products and procedures. It includes setting guidelines to enhance designing, evaluating, implementing techniques and a series of investigative activities to develop new and improve existing products and procedures."
            />
            <QuestionCard
              question="IT Infrastructure "
              answer="Includes firms specialised in laying the technical foundations of the information technology, which comprises the network, the systems and the databases. It also involves firms engaged in preparing the consultative studies along with the installations of the network and the systems, manpower training is also included."
            />
            <QuestionCard
              question="Portal "
              answer="Online services equipped with databases and programmes that are fitted as a service with basic functions of the technology platform. It also could be a junction between a content provider and a user for a broad array of resources and services."
            />
            <QuestionCard
              question="Software House "
              answer="Includes firms specialised in computer systems software design, implementation, operation, and maintenance based on analyzing the user’s problems and his need for economical solution and the programs necessary for realizing such a solution, it involves designing application software designed to run on smartphones and mobile devices."
            />
            <QuestionCard
              question="Public Networking Services "
              answer="Includes firms specialised in providing the services of subscribing & connecting to international information networking as well as specialized information banks and exchange of electronic mail which includes operating systems and applications such as electronic mail and the exchange of data electronically by using communication networks as well as their local and international lines."
            />
            <QuestionCard
              question="Education Technologies Research & Development "
              answer="Includes centers or institutes specialised in elaborating studies and experimental and development researches on learning technologies to set guidelines to enhance designing, evaluating and implementing learning techniques to reach the utmost efficiency."
            />
            <QuestionCard
              question="Education & Training Computer Software "
              answer="Includes providing computer systems analysis and software design to the facilities involved in education and training process, it involves analyzing the user’s needs and problems and offering consultancy on the best economical solution and the programs necessary for realizing such a solution, also, the software installation, testing and operation."
            />
            <QuestionCard
              question="Information Technology Consultants "
              answer="Includes providing technical services and consultancies with respect to information technology and applications like internet and data warehousing to enhance the administrative and technical performance in different corporations. These firms are not entitled to market or produce any of the software or products related to said technology."
            />
            <QuestionCard
              question="Network Consultancies  "
              answer="Includes providing comprehensive professional consultancies to IT organisations to help them match their needs with the networking solutions, it involves securing, analyzing and designing network solutions that maintain the security and integrity of their IT assets."
            />
            <QuestionCard
              question="Internet Content Provider "
              answer="Includes firms specialised in providing internet sites with contents and make them available for users."
            />
            <QuestionCard
              question="Electronic Chips Programming "
              answer="Includes programming electronic chips used in computers or in other automatic electronic devices, which are used in industry, vehicles, household electronic appliances and electronic games."
            />
            <QuestionCard
              question="Web-Design "
              answer="Includes firms specialised in designing the pages of the electronic services sites, the internet is used here as infrastructure."
            />
            <QuestionCard
              question="Internet Consultancy "
              answer="Includes firms specialised in drawing up the strategies of using internet technology in the commercial entities, as well as impose laying out the techniques of the practical application."
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default DIFCBusinessActivities;
