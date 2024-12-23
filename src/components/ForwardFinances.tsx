import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";

type ForwardData = {
  name: string;
  terms: string;
  pos: string;
  status: string;
  acquired: string;
  age: number;
  cap: string;
  year2024: string;
  year2025: string;
  year2026: string;
  year2027: string;
  year2028: string;
  year2029: string;
  link: string;
};

type ForwardContractsTableProps = {
  forwardData: ForwardData[]; // Array of ForwardData objects
};

const ForwardContractsTable: React.FC<ForwardContractsTableProps> = ({
  forwardData,
}) => {
  return (
    <div>
      <TableContainer className="table">
        <Table aria-label="player table">
          <TableHead>
            <TableRow className="tableTop">
              <TableCell scope="col" className="tableTitle">
                FORWARDS (12 - $46,754,524)
              </TableCell>
              <TableCell scope="col" className="tableTitle text-center">
                TERMS
              </TableCell>
              <TableCell scope="col" className="tableTitle text-center">
                POS
              </TableCell>
              <TableCell scope="col" className="tableTitle text-center">
                STATUS
              </TableCell>
              <TableCell scope="col" className="tableTitle text-center">
                ACQUIRED
              </TableCell>
              <TableCell scope="col" className="tableTitle text-center">
                AGE
              </TableCell>
              <TableCell scope="col" className="tableTitle text-center">
                CAP%
              </TableCell>
              {[
                "2024-25",
                "2025-26",
                "2026-27",
                "2027-28",
                "2028-29",
                "2029-30",
              ].map((year) => (
                <TableCell
                  key={year}
                  scope="col"
                  className="tableTitle text-center"
                >
                  {year}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {forwardData.map((row) => (
              <TableRow
                key={row.name}
                className="text-center"
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell className="text-left">
                  {row.name !== "TOTAL" ? (
                    <Link to={row.link} className="playerName">
                      {row.name}
                    </Link>
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell className="text-center text-nowrap">
                  {row.terms}
                </TableCell>
                <TableCell className="text-center text-nowrap">
                  {row.pos}
                </TableCell>
                <TableCell className="text-center text-nowrap">
                  {row.status}
                </TableCell>
                <TableCell className="text-center text-nowrap">
                  {row.acquired}
                </TableCell>
                <TableCell className="text-center text-nowrap">
                  {row.age}
                </TableCell>
                <TableCell className="text-center text-nowrap">
                  {row.cap}
                </TableCell>
                {[
                  row.year2024,
                  row.year2025,
                  row.year2026,
                  row.year2027,
                  row.year2028,
                  row.year2029,
                ].map((year, index) => (
                  <TableCell
                    key={index}
                    className={
                      year === "UFA"
                        ? "redUFA text-center"
                        : year === "RFA"
                        ? "blueRFA text-center"
                        : ""
                    }
                  >
                    {year}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ForwardContractsTable;