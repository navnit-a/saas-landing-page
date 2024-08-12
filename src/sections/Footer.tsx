import Image from 'next/image';
import logo from '../assets/logosaas.png';
import SocialX from '../assets/social-x.svg';
import SocialInsta from '../assets/social-insta.svg';
import SocialLinkedin from '../assets/social-linkedin.svg';
import SocialPin from '../assets/social-pin.svg';
import SocialYoutube from '../assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container">
        <div className="before: relative inline-flex before:absolute before:inset-y-0 before:size-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
          <Image src={logo} alt="Logo" height={40} className="relative" />
        </div>
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="mt-6 flex justify-center gap-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All right reserved.
        </p>
      </div>
    </footer>
  );
};
