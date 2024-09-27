import {useParams} from "react-router-dom";

export const NotePage = () => {
  const {noteId} = useParams();
  console.log("note", noteId);
  return <></>;
};
