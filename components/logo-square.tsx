import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center rounded-xl transition-all duration-300',
        'bg-gradient-to-br from-[#00d4ff]/10 to-[#00a8cc]/5',
        'border border-[#00d4ff]/30 backdrop-blur-md',
        'hover:border-[#00d4ff]/60 hover:bg-gradient-to-br hover:from-[#00d4ff]/20 hover:to-[#00a8cc]/10',
        'hover:shadow-lg hover:shadow-[#00d4ff]/20',
        {
          'h-[40px] w-[40px]': !size,
          'h-[30px] w-[30px]': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[16px] w-[16px]': !size,
          'h-[10px] w-[10px]': size === 'sm'
        })}
      />
    </div>
  );
}
