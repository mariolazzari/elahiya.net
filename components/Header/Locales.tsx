import Image from "next/image";

export function Locales() {
  const locales = ["ir", "en"];

  return (
    <div className="flex gap-2">
      {locales.map(locale => (
        <Image
          key={locale}
          src={`/images/${locale}.png`}
          alt={locale}
          width={32}
          height={32}
          priority
        />
      ))}
    </div>
  );
}
