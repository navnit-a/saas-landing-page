import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={starImage}
            alt="Star"
            width={360}
            className="absolute left-[-350px] top-[-137px] text-clip"
          />
          <Image
            src={springImage}
            alt="Star"
            width={360}
            className="absolute right-[-331px] top-[-19px] text-clip"
          />
        </div>
        <div className="mt-10 flex justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn more</span>
            <ArrowRight className="size-5 gap-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
