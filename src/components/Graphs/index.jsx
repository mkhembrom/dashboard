import './graphs.css'

import { LineGraph } from "../LineGraph";
import { PieGraph } from "../PieGraph";

export const Graphs = () => {
    return (
        <div className="graph">
            <div className="one_graph">
                <LineGraph />
            </div>
            <div className="two_graph">
                <PieGraph />
            </div>
        </div>
    );
}