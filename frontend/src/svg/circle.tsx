export const diametr = 5;
export const radius = diametr / 2;

export const svgCircle = <svg height={diametr} width={diametr} style={{position: "absolute"}}>
        <circle cx={radius} cy={radius} r={radius} fill="white"/>
    </svg>