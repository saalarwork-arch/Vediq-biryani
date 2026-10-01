'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { usePWAInstall } from '@/hooks/usePWAInstall';

export default function PWAInstallButton() {
  const { isInstallable, isInstalled, installPWA } = usePWAInstall();

  if (!isInstallable || isInstalled) return null;

  return (
    <button
      onClick={installPWA}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0A1628] hover:bg-[#101F35] border border-[#1C2D4A] text-xs font-semibold text-[#F5F1E8] shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
    >
      <Download className="w-4 h-4 text-[#C9A24A]" />
      <span>Install App</span>
    </button>
  );
}
