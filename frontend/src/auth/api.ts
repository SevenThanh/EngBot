//all functions that require the FirebaseApp go here

import {
    initializeAuth,
    debugErrorMap,
    browserSessionPersistence
} from "firebase/auth"
import { initializeApp } from "firebase/app"

const config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)
export const app = initializeApp(config)

export function initAuth() {
    initializeAuth(app, {
        errorMap: debugErrorMap, //if we ever deploy for production switch to prodErrorMap
        persistence: browserSessionPersistence,
    })
}
