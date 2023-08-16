'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "./ui/button";

export default function AddTodo() {
    const supabase = createClientComponentClient();

    async function insert() {
        await supabase.from("todo").insert([
            { name: "运动", timer: 10 },
        ]);
    }

    return (
        <Button onClick={insert}>新增</Button>
    )
}
