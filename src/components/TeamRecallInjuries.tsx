import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Link } from "react-router-dom";

interface RecallData {
  teamImage: string | undefined;
  playerName: string;
  recall: string;
  link: string;
}

interface InjuryData {
  teamImage: string | undefined;
  name: string;
  injury: string;
  link: string;
}

export default function TeamRecallInuries(props: {
  recallData?: RecallData[];
  injuryData?: InjuryData[];
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-md-stretch">
        {/* Recalls & Reassignments Section */}
        <div className="col-lg-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2 className="text-center">Recalls & Reassignments</h2>
            <TableContainer className="table">
              <Table aria-label="simple table">
                <TableBody>
                  {props.recallData?.map((row) => (
                    <TableRow
                      key={row.playerName}
                      sx={{
                        "&:last-child td, &:last-child th": null,
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Link to={row.link}>
                          <img
                            src={row.teamImage}
                            alt="Team Logo"
                            style={{
                              height: "15px",
                              width: "15px",
                              marginRight: "5px",
                              marginTop: "-2px",
                            }}
                          />
                          {row.playerName}
                        </Link>
                      </TableCell>
                      <TableCell align="center">{row.recall}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <button
              className="btn btn-outline-secondary btn-block"
              type="button"
            >
              See All
            </button>
          </div>
        </div>

        {/* Injuries Section */}
        <div className="col-lg-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2 className="text-center">Injuries</h2>
            <TableContainer className="table">
              <Table aria-label="simple table">
                <TableBody>
                  {props.injuryData?.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": null,
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Link to={row.link}>
                          <img
                            src={row.teamImage}
                            alt="Team Logo"
                            style={{
                              height: "15px",
                              width: "15px",
                              marginRight: "5px",
                              marginTop: "-2px",
                            }}
                          />
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="center">{row.injury}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <button
              className="btn btn-outline-secondary btn-block"
              type="button"
            >
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
