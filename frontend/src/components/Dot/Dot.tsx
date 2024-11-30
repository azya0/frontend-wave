import { Dot as DotData} from "../../utils/dot"
import { svgCircle } from "../../svg/circle";

interface Prop {
    dot: DotData
}

function Dot({ dot } : Prop) {
    var position = dot.Position();

    return (
        <div className="dot" style={
            {
                position: "absolute",
                width: 2 * dot.Radius(),
                height: 2 * dot.Radius(),
                left: position.x,
                top: position.y,
            }
        }>
        { svgCircle }
        </div>
    );
}

export default Dot;
