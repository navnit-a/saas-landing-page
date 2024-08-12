'use client';

import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cyclinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    console.log(progress);
  });
  return (
    <section
      ref={heroRef}
      className="overflow-x-clip bg-[radial-gradient(ellipse_at_bottom_left,#183EC2,#EAEEFE_71%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
              Celebrate Celebrate the joy of accomplishment with an app designed
              to track your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="inline-flex size-5" />
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src={cogImage.src}
              alt="cog"
              className="h-full md:absolute md:-left-6 md:w-auto md:max-w-none lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
            <motion.img
              src={cyclinderImage.src}
              width={220}
              height={220}
              alt="cylinder"
              className="-left-32 -top-8 hidden md:absolute md:block"
              style={{ translateY: translateY }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="noodle"
              className="left-[448px] top-[524px] hidden rotate-12 md:absolute md:block lg:block"
              style={{ translateY: translateY, rotate: 30 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
