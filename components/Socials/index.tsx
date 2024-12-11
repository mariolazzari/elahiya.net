import Link from "next/link";
import { Mail, Instagram, LucideLink, Phone } from "lucide-react";

export const socials = [
  {
    id: 1,
    name: "Write us",
    url: "mailto:ELAprolanguageschool@gmail.com",
    icon: <Mail />,
  },
  {
    id: 2,
    name: "elalanguage0089",
    url: "https://www.pinterest.it/elalanguage0089/",
    icon: <LucideLink />,
  },
  {
    id: 3,
    name: "elaprolanguageschool",
    url: "https://www.instagram.com/elaprolanguageschool/",
    icon: <Instagram />,
  },
  {
    id: 4,
    name: "BlogFA",
    url: "http://www.blogfa.com/members/UsersList.aspx?dir=17",
    icon: <LucideLink />,
  },
  {
    id: 5,
    name: "+98 902 578 8874 - Office",
    url: "tel:+989025788874",
    icon: <Phone />,
  },
  {
    id: 6,
    name: "+98 936 873 9528 - Manager",
    url: "tel:+989368739528",
    icon: <Phone />,
  },
];

export const Socials = () => {
  return (
    <div className="my-1">
      {socials.map(social => (
        <Link
          key={social.id}
          className="flex p-1 cursor-pointer hover:text-primary"
          href={social.url}
          target="_blank"
        >
          {social.icon}
          <h2 className="ml-2 text-xl font-semibold">{social.name}</h2>
        </Link>
      ))}
    </div>
  );
};
