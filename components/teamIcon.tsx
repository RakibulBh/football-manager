import Image from "next/image";

type Types = {
    imageUrl: string;
}

const Team: React.FC<Types> = ({ imageUrl }) => {
    return (  
        <div className={`p-1 bg-[#7D69F4] w-32 h-32 rounded-full flex items-center justify-center`}>
            <Image alt="team-picture" width={80} height={80} src={imageUrl} />
        </div>
    );
}

export default Team;