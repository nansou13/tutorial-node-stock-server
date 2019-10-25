import {
  // Création de Compte Client
  SET_USER_CONNECTED,
  // Déconnexion du Compte Client
  LOGOUT_USER,
} from 'actions/user.action'

const DEFAULT_VALUES = {
  isUserConnected: null,
  userInfos: {},
}

export default function user(state = DEFAULT_VALUES, action) {
  const { payload, type } = action

  switch (type) {
    case SET_USER_CONNECTED:
      return {
        ...state,
        isUserConnected: payload.isUserConnected,
      }
    /* ============================================================
     * Déconnexion du Compte Client
     * ============================================================ */
    case LOGOUT_USER:
      return {
        ...state,
        isUserConnected: false,
        userInfos: DEFAULT_VALUES.userInfos,
      }

    /* ============================================================
     * DEFAULT
     * ============================================================ */
    default:
      return state
  }
}
