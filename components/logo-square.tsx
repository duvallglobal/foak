import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  if (size === 'sm') {
    // Small version for footer with glass morphism
    return (
      <div
        className={clsx(
          'flex flex-none items-center justify-center rounded-lg transition-all duration-300',
          'bg-gradient-to-br from-[#00d4ff]/10 to-[#00a8cc]/5',
          'border border-[#00d4ff]/30 backdrop-blur-md',
          'hover:border-[#00d4ff]/60 hover:bg-gradient-to-br hover:from-[#00d4ff]/20 hover:to-[#00a8cc]/10',
          'hover:shadow-lg hover:shadow-[#00d4ff]/20',
          'h-[36px] w-[36px]'
        )}
      >
        <LogoIcon className="h-[20px] w-[20px]" />
      </div>
    );
  }

  // Large version for navbar - no box, just logo, responsive sizing
  return (
    <div className="flex flex-none items-center justify-center transition-all duration-300">
      <LogoIcon className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] md:h-[56px] md:w-[56px] lg:h-[64px] lg:w-[64px] hover:opacity-80 transition-opacity" />
    </div>
  );
}
