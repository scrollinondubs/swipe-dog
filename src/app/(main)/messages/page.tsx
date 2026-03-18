import { MessageCircle } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
      <MessageCircle className="h-12 w-12 text-coral/40" />
      <p className="text-lg font-medium">Messages</p>
      <p className="text-sm">Coming Soon</p>
    </div>
  );
}
