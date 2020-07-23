import React from 'react';

class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        const benches = this.props.benches.map((bench, idx) => {
            return <li key={idx}>{bench.description}</li>;
        });
        return (
            <ul>
                {benches}
            </ul>
        )
    }
}

export default BenchIndex;