import Image from 'next/image';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg';

export const MyHeader = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex items-center justify-center bg-black py-3 text-sm text-white">
        <p className="hidden text-white/60 md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="align-items inline-flex justify-center rounded-lg bg-black px-4 py-2 font-medium tracking-tighter text-white">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
