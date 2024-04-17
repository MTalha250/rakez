import { useState } from "react";

import { RiSecurePaymentLine } from "react-icons/ri";

const QuestionCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <div className="border p-3 sm:p-7 bg-c_greenish rounded-tl-[50px] rounded-br-[50px] text-white cursor-pointer">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="p-3 sm:p-5 bg-green-100/50 rounded-md">
          <RiSecurePaymentLine className="text-[24px] text-green-300" />
        </div>
        <div>
          <div
            className="join join-vertical w-full"
            onClick={() => setFlag(!flag)}
          >
            <div
              className={`collapse collapse-arrow join-item cursor-pointer ${
                flag ? "collapse-open" : "collapse-close"
              }`}
            >
              <div className="collapse-title text-xl font-semibold text-[14px] sm:text-[16px] md:text-[18px]">
                {question}
              </div>
              <div className="collapse-content">
                <p className="text-[13px] sm:text-[14px]">{answer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
