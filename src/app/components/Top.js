import Image from "next/image";

export default function Top() {
  return (
    <div className="w-full h-[50px] bg-[var(--background)] flex flex-row items-center justify-between">
      <div className="w-full flex flex-row items-center px-2.5 py-2.5 gap-2.5">
        <Image src="/icon.jpg" width={25} height={25} alt="logo" />
        <span className="text-xl">Whiskers</span>
      </div>
    </div>
  );
}
