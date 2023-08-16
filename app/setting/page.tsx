import Segments from "@/components/Segments";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AddTodo from "@/components/AddTodo";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Setting() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("todo").select();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <Segments  />
      <Link href={'/'}>
        <ArrowLeft className='fixed right-4 bottom-4 text-purple-400' />
      </Link>
    </main>
  )
}
