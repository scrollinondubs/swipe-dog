"use client";

import { X, Heart } from "lucide-react";

interface SwipeActionsProps {
  onPass: () => void;
  onLike: () => void;
  isDisabled?: boolean;
}

export function SwipeActions({ onPass, onLike, isDisabled }: SwipeActionsProps) {
  return (
    <div className="flex items-center justify-center gap-6 py-4">
      <button
        onClick={onPass}
        disabled={isDisabled}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-300 text-red-400 transition-all hover:bg-red-50 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
      >
        <X className="h-7 w-7" />
      </button>
      <button
        onClick={onLike}
        disabled={isDisabled}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white transition-all hover:bg-coral-light hover:scale-110 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
      >
        <Heart className="h-7 w-7 fill-current" />
      </button>
    </div>
  );
}
