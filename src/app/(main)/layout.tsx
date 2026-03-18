import { BottomNav } from "@/components/layout/bottom-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[430px] flex-col bg-pink-light">
      {children}
      <BottomNav />
    </div>
  );
}
