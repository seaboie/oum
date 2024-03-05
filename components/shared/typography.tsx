type TypoProps = {
  title: string;
  className?: string;
};

function H1({ title }: TypoProps) {
  return (
    <h1 className="text-center bg-gradient-to-r from-[#fa9f1d] via-[#ec2c4b] to-[#ec2c4b] bg-clip-text text-transparent font-medium text-3xl">
      Log in
    </h1>
  );
}

function H2({ title }: TypoProps) {
  return (
    <h2 className="text-center bg-gradient-to-r from-[#fa9f1d] via-[#ec2c4b] to-[#ec2c4b] bg-clip-text text-transparent font-medium text-3xl">
      Log in
    </h2>
  );
}

function H3({ title, className = "" }: TypoProps) {
  return (
    <h3 className="text-[#333333] text-base text-center">
      กรอกรหัสตัวแทนคู่ค้า และรหัสผ่านเพื่อเข้าสู่ระบบ
    </h3>
  );
}

function Label({ title }: TypoProps) {
  return <label className="">{title}</label>;
}

function Paragraph({ title, className = "" }: TypoProps) {
  return <div className={className}>{title}</div>;
}

export { H1, H2, H3, Label, Paragraph };
