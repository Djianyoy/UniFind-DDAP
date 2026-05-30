"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth/proxy';
import { useToast } from '@/shared/context/ToastContext';

export default function LostItemLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { showToast } = useToast();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      showToast('Akses ditolak. Silakan login terlebih dahulu.', 'error');
      router.push('/login');
    } else {
      setIsAuth(true);
    }
  }, [router, showToast]);

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
