import LinkSection from "./LinkSection";

const Resources = () => {
  const mockData = [
    {
      heading: "Reading",
      links: [
        {
          text: "Week 1",
          path: "/resources/week1",
        },
        {
          text: "Week 2",
          path: "/resources/week2",
        },
        {
          text: "Week 3",
          path: "/resources/week3",
        },
        {
          text: "Week 4",
          path: "/resources/week4",
        },
      ],
    },
    {
      heading: "Writing",
      links: [
        {
          text: "Week 1",
          path: "/resources/week1",
        },
        {
          text: "Week 2",
          path: "/resources/week2",
        },
        {
          text: "Week 3",
          path: "/resources/week3",
        },
        {
          text: "Week 4",
          path: "/resources/week4",
        },
      ],
    },
  ];

  return (
    <section className="w-full h-screen">
      <div
        id="main"
        className="main-content w-full h-full screen flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">Resources</h1>
          </div>
        </div>
        <div></div>
        <div className="w-full px-16 mx-auto mt-12">
          <h1 className="mb-4 text-xl font-semibold text-gray-900 ">
            精讀學習資源:
          </h1>

          {mockData.map((section, index) => {
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
