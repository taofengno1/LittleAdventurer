import AddTodo from "@/components/AddTodo";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
    const supabase = createServerComponentClient({ cookies });

    const { data } = await supabase.from("todo").select();

    return (
        <>
            <ul className="my-auto">
                {data?.map((country) => (
                    <li key={country.id}>{country.name}</li>
                ))}
                <AddTodo />
            </ul>
        </>
    );
}