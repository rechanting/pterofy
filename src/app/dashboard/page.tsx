import Image from "next/image";
import { ClerkProvider } from "@clerk/nextjs";
import SideBar from '@/components/sideBar'

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SideBar />
    </main>
  );
}
