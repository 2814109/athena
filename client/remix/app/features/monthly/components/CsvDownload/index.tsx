import { Parser } from "@json2csv/plainjs";
import { Button } from "rsuite";

export const CsvDownload = () => {
  const data = [
    { carModel: "Audi", price: 0, color: "blue" },
    { carModel: "BMW", price: 15000, color: "red", manual: true },
    { carModel: "Mercedes", price: 20000, color: "yellow" },
    { carModel: "Porsche", price: 30000, color: "green" },
  ];
  const download = () => {
    try {
      const opts = { fields: ["carModel", "price", "color"] };
      const parser = new Parser(opts);
      const csv = parser.parse(data);
      console.log(csv);
      const blob = new Blob([csv], { type: "text/csv" });
      const fileUrl = window.URL.createObjectURL(blob);
      return fileUrl;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Button href={download()}>download</Button>
    </>
  );
};
