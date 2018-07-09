import firebase from 'firebase/app'

import Rebase from 're-base'
import 'firebase/database'

// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}

const app = firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

const db = firebase.database(app)
const base = Rebase.createClass(db)
export default base