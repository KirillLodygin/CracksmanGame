import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FirstInterface from '../view/components/FirstInterface';
import * as firstInterfaceActions from '../actions/firstInterfaceActions';

const mapStateToProps = (state) => ({
    firstinterface: state.firstinterface
});

const mapDispatchToProps = (dispatch) => ({
    firstInterfaceActions: bindActionCreators(firstInterfaceActions, dispatch)
});

const CurrentFirstInterface = connect(
    mapStateToProps, mapDispatchToProps
)(FirstInterface);

export default CurrentFirstInterface;