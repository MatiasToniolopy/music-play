import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Jazz", value: "jazz" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Cumbia", value: "cumbia" },
  { id: 5, name: "Blues", value: "blues" },
];

export const filterByLanguage = [
  { id: 1, name: "Español", value: "tamil" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "French", value: "malayalam" },
  { id: 4, name: "India", value: "Telungu" },
  { id: 5, name: "Arabe", value: "hindi" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
