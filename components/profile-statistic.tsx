import Image from "next/image";

export default function ProfileStatistic() {
  return (
    <div className="w-full flex gap-x-5 items-center">
        <div className="flex items-center justify-center bg-[#7D69F4] w-24 h-24 rounded-full">
            <Image alt="profile-pic" width={80} height={80} src='/anan.png' />
        </div>
        <div className="flex flex-col gap-y-2">
            <h1 className="font-bold">ANAN MIR</h1>
            <p className="text-gray-500">10 votes</p>
        </div>
    </div>
  )
}
