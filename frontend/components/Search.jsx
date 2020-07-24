import React from 'react';
import BenchMap from './BenchMap';
import BenchIndex from './bench_index';

const Search = ({ benches, fetchBenches }) => {
    return (
        <div>
            <BenchIndex 
                benches = {benches}
                fetchBenches = {fetchBenches} />
            <BenchMap />
        </div>
    );
}

export default Search;