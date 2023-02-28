import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
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
import { toast } from "react-toastify";
import { auth, db } from "../config/config";
import { authError } from "../config/errorTypes";

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
  role: "student" | "teacher" | "guest";
  activated: boolean;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export interface AuthContextState {
  auth: Auth;
  user: User | null;
  signInWithEmail: (email: string, password: string) => Promise<boolean>;
  signInWithGoogle: () => void;
  signUp: (
    email: string,
    password: string,
    name: string,
    invitationCode: string,
    dseYear: number,
    phoneNum: number
  ) => void;
  logOut: () => Promise<void>;
  setUser: (user: User | null) => void;
  setStudentProfile: (
    userId: string,
    name: string,
    email: string,
    dseYear: number,
    phoneNum: number,
    invitationCode: string
  ) => void;
  userInfo: UserInfo | null;
  resetPassword: (email: string) => void;
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

  async function verifyOAuthUser(userId: string, email: string) {
    const docRef = doc(db, "members", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserInfo({
        name: docSnap.data().name,
        role: docSnap.data().role,
        activated: docSnap.data().isActivated,
      });
      navigate("/");
    } else {
      setUserInfo({
        name: "",
        role: "guest",
        activated: false,
      });
      navigate("/set-profile", {
        replace: true,
        state: {
          from: "login",
          userId: userId,
          email: email,
        },
      });
    }
  }

  async function checkUser(userId: string, email: string) {
    const docRef = doc(db, "members", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserInfo({
        name: docSnap.data().name,
        role: docSnap.data().role,
        activated: docSnap.data().isActivated,
      });
    } else {
      navigate("/set-profile", {
        state: {
          from: "login",
          userId: userId,
          email: email,
        },
      });
    }
  }

  async function writeStudentData(
    userId: string,
    name: string,
    email: string,
    dseYear: number,
    phoneNum: number
  ) {
    const docRef = doc(db, "members", userId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      const thisYear = new Date().getFullYear();
      try {
        await setDoc(docRef, {
          userId: userId,
          name: name,
          email: email,
          role: "student",
          isDSER: thisYear === dseYear,
          points: 0,
          isActivated: true,
          lessonDate: new Date(),
          nextDse: dseYear,
          phoneNum: phoneNum,
        });
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }
  }

  async function setStudentProfile(
    userId: string,
    name: string,
    email: string,
    dseYear: number,
    phoneNum: number,
    invitationCode: string
  ) {
    const docRef = doc(db, "admin", "registration");

    try {
      const doc = await getDoc(docRef);
      if (doc.exists() && doc.data()?.invitationCode === invitationCode) {
        await writeStudentData(userId, name, email, dseYear, phoneNum);
        setUserInfo({
          name: name,
          role: "student",
          activated: true,
        });
        navigate("/");
      } else {
        toast.error("Invalid Invitation Code");
      }
    } catch (error) {
      navigate("/login");
      toast.error("Something went wrong; please try again later 😢");
    }
  }

  function signUp(
    email: string,
    password: string,
    name: string,
    invitationCode: string,
    dseYear: number,
    phoneNum: number
  ): void {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      const docRef = doc(db, "admin", "registration");
      getDoc(docRef)
        .then((docSnap) => {
          if (
            docSnap.exists() &&
            docSnap.data()?.invitationCode === invitationCode
          ) {
            writeStudentData(res.user.uid, name, email, dseYear, phoneNum)
              .then(() => {
                setUserInfo({
                  name: name,
                  role: "student",
                  activated: true,
                });
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
                toast.error(error.message);
              });
          } else {
            throw new Error("請先取得邀請碼然後再繼續！");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    });
  }

  function signInWithEmail(email: string, password: string): Promise<boolean> {
    const success: Promise<boolean> = signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((res) => {
        checkUser(res.user.uid, res.user.email || "");
        return true;
      })
      .catch((error) => {
        toast.error("Invalid Password or Email");
        console.log(error.message);
        return false;
      });
    return success;
  }

  function signInWithGoogle(): void {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        verifyOAuthUser(user.uid, user?.email || "");
        setUser(user);
      })
      .catch((error) => {
        switch (error.message) {
          case authError.USER_CANCELLED:
            console.log("User cancelled the login flow");
            break;
          case authError.USER_CLOSED:
            console.log("User closed the popup"); // possible for logging
            break;
          default:
            console.log(error.message);
            toast.error("Something went wrong; please try again later 😢");
        }
      });
  }

  function logOut() {
    setUser(null);
    setUserInfo(null);
    return signOut(auth);
  }

  function resetPassword(email: string): void {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "Reset password email sent! Please check your email and reset your password"
        );
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        checkUser(user.uid, user.email || "");
        setUser(user);
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
    setStudentProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
