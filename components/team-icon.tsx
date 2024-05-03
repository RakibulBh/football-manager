import Image from 'next/image';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface TeamComponent extends ComponentProps<'div'> {
  imageUrl: string;
}

const Team = ({ imageUrl, className, children, ...rest }: TeamComponent) => {
  return (
    <div
      className={twMerge(
        'bg-[#7D69F4] w-32 h-32 rounded-full flex items-center justify-center',
        className
      )}
      {...rest}
    >
      <Image alt='team-picture' width={80} height={80} src={imageUrl} />
    </div>
  );
};

export default Team;
