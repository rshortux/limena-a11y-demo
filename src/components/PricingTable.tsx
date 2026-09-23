// Shipping rate table. No <caption>, so the table has no accessible
// name and a screen reader user landing on it has no way to know what
// it describes before reading the cells.
interface Row { region: string; standard: string; express: string }

const ROWS: Row[] = [
  { region: "Ontario",           standard: "$6.00",  express: "$14.00" },
  { region: "Quebec",            standard: "$6.00",  express: "$14.00" },
  { region: "British Columbia",  standard: "$9.00",  express: "$19.00" },
  { region: "Prairies",          standard: "$8.00",  express: "$17.00" },
  { region: "Atlantic",          standard: "$9.00",  express: "$19.00" },
  { region: "Territories",       standard: "$22.00", express: "$41.00" },
];

export function PricingTable() {
  return (
    <table className="pricing-table">
      <thead>
        <tr>
          <th scope="col">Region</th>
          <th scope="col">Standard</th>
          <th scope="col">Express</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.region}>
            <th scope="row">{r.region}</th>
            <td>{r.standard}</td>
            <td>{r.express}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
