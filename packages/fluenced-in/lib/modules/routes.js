import { addRoute } from 'meteor/vulcan:core'
import UserForm from '../components/UserForm.jsx'

addRoute({ name: 'movies', path: '/', component: UserForm })
