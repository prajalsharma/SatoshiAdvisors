"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpenCheck,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  KeyRound,
  LifeBuoy,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="first py-16 px-4 text-center pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Master Bitcoin
            <br className="hidden md:block" /> with Confidence
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Personalized education, tailored consultancy,
            <br />
            and secure storage for your digital future.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {" "}
            <Link href="/blogs">
              <button className="bg-primary-blue hover:opacity-50 text-white px-6 py-3 text-base font-medium rounded-md shadow transition-all">
                Learn More
              </button>
            </Link>
            <a href="#contact">
              <button className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6 py-3 text-base font-medium rounded-md shadow transition-all">
                Get Started
              </button>
            </a>
          </div>
        </motion.div>
      </section>
      <ThirdSection />
      <SecondSection />
      <FourthSection />
      <SixthSection />
      <FifthSection />
    </>
  );
}

const SecondSection = () => {
  return (
    <section className="second py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-12 flex items-center justify-center gap-2">
          What Satoshi Advisors offer{" "}
          <span className="inline-block">
            <LifeBuoy size={36} />
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between border border-black">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <BookOpenCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Bitcoin <br /> Education
            </h3>
            <p className="text-gray-600 mb-4">We break down how Bitcoin works so you can use it confidently.</p>
            <a
              href="/blogs"
              className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
              Start Learning
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between border border-black">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <ShieldCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              1:1 Consultancy
             
            </h3>
            <p className="text-gray-600 mb-4">
              Tailored sessions to guide your journey at your own pace.
            </p>
            <a
              href="#aboutus"
              className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
              Book a Session
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between border border-black">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <KeyRound size={36} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Inheritances and
              <br /> Recovery
            </h3>
            <p className="text-gray-600 mb-4">Set up multisig wallets and inheritance plans with expert help.</p>
            <a
              href="#contact"
              className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
              Secure My Assets
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ThirdSection = () => {
  const points = [
    " Clear and simple language for all levels",
    " 100% focus on Bitcoin, no distractions",
    " Personalized 1:1 consultancy to meet your goals",
    " Secure asset protection with multisig solutions",
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-2">
          Why choose Satoshi Advisors
          <Target size={36} className="text-white" />
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg mb-8">
          {points.map((point, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              <span className="text-xl">
                <Check />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-white/90 text-center">
          With Satoshi Advisors, you learn how to use Bitcoin safely and efficiently, ensuring the protection
          of your digital asset now and in the future.
        </motion.p>
      </div>
    </section>
  );
};

const FourthSection = () => {
  return (
    <section className="bg-primary-blue py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-8">
          Our Partners
        </motion.h2>

        <motion.a
          href="https://www.linkedin.com/posts/wizardsardine_we-are-so-happy-to-welcome-plano-b-llc-as-activity-7311357025211273217-nSjk?utm_source=share&utm_medium=member_android&rcm=ACoAADRX89MByhO7nr5lY_UuPSFDAPhb5QyMbwk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
          className="flex bg-[#ffffff] rounded-lg shadow-lg items-center justify-center gap-4 mx-auto max-w-2xl">
          <Image
            src="/assets/certificate.png"
            width={300}
            height={200}
            alt=""
            className="rounded-lg shadow-lg border border-white/20 h-auto max-w-[45%]"
          />
          <Image
            src="/assets/partner.png"
            width={300}
            height={200}
            alt=""
            className="rounded-lg shadow-lg border border-white/20 h-auto max-w-[45%]"
          />
        </motion.a>
      </div>
    </section>
  );
};

const FifthSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="fifth py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-3 text-black flex items-center justify-center gap-2">
          <Calendar size={36} />
          Schedule a Meeting
        </motion.h2>
      </div>
      <div
        className="calendly-inline-widget h-[62.5rem] lg:h-[680px]"
        data-url="https://calendly.com/carraresi/plano-b-start?hide_gdpr_banner=1"></div>
    </section>
  );
};

const advisors = [
  {
    name: "Rodrigo Carraresi",
    image: "/assets/rod.jpg",
    title: "Currently DevRel Leader at Thesis/Mezo and\nPreviously Head of DevRel at Ledger",
    description: `After years of helping friends and people around me understand Bitcoin in a practical way, I felt it was time to make that work official. That’s how plano B was born: an independent consultancy for anyone who wants to learn about Bitcoin in a simple, secure way without complicated jargon. The idea came from my desire to share knowledge with those who want to protect themselves financially but feel overwhelmed by too much technical or confusing information.\n
    As a “Bitcoin Concierge” (yes, it’s a real title and no, I don’t wear a bow tie 🎩), my goal is to make Bitcoin accessible to everyone, regardless of their technical background. I also launched a free newsletter that delivers straightforward, no-fluff content.`,
    x: "https://x.com/carraresi",
    linkedin: "https://es.linkedin.com/in/rodrigocarraresi",
  },
  {
    name: "Nico Marotta",
    image: "/assets/nico.jpeg",
    title: "Community Lead at Acre",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    x: "https://x.com/nico186_",
    linkedin: "https://www.linkedin.com/in/nico-marotta-msd",
  },
  {
    name: "William Pyke",
    image: "/assets/william.jpeg",
    title: "Moderator at Fluidity, Superposition, Mezo and Acre",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    x: "https://x.com/carraresi",
    linkedin: "https://es.linkedin.com/in/rodrigocarraresi",
  },{
    name: "Prajal Sharma",
    image: "/assets/prajal.jpeg",
    title: "Bitcoin Native Devrel Educator and Advisor",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    x: "https://x.com/0xPrajal",
    linkedin: "https://www.linkedin.com/in/prajal-sharma-72b125206/",
  },
];

const SixthSection = () => {
  const [index, setIndex] = useState(0);

  const nextAdvisor = () => setIndex((prev) => (prev + 1) % advisors.length);
  const prevAdvisor = () => setIndex((prev) => (prev - 1 + advisors.length) % advisors.length);

  const advisor = advisors[index];
  return (
    <section id="aboutus" className="sixth pt-20 bg-white text-center px-4 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">Our Advisors</h2>
        {advisors.length > 1 && (
          <>
            <div className="absolute flex gap-2 top-[30%] left-4">
              <button
                className="px-2 py-2 rounded-md transition-all cursor-pointer font-bold hover:underline"
                onClick={prevAdvisor}
                aria-label="Previous Advisor">
                <ChevronLeft className="stroke-3 size-10" />
              </button>
            </div>
            <div className="absolute flex gap-2 top-[30%] right-4">
              <button
                className="px-2 py-2 rounded-md transition-all cursor-pointer font-bold hover:underline"
                onClick={nextAdvisor}
                aria-label="Next Advisor">
                <ChevronRight className="stroke-3 size-10" />
              </button>
            </div>
          </>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={advisor.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}>
            <div className="flex justify-center mb-6">
              <Image
                src={advisor.image}
                alt={advisor.name}
                width={160}
                height={160}
                className="rounded-full w-40 h-40 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black">{advisor.name}</h3>
            <p className="text-gray-700 mt-1 mb-4" style={{ whiteSpace: "pre-line" }}>
              {advisor.title}
            </p>
            <p className="text-gray-600 mb-6" style={{ whiteSpace: "pre-line" }}>
              {advisor.description}
            </p>
            <div className="flex justify-center gap-6 text-xl">
              {advisor.x && (
                <a
                  href={advisor.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-blue p-2 rounded-xl transition hover:opacity-55">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/x-dark.svg"
                    alt=""
                    className="size-9"
                  />
                </a>
              )}
              {advisor.linkedin && (
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-blue p-2 rounded-xl transition hover:opacity-55">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/linkedin.svg"
                    alt=""
                    className="size-9"
                  />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
