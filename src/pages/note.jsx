import {useParams} from "react-router-dom";
import {Table} from "../components";
import {useNotes} from "../hooks";

export const NotePage = () => {
  const {noteId} = useParams();
  const {notes} = useNotes();
  const note = notes.find((n) => (n.id = noteId)) || {};

  const {vocabulary} = note;

  const VOCAB_TABLE_KEYS = ["Item", "Meaning", "Example"];

  const vocabData = Object.keys(vocabulary).map((key) => {
    const meaning = vocabulary[key].split("/")[0] || "";
    const example = vocabulary[key].split("/")[1] || "";
    return {
      item: key,
      meaning,
      example,
    };
  });

  console.log(note);

  return (
    <>
      <div className="flex flex-col justify-center w-full p-12">
        <div className="w-full divide-y-8 mb-4">
          <h1 className="text-3xl font-bold text-left">{note.title}</h1>
        </div>
        <div className="w-full" id="main-topic">
          <h2 className="text-2xl font-bold text-left">{note.topic.heading}</h2>
          <ol className="list-decimal list-inside mt-2 mb-4">
            {note.topic.ideas.map((idea, index) => (
              <li className="mb-2" key={index}>
                {idea}
              </li>
            ))}
          </ol>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul>
            {Object.keys(note.topic.resources).map((key, id) => {
              return (
                <li key={id} className="link">
                  <a href={note.topic.resources[key]}>{key}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-8" id="vocabulary">
          <h2 className="text-2xl font-bold text-left">Vocab Table</h2>
          <Table data={vocabData} keys={VOCAB_TABLE_KEYS} />
        </div>
        <div className="mt-8" id="grammar">
          <h2 className="text-2xl font-bold text-left">Grammar Section</h2>
        </div>
        <div className="mt-8" id="video">
          <h2 className="text-2xl font-bold text-left">Video</h2>
        </div>
        <div className="mt-8" id="link">
          <h2 className="text-2xl font-bold text-left">Link to Notes</h2>
        </div>
      </div>
    </>
  );
};
