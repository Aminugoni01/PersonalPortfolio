import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="aminugonibukar123@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+234 8164178927" Image={FiPhone} />
      <SingleInfo text="Kaduna, Nigeria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
