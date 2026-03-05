"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="w-full bg-background-4">
      <div className="max-w-7xl mx-auto px-6 py-14 space-y-6">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed text-sm max-w-md">
              Redefining Luxury Switches & Sockets. Indulge in a world of
              opulence and sophistication where we offer a distinguished
              collection of premium switches and sockets.
            </p>

            <button className="text-white font-medium hover:text-gray-300 transition">
              Know More
            </button>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                About
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Our Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              OUR POLICIES
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Shipping Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Warranty Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Return & Refund Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Legal
              </li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Showrooms
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Orders Tracking
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Products Catalogue
              </li>
              <li className="hover:text-white transition cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              SOCIAL LINKS
            </h3>
            <div className="flex gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaTwitter,
                FaYoutube,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="aspect-square w-10 h-auto flex items-center justify-center border border-gray-700 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg font-semibold leading-snug">
              A Luxurious Brand of France.
            </p>
          </div>
        </div>

        <small>
          © Copyright 2023 – Tocco France | All Rights Reserved | Designed &
          Developed by TechnoTeams.com
        </small>
      </div>
    </footer>
  );
}
