import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../config/config";

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
        .then((downloadUrl) => {
          // update db
          setDoc(doc(db, "tasks", path), {
            name: path,
            url: downloadUrl,
            status: "pending",
          });

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
