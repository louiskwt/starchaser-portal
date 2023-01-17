import { ITable, ITaskKeys } from "../types";

const Table = ({ title, subheading, head, data }: ITable) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-gray-700">{title}</h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            {subheading && (
              <h5 className="font-semibold text-base text-gray-700">
                Date: {subheading}
              </h5>
            )}
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="items-center w-full border-collapse text-blueGray-700 ">
          <thead className="thead-light ">
            <tr>
              {head.map((item, index) => (
                <th
                  key={index}
                  className="px-6 w-4 bg-gray-50 text-gray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key, index) => {
                  if (key === "status") {
                    return (
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <div
                            style={{
                              paddingTop: "0.1em",
                              paddingBottom: "0.1rem",
                            }}
                            className={
                              item[key]
                                ? "text-sm px-3 bg-red-200 text-red-800 rounded-full"
                                : "text-sm px-3 bg-green-200 text-green-800 rounded-full"
                            }
                          >
                            {item[key] ? "Completed" : "In Progress"}
                          </div>
                        </div>
                      </td>
                    );
                  }

                  return (
                    <th
                      key={index}
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      {item[key as ITaskKeys]}
                    </th>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
