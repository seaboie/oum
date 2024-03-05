import Image from "next/image";

export default function PasswordInput() {
  return (
    <div className="flex flex-col pt-3.5">
      <label className="">รหัสผ่าน</label>
      <div className="relative">
        <input
          type="password"
          placeholder="รหัสผ่าน"
          className="border rounded bg-[url('/password.png')] bg-no-repeat bg-[left_0.5rem_center] px-9 py-1.5 mt-2 w-full"
        />
        <Image
          className="absolute top-[45%] right-2"
          src="/hide_password.png"
          alt="hide password icon"
          width={16}
          height={11}
        />
      </div>
    </div>
  );
}
