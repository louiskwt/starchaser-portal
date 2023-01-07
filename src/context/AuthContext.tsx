import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/config";

export interface AuthContextProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

export interface UserInfo {
  name: string;
  role: "student" | "teacher";
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export interface AuthContextState {
  auth: Auth;
  user: User | null;
  signInWithEmail: (email: string, password: string) => void;
  signInWithGoogle: () => void;
  signUp: (email: string, password: string, name: string) => void;
  logOut: () => Promise<void>;
  setUser: (user: User | null) => void;
  userInfo: UserInfo | null;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

export function useAuth(): AuthContextState {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthContextProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  async function getUserInfo(userId: string) {
    const docRef = doc(db, "members", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserInfo({
        name: docSnap.data().name,
        role: docSnap.data().role,
      });
    }
  }

  async function writeStudentData(userId: string, name: string, email: string) {
    const docRef = doc(db, "members", userId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        userId: userId,
        name: name,
        email: email,
        role: "student",
      });
    }
  }

  function signUp(email: string, password: string, name: string): void {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        writeStudentData(res.user.uid, name, email);
        setUserInfo({
          name: name,
          role: "student",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }

  function signInWithEmail(email: string, password: string): void {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        getUserInfo(res.user.uid);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function signInWithGoogle(): void {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const username = user.displayName || "guest_student";
        writeStudentData(user.uid, username, user?.email || "");
        getUserInfo(user.uid);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function logOut() {
    setUser(null);
    setUserInfo(null);
    return signOut(auth);
  }
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getUserInfo(user.uid);
      } else {
        navigate("/login");
      }
    });
    return () => authCheck();
  }, [auth]);

  const values = {
    user,
    signUp,
    signInWithEmail,
    logOut,
    auth,
    setUser,
    signInWithGoogle,
    userInfo,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
