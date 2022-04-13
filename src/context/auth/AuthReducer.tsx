import { AuthInitialState, initialState } from './AuthState'

type Action = { type: 'LOGOUT' } | {type: 'LOGIN'; payload: AuthInitialState}

const AuthReducer = (state: AuthInitialState, action: Action): AuthInitialState => {
  switch (action.type) {
    case 'LOGIN':
      return {...action.payload, isAuth: true}

    case 'LOGOUT':
      return {...initialState, isAuth: false}

    default:
      return state
  }
}

export default AuthReducer
