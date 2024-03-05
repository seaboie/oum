import { useRouter } from "next/router";
import Image from "next/image";
// import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const router = useRouter();
  // const { locale, locales, defaultLocale } = router;
  // const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-end pr-4 pt-4 ">
        <Image
          src="/flag-english.png"
          alt="English language"
          width={35}
          height={35}
        />
        <Image
          src="/icon-chevron-down.png"
          alt="Icon Chevron-down"
          width={16}
          height={8}
          className="ml-2"
        />
      </div>

      {/* <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <div>{t("title")}</div> */}
      {/* <button
        onClick={() => {
          router.push("/", "/", { locale: "en" });
        }}
      >
        th
      </button>
      <button
        onClick={() => {
          router.push("/", "/", { locale: "th" });
        }}
      >
        en
      </button> */}
    </>
  );
}
