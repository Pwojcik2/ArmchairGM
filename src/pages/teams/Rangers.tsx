import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import '../home/App.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { rangersImg, rangersDraftImg, rangersDraftImgTraded, minnesotaDraft, vancouverDraft } from "../../assets/Images";

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
  createPlayer('Panarin, Artemi "A"', 'NMC', 'LW', 'NHL', 'Signed', 32, '13.2', '$11,642,857', '$11,642,857', 'RFA', '', '', '', '#'),
  createPlayer('Zibanejad, Mika "A"', 'NMC', 'C', 'NHL', 'Trade', 31, '9.7', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '#'),
  createPlayer('Kreider, Chris "A"', 'M-NTC, NMC', 'LW', 'NHL', 'Draft', 32, '7.4', '$6,500,000', '$6,500,000', '$6,500,000', 'UFA', '', '',  '#'),
  createPlayer('Trocheck, Vincent', 'NMC', 'C, RW', 'NHL', 'Signed', 30, '6.4', '$5,625,000', '$5,625,000', '$5,625,000', '$5,625,000', '$5,625,000', 'UFA',  '#'),
  createPlayer('Chytil, Filip', '', 'C, LW', 'NHL', 'Draft', 24, '5.0', '$4,437,500', '$4,437,500', '$4,437,500', 'UFA', '', '',  '#'),
  createPlayer('Goodrow, Barclay "A"', 'M-NTC', 'C, LW', 'NHL', 'Trade', 31, '4.1', '$3,641,667', '$3,641,667', '$3,641,667', 'UFA', '', '',  '#'),
  createPlayer('Lafrenière, Alexis', '', 'LW, RW', 'NHL', 'Draft', 22, '2.6', '$2,325,000', 'RFA', '', '', '', '', '#'),
  createPlayer('Edström, Adam', 'ELC', 'C, LW', 'NHL', 'Draft', 23, '1.0', '$846,667', 'RFA', '', '', '', '', '#'),
  createPlayer('Cuylle, Will', 'ELC', 'LW', 'NHL', 'Draft', 22, '0.9', '$828,333', 'RFA', '', '', '', '', '#'),
  createPlayer('Rempe, Matt', 'ELC', 'C, RW', 'NHL', 'Draft', 21, '0.9', '$820,000', 'RFA', '', '', '', '', '#'),
  createPlayer('Cuylle, Will', '', 'RW, LW', 'NHL', 'Signed', 31, '0.9', '$800,000', 'UFA', '', '', '', '', '#'),
  createPlayer('Brodzinski, Jonny', '', 'C', 'NHL', 'Signed', 30, '0.9', '$787,500', '$787,500', 'UFA', '', '', '', '#'),
  createPlayer('Kakko, Kaapo', '', 'RW', 'NHL', 'Draft', 23, '', 'RFA', '', '', '', '','', '#'),
  createPlayer('Roslovic, Jack', '', 'C, RW', 'NHL', 'Trade', 27, '', 'UFA', '', '', '', '','', '#'),
  createPlayer('Wennberg, Alexander', '', 'C', 'NHL', 'Trade', 29, '', 'UFA', '', '', '', '','', '#'),
  createPlayer('Wheeler, Blake', '', 'RW', 'NHL', 'Signed', 37, '', 'UFA', '', '', '', '','', '#'),
  createPlayer('TOTAL', '', '', '', '', 27.9, '53.1', '$46,754,524', '$41,134,524', '$28,704,167', '$14,125,000', '$14,125,000', '$8,500,000', '#')
];

const defensemenData = [
  createPlayer('Fox, Adam', '', 'RD', 'NHL', 'Trade', 26, '10.8', '$9,500,000', '$9,500,000', '$9,500,000', '$9,500,000', '$9,500,000', 'UFA',  '#'),
  createPlayer('Trouba, Jacob "C"', 'M-NTC', 'RD', 'NHL', 'Trade', 30, '9.1', '$8,000,000', '$8,000,000', 'UFA', '', '', '',  '#'),
  createPlayer('Miller, K\'Andre', '', 'LD', 'NHL', 'Draft', 24, '4.4', '$3,872,000', 'RFA', '', '', '', '',  '#'),
  createPlayer('Jones, Zachary', '', 'LD', 'NHL', 'Draft', 23, '0.9', '$812,500', 'RFA', '', '', '', '',  '#'),
  createPlayer('Lindgren, Ryan', '', 'LD', 'NHL', 'Trade', 26, '', 'RFA', '', '', '', '', '', '#'),
  createPlayer('Schneider, Braden', '', 'RD', 'NHL', 'Draft', 22, '', 'RFA', '', '', '', '', '', '#'),
  createPlayer('Gustafsson, Erik', '', 'LD', 'NHL', 'Signed', 32, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('Ruhwedel, Chad', '', 'RD', 'NHL', 'Trade', 34, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('TOTAL', '', '', '', '', 27.1, '25.2', '$22,184,500', '$17,500,000', '$9,500,000', '$9,500,000', '$9,500,000', '',  '#')
];

const goaliesData = [
  createPlayer('Shesterkin, Igor', 'M-NTC', 'G', 'NHL', 'Draft', 28, '6.4', '$5,666,667', 'UFA', '', '', '', '',  '#'),
  createPlayer('Quick, Jonathan', '35+ M-NTC', 'G', 'NHL', 'Signed', 38, '1.4', '$1,275,000', 'UFA', '', '', '', '',  '#'),
  createPlayer('TOTAL', '', '', '', '', 33.0, '7.9', '$6,941,667', '', '', '', '', '',  '#')
];

const injuryData = [
  createInjuries('Jimmy Vesey', 'Upper Body(Wk to wk) - May 26', '#'),
  createInjuries('Filip Chytil', 'Cleared - May 22', '#'),
  createInjuries('Blake Wheeler', 'Cleared - May 16', '#'),
  createInjuries('Filip Chytil', 'Cleared - May 9', '#'),
  createInjuries('Erik Gustafsson', 'Cleared - Apr. 3', '#'),
];

const recallData = [
  createRecalls('Louis Domingue', 'Set to Roster - May 25', '#'),
  createRecalls('Adam Sýkora', 'NHL - May 25', '#'),
  createRecalls('Brandon Scanlin', 'NHL - May 25', '#'),
  createRecalls('Matthew Robertson', 'NHL - May 25', '#'),
  createRecalls('Tyler Pitlick', 'NHL - May 25', '#'),
];

function Rangers() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">NEW YORK RANGERS</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                    <p className="text noMargin lead">PROJECTED CAP HIT : $76,393,191</p>
                    <p className="text noMargin lead">PROJECTED LTIR USED : $0</p>
                    <p className="text lead">PROJECTED CAP SPACE : $11,606,809</p>
                    <p className="text noMargin">CURRENT CAP SPACE : $11,606,809</p>
                    <p className="text noMargin">DEADLINE CAP SPACE : $51,401,583</p>
                    <p className="text">TODAY'S CAP HIT : $76,393,191</p>
                    <p className="text noMargin">ROSTER SIZE: 18/23</p>
                    <p className="text noMargin">CONTRACTS: 38/50</p>
                    <p className="text noMargin">RESERVE LIST: 49/90</p>
                    <p className="text">INJURIES: 0</p>
                    <p className="text noMargin">GENERAL MANAGER: <Link to={' '} className="playerName">Chris Drury</Link></p>
                    <p className="text">HEAD COACH: <Link to={' '} className="playerName">Peter Laviolette</Link></p>
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
                            <td>{rangersDraftImg} {minnesotaDraft}</td>
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
                            <td>{rangersDraftImg} {vancouverDraft}</td>
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
                                    <Link to={row.link}>{rangersImg}{row.playerName}</Link>
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
                                     <Link to={row.link}> {rangersImg}{row.name}</Link>
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
                          <TableCell scope="col" className="tableTitle">FORWARDS (12 - $46,754,524)</TableCell>
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

                {/* <!-- DEFENSE CONTRACTS --> */}
                <div>
                  <TableContainer className="table">
                  <Table aria-label="defensemen table">
                    <TableHead>
                      <TableRow className="text-center tableTop">
                        <TableCell scope="col" className="tableTitle">DEFENSE (4 - $22,184,500)</TableCell>
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
                        <TableCell scope="col" className="tableTitle">GOALIES (2 - $6,941,667)</TableCell>
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

export default Rangers