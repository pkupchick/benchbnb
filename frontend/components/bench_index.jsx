import React from 'react';
import { updateMarkers } from '../util/marker_manager';

class BenchIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        const benches = Object.values(this.props.benches) || [];
        const benchesLi = benches.map((bench, idx) => {
            return <li key={idx}>{bench.description}</li>;
        });
        return (
            <ul>
                {benchesLi}
            </ul>
        )
    }
}

export default BenchIndex;