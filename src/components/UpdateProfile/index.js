import { connect } from 'react-redux'
import UpdateProfile from './UpdateProfile'
import CreateLogoutAction from '../../actions/LogoutAction'

const mapStateToProps = state => ({ user : state })
const mapDispatchToProps = dispatch => ({onLogoutClick: () => dispatch(CreateLogoutAction())})

export default UpdateProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)