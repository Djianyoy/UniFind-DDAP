"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth/proxy';
import { useToast } from '@/shared/context/ToastContext';
import ReportItemModal from '@/feature/lost-item/components/modal/ReportItemModal';
import { useLostItemStorage } from '@/feature/lost-item/hooks/useLostItemStorage';

const Navbar = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const { showToast } = useToast();
    const { addItem } = useLostItemStorage();

    useEffect(() => {
        const name = localStorage.getItem('user_name');
        if (name) {
            setUserName(name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user_name');
        localStorage.removeItem('auth_token');
        setUserName(null);
        window.location.reload();
    };

    const handleLaporClick = () => {
        if (isAuthenticated()) {
            setIsModalOpen(true);
            setIsMenuOpen(false);
        } else {
            showToast('Silakan login terlebih dahulu untuk melapor barang.', 'warning');
            router.push('/login');
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-20 glass border-none!">
                <Link href={"/beranda"} >
                    <button className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                            <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
                        </div>
                        <span className="text-xl font-bold tracking-tight">UniFind</span>
                    </button>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-base font-medium">
                    <Link href="/lost-item" className="hover:text-primary transition-colors">Cari</Link>
                    <button 
                        onClick={handleLaporClick}
                        className="hover:text-primary transition-colors cursor-pointer"
                    >
                        Lapor
                    </button>
                    
                    {userName ? (
                        <div className="flex items-center gap-4">
                            <button className="bg-white text-primary border border-primary px-6 py-2 rounded-xl font-semibold transition-all">
                                Hi, {userName}
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="bg-white border border-red-600 text-red-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link href={"/register"}>
                            <button className="bg-primary px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-all cursor-pointer">
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-white"
                    >
                        {isMenuOpen ? (
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 glass-card mx-6 mt-2 p-6 flex flex-col gap-6 md:hidden animate-slide-in">
                        <Link 
                            href="/lost-item" 
                            className="text-lg font-medium hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Cari Barang
                        </Link>
                        <button 
                            onClick={handleLaporClick}
                            className="text-lg font-medium text-left hover:text-primary transition-colors cursor-pointer"
                        >
                            Lapor Barang
                        </button>
                        
                        <div className="h-[1px] bg-white/10 w-full"></div>

                        {userName ? (
                            <div className="flex flex-col gap-4">
                                <div className="bg-white/10 p-4 rounded-xl text-center">
                                    <span className="font-semibold text-primary">Hi, {userName}</span>
                                </div>
                                <button 
                                    onClick={handleLogout}
                                    className="w-full bg-red-600/10 border border-red-600 text-red-600 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href="/register" onClick={() => setIsMenuOpen(false)} className="w-full">
                                <button className="w-full bg-primary py-3 rounded-xl font-bold text-white shadow-lg cursor-pointer">
                                    Sign In
                                </button>
                            </Link>
                        )}
                    </div>
                )}
            </nav>

            <ReportItemModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={addItem}
            />
        </>
    );
};

export default Navbar;