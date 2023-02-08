import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/config";

export function uploadFile(
  file: File,
  path: string,
  uploadStateHandler: Function,
  toast: Function
) {
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      console.log(snapshot.state);
      if (snapshot.state === "running") {
        uploadStateHandler(true);
      }
    },
    (err) => {
      console.log(err);
      toast(false);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          console.log(downloadURL);
          uploadStateHandler(false);
          toast(true);
        })
        .catch((error) => {
          console.log(error);
          toast(false);
        });
    }
  );
}
