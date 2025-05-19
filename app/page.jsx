"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from 'next/link';
import {
  BookOpenCheck,
  Calendar,
  Check,
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6 leading-tight">
            Soluções Simples <br className="hidden md:block" /> e Seguras com Bitcoin
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Da educação ao planejamento de herança:
            <br />
            sua jornada com Bitcoin começa aqui.
          </p>
          <div className="flex justify-center gap-4 flex-wrap"> <Link href="/blogs">
            <button className="bg-[#000000] hover:opacity-50 text-white px-6 py-3 text-base font-medium rounded-md shadow transition-all">
              Saber Más
               </button></Link>
               <a href="#contact"><button className="bg-white text-[#000000] border border-gray-300 hover:bg-gray-100 px-6 py-3 text-base font-medium rounded-md shadow transition-all">
              Contáctanos
            </button></a>
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
          className="text-3xl md:text-4xl font-bold text-[#000000] mb-12 flex items-center justify-center gap-2">
          O que o plano B Oferece{" "}
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
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between cursor-pointer">
            <div className="text-[#000000] mb-4 flex justify-center items-center">
              <BookOpenCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              Educação <br /> em Bitcoin
            </h3>
            <p className="text-gray-600 mb-4">Tornamos o Bitcoin fácil de entender</p>
            <a href="/blogs">
              <button className="bgbg-white hover:bg-[#000000] border-2 border-[#000000] text-[#000000] hover:text-white px-5 py-2 rounded-md transition-all">
                Explorar
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between cursor-pointer">
            <div className="text-[#000000] mb-4 flex justify-center items-center">
              <ShieldCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              Consultoria
              <br /> em Segurança
            </h3>
            <p className="text-gray-600 mb-4">
              Aprenda as melhores práticas para armazenar seu Bitcoin com segurança
            </p>
            <a href="#aboutus">
              <button className="bg-white hover:bg-[#000000] border-2 border-[#000000] text-[#000000] hover:text-white px-5 py-2 rounded-md transition-all">
                Saiba Mais
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between cursor-pointer">
            <div className="text-[#000000] mb-4 flex justify-center items-center">
              <KeyRound size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              Heranças e <br /> Recuperação
            </h3>
            <p className="text-gray-600 mb-4">Proteja seu futuro com soluções confiáveis</p>
            <a href="#contact">
              <button className="bg-white hover:bg-[#000000] border-2 border-[#000000] text-[#000000] hover:text-white px-5 py-2 rounded-md transition-all">
                Contáctanos
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
