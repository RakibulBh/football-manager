import Image from "next/image";
import Link from "next/link";

export const MatchHistory = async () => {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-[#1B1D37] rounded-t-2xl p-6">
      {/* {matches && matches.map((match) => (
        <Link href={`match/${match.id}`}>
          <div className="rounded-2xl hover:cursor-pointer hover:bg-[#31334B] transition-colors ease-in-out p-5 w-full flex justify-between items-center">
            <div className="flex gap-x-5 items-center">
              <p>hi</p>
              <Image alt="team-logo" width={60} height={60} src='/inter.png' />
            </div>
            <div className="border-2 py-2 px-6 rounded-full">
              <p>0 : 0</p>
            </div>
            <div className="flex gap-x-5 items-center">
              <Image alt="team-logo" width={60} height={60} src='/inter.png' />
              <p>hi</p>
            </div>
          </div>
        </Link>
      ))} */}
    </div>
  );
};
