"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/auth/register';
import { useToast } from '@/shared/context/ToastContext';

const RegisterContainer = () => {
    const router = useRouter();
    const { showToast } = useToast();
    const [name, setName] = useState('');
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(name, nim, password)
            const firstName = name.split(' ')[0];
            localStorage.setItem('user_name', firstName);
            showToast('Registrasi berhasil! Silakan login.', 'success');
            router.push('/login');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Register gagal';
            showToast(errorMessage, 'error');
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="glass-card w-full max-w-md p-10 space-y-8 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-white text-center">Buat Akun</h1>
                
                <form onSubmit={handleRegister} className="w-full space-y-4">
                    <input 
                        type="text" 
                        placeholder="Nama Lengkap" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/10 border border-white/5 rounded-2xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="NIM" 
                        onChange={(e) => setNim(e.target.value)}
                        className="w-full bg-white/10 border border-white/5 rounded-2xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Nomor Whatsapp" 
                        className="w-full bg-white/10 border border-white/5 rounded-2xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Program Studi" 
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
                    <input 
                        type="password" 
                        placeholder="Konfirmasi Password" 
                        className="w-full bg-white/10 border border-white/5 rounded-2xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />

                    <div className="flex items-start gap-3 py-2">
                        <input type="checkbox" className="mt-1 w-4 h-4 cursor-pointer" required />
                        <p className="text-xs text-white/60 leading-tight">
                            Saya berjanji akan menggunakan platform ini dengan jujur dan bertanggung jawab.
                        </p>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-primary py-4 rounded-2xl font-bold text-lg text-white shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
                    >
                        Buat
                    </button>
                </form>

                <p className="text-white/60 text-sm">
                    Sudah punya akun? <Link href="/login" className="font-bold text-white hover:underline">Masuk</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterContainer;