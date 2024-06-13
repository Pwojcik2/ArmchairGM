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
import { sharksDraft, lightningDraftTraded, oilersDraft, lightningDraft, blackhawksDraft, minnesotaDraft, utahDraft, lightningImg } from "../../../assets/Images";

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
    createPlayer('Kucherov, Nikita "A"', 'M-NTC', 'RW', 'NHL', 'Draft', 30, '10.8', '$9,500,000', '$9,500,000', 'UFA', '', '', '', '#'),
    createPlayer('Point, Brayden', 'NMC', 'C, RW', 'NHL', 'Draft', 28, '10.8', '$9,500,000', '$9,500,000', '$9,500,000', '$9,500,000', '$9,500,000', '$9,500,000', '#'),
    createPlayer('Hagel, Brandon', '', 'LW', 'NHL', 'Trade', 25, '7.4', '$6,500,000', '$6,500,000', '$6,500,000', '$6,500,000', '$6,500,000', '$6,500,000', '#'),
    createPlayer('Cirelli, Anthony', '', 'C, LW', 'NHL', 'Draft', 26, '7.1', '$6,250,000', '$6,250,000', '$6,250,000', '$6,250,000', '$6,250,000', '$6,250,000', '#'),
    createPlayer('Paul, Nicholas', 'NTC', 'C, LW', 'NHL', 'Trade', 29, '3.6', '$3,150,000', '$3,150,000', '$3,150,000', '$3,150,000', '$3,150,000', 'UFA', '#'),
    createPlayer('Jeannot, Tanner', 'M-NTC', 'RW, LW', 'NHL', 'Trade', 27, '3.0', '$2,665,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Sheary, Conor', 'M-NTC', 'LW, RW', 'NHL', 'Signed', 32, '2.3', '$2,000,000', '$2,000,000', 'UFA', '', '','', '#'),
    createPlayer('Eyssimont, Michael', '', 'RW, C', 'NHL', 'Trade', 27, '0.9', '$800,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Glendening, Luke', '', 'C, RW, LW', 'NHL', 'Signed', 35, '0.9', '$800,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Chaffee, Mitchell', '', 'RW', 'NHL', 'Signed', 26, '0.9', '$800,000', '$800,000', 'UFA', '', '','', '#'),
    createPlayer('Duclair, Anthony', '', 'LW, RW', 'NHL', 'Trade', 28, '', 'UFA', '', '', '', '','', '#'),
    createPlayer('Motte, Tyler', '', 'LW, RW', 'NHL', 'Signed', 29, '', 'UFA', '', '', '', '','', '#'),
    createPlayer('Stamkos, Steven "C"', '', 'LW, C', 'NHL', 'Draft', 34, '', 'UFA', '', '', '', '','', '#'),
    createPlayer('Watson, Austin', '', 'RW, LW', 'NHL', 'Signed', 32, '', 'UFA', '', '', '', '','', '#'),
    createPlayer('TOTAL', '', '', '', '', 29.1, '47.7', '$41,965,000', '$37,700,000', '$34,900,000', '$25,400,000', '$25,400,000', '$22,250,000', '#')
  ];
  

  const defensemenData = [
    createPlayer('Sergachev, Mikhail', 'NTC', 'LD/RD', 'NHL', 'Trade', 25, '9.7', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '#'),
    createPlayer('Hedman, Victor "A"', 'M-NTC', 'LD', 'NHL', 'Draft', 33, '8.9', '$7,875,000', 'UFA', '', '', '', '', '#'),
    createPlayer('McDonagh, Ryan', 'NTC', 'LD', 'NHL', 'Trade', 34, '7.7', '$6,750,000', '$6,750,000', 'UFA', '', '', '', '#'),
    createPlayer('Cernak, Erik', 'NTC', 'RD', 'NHL', 'Trade', 27, '5.9', '$5,200,000', '$5,200,000', '$5,200,000', '$5,200,000', '$5,200,000', '$5,200,000', '#'),
    createPlayer('Perbix, Nick', '', 'RD', 'NHL', 'Draft', 25, '1.3', '$1,125,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Raddysh, Darren', '', 'RD', 'NHL', 'Signed', 28, '1.1', '$975,000', '$975,000', 'UFA', '', '', '', '#'),
    createPlayer('De Haan, Calvin', '', 'LD/RD', 'NHL', 'Signed', 33, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Dumba, Matt', '', 'RD', 'NHL', 'Trade', 29, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Fleury, Haydn', '', 'LD/RD', 'NHL', 'Signed', 27, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 29.0, '34.6', '$30,425,000', '$21,425,000', '$13,700,000', '$13,700,000', '$13,700,000', '$13,700,000', '#')
  ];
  

  const goaliesData = [
    createPlayer('Vasilevskiy, Andrei', 'NMC', 'G', 'NHL', 'Draft', 29, '10.8', '$9,500,000', '$9,500,000', '$9,500,000', '$9,500,000', 'UFA', '', '#'),
    createPlayer('Johansson, Jonas', '', 'G', 'NHL', 'Signed', 28, '0.9', '$775,000', 'UFA', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 28.5, '11.7', '$10,275,000', '$9,500,000', '$9,500,000', '$9,500,000', '', '', '#')
  ];
  

const injuryData = [
  createInjuries('Darren Raddysh', 'Abdominal (Unk) - May 1', '#'),
  createInjuries('Luke Glendening', 'Shoulder (Unk) - May 1', '#'),
  createInjuries('Tyler Motte', 'Ankle (Unk) - May 1', '#'),
  createInjuries('Nick Perbix', 'Shoulder (Unk) - May 1', '#'),
  createInjuries('Mikhail Sergachev', 'Cleared - Apr. 27', '#'),
];

const recallData = [
  createRecalls('Maxwell Crozier', 'Minors - Apr. 30', '#'),
  createRecalls('Emil Martinsen Lilleberg', 'Minors - Apr. 30', '#'),
  createRecalls('Matt Tomkins', 'Minors - Apr. 30', '#'),
  createRecalls('Maxwell Crozier', 'NHL - Apr. 22', '#'),
  createRecalls('Roman Schmidt', 'Minors - Apr. 10', '#'),
];

function Lightning() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">TAMPA BAY LIGHTNING</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the Tampa Bay Lightning" src="https://cdn2.capfriendly.com/images/logos/tampa_bay_lightning.svg"></img>
                    <p className="text noMargin lead">PROJECTED CAP HIT : $82,665,000</p>
                    <p className="text noMargin lead">PROJECTED LTIR USED : $0</p>
                    <p className="text lead">PROJECTED CAP SPACE : $5,335,000</p>

                    <p className="text noMargin">CURRENT CAP SPACE : $5,335,000</p>
                    <p className="text noMargin">DEADLINE CAP SPACE : $23,626,429</p>
                    <p className="text">TODAY'S CAP HIT : $82,665,000</p>

                    <p className="text noMargin">ROSTER SIZE: 18/23</p>
                    <p className="text noMargin">CONTRACTS: 33/50</p>
                    <p className="text noMargin">RESERVE LIST: 46/90</p>
                    <p className="text">INJURIES: 0</p>
                    <p className="text noMargin">GENERAL MANAGER: <Link to={' '} className="playerName">Julien BriseBois</Link></p>
                    <p className="text">HEAD COACH: <Link to={' '} className="playerName">Jon Cooper</Link></p>
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
                            <td>{lightningDraftTraded}</td>
                            <td>{lightningDraftTraded}</td>
                            <td>{lightningDraftTraded}</td>
                            <td>{lightningDraftTraded}{oilersDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraftTraded}{blackhawksDraft}{minnesotaDraft}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{lightningDraftTraded}</td>
                            <td>{lightningDraftTraded}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}{oilersDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}{utahDraft}{minnesotaDraft}{sharksDraft}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
                            <td>{lightningDraft}</td>
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
                                    <Link to={row.link}>{lightningImg}{row.playerName}</Link>
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
                                     <Link to={row.link}> {lightningImg}{row.name}</Link>
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
                          <TableCell scope="col" className="tableTitle">FORWARDS (10 - $41,965,000)</TableCell>
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
                        <TableCell scope="col" className="tableTitle">DEFENSE (6 - $30,425,000)</TableCell>
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
                        <TableCell scope="col" className="tableTitle">GOALIES (2 - $10,275,000)</TableCell>
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

export default Lightning 