import { Link } from "@/i18n/navigation";
import { MdAlternateEmail } from "react-icons/md";
import {
  FaInstagram,
  FaPinterest,
  FaLink,
  FaPhone,
  FaSearch,
} from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaInfo } from "react-icons/fa6";
import { PageProps } from "@/types/PageProps";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `https://elahiya.net/${locale}`,
    },
  };
}

async function HomePage() {
  const t = await getTranslations("Home");

  const links = [
    {
      label: "Write us",
      href: "mailto:ELAprolanguageschool@gmail.com",
      icon: <MdAlternateEmail />,
    },
    {
      label: "elalanguage0089",
      href: "https://www.pinterest.it/elalanguage0089",
      icon: <FaPinterest />,
    },
    {
      label: "elaprolanguageschool",
      href: "https://www.instagram.com/elaprolanguageschool",
      icon: <FaInstagram />,
    },
    {
      label: "BlogFA",
      href: "http://www.blogfa.com/members/UsersList.aspx?dir=17",
      icon: <FaLink />,
    },
    {
      label: "+98 902 578 8874 - Office",
      href: "tel:+989025788874",
      icon: <FaPhone />,
    },
    {
      label: "+98 936 873 9528 - Manager",
      href: "tel:+989368739528",
      icon: <FaPhone />,
    },
  ];

  const buttons = [
    {
      label: "Find us",
      href: "/map",
      icon: <FaSearch />,
    },
    {
      label: "About us",
      href: "/about",
      icon: <FaInfo />,
    },
  ];

  return (
    <section className="flex flex-col items-center h-full gap-6 py-4">
      <Image
        className="rounded-full"
        src="/logo.png"
        height={150}
        width={150}
        alt="Logo"
        priority
      />

      <Image
        src="/elahiya.png"
        height={300}
        width={300}
        alt="Elahiya"
        priority
      />

      <h1 className="text-5xl text-center text-primary font-semibold">
        {t("title")}
      </h1>

      <ul className="flex flex-col gap-2">
        {links.map(link => (
          <li key={link.href}>
            <Link
              className="flex gap-2 text-lg font-semibold hover:text-primary items-center"
              href={link.href}
              target="_blank"
            >
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        {buttons.map(button => (
          <Link href={button.href} key={button.label}>
            <Button className="w-28">
              {button.icon} {button.label}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
