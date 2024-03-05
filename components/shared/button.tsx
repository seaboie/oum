type InputProps = {
  onClick?: () => {};
};

export default function Button({ onClick }: InputProps) {
  return (
    <button
      className=" text-white font-medium rounded-full py-2.5 mt-6 bg-gradient-to-r from-[#C7006F] to-[#E0001D]"
      onClick={onClick}
    >
      เข้าสู่ระบบ
    </button>
  );
}
