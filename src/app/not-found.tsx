import React from 'react';
import { TypographyH1, TypographyP } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { FlagIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export function ErrorSection7() {
  return (
    <div className='h-screen mx-auto grid place-items-center text-center px-8 text-slate-950'>
      <div>
        <FlagIcon className='w-20 h-20 mx-auto' />
        <TypographyH1 className='mt-10 !text-3xl !leading-snug md:!text-4xl'>
          Error 404 <br /> It looks like something went wrong.
        </TypographyH1>
        <TypographyP className='mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm'>
          Don&apos;t worry, our team is already on it.Please try refreshing the
          page or come back later.
        </TypographyP>
        <Link href='/'>
          <Button className='w-ful px-4 md:w-[8rem]'>back home</Button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorSection7;
