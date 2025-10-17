import { readFile } from 'fs/promises';
import { ImageResponse } from 'next/og';
import { join } from 'path';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME
    },
    ...props
  };

  const file = await readFile(join(process.cwd(), './fonts/Inter-Bold.ttf'));
  const font = Uint8Array.from(file).buffer;

  // Load the brand logo image
  const logoFile = await readFile(join(process.cwd(), './components/icons/brand-logo.png'));
  const logoBase64 = logoFile.toString('base64');
  const logoDataUrl = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)'
        }}
      >
        <div
          tw="flex flex-none items-center justify-center rounded-3xl h-[160px] w-[160px]"
          style={{
            border: '1px solid rgba(0, 212, 255, 0.3)',
            background: 'rgba(0, 212, 255, 0.05)'
          }}
        >
          <img src={logoDataUrl} width="80" height="80" alt="logo" />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
        <p tw="mt-4 text-2xl text-[#00d4ff]">Uncommon Finds. Unexpected Value.</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: font,
          style: 'normal',
          weight: 700
        }
      ]
    }
  );
}
