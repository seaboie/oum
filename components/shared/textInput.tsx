import { Label } from "./typography";

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};

export default function TextInput({
  onChange,
  name,
  placeholder,
  value = "",
}: Props) {
  return (
    <div className="flex flex-col pt-3.5">
      <Label title="รหัสตัวแทนคู่ค้า" />

      <input
        type="text"
        placeholder="รหัสตัวแทนคู่ค้า"
        className="border rounded bg-[url('/username.png')] bg-no-repeat bg-[left_0.5rem_center] px-9 py-1.5 mt-2"
      />
    </div>
  );
}
