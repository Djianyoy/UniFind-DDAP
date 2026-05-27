import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-20 glass border-none!">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
        </div>
        <span className="text-xl font-bold tracking-tight">UniFind</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-base font-medium">
        <Link href="/lost-item" className="hover:text-primary transition-colors">Cari</Link>
        <Link href="#" className="hover:text-primary transition-colors">Lapor</Link>
        <Link href={"/register"}>
            <button className="bg-primary px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-all cursor-pointer">
            Sign In
            </button>
        </Link>
      </div>

      <div className="md:hidden">
        {/* Mobile menu icon */}
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;