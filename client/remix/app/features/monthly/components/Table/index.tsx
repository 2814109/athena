// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
//   getPaginationRowModel,
// } from "@tanstack/react-table";

import { PaymentsType } from "../../types/PaymentsType";
import { PaymentRow } from "./row";
import { Payment } from "~/gql/graphql";

export const Table = ({ payments }: PaymentsType) => {
  //   type User = {
  //     firstName: string;
  //     lastName: string;
  //     age: number;
  //   };
  //   const data: User[] = [
  //     {
  //       firstName: "太郎",
  //       lastName: "山田",
  //       age: 42,
  //     },
  //     {
  //       firstName: "花子",
  //       lastName: "山田",
  //       age: 30,
  //     },
  //   ];

  //   const columns = [
  //     {
  //       accessorKey: "firstName",
  //       header: "名",
  //     },
  //     {
  //       accessorKey: "lastName",
  //       header: "姓",
  //     },
  //     {
  //       accessorKey: "age",
  //       header: "年齢",
  //     },
  //   ];
  //   const table = useReactTable({
  //     data,
  //     columns,
  //     getCoreRowModel: getCoreRowModel(),
  //   });
  return (
    <>
      {/* <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}

      {payments?.map((payment) => (
        <PaymentRow payment={payment as Payment} />
      ))}
    </>
  );
};
