import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXKsPJNHUl3iJCFh8cd3B6eXInv7Pcvgw",
    authDomain: "nfc-2021.firebaseapp.com",
    projectId: "nfc-2021",
    storageBucket: "nfc-2021.appspot.com",
    messagingSenderId: "323157389509",
    appId: "1:323157389509:web:c0aedf90bc1618c8e5c0ac",
    measurementId: "G-QVPH5WGX7Y"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
const providerGoogle = new firebase.auth.GoogleAuthProvider()
const providerApple = new firebase.auth.OAuthProvider('apple.com')
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.

providerGoogle.setCustomParameters({ prompt: 'select_account' })
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle)
export const signInWithApple = () => auth.signInWithPopup(providerApple)
export const getIDToken = async () => auth.currentUser.getIdToken(true)
export const getCurrentUser = async () => auth.currentUser
export const removeUser = () => auth.currentUser.delete()
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

export default firebase
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.