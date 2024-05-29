import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { CameraIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CameraIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">S and K Design Studio</p>
    </div>
  );
}
