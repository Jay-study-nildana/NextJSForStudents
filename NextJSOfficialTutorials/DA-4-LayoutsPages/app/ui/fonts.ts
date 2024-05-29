// this is where you can download the fonts to optimize font usage

import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana( 
    { 
        weight: "400",
        subsets: ['latin']
    }
);