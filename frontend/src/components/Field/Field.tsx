import { Dot as DotData } from "../../utils/dot"
import Dot from "../Dot/Dot"

interface Prop {
    dots: Array<DotData>,
}

function Field({ dots } : Prop) {
    return (
    <div id="field">
        { dots.map(dot => <Dot dot={dot}/>) }
    </div>
    )
}

export default Field;