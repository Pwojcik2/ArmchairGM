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
import {
  DefenseData,
  GoalieData,
  NewRangersFinancesType,
} from "../../types/interfaceTypes";
import TeamFinances from "../../components/TeamFinances";
import TeamRecallInuries from "../../components/TeamRecallInjuries";
import ForwardFinances from "../../components/ForwardFinances";
import { ForwardData } from "../../types/interfaceTypes";
import DefensemenContractsTable from "../../components/DefensemanFinances";
import GoalieContractsTable from "../../components/GoalieFinanaces";

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

const defenseData: DefenseData[] = [
  {
    name: "Fox, Adam",
    terms: "",
    pos: "RD",
    status: "NHL",
    acquired: "Trade",
    age: 26,
    cap: "10.8",
    year2024: "$9,500,000",
    year2025: "$9,500,000",
    year2026: "$9,500,000",
    year2027: "$9,500,000",
    year2028: "$9,500,000",
    year2029: "UFA",
    link: "#",
  },
  {
    name: 'Trouba, Jacob "C"',
    terms: "M-NTC",
    pos: "RD",
    status: "NHL",
    acquired: "Trade",
    age: 30,
    cap: "9.1",
    year2024: "$8,000,000",
    year2025: "$8,000,000",
    year2026: "UFA",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Miller, K'Andre",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Draft",
    age: 24,
    cap: "4.4",
    year2024: "$3,872,000",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Jones, Zachary",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Draft",
    age: 23,
    cap: "0.9",
    year2024: "$812,500",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Lindgren, Ryan",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Trade",
    age: 26,
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
    name: "Schneider, Braden",
    terms: "",
    pos: "RD",
    status: "NHL",
    acquired: "Draft",
    age: 22,
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
    name: "Gustafsson, Erik",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Signed",
    age: 32,
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
    name: "Ruhwedel, Chad",
    terms: "",
    pos: "RD",
    status: "NHL",
    acquired: "Trade",
    age: 34,
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
    age: 27.1,
    cap: "25.2",
    year2024: "$22,184,500",
    year2025: "$17,500,000",
    year2026: "$9,500,000",
    year2027: "$9,500,000",
    year2028: "$9,500,000",
    year2029: "",
    link: "#",
  },
];

const goalieData: GoalieData[] = [
  {
    name: "Shesterkin, Igor",
    terms: "M-NTC",
    pos: "G",
    status: "NHL",
    acquired: "Draft",
    age: 28,
    cap: "6.4",
    year2024: "$5,666,667",
    year2025: "UFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Quick, Jonathan",
    terms: "35+ M-NTC",
    pos: "G",
    status: "NHL",
    acquired: "Signed",
    age: 38,
    cap: "1.4",
    year2024: "$1,275,000",
    year2025: "UFA",
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
    age: 33.0,
    cap: "7.9",
    year2024: "$6,941,667",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
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
                      <ForwardFinances forwardData={forwardData} />
                    </div>
                    {/* <!-- DEFENSE CONTRACTS --> */}
                    <div>
                      <DefensemenContractsTable defenseData={defenseData} />
                    </div>
                    {/* <!-- GOALIES CONTRACTS --> */}
                    <div>
                      {/* <TableContainer className="table">
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
                      </TableContainer> */}
                      <GoalieContractsTable goalieData={goalieData} />
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
