export const Table = ({data, keys}) => {
  const tableHead = keys.map((key, index) => {
    return (
      <th key={index} className="text-lg font-bold">
        {key}
      </th>
    );
  });

  const tableRows = data.map((d, index) => {
    return (
      <tr key={index}>
        <th className="text-lg font-semibold">{index}</th>
        {Object.keys(d).map((k, index) => {
          return (
            <td key={index} className="text-lg font-semibold">
              {d[k]}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {tableHead}
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};
