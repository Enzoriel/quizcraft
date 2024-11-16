import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function createRoom(name, config, password) {
  try {
    const docRef = await addDoc(collection(db, "futquiz"), {
      name,
      config,
      password,
    });
    console.log("Sala creada con ID:", docRef.id);
  } catch (error) {
    console.error("Error creando la sala:", error);
  }
}

export default createRoom;
