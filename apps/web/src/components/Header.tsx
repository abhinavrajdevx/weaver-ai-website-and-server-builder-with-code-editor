import React from 'react';
import { Code2, Cpu } from 'lucide-react';

export function Header() {
  return (
    <header className="cyber-panel border-b border-cyber-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Cpu className="h-8 w-8 text-cyber-accent animate-glow-pulse" />
            <div className="absolute inset-0 bg-cyber-glow/20 blur-lg"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold terminal-text">WebCraft AI</h1>
            <p className="mt-1 text-sm text-cyber-text/70">Neural Web Generation System v1.0</p>
          </div>
        </div>
      </div>
    </header>
  );
}