import clsx from 'clsx';
import Image from 'next/image';
import brandLogo from './brand-logo.png';

export default function LogoIcon(props: React.ComponentProps<'div'>) {
  return (
    <div className={clsx('relative flex items-center justify-center', props.className)}>
      <Image
        src={brandLogo}
        alt={`${process.env.SITE_NAME} logo`}
        width={64}
        height={64}
        priority
        quality={95}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
