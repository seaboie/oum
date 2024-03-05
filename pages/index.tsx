import type { NextPage } from "next";
import AuthLayout from "../components/layouts/auth";
import { H1, H3, Paragraph } from "../components/shared/typography";
import TextInput from "../components/shared/textInput";
import PasswordInput from "../components/shared/passwordInput";
import Button from "../components/shared/button";

const Home: NextPage = () => {
  const handleOnClick = async () => {
    const response = await fetch("http://localhost:3000/api/login");
    const data = await response.json();
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-lg inline-block md:min-w-[26rem] md:w-full w-full">
        <div className="flex justify-center pt-6">
          <H1 title="Log in" />
        </div>
        <div className="flex flex-col p-4 pt-6">
          <H3
            className="text-[#333333] text-base"
            title="กรอกรหัสตัวแทนคู่ค้า และรหัสผ่านเพื่อเข้าสู่ระบบ"
          ></H3>
          <TextInput onChange={() => null} placeholder="" name="" value="" />
          <PasswordInput />

          <Button onClick={handleOnClick} />

          <div className="flex justify-between mt-4">
            <Paragraph title="ลืมรหัสผ่าน" />
            <Paragraph title="เปลี่ยนรหัสผ่าน" />
          </div>
        </div>

        <div className="flex justify-between mt-2 px-4 py-3 bg-[#E44160] rounded-b-lg">
          <Paragraph title="เข้าสู่ระบบครั้งแรก" className="text-white" />
          <Paragraph title="ลงทะเบียนตัวแทนเติมเงิน" className="text-white" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Home;
