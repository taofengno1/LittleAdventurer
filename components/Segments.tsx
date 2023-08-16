"use client"

import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Segment = {
    name: string;
    timer: number;
}

const Segments = () => {
    const [segments, setSegments] = useState<Segment[]>([]);

    useEffect(() => {
        const arr = localStorage.getItem('segments') ? JSON.parse(localStorage.getItem('segments')!) : [];
        setSegments(arr || []);
    }, []);

    return (
        <div className=" text-center">
            {
                segments.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.name}
                        </div>
                    )
                })
            }
            <div className='pt-2'>
                <div className='pt-2 pb-2'>
                    <Input placeholder='请输入名字' />
                </div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="请选择时长" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                    </SelectContent>
                </Select>
            </div>

        </div>
    );
};

export default Segments;
