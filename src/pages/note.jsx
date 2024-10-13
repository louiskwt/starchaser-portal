import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Meme, Table} from "../components";
import {useAuth, useNotes} from "../hooks";

export const NotePage = () => {
  const {noteId} = useParams();
  const {notes} = useNotes();
  const {updateActiveDay} = useAuth();
  const note = notes.find((n) => (n.id = noteId)) || {};

  useEffect(() => {
    updateActiveDay();
  }, []);

  const {vocabulary, topic, title, links, videos} = note;
  const {heading, ideas, resources = {}} = topic;

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

  const resourceList = Object.keys(resources);

  const resourceElements =
    resourceList.length > 0 ? (
      resourceList.map((key, id) => {
        return (
          <li key={id} className="link text-lg link-primary">
            <a href={resources[key]} target="_blank">
              {key}
            </a>
          </li>
        );
      })
    ) : (
      <Meme text={"nothing_to_see"} />
    );

  return (
    <div className="flex flex-col justify-center md:items-start md:w-full p-12">
      <div className="w-full divide-y-8 mb-4">
        <h1 className="text-3xl font-bold text-left">{title}</h1>
      </div>
      <div className="w-full" id="main-topic">
        <h2 className="text-2xl font-bold text-left">{heading}</h2>
        <ol className="list-decimal list-inside mt-2 mb-4">
          {ideas.map((idea, index) => (
            <li className="mb-2 text-lg" key={index}>
              {idea}
            </li>
          ))}
        </ol>
        <h2 className="text-xl font-semibold mb-4">Resources</h2>
        <ul className="px-4">{resourceElements}</ul>
      </div>
      <div className="mt-8" id="vocabulary">
        <h2 className="text-2xl font-bold text-left">Vocab Table</h2>
        <Table data={vocabData} keys={VOCAB_TABLE_KEYS} />
      </div>
      <div className="mt-8" id="video">
        <h2 className="text-2xl font-bold text-left">Videos</h2>
        {!videos || videos.length === 0 ? (
          <div className="my-4">
            <h2 className="text-lg font-bold">Oops! No videos yet...</h2>
          </div>
        ) : (
          videos.map((link, index) => {
            return (
              <div className="my-4" key={index}>
                <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            );
          })
        )}
      </div>
      <div className="mt-8" id="link">
        <h2 className="text-2xl font-bold text-left">Links to Notes</h2>
        <div className="mt-4 p-4">
          <h1 className="text-lg font-semibold">
            If you want to challege yourself, take a look at the notes labeld as "More". <br />
            But if you don't feel comofrable, feel free to work on the one labeld as "Less".
          </h1>
          <ul className="list-disc px-4">
            <li className="px-4 mt-4 text text-lg">
              <a className="link link-secondary" href={links.more} target="_blank">
                Notes (More)
              </a>
            </li>

            <li className="px-4 mt-4 text-lg">
              <a className="link link-accent" href={links.less}>
                Notes (Less)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
