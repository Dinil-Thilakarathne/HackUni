import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/your-profile",
  },
  {
    name: "Twitter",
    icon: <Twitter size={24} />,
    url: "https://www.twitter.com/your-profile",
  },
  {
    name: "Instagram",
    icon: <Instagram size={24} />,
    url: "https://www.instagram.com/your-profile",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    url: "https://www.linkedin.com/your-profile",
  },
  {
    name: "GitHub",
    icon: <Github size={24} />,
    url: "https://www.github.com/your-profile",
  },
];

const Footer = () => {
  return (
    <section id="contact" className="flex w-full flex-col items-center justify-center p-4 min-h-[25vh]">
        <h1 className=" text-4xl font-bold">Contact us</h1>
      <div className="flex w-fit gap-x-4 pt-8">
        {socialMediaLinks.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Footer;
