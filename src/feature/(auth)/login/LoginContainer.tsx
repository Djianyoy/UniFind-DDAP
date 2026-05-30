"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/auth/login';
import { useToast } from '@/shared/context/ToastContext';

const LoginContainer = () => {
    const router = useRouter();
    const { showToast } = useToast();
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginUser(nim, password)
            const savedName = localStorage.getItem('user_name')|| '';
            localStorage.setItem('user_name', savedName);
            showToast('Login berhasil! Selamat datang.', 'success');
            router.push('/beranda');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Login gagal';
            showToast(errorMessage, 'error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#1C2C58]">
            <div className="glass-card w-full max-w-md p-10 space-y-8 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-white text-center">Masuk</h1>
                
                <form onSubmit={handleLogin} className="w-full space-y-4">
                    <input 
                        type="text" 
                        placeholder="NIM" 
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        className="w-full bg-white/10 border border-white/5 rounded-2xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white/10 border border-white/5 rounded-2xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />

                    <div className="flex justify-end">
                        <Link href="#" className="text-sm text-primary hover:underline">Lupa Password?</Link>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-primary py-4 rounded-2xl font-bold text-lg text-white shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
                    >
                        Masuk
                    </button>
                </form>

                <p className="text-white/60 text-sm">
                    Belum punya akun? <Link href="/register" className="font-bold text-white hover:underline">Daftar</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginContainer;
