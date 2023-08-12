import { Parser } from "@json2csv/plainjs";
import { Button } from "rsuite";
import { PaymentsType } from "../../../monthly/types/PaymentsType";
import { PredictCost } from "~/gql/graphql";

export const CsvDownload = ({
  predictCosts,
}: {
  predictCosts: PredictCost[] | undefined;
}) => {
  const download = () => {
    try {
      const opts = {};
      const parser = new Parser(opts);
      const csv = parser.parse(predictCosts ?? []);
      const blob = new Blob([csv], { type: "text/csv" });
      const fileUrl = window.URL.createObjectURL(blob);
      return fileUrl;
    } catch (err) {
      throw new Error(`${err}`);
    }
  };
  return (
    <>
      <Button href={download()}>download</Button>
    </>
  );
};
