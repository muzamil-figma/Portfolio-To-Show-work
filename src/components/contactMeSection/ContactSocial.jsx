import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/muzamil-nawaz-78a738246" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/muzamil-figma" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/muzamil.nawaz.716?mibextid=rS40aB7S9Ucbxw6v" Icon={FiFacebook} />
      <SingleContactSocial link="https://www.instagram.com/muzamil_nawaz_khan_sehar?igsh=M2JycjNmOWJweGQ4" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
