import { Parser } from "@json2csv/plainjs";
import { Button } from "rsuite";
import { PaymentsType } from "../../types/PaymentsType";

export const CsvDownload = ({ payments }: PaymentsType) => {
  const download = () => {
    try {
      const opts = {};
      const parser = new Parser(opts);
      const csv = parser.parse(payments ?? []);
      const blob = new Blob([csv], { type: "text/csv" });
      const fileUrl = window.URL.createObjectURL(blob);
      return fileUrl;
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
    }
  };
  return (
    <>
      <Button href={download()}>download</Button>
    </>
  );
};
