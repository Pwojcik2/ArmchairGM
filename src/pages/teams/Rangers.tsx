import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../home/App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  rangersDraftImg,
  rangersDraftImgTraded,
  minnesotaDraft,
  vancouverDraft,
} from "../../assets/Images";
import { NewRangersFinancesType } from "../../types/interfaceTypes";
import TeamFinances from "../../components/TeamFinances";
import TeamRecallInuries from "../../components/TeamRecallInjuries";
import ForwardFinances from "../../components/ForwardFinances";
import { ForwardData } from "../../types/interfaceTypes";

function createInjuries(name: string, injury: string, link: string) {
  return { name, injury, link };
}

function createRecalls(playerName: string, recall: string, link: string) {
  return { playerName, recall, link };
}

function createPlayer(
  name: string,
  terms: string,
  pos: string,
  status: string,
  acquired: string,
  age: number,
  cap: string,
  year2024: string,
  year2025: string,
  year2026: string,
  year2027: string,
  year2028: string,
  year2029: string,
  link: string
) {
  return {
    name,
    terms,
    pos,
    status,
    acquired,
    age,
    cap,
    year2024,
    year2025,
    year2026,
    year2027,
    year2028,
    year2029,
    link,
  };
}

const forwardData: ForwardData[] = [
  {
    name: 'Panarin, Artemi "A"',
    terms: "NMC",
    pos: "LW",
    status: "NHL",
    acquired: "Signed",
    age: 32,
    cap: "13.2",
    year2024: "$11,642,857",
    year2025: "$11,642,857",
    year2026: "RFA",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: 'Zibanejad, Mika "A"',
    terms: "NMC",
    pos: "C",
    status: "NHL",
    acquired: "Trade",
    age: 31,
    cap: "9.7",
    year2024: "$8,500,000",
    year2025: "$8,500,000",
    year2026: "$8,500,000",
    year2027: "$8,500,000",
    year2028: "$8,500,000",
    year2029: "$8,500,000",
    link: "#",
  },
  {
    name: 'Kreider, Chris "A"',
    terms: "M-NTC, NMC",
    pos: "LW",
    status: "NHL",
    acquired: "Draft",
    age: 32,
    cap: "7.4",
    year2024: "$6,500,000",
    year2025: "$6,500,000",
    year2026: "$6,500,000",
    year2027: "UFA",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Trocheck, Vincent",
    terms: "NMC",
    pos: "C, RW",
    status: "NHL",
    acquired: "Signed",
    age: 30,
    cap: "6.4",
    year2024: "$5,625,000",
    year2025: "$5,625,000",
    year2026: "$5,625,000",
    year2027: "$5,625,000",
    year2028: "$5,625,000",
    year2029: "UFA",
    link: "#",
  },
  {
    name: "Chytil, Filip",
    terms: "",
    pos: "C, LW",
    status: "NHL",
    acquired: "Draft",
    age: 24,
    cap: "5.0",
    year2024: "$4,437,500",
    year2025: "$4,437,500",
    year2026: "$4,437,500",
    year2027: "UFA",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: 'Goodrow, Barclay "A"',
    terms: "M-NTC",
    pos: "C, LW",
    status: "NHL",
    acquired: "Trade",
    age: 31,
    cap: "4.1",
    year2024: "$3,641,667",
    year2025: "$3,641,667",
    year2026: "$3,641,667",
    year2027: "UFA",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Lafrenière, Alexis",
    terms: "",
    pos: "LW, RW",
    status: "NHL",
    acquired: "Draft",
    age: 22,
    cap: "2.6",
    year2024: "$2,325,000",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Edström, Adam",
    terms: "ELC",
    pos: "C, LW",
    status: "NHL",
    acquired: "Draft",
    age: 23,
    cap: "1.0",
    year2024: "$846,667",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Cuylle, Will",
    terms: "ELC",
    pos: "LW",
    status: "NHL",
    acquired: "Draft",
    age: 22,
    cap: "0.9",
    year2024: "$828,333",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Rempe, Matt",
    terms: "ELC",
    pos: "C, RW",
    status: "NHL",
    acquired: "Draft",
    age: 21,
    cap: "0.9",
    year2024: "$820,000",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Cuylle, Will",
    terms: "",
    pos: "RW, LW",
    status: "NHL",
    acquired: "Signed",
    age: 31,
    cap: "0.9",
    year2024: "$800,000",
    year2025: "UFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Brodzinski, Jonny",
    terms: "",
    pos: "C",
    status: "NHL",
    acquired: "Signed",
    age: 30,
    cap: "0.9",
    year2024: "$787,500",
    year2025: "$787,500",
    year2026: "UFA",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Kakko, Kaapo",
    terms: "",
    pos: "RW",
    status: "NHL",
    acquired: "Draft",
    age: 23,
    cap: "",
    year2024: "RFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Roslovic, Jack",
    terms: "",
    pos: "C, RW",
    status: "NHL",
    acquired: "Trade",
    age: 27,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Wennberg, Alexander",
    terms: "",
    pos: "C",
    status: "NHL",
    acquired: "Trade",
    age: 29,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Wheeler, Blake",
    terms: "",
    pos: "RW",
    status: "NHL",
    acquired: "Signed",
    age: 37,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "TOTAL",
    terms: "",
    pos: "",
    status: "",
    acquired: "",
    age: 27.9,
    cap: "53.1",
    year2024: "$46,754,524",
    year2025: "$41,134,524",
    year2026: "$28,704,167",
    year2027: "$14,125,000",
    year2028: "$14,125,000",
    year2029: "$8,500,000",
    link: "#",
  },
];

const defensemenData = [
  createPlayer(
    "Fox, Adam",
    "",
    "RD",
    "NHL",
    "Trade",
    26,
    "10.8",
    "$9,500,000",
    "$9,500,000",
    "$9,500,000",
    "$9,500,000",
    "$9,500,000",
    "UFA",
    "#"
  ),
  createPlayer(
    'Trouba, Jacob "C"',
    "M-NTC",
    "RD",
    "NHL",
    "Trade",
    30,
    "9.1",
    "$8,000,000",
    "$8,000,000",
    "UFA",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "Miller, K'Andre",
    "",
    "LD",
    "NHL",
    "Draft",
    24,
    "4.4",
    "$3,872,000",
    "RFA",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "Jones, Zachary",
    "",
    "LD",
    "NHL",
    "Draft",
    23,
    "0.9",
    "$812,500",
    "RFA",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "Lindgren, Ryan",
    "",
    "LD",
    "NHL",
    "Trade",
    26,
    "",
    "RFA",
    "",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "Schneider, Braden",
    "",
    "RD",
    "NHL",
    "Draft",
    22,
    "",
    "RFA",
    "",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "Gustafsson, Erik",
    "",
    "LD",
    "NHL",
    "Signed",
    32,
    "",
    "UFA",
    "",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "Ruhwedel, Chad",
    "",
    "RD",
    "NHL",
    "Trade",
    34,
    "",
    "UFA",
    "",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "TOTAL",
    "",
    "",
    "",
    "",
    27.1,
    "25.2",
    "$22,184,500",
    "$17,500,000",
    "$9,500,000",
    "$9,500,000",
    "$9,500,000",
    "",
    "#"
  ),
];

const goaliesData = [
  createPlayer(
    "Shesterkin, Igor",
    "M-NTC",
    "G",
    "NHL",
    "Draft",
    28,
    "6.4",
    "$5,666,667",
    "UFA",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "Quick, Jonathan",
    "35+ M-NTC",
    "G",
    "NHL",
    "Signed",
    38,
    "1.4",
    "$1,275,000",
    "UFA",
    "",
    "",
    "",
    "",
    "#"
  ),
  createPlayer(
    "TOTAL",
    "",
    "",
    "",
    "",
    33.0,
    "7.9",
    "$6,941,667",
    "",
    "",
    "",
    "",
    "",
    "#"
  ),
];

const injuryData = [
  createInjuries("Jimmy Vesey", "Upper Body(Wk to wk) - May 26", "#"),
  createInjuries("Filip Chytil", "Cleared - May 22", "#"),
  createInjuries("Blake Wheeler", "Cleared - May 16", "#"),
  createInjuries("Filip Chytil", "Cleared - May 9", "#"),
  createInjuries("Erik Gustafsson", "Cleared - Apr. 3", "#"),
];

const recallData = [
  createRecalls("Louis Domingue", "Set to Roster - May 25", "#"),
  createRecalls("Adam Sýkora", "NHL - May 25", "#"),
  createRecalls("Brandon Scanlin", "NHL - May 25", "#"),
  createRecalls("Matthew Robertson", "NHL - May 25", "#"),
  createRecalls("Tyler Pitlick", "NHL - May 25", "#"),
];

const formattedInjuryData = injuryData.map(({ name, injury, link }) => ({
  name,
  injury,
  link,
}));

const formattedRecallData = recallData.map(({ playerName, recall, link }) => ({
  playerName,
  recall,
  link,
}));

interface IProps {
  rangersFinance?: NewRangersFinancesType[];
}

function Rangers() {
  const location = useLocation();
  const { rangersFinance } = location.state as IProps;

  return (
    <>
      <div>
        {rangersFinance && rangersFinance.length ? (
          <>
            {rangersFinance.map((rangers) => (
              <div key={rangers.id}>
                <Navbar />
                <div className="p-5 mb-4 mt-5 bg-light rounded-3">
                  <div className="container-fluid">
                    {/* <!-- TEAM FINANCES --> */}
                    <TeamFinances
                      // teamImage=""
                      teamName={rangers.teamName}
                      projectedCapHit={rangers.projectedCapHit}
                      projectedLTIR={rangers.projectedLTIR}
                      projectedCapSpace={rangers.projectedCapSpace}
                      currentCapSpace={rangers.currentCapSpace}
                      deadlineCapSpace={rangers.deadlineCapSpace}
                      todayCapHit={rangers.todayCapHit}
                      rosterSize={rangers.rosterSize}
                      contracts={rangers.contracts}
                      reserveList={rangers.reserveList}
                      injuries={rangers.injuries}
                      generalManager={rangers.generalManager}
                      headCoach={rangers.headCoach}
                    />
                    {/* <!-- DRAFT PICKS --> */}
                    <div>
                      <table className="table">
                        <thead>
                          <tr className="text-center">
                            <th scope="col">DRAFT</th>
                            <th scope="col">ROUND 1</th>
                            <th scope="col">ROUND 2</th>
                            <th scope="col">ROUND 3</th>
                            <th scope="col">ROUND 4</th>
                            <th scope="col">ROUND 5</th>
                            <th scope="col">ROUND 6</th>
                            <th scope="col">ROUND 7</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>2024</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImgTraded}</td>
                            <td>{rangersDraftImgTraded}</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImg}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImgTraded}</td>
                            <td>{rangersDraftImgTraded}</td>
                            <td>{rangersDraftImgTraded}</td>
                            <td>
                              {rangersDraftImg} {minnesotaDraft}
                            </td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImg}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImgTraded}</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImgTraded}</td>
                            <td>{rangersDraftImg}</td>
                            <td>{rangersDraftImg}</td>
                            <td>
                              {rangersDraftImg} {vancouverDraft}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <!-- RECALLS & INJURIES --> */}
                    <TeamRecallInuries
                      recallData={formattedRecallData}
                      injuryData={formattedInjuryData}
                    />
                    {/* <!-- FORWARDS CONTRACTS --> */}
                    <div>
                      {/* <TableContainer className="table">
                        <Table aria-label="player table">
                          <TableHead>
                            <TableRow className="tableTop">
                              <TableCell scope="col" className="tableTitle">
                                FORWARDS (12 - $46,754,524)
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                TERMS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                POS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                STATUS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                ACQUIRED
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                AGE
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                CAP%
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2024-25
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2025-26
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2026-27
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2027-28
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2028-29
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2029-30
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {forwardData.map((row) => (
                              <TableRow
                                key={row.name}
                                className="text-center"
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
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
                                <TableCell
                                  className={
                                    row.year2024 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2024 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2024}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2025 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2025 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2025}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2026 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2026 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2026}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2027 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2027 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2027}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2028 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2028 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2028}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2029 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2029 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2029}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer> */}
                      <ForwardFinances forwardData={forwardData} />
                    </div>
                    {/* <!-- DEFENSE CONTRACTS --> */}
                    <div>
                      <TableContainer className="table">
                        <Table aria-label="defensemen table">
                          <TableHead>
                            <TableRow className="text-center tableTop">
                              <TableCell scope="col" className="tableTitle">
                                DEFENSE (4 - $22,184,500)
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                TERMS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                POS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                STATUS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                ACQUIRED
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                AGE
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                CAP%
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2024-25
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2025-26
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2026-27
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2027-28
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2028-29
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2029-30
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {defensemenData.map((row) => (
                              <TableRow
                                key={row.name}
                                className="text-center"
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
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
                                <TableCell
                                  className={
                                    row.year2024 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2024 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2024}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2025 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2025 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2025}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2026 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2026 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2026}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2027 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2027 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2027}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2028 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2028 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2028}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2029 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2029 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2029}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                    {/* <!-- GOALIES CONTRACTS --> */}
                    <div>
                      <TableContainer className="table">
                        <Table aria-label="goalies table">
                          <TableHead>
                            <TableRow className="text-center tableTop">
                              <TableCell scope="col" className="tableTitle">
                                GOALIES (2 - $6,941,667)
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                TERMS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                POS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                STATUS
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                ACQUIRED
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                AGE
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                CAP%
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2024-25
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2025-26
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2026-27
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2027-28
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2028-29
                              </TableCell>
                              <TableCell
                                scope="col"
                                className="tableTitle text-center"
                              >
                                2029-30
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {goaliesData.map((row) => (
                              <TableRow
                                key={row.name}
                                className="text-center"
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
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
                                <TableCell
                                  className={
                                    row.year2024 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2024 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2024}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2025 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2025 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2025}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2026 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2026 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2026}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2027 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2027 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2027}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2028 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2028 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2028}
                                </TableCell>
                                <TableCell
                                  className={
                                    row.year2029 === "UFA"
                                      ? "redUFA text-center"
                                      : row.year2029 === "RFA"
                                      ? "blueRFA text-center"
                                      : ""
                                  }
                                >
                                  {row.year2029}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No rangers finance info</p>
        )}
      </div>
    </>
  );
}

export default Rangers;
