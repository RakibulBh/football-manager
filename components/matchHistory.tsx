import Image from "next/image"

export const MatchHistory = () => {
  return (
    <div className="rounded-2xl hover:cursor-pointer hover:bg-[#31334B] transition-colors ease-in-out p-5 w-full flex justify-between items-center">
      <div className="flex gap-x-5 items-center">
        <p>Al Sab'it</p>
        <Image alt="team-logo" width={60} height={60} src='/inter.png' />
      </div>
      <div className="border-2 py-2 px-6 rounded-full">
        <p>0 : 0</p>
      </div>
      <div className="flex gap-x-5 items-center">
        <Image alt="team-logo" width={60} height={60} src='/inter.png' />
        <p>Al Sab'it</p>
      </div>
    </div>
  )
}
