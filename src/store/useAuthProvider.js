import { create } from "zustand";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../auth/firebaseCongig";

const provider = new GoogleAuthProvider();

export const useAuthProvider = create((set) => ({
  user: null,
  userLoading: false,
  actions: {
    setUser: (user) => {
      set((state) => ({ ...state, user: user }));
    },
    setUserLoading: (loadingState) => {
      set((state) => ({ ...state, userLoading: loadingState }));
    },
    signInWithGoogle: async () => {
      set((state) => ({ ...state, userLoading: true }));
      try {
        const userCredentials = await signInWithPopup(auth, provider);
        const user = userCredentials.user;

        set((state) => ({ ...state, user: user }));
        return user;
      } catch (error) {
        set((state) => ({ ...state, userLoading: false }));
        console.error("Error signing in with google", error);
      } finally {
        set((state) => ({ ...state, userLoading: false }));
      }
    },

    logOutOfGoogle: async () => {
      set((state) => ({ ...state, userLoading: true }));
      try {
        await signOut(auth);
      } catch (error) {
        console.log("Error logging out with google", error);
      } finally {
        set((state) => ({ ...state, userLoading: false }));
        window.location.reload();
      }
    },
  },
}));

export default useAuthProvider;
