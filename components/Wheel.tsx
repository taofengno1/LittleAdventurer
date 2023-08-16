"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Hand, Loader2, MoveUp, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const Wheel = () => {
    const wheelCanvas = useRef(null);
    const [spinning, setSpinning] = useState(false);
    const [width, setWidth] = useState(0);
    const size = useRef(0);
    const radius = useRef(0);
    const segments = ["写字", "看书", "打牌", "户外", "运动"];
    const angle = useRef(0);
    const angleIncrement = useRef(0);

    const drawWheel = () => {
        const canvas = wheelCanvas.current as any;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size.current, size.current);
        ctx.save();
        ctx.translate(size.current / 2, size.current / 2);
        ctx.rotate(angle.current);

        const segmentAngle = (2 * Math.PI) / segments.length;
        for (let i = 0; i < segments.length; i++) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius.current, segmentAngle * i, segmentAngle * (i + 1));
            ctx.fillStyle = i % 2 === 0 ? '#60A5FA' : '#FBBF24';
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#333';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = 'bold 16px sans-serif';
            const textAngle = segmentAngle * (i + 0.5);
            const textX = (radius.current * 0.7) * Math.cos(textAngle);
            const textY = (radius.current * 0.7) * Math.sin(textAngle);
            ctx.fillText(segments[i], textX, textY);
        }

        ctx.restore();
    };

    const spinWheel = () => {
        if (spinning || angleIncrement.current > 0) {
            angle.current += angleIncrement.current;
            drawWheel();
            if (!spinning && angleIncrement.current > 0) {
                angleIncrement.current -= 0.002;
            }
            requestAnimationFrame(spinWheel);
        } else {
            setSpinning(false);
        }
    };

    const toggleSpin = () => {
        setSpinning(!spinning);
        if (!spinning) {
            angleIncrement.current = 0.3;
            spinWheel();
        } else {
            angleIncrement.current = 0;
        }
    };

    useEffect(() => {
        size.current = Math.min(window.innerWidth, window.innerHeight) * 0.8;
        radius.current = size.current / 2;
        setWidth(size.current);
        console.log("Size:", size.current); // 添加这一行
        console.log("Radius:", radius.current); // 添加这一行
        drawWheel();
    }, []);

    return (
        <div className=" text-center">
            <canvas ref={wheelCanvas} width={width} height={width}></canvas>
            <div className='flex justify-center'>
                <MoveUp className='text-red-400' />
            </div>
            {
                !spinning && <Button className="mt-8 w-40 bg-green-400" onClick={toggleSpin}>
                    <Hand className="mr-2 h-6 w-6 text-white" />
                </Button>
            }
            {
                spinning &&
                <Button className='mt-8 w-40 bg-green-400' disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </Button>
            }
            <Link href={'/setting'}>
                <SlidersHorizontal className='fixed right-4 bottom-4 text-purple-400' />
            </Link>
        </div>
    );
};

export default Wheel;
