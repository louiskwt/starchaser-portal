import { useContext, useEffect, useState } from "react";
import { FirestoreContext } from "../context/FirestoreContext";

interface ResourceContentProps {
  title: string;
}

const ResourceContent = ({ title = "" }: ResourceContentProps) => {
  const { fetchSpecificResource } = useContext(FirestoreContext);
  const [resource, setResource] = useState<any>({});
  useEffect(() => {
    fetchSpecificResource(title).then((res) => {
      setResource(res);
      console.log(resource);
    });
  }, []);

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
            精讀學習資源:
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
