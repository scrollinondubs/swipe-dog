"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Calendar, MessageCircle, PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Swipe", icon: PawPrint },
  { href: "/favorites", label: "Favorites", icon: Heart },
  { href: "/visits", label: "Visits", icon: Calendar },
  { href: "/messages", label: "Messages", icon: MessageCircle },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around border-t border-border bg-white px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      {navItems.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors",
              isActive ? "text-coral" : "text-muted-foreground"
            )}
          >
            <item.icon className={cn("h-5 w-5", isActive && "fill-coral/20")} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
