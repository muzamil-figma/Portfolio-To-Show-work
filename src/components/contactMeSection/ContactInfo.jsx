import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="muzamil.expert.freelancer@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="muzamilnawazseehar@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+923085939456" Image={FiPhone} />
      <SingleInfo text="Pakistan,Panjab,Layyah" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
