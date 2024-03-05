import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import i18n from "i18next";
import "../styles/globals.css";
import "../i18n/config";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale == "th") {
      i18n.changeLanguage("th-TH");
    } else {
      i18n.changeLanguage("en-US");
    }
  }, [locale]);

  return (
    <div>
      <Head>
        <title>Oversea Dealer</title>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
