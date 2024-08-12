import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-12">
      <div className="container">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex flex-none gap-14">
            <Image src={acmeLogo} alt="acem" className="logo-ticker-image" />
            <Image
              src={quantumLogo}
              alt="quantum"
              className="logo-ticker-image"
            />
            <Image src={echoLogo} alt="echo" className="logo-ticker-image" />
            <Image
              src={celestialLogo}
              alt="celestial"
              className="logo-ticker-image"
            />
            <Image src={pulseLogo} alt="pulse" className="logo-ticker-image" />
            <Image src={apexLogo} alt="apex" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
