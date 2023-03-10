const Error = () => {
  return (
    <section className="w-full h-screen">
      <div
        id="main"
        className="main-content w-full h-full flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">Error!</h1>
          </div>
        </div>

        <div className="w-full px-4 mx-auto mt-12">
          <div>
            <h1>Sorry, this page is not available now</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
