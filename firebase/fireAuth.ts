import { getAuth } from 'firebase/auth';
import firebase from './firebase';

const fireAuth = getAuth(firebase);

export default fireAuth;
