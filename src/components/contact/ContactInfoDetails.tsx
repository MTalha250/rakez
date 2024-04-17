import { FC, ReactNode } from "react";

interface ContactInfoDetailsProps {
  icon: ReactNode;
  title: string;
  subTitle: string;
}

const ContactInfoDetails: FC<ContactInfoDetailsProps> = ({
  icon,
  title,
  subTitle,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div>{icon}</div>
      <div>
        <h6 className="text-[14px] text-green">{title}</h6>
        <p className="text-[12px]">{subTitle}</p>
      </div>
    </div>
  );
};

export default ContactInfoDetails;
