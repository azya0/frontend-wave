import { useEffect, useState } from "react"
import { noise } from "../../perlin/perlin"

import { Dot as DotData } from "../../utils/dot"
import Field from "../Field/Field"
import { radius } from "../../svg/circle";

var mooving = 0;
const baseSpeed = 0.0001;
var speed = 2 * baseSpeed;

function Controller() {
    const numberOfDots = 50;

    const [dots, setDots] = useState<Array<DotData>>();
    const [distances, setDistances] = useState<{x: number, y: number}>();
    const [spaces, setSpaces] = useState<{x: number, y: number}>();
    
    const handleResize = () => {
        setDistances({
            x: window.innerWidth,
            y: window.innerHeight,
        });

        setSpaces({
            x: window.innerWidth / numberOfDots,
            y: window.innerHeight / numberOfDots
        });
    };

    useEffect(() => {
        console.log("rerender");

        if (distances === undefined || spaces === undefined) {
            handleResize();
            window.addEventListener('resize', handleResize);
            return;
        }
        
        let dotsArray = Array<DotData>();
        for (let xIndex = 0; xIndex < numberOfDots; xIndex++) {
            for (let yIndex = 0; yIndex < numberOfDots; yIndex++) {
                dotsArray.push(new DotData(xIndex * spaces.x, yIndex * spaces.y, radius));
            }
        }

        setDots(dotsArray);
    }, [distances]);

    useEffect(() => {
        if (spaces === undefined) {
            return
        }

        let dotsArray = Array<DotData>();
        for (let xIndex = 0; xIndex < numberOfDots; xIndex++) {
            for (let yIndex = 0; yIndex < numberOfDots; yIndex++) {
                var value = (noise((xIndex + mooving) / 20, yIndex / 10) - 0.5) * 200;
                mooving += speed;
                dotsArray.push(new DotData(xIndex * spaces.x + value, yIndex * spaces.y + value, radius));
            }
        }
        setDots(dotsArray);
    }, [dots]);

    if (dots === undefined || distances === undefined || spaces === undefined) {
        return null;
    }

    return (
    <div style={{position: "absolute", left: `${distances.x / numberOfDots / 2}px`, top: `${distances.y / numberOfDots / 2}px`}}>
        <Field dots={dots}/>
        <div id="speed-scroll-container">
            <input
                type="range" 
                min={0}
                max={4 * baseSpeed} 
                step={baseSpeed / 10000}
                value={speed}
                onChange={(event) => { speed = parseFloat(event.target.value) }}
                style={{ width: distances.x * 0.85 }}
            />
        </div>
    </div>
    );
}

export default Controller;