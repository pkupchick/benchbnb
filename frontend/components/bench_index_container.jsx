import BenchIndex from "./bench_index.jsx";
import { fetchBenches } from '../actions/bench_actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
    benches: Object.values(state.entities.benches)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    fetchBenches: () => dispatch(fetchBenches())
}};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BenchIndex);