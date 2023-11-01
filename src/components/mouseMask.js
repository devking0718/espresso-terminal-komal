import { useEffect, useState } from 'react';

export default function MouseMask() {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);


    const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');

    const handleMouseMove = (e) => {
        const x = Math.floor((e.clientX / window.innerWidth) * 255);
        const y = Math.floor((e.clientY / window.innerHeight) * 255);
        setMouseX(e.clientX - 50);
        setMouseY(e.clientY - 50);
        setBackgroundColor(`rgb(${x}, ${y}, 50)`);
    };

    useEffect(() => {

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="mouse-mask" style={{ backgroundColor, boxShadow: `0 0 50px 75px ${backgroundColor}`, left: `${mouseX}px`, top: `${mouseY}px` }}></div>
    )
}