import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020617]/80 pt-20 pb-10 px-6 lg:px-20 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">UniFind</span>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            Platform terpusat untuk melaporkan dan menemukan barang hilang di lingkungan kampus. Dibuat oleh mahasiswa, untuk mahasiswa.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Platform</h4>
          <ul className="space-y-4 text-muted text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Cari Barang</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lapor Barang</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Statistik</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Panduan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Kampus</h4>
          <ul className="space-y-4 text-muted text-sm">
            <li><a href="#" className="hover:text-white transition-colors">FILKOM</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FEB</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FMIPA</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Semua Fakultas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Kontak</h4>
          <ul className="space-y-4 text-muted text-sm">
            <li><a href="mailto:unifind@ub.ac.id" className="hover:text-white transition-colors">unifind@ub.ac.id</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Line Official</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-xs text-muted gap-4">
        <p>© 2026 UniFind - Universitas Brawijaya</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
