"use client";

import { PawPrint, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-border">
      <div className="flex items-center gap-2">
        <PawPrint className="h-6 w-6 text-coral" />
        <span className="text-lg font-bold">SwipeDog</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
