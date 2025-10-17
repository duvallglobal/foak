import Image from 'next/image';
import clsx from 'clsx';
import brandLogo from './brand-logo.png';

export default function LogoIcon(props: React.ComponentProps<'div'>) {
  return (
    <div
      className={clsx('relative h-8 w-8 flex items-center justify-center transition-all duration-300', props.className)}
    >
      <Image
        src={brandLogo}
        alt={`${process.env.SITE_NAME} logo`}
        width={32}
        height={32}
        priority
        className="w-full h-full object-contain"
      />
    </div>
  );
}
