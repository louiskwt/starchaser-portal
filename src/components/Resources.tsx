import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FirestoreContext,
  IResourceData,
  IResourceDoc,
} from "../context/FirestoreContext";
import LinkSection from "./LinkSection";

interface IResourceSection {
  heading: string;
  links: IResourceDoc[];
}

const Resources = () => {
  const { resources } = useContext(FirestoreContext);
  const [resourceData, setResourceData] = useState<IResourceSection[]>([]);

  function formatResources(resources: IResourceData) {
    const resourcesArr = [];
    for (const [key, v] of Object.entries(resources)) {
      if (v.length === 0) continue;
      resourcesArr.push({
        heading: key,
        links: v,
      });
    }
    return resourcesArr;
  }

  useEffect(() => {
    const formattedResources = formatResources(resources);
    setResourceData(formattedResources);
  }, [resources]);

  const { t } = useTranslation("resources");

  return (
    <section className="w-full">
      <div
        id="main"
        className="main-content w-full h-full flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">{t("title")}</h1>
          </div>
        </div>
        <div></div>
        <div className="flex flex-wrap p-4 mt-12">
          <h1 className="mb-4 text-xl font-semibold text-zinc-600 ">
            精讀學習資源:
          </h1>
          {resourceData.length > 0 &&
            resourceData.map((section, index) => {
              return (
                <LinkSection
                  key={index}
                  heading={section.heading}
                  links={section.links}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
