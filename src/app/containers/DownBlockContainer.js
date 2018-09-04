import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DownBlock from '../view/components/DownBlock/DownBlock';
import * as downBlockActions from '../actions/downBlockActions';

const mapStateToProps = (state) => ({
    downblock: state.downblock
});

const mapDispatchToProps = (dispatch) => ({
    downBlockActions: bindActionCreators(downBlockActions, dispatch)
});

const DownBlockContainer = connect(
    mapStateToProps, mapDispatchToProps
)(DownBlock);

export default DownBlockContainer;