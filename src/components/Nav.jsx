"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "PYQs", href: "/pyqs" },
  { name: "Resources", href: "/resources" },
  { name: "Practice", href: "/practice" },
  { name: "About", href: "/about" },
];

export default function Nav() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-3 bg-[#11111f] bg-opacity-90 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-[#2e2e3a]">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mr-2">
            <span className="text-white font-mono font-bold text-xs">OA</span>
          </div>
          <span className="text-xl font-mono font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            PYQHub
          </span>
        </div>

        {/* Center Nav Items */}
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-1.5 rounded-md text-sm transition-all duration-300 font-medium
                ${
                  pathname === item.href
                    ? "text-white bg-[#2a0a36] shadow-[0_0_10px_rgba(123,31,162,0.7)] border border-[#4b072f]"
                    : "text-[#b8b8c5] hover:text-white hover:bg-[#1e1e2a]"
                }
                hover:shadow-[0_0_10px_rgba(123,31,162,0.3)]
                relative group font-mono`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-1.5 text-sm rounded-md bg-red-600/80 hover:bg-red-700 text-white transition font-mono"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => router.push("/auth")}
                className="px-4 py-1.5 text-sm rounded-md bg-transparent text-[#b8b8c5] hover:text-white border border-[#4b072f] hover:border-purple-600 transition font-mono"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/auth")}
                className="px-4 py-1.5 text-sm rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-[0_0_15px_rgba(123,31,162,0.5)] transition font-mono"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mr-2">
            <span className="text-white font-mono font-bold text-xs">OA</span>
          </div>
          <span className="text-lg font-mono font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            PYQHub
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-[#b8b8c5] text-2xl focus:outline-none hover:text-white"
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#1a1a26] shadow-lg border-t border-[#2e2e3a] lg:hidden">
          <ul className="flex flex-col items-center gap-3 py-4 px-4">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`block w-full px-4 py-2.5 rounded-md text-sm transition-all
                    ${
                      pathname === item.href
                        ? "text-white bg-[#2a0a36] border border-[#4b072f]"
                        : "text-[#b8b8c5] hover:text-white hover:bg-[#1e1e2a]"
                    }
                    font-medium font-mono`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="w-full flex flex-col gap-3 mt-2 px-4">
              {session ? (
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-center px-4 py-2.5 text-sm rounded-md bg-red-600/80 hover:bg-red-700 text-white transition font-mono"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      router.push("/auth");
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-center px-4 py-2.5 text-sm rounded-md bg-transparent text-[#b8b8c5] hover:text-white border border-[#4b072f] hover:border-purple-600 transition font-mono"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      router.push("/auth");
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-center px-4 py-2.5 text-sm rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-[0_0_15px_rgba(123,31,162,0.5)] transition font-mono"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
