interface MatchInfoTextProps {
    title: string;
    description: string;
}

export const MatchInfoText = ({title, description}: MatchInfoTextProps) => {
  return (
    <div>
        <h1 className="bold">{title}</h1>
        <p className="text-gray-400">{description}</p>
    </div>
  )
}
