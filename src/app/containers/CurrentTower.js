import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tower from '../view/components/GamePanel/Tower';
import * as towerActions from '../actions/towerActions';

const mapStateToProps = (state) => ({
    tower: state.tower
});

const mapDispatchToProps = (dispatch) => ({
    towerActions: bindActionCreators(towerActions, dispatch)
});

const CurrentTower = connect(
    mapStateToProps, mapDispatchToProps
)(Tower);

export default CurrentTower;