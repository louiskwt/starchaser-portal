import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { FirestoreContext, IResourceDoc } from "../context/FirestoreContext";
import VideoPlayer from "./VideoPlayer";

interface ResourceContentProps {
  title: string;
}

const ResourceContent = ({ title = "" }: ResourceContentProps) => {
  const { fetchSpecificResource } = useContext(FirestoreContext);
  const [resource, setResource] = useState<IResourceDoc>({
    path: "",
    text: "",
    type: "",
    vidUrl: "",
    content: "",
  });
  useEffect(() => {
    const resourceData = fetchSpecificResource(title);
    resourceData.then((data) => {
      console.log(data[0]["content"]);
      setResource(data[0]);
    });
  }, [title]);

  const test = `# This is a header ello \n hey`;

  return (
    <section className="w-full h-screen">
      <div
        id="main"
        className="main-content w-full h-screen flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">{title}</h1>
          </div>
        </div>
        <div></div>
        <div className="w-full px-16 mx-auto mt-12">
          <h1 className="mb-4 text-xl font-semibold text-gray-900 ">
            {resource.text}
          </h1>

          {resource.vidUrl && <VideoPlayer vidUrl={resource.vidUrl} />}
          <article className="prose mt-12">
            <ReactMarkdown>{test}</ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
