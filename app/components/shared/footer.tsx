"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  ArrowRight,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative dark:text-white dark:bg-[#0f172a] overflow-hidden pt-20 pb-10">
     
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center border-b dark:border-slate-800 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for your next{" "}
              <span className="text-primary">Adventure?</span>
            </h2>
            <p className="dark:text-slate-400 text-lg">
              Join 50,000+ travelers getting the best deals sent to their inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full dark:bg-slate-900 border dark:border-slate-700 rounded-full py-4 pl-12 pr-4 dark:text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-400 dark:text-slate-900 font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              Subscribe <Send className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/tripzylogo2.png"
                alt="tripzy website logo"
                height={200}
                width={200}
              />
            </div>
            <p className="dark:text-slate-400 mb-6 leading-relaxed">
              Discovering the world, one journey at a time. We make travel
              seamless, affordable, and unforgettable.
            </p>
            <SocialIcons />
          </motion.div>
          <FooterColumn
            title="Destinations"
            links={[
              "Bali, Indonesia",
              "Kyoto, Japan",
              "Amalfi Coast, Italy",
              "Santorini, Greece",
              "Cairo, Egypt",
            ]}
            delay={0.1}
          />
          <FooterColumn
            title="Company"
            links={["About Us", "Careers", "Blog", "Press", "Partners"]}
            delay={0.2}
          />
          <FooterColumn
            title="Support"
            links={[
              "Help Center",
              "Safety Center",
              "Community Guidelines",
              "Cancellation Policy",
              "Contact Us",
            ]}
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500"
        >
          <p>© {currentYear} Tripzy Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};


const FooterColumn = ({
  title,
  links,
  delay,
}: {
  title: string;
  links: string[];
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-white font-semibold text-lg mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href="#"
              className="dark:text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
            >
              <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300">
                <ArrowRight className="w-3 h-3 text-teal-400" />
              </span>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SocialIcons = () => {
  const icons = [
    { icon: Instagram, href: "#" },
    { icon: Github, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <div className="flex gap-4">
      {icons.map(({ icon: Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          whileHover={{ y: -5, color: "#2dd4bf" }} // Teal-400
          className="w-10 h-10 rounded-full dark:bg-slate-900 border border-primary flex items-center justify-center text-slate-400 transition-colors hover:border-teal-500 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};

export default Footer;
