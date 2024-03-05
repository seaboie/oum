import Image from "next/image";
import Footer from "../shared/footer";
import Header from "../shared/header";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen bg-[url('/background.png')] bg-no-repeat bg-cover">
      <Header />
      <div className="flex flex-col md:flex-row justify-evenly items-center h-full">
        <Image
          src="/true_plus_logo.png"
          alt="Trueplus logo"
          width={320}
          height={190}
          className="w-[212px] md:w-[320px]"
        />
        <main className="md:w-fit w-11/12">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

