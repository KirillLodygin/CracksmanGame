import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Reredos from '../view/components/Reredos';
import * as reredosActions from '../actions/reredosActions';

const mapStateToProps = (state) => ({
    reredos: state.reredos
});

const mapDispatchToProps = (dispatch) => ({
    reredosActions: bindActionCreators(reredosActions, dispatch)
});

const CurrentReredos = connect(
    mapStateToProps, mapDispatchToProps
)(Reredos);

export default CurrentReredos;