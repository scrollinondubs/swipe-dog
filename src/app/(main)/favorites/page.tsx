import { Heart } from "lucide-react";

export default function FavoritesPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
      <Heart className="h-12 w-12 text-coral/40" />
      <p className="text-lg font-medium">Favorites</p>
      <p className="text-sm">Coming Soon</p>
    </div>
  );
}
