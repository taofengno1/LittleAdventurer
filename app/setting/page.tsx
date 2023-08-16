import Segments from "@/components/Segments";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Setting() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <Segments />
      <Link href={'/'}>
        <ArrowLeft className='fixed right-4 bottom-4 text-purple-400' />
      </Link>
    </main>
  )
}
