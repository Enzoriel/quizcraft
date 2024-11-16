import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function saveUserName(userName) {
  try {
    await setDoc(doc(db, "users"), {
      name: userName,
    });
    console.log("Nombre guardado con éxito!");
  } catch (error) {
    console.error("Error guardando el nombre: ", error);
  }
}

export default saveUserName;
