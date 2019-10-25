import { removeLocalStorage } from 'utils/helpers'

// Création de Compte Client
export const SET_USER_CONNECTED = 'app/user/SET_USER_CONNECTED'
export const REQUEST_LOGIN_USER = 'app/user/REQUEST_LOGIN_USER'
// Déconnexion du Compte Client
export const LOGOUT_USER = 'app/user/LOGOUT_USER'

export function setUserConnected(isUserConnected) {
  return {
    type: SET_USER_CONNECTED,
    payload: { isUserConnected },
  }
}

/* ============================================================
 * Connexion au Compte Client
 * ============================================================ */
/**
 * @param {{ email: string, password: string }} userLogin
 * @param {function} onSuccess callback exécutée si retour en SUCCESS de l'API
 * @param {function} onError callback exécutée si retour en ERROR de l'API
 */
export function requestLoginUser(userLogin, onError) {
  return {
    type: REQUEST_LOGIN_USER,
    payload: { userLogin, onError },
  }
}

/* ============================================================
 * Déconnexion du Compte Client
 * ============================================================ */
export function logoutUser() {
  removeLocalStorage()
  return {
    type: LOGOUT_USER,
  }
}
