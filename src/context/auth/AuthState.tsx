import React, {createContext, ReactElement, useContext, useReducer} from 'react'
import {Wallet} from '../../interfaces'
import AuthReducer from './AuthReducer'


export interface AuthInitialState {
  username: string
  wallets: Wallet[]
  isAuth?: boolean
}

export interface AuthContextValue extends AuthInitialState {
  logoutAction: () => void
  loginAction: (p: AuthInitialState) => void
}

export const initialState: AuthInitialState = {
  wallets: [],
  username: '',
  isAuth: false
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

const AuthState = ({children}: {children: ReactElement}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const loginAction = (payload: AuthInitialState) => {
    dispatch({ type: 'LOGIN', payload })
  }

  const logoutAction = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider value={{...state, loginAction, logoutAction}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthState
