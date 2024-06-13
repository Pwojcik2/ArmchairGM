import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import '../../home/App.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { flyersImg, flyersDraftImg, flyersDraftImgTraded, floridaDraft, avalancheDraft, jacketsDraft, anaheimDraft, kingsDraft, knightsDraft, hurricaneDraft, bluesDraft, knightsDraftTraded, colombusDraft, sharksDraft, knightsImg } from "../../../assets/Images";

function createInjuries(
  name: string,
  injury: string,
  link: string,
) {
  return { name, injury, link,};
}

function createRecalls(
  playerName: string,
  recall: string,
  link: string,
) {
  return {playerName, recall, link};
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
  link: string,
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
    link
  };
}

const forwardData = [
  createPlayer('Eichel, Jack "A"', 'UFA, NMC', 'C', 'NHL', 'Trade', 27, '11.4', '$10,000,000', '$10,000,000', 'UFA', '', '', '', '#'),
  createPlayer('Stone, Mark "C"', 'UFA, NMC', 'RW', 'NHL', 'Trade', 32, '10.8', '$9,500,000', '$9,500,000', '$9,500,000', 'UFA', '', '', '#'),
  createPlayer('Hertl, Tomas "A"', 'UFA, RSNMC', 'C', 'NHL', 'Trade', 30, '7.7', '$6,750,000', '$6,750,000', '$6,750,000', '$6,750,000', '$6,750,000', '$6,750,000', '#'),
  createPlayer('Karlsson, William "A"', 'UFA, M-NTC', 'C', 'NHL', 'Expansion', 31, '6.7', '$5,900,000', '$5,900,000', '$5,900,000', 'UFA', '', '', '#'),
  createPlayer('Barbashev, Ivan', 'UFA, M-NTC', 'LW, RW', 'NHL', 'Trade', 28, '5.7', '$5,000,000', '$5,000,000', '$5,000,000', '$5,000,000', 'UFA', '', '#'),
  createPlayer('Roy, Nicolas', 'UFA', 'C, RW', 'NHL', 'Trade', 27, '3.4', '$3,000,000', '$3,000,000', '$3,000,000', 'UFA', '', '', '#'),
  createPlayer('Howden, Brett', 'UFA', 'C, LW', 'NHL', 'Signed', 26, '2.2', '$1,900,000', 'UFA', '', '', '', '', '#'),
  createPlayer('Kolesar, Keegan', 'UFA', 'RW', 'NHL', 'Trade', 27, '1.6', '$1,400,000', 'UFA', '', '', '', '', '#'),
  createPlayer('Brisson, Brendan', 'RFA, ELC Waivers Exempt', 'C, LW, RW', 'NHL', 'Draft', 22, '1.1', '$925,000', 'RFA', '', '', '', '', '#'),
  createPlayer('Cotter, Paul', 'RFA', 'LW, RW', 'NHL', 'Draft', 24, '0.9', '$775,000', '$775,000', 'RFA', '', '', '', '#'),
  createPlayer('Røndbjerg, Jonas', 'RFA', 'LW, RW', 'NHL', 'Draft', 25, '0.9', '$766,667', 'RFA', '', '', '', '', '#'),
  createPlayer('Dorofeyev, Pavel', 'RFA', 'LW, RW', 'NHL', 'Draft', 23, '', 'RFA', '', '', '', '', '', '#'),
  createPlayer('Amadio, Michael', 'UFA', 'RW, LW', 'NHL', 'Waivers claim', 28, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('Carrier, William', 'UFA', 'LW', 'NHL', 'Expansion', 29, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('Mantha, Anthony', 'UFA', 'LW, RW', 'NHL', 'Trade', 29, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('Marchessault, Jonathan', 'UFA', 'RW, LW', 'NHL', 'Expansion', 33, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('Stephenson, Chandler', 'UFA', 'C, LW', 'NHL', 'Trade', 30, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('TOTAL', '', '', '', '', 27.7, '52.2', '$45,916,667', '$40,925,000', '$30,150,000', '$11,750,000', '$6,750,000', '$6,750,000', '#')
];

  
const defensemenData = [
  createPlayer('Pietrangelo, Alex "A"', 'UFA, NMC', 'RD', 'NHL', 'Signed', 34, '10.0', '$8,800,000', '$8,800,000', '$8,800,000', 'UFA', '', '', '#'),
  createPlayer('Hanifin, Noah', 'UFA, NTC', 'LD', 'NHL', 'Trade', 27, '8.4', '$7,350,000', '$7,350,000', '$7,350,000', '$7,350,000', '$7,350,000', '$7,350,000', '#'),
  createPlayer('Theodore, Shea', 'UFA, M-NTC', 'LD/RD', 'NHL', 'Trade', 28, '5.9', '$5,200,000', 'UFA', '', '', '','', '#'),
  createPlayer('McNabb, Brayden', 'UFA, M-NTC', 'LD', 'NHL', 'Expansion', 33, '3.2', '$2,850,000', 'UFA', '', '', '','', '#'),
  createPlayer('Whitecloud, Zach', 'UFA', 'RD', 'NHL', 'Signed', 27, '3.1', '$2,750,000', '$2,750,000', '$2,750,000', '$2,750,000', 'UFA', '', '#'),
  createPlayer('Hague, Nicolas', 'RFA', 'LD', 'NHL', 'Draft', 25, '2.6', '$2,294,150', 'Arbitration EligibleRFA', '', '', '','', '#'),
  createPlayer('Hutton, Ben', 'UFA', 'LD', 'NHL', 'Signed', 31, '1.1', '$975,000', '$975,000', 'UFA', '', '','', '#'),
  createPlayer('Martinez, Alec', 'UFA', 'LD', 'NHL', 'Signed', 36, '', 'UFA', '', '', '', '','', '#'),
  createPlayer('TOTAL', '', '', '', '', 30.1, '34.3', '$30,219,150', '$19,875,000', '$18,900,000', '$10,100,000', '$7,350,000', '$7,350,000', '#')
];

  
const goaliesData = [
  createPlayer('Hill, Adin', 'UFA, M-NTC', 'G', 'NHL', 'Trade', 28, '5.6', '$4,900,000', 'UFA', '', '', '', '', '#'),
  createPlayer('Thompson, Logan', 'UFA', 'G', 'NHL', 'Signed', 27, '0.9', '$766,667', 'UFA', '', '', '', '', '#'),
  createPlayer('Patera, Jiri', 'UFA', 'G', 'NHL', 'Draft', 25, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('TOTAL', '', '', '', '', 26.7, '6.4', '$5,666,667', '', '', '', '', '', '#')
];

  
const injuryData = [
  createInjuries('Nicolas Hague', 'Lower Body (Day to day) - Apr. 24', '#'),
  createInjuries('William Carrier', 'Cleared - Apr. 22', '#'),
  createInjuries('Anthony Mantha', 'Cleared - Apr. 22', '#'),
  createInjuries('Mark Stone', 'Cleared - Apr. 22', '#'),
  createInjuries('Chandler Stephenson', 'Cleared - Apr. 22', '#'),
];

const recallData = [
  createRecalls('Jesper Vikman', 'NHL  - Apr. 24', '#'),
  createRecalls('Christoffer Sedoff', 'NHL  - Apr. 24', '#'),
  createRecalls('Isaiah Saville', 'NHL  - Apr. 24', '#'),
  createRecalls('Mason Morelli', 'NHL  - Apr. 24', '#'),
  createRecalls('Dysin Mayo', 'NHL  - Apr. 24', '#'),
];

function GoldenKnight() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">VEGAS GOLDEN KNIGHTS</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the Vegas Golden Knights" src="https://cdn2.capfriendly.com/images/logos/vegas_golden_knights.svg"></img>
                    <p className="text noMargin lead">PROJECTED CAP HIT : $86,802,484</p>
                    <p className="text noMargin lead">PROJECTED LTIR USED : $0</p>
                    <p className="text lead">PROJECTED CAP SPACE : $1,197,516</p>
                    <p className="text noMargin">CURRENT CAP SPACE : $1,197,516</p>
                    <p className="text noMargin">DEADLINE CAP SPACE : $5,303,285</p>
                    <p className="text">TODAY'S CAP HIT : $86,802,484</p>
                    <p className="text noMargin">ROSTER SIZE: 20/23</p>
                    <p className="text noMargin">CONTRACTS: 38/50</p>
                    <p className="text noMargin">RESERVE LIST: 47/90</p>
                    <p className="text">INJURIES: 1</p>
                    <p className="text noMargin">GENERAL MANAGER: <Link to={' '} className="playerName">Kelly McCrimmon</Link></p>
                    <p className="text">HEAD COACH: <Link to={' '} className="playerName">Bruce Cassidy</Link></p>
                </div>

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
                            <td>{knightsDraft}</td>
                            <td>{knightsDraftTraded}</td>
                            <td>{knightsDraftTraded}</td>
                            <td>{knightsDraftTraded}</td>
                            <td>{knightsDraftTraded}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraft}{colombusDraft}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{knightsDraftTraded}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraft}{sharksDraft}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraftTraded}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{knightsDraftTraded}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraftTraded}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraft}</td>
                            <td>{knightsDraft}</td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!-- RECALLS & INJURIES --> */}
                <div className="container my-5">
                    <div className="row align-items-md-stretch">
                        <div className="col-lg-6">
                          <div className="h-100 p-5 bg-light border rounded-3">
                            <h2 className="text-center">Recalls & Reassignments</h2>
                            <TableContainer className="table">
                            <Table aria-label="simple table">
                              <TableBody>
                                {recallData.map((row) => (
                                  <TableRow
                                    key={row.playerName}
                                    sx={{'&:last-child td, &:last-child th': null }}
                                  >
                                    <TableCell component="th" scope="row">
                                    <Link to={row.link}>{knightsImg}{row.playerName}</Link>
                                    </TableCell>
                                    <TableCell align="center">{row.recall}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                            </TableContainer>
                            <button className="btn btn-outline-secondary btn-block" type="button">See All</button>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="h-100 p-5 bg-light border rounded-3">
                            <h2 className="text-center">Injuries</h2>
                            <TableContainer className="table">
                            <Table aria-label="simple table">
                              <TableBody>
                                {injuryData.map((row) => (
                                  <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': null }}
                                  >
                                    <TableCell component="th" scope="row">
                                     <Link to={row.link}> {knightsImg}{row.name}</Link>
                                    </TableCell>
                                    <TableCell align="center">{row.injury}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                            </TableContainer>
                            <button className="btn btn-outline-secondary btn-block" type="button">See All</button>
                          </div>
                        </div>
                    </div>
                </div>

                {/* <!-- FORWARDS CONTRACTS --> */}
                <div>
                  <TableContainer className="table">
                    <Table aria-label="player table">
                      <TableHead>
                        <TableRow className="tableTop">
                          <TableCell scope="col" className="tableTitle">FORWARDS (11 - $45,916,667)</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">TERMS</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">POS</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">STATUS</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">ACQUIRED</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">AGE</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">CAP%</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">2024-25</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">2025-26</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">2026-27</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">2027-28</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">2028-29</TableCell>
                          <TableCell scope="col" className="tableTitle text-center">2029-30</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {forwardData.map((row) => (
                          <TableRow key={row.name} className="text-center" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell className="text-left">
                            {row.name !== 'TOTAL' ? (
                              <Link to={row.link} className="playerName text-nowrap">{row.name}</Link>
                            ) : (
                              row.name
                            )}
                            </TableCell>
                            <TableCell className="text-center text-nowrap">{row.terms}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.pos}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.status}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.acquired}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.age}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.cap}</TableCell>
                            <TableCell className={row.year2024 === 'UFA' ? 'redUFA text-center' : row.year2024 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2024}</TableCell>
                            <TableCell className={row.year2025 === 'UFA' ? 'redUFA text-center' : row.year2025 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2025}</TableCell>
                            <TableCell className={row.year2026 === 'UFA' ? 'redUFA text-center' : row.year2026 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2026}</TableCell>
                            <TableCell className={row.year2027 === 'UFA' ? 'redUFA text-center' : row.year2027 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2027}</TableCell>
                            <TableCell className={row.year2028 === 'UFA' ? 'redUFA text-center' : row.year2028 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2028}</TableCell>
                            <TableCell className={row.year2029 === 'UFA' ? 'redUFA text-center' : row.year2029 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2029}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>

                {/* <!-- DEFENSE CONTRACTS --> */}
                <div>
                  <TableContainer className="table">
                  <Table aria-label="defensemen table">
                    <TableHead>
                      <TableRow className="text-center tableTop">
                        <TableCell scope="col" className="tableTitle">DEFENSE (7 - $30,219,150)</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">TERMS</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">POS</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">STATUS</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">ACQUIRED</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">AGE</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">CAP%</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2024-25</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2025-26</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2026-27</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2027-28</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2028-29</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2029-30</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {defensemenData.map((row) => (
                        <TableRow key={row.name} className="text-center" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell className="text-left">
                            {row.name !== 'TOTAL' ? (
                              <Link to={row.link} className="playerName">{row.name}</Link>
                            ) : (
                              row.name
                            )}
                          </TableCell>
                          <TableCell className="text-center text-nowrap">{row.terms}</TableCell>
                          <TableCell className="text-center text-nowrap">{row.pos}</TableCell>
                          <TableCell className="text-center text-nowrap">{row.status}</TableCell>
                          <TableCell className="text-center text-nowrap">{row.acquired}</TableCell>
                          <TableCell className="text-center text-nowrap">{row.age}</TableCell>
                          <TableCell className="text-center text-nowrap">{row.cap}</TableCell>
                          <TableCell className={row.year2024 === 'UFA' ? 'redUFA text-center' : row.year2024 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2024}</TableCell>
                          <TableCell className={row.year2025 === 'UFA' ? 'redUFA text-center' : row.year2025 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2025}</TableCell>
                          <TableCell className={row.year2026 === 'UFA' ? 'redUFA text-center' : row.year2026 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2026}</TableCell>
                          <TableCell className={row.year2027 === 'UFA' ? 'redUFA text-center' : row.year2027 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2027}</TableCell>
                          <TableCell className={row.year2028 === 'UFA' ? 'redUFA text-center' : row.year2028 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2028}</TableCell>
                          <TableCell className={row.year2029 === 'UFA' ? 'redUFA text-center' : row.year2029 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2029}</TableCell>
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
                        <TableCell scope="col" className="tableTitle">GOALIES (2 - $5,666,667)</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">TERMS</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">POS</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">STATUS</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">ACQUIRED</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">AGE</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">CAP%</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2024-25</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2025-26</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2026-27</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2027-28</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2028-29</TableCell>
                        <TableCell scope="col" className="tableTitle text-center">2029-30</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {goaliesData.map((row) => (
                          <TableRow key={row.name} className="text-center" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell className="text-left">
                              {row.name !== 'TOTAL' ? (
                                <Link to={row.link} className="playerName">{row.name}</Link>
                              ) : (
                                row.name
                              )}
                            </TableCell>
                            <TableCell className="text-center text-nowrap">{row.terms}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.pos}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.status}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.acquired}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.age}</TableCell>
                            <TableCell className="text-center text-nowrap">{row.cap}</TableCell>
                            <TableCell className={row.year2024 === 'UFA' ? 'redUFA text-center' : row.year2024 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2024}</TableCell>
                            <TableCell className={row.year2025 === 'UFA' ? 'redUFA text-center' : row.year2025 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2025}</TableCell>
                            <TableCell className={row.year2026 === 'UFA' ? 'redUFA text-center' : row.year2026 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2026}</TableCell>
                            <TableCell className={row.year2027 === 'UFA' ? 'redUFA text-center' : row.year2027 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2027}</TableCell>
                            <TableCell className={row.year2028 === 'UFA' ? 'redUFA text-center' : row.year2028 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2028}</TableCell>
                            <TableCell className={row.year2029 === 'UFA' ? 'redUFA text-center' : row.year2029 === 'RFA' ? 'blueRFA text-center' : ''}>{row.year2029}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default GoldenKnight 