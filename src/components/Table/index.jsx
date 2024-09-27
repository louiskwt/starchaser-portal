export const Table = ({data, keys}) => {
  const tableHead = keys.map((key, index) => {
    return <th key={index}>{key}</th>;
  });

  const tableRows = data.map((d, index) => {
    return (
      <tr key={index}>
        <th>{index}</th>
        {Object.keys(d).map((k, index) => {
          return <td key={index}>{d[k]}</td>;
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
