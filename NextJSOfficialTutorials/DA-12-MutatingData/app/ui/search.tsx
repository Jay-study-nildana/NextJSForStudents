'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

  const searhParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (term) =>   {
      console.log(`Searching for the ...${term}`);
      const params = new URLSearchParams(searhParams);
      params.set('page','1');
      console.log(pathname);
      console.log(params.toString());
      if(term)
      {
        params.set('query',term);
      }
      else
      {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    }
  , 1000); //this 300 is 300 ms. or 1000ms
    //this debouncing ensures that the search is triggered and the db call
    //is avoided.
    //withut debouncing the query would be triggered after letter i typed
    //remember, database queries incur a cost. a big cost of any project.


  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={ (e) => 
          {
            handleSearch(e.target.value);
          }
        }
        defaultValue={searhParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
