import { useEffect, useState } from 'react';
import { Button, Card } from "react-bootstrap"

export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(prevCount => prevCount + 1);
    }, [clickCount]);

    const showCurrentTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
        setClickCount(prevCount => prevCount + 1);
        console.log("Click count : ", clickCount + 1)
    };

    return (
        <>
            <Button className=" mb-3" onClick={showCurrentTime}>Show current time</Button>
            {currentTime && <div className="text-white">Current Time: {currentTime}</div>}
            <div className="text-white">Component Render Count: {renderCount}</div>
        </>
    )
}