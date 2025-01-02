'use client';

import { X } from 'lucide-react';
import SocialShare from './SocialShare';
import LinkShare from './LinkShare';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-indigo-900/90 rounded-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-purple-700">
          <h2 className="text-2xl font-bold">Share Mission</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-purple-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <SocialShare />
          <LinkShare />
        </div>
      </div>
    </div>
  );
}