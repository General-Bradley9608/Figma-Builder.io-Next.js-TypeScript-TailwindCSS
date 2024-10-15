import React from "react";
import { Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-10 justify-between items-end p-8 mt-16 w-full text-sm leading-none text-secondary-foreground max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <p>© Play.CV 2024</p>
      <div className="flex gap-2 items-center whitespace-nowrap">
        <Mail className="w-4 h-4" />
        <a href="mailto:support@playcv.com" className="self-stretch my-auto">
          support@playcv.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
