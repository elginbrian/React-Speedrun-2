import { db } from "../api/Firebase";
import { setDoc, doc } from "firebase/firestore";

export async function SetDoc(email) {
  try {
    await setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  } catch (error) {
    console.error("Error setting Firestore document:", error);
    throw error;
  }
}

export const FirestoreContextProvider = ({ children }) => {
  return <>{children}</>;
};
