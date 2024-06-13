import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { minnesotaDraft, minnesotaDraftTraded, minnesotaImg, avalancheDraft, buffaloDraft, bruinsDraft, sharksDraft, torontoDraft } from "../../assets/Images";

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
  createPlayer('Kaprizov, Kirill "A"', 'NMC', 'LW', 'NHL', 'Draft', 27, '10.2', '$9,000,000', '$9,000,000', 'UFA', '', '', '', '#'),
  createPlayer('Boldy, Matthew', '', 'RW, LW', 'NHL', 'Draft', 23, '8.0', '$7,000,000', '$7,000,000', '$7,000,000', '$7,000,000', '$7,000,000', '$7,000,000', '#'),
  createPlayer('Eriksson Ek, Joel', 'M-NTC, NMC', 'C', 'NHL', 'Draft', 27, '6.0', '$5,250,000', '$5,250,000', '$5,250,000', '$5,250,000', '$5,250,000', 'UFA', '#'),
  createPlayer('Zuccarello, Mats', '35+NMC', 'RW, LW', 'NHL', 'Signed', 36, '4.7', '$4,125,000', '$4,125,000', 'UFA', '', '', '',  '#'),
  createPlayer('Foligno, Marcus "A"', 'NMC', 'RW, LW', 'NHL', 'Trade', 32, '4.5', '$4,000,000', '$4,000,000', '$4,000,000', '$4,000,000', 'UFA', '', '#'),
  createPlayer('Hartman, Ryan', 'NMC', 'C, RW', 'NHL', 'Trade', 29, '4.5', '$4,000,000', '$4,000,000', '$4,000,000', 'UFA', '', '', '#'),
  createPlayer('Gaudreau, Frédérick', 'M-NTC', 'C, LW', 'NHL', 'Signed', 31, '2.4', '$2,100,000', '$2,100,000', '$2,100,000', '$2,100,000', 'UFA', '', '#'),
  createPlayer('Johansson, Marcus', 'NTC', 'LW, RW', 'NHL', 'Trade', 33, '2.3', '$2,000,000', 'UFA', '', '', '', '', '#'),
  createPlayer('Khusnutdinov, Marat', 'ELC', 'C', 'NHL', 'Draft', 21, '1.1', '$925,000', 'RFA', '', '', '', '', '#'),
  createPlayer('Öhgren, Liam', 'ELC', 'LW', 'NHL', 'Draft', 20, '1.0', '$886,667', '$886,667', '$886,667', 'RFA', '', '', '#'),
  createPlayer('Rossi, Marco', 'ELC', 'C', 'NHL', 'Draft', 22, '1.0', '$863,333', 'RFA', '', '', '', '', '#'),
  createPlayer('Lettieri, Vinni', '', 'C, RW', 'NHL', 'Signed', 29, '0.9', '$775,000', 'UFA', '', '', '', '', '#'),
  createPlayer('Shaw, Mason', '', 'LW, C', 'NHL', 'Signed', 25, '', 'RFA', '', '', '', '', '', '#'),
  createPlayer('Lucchini, Jacob', '', 'RW, C, LW', 'NHL', 'Signed', 29, '', 'UFA', '', '', '', '', '', '#'),
  createPlayer('TOTAL', '', '', '', '', 27.4, '46.5', '$40,925,000', '$36,361,667', '$23,236,667', '$18,350,000', '$12,250,000', '$7,000,000', '#')
  ];
  

  const defensemenData = [
    createPlayer('Brodin, Jonas', 'NMC', 'LD', 'NHL', 'Draft', 30, '6.8', '$6,000,000', '$6,000,000', '$6,000,000', '$6,000,000', 'UFA', '', '#'),
    createPlayer('Middleton, Jake', '', 'LD', 'NHL', 'Trade', 28, '2.8', '$2,450,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Bogosian, Zach', 'Unconfirmed Information', 'RD', 'NHL', 'Trade', 33, '1.4', '$1,250,000', '$1,250,000', 'UFA', '', '', '', '#'),
    createPlayer('Merrill, Jon', '', 'LD', 'NHL', 'Signed', 32, '1.4', '$1,200,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Faber, Brock', 'ELC', 'RD', 'NHL', 'Trade', 21, '1.1', '$925,000', 'RFA', '', '', '', '', '#'),
    createPlayer('Chisholm, Declan', '', 'LD/RD', 'NHL', 'Waivers claim', 24, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('Goligoski, Alex', '', 'LD/RD', 'NHL', 'Signed', 38, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Mermis, Dakota', '', 'LD/RD', 'NHL', 'Signed', 30, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 29.5, '13.4', '$11,825,000', '$7,250,000', '$6,000,000', '$6,000,000', '', '', '#')
  ];
  

  const goaliesData = [
    createPlayer('Gustavsson, Filip', '', 'G', 'NHL', 'Trade', 26, '4.3', '$3,750,000', '$3,750,000', 'UFA', '', '', '', '#'),
    createPlayer('Fleury, Marc-André', '35+NMC', 'G', 'NHL', 'Trade', 39, '2.8', '$2,500,000', 'UFA', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 32.5, '7.1', '$6,250,000', '$3,750,000', '', '', '', '', '#')
];

  

const injuryData = [
  createInjuries('Zach Bogosian', 'Cleared - Apr. 7', '#'),
  createInjuries('Zach Bogosian', 'Undisclosed (Day to day) - Apr. 4', '#'),
  createInjuries('Marcus Foligno', 'Abdominal (Out for season) - Apr. 2', '#'),
  createInjuries('Marcus Foligno', 'Lower Body (Day to day) - Mar. 28', '#'),
  createInjuries('Jonas Brodin', 'Cleared - Mar. 28', '#')
];

const recallData = [
  createRecalls('Jesper Wallstedt', 'Minors Injury - Apr. 17', '#'),
  createRecalls('Adam Beckman', 'Minors Injury - Apr. 17', '#'),
  createRecalls('Liam Öhgren', 'NHL Injury - Apr. 10', '#'),
  createRecalls('Jesper Wallstedt', 'NHL Injury - Apr. 6', '#'),
  createRecalls('Liam Öhgren', 'Minors - Apr. 1', '#'),
];

var projectedCapHit = '$81,743,588';
var projectedLTIR = '$0';
var projectedCapSpace = '$6,256,412';
var currentCap = '$6,256,412';
var deadlineCap = '$27,706,967';
var todayCap = '$81,743,588';
var rosterSize = '19/23';
var contracts = '35/50';
var reserveList = '45/90';
var injuries = '1';
var generalManager = 'Bill Guerin'
var headCoach = 'John Hynes'

var forwardsTotal = '(12 - $40,925,000)'
var defenseTotal = '(5 - $11,825,000)'
var goaliesTotal = '(2 - $6,250,000)'


function Wild() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">MINNESOTA WILD</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the Minnesota Wild" src="https://cdn2.capfriendly.com/images/logos/minnesota_wild.svg"></img>
                    <p className="text noMargin lead">PROJECTED CAP HIT : {projectedCapHit}</p>
                    <p className="text noMargin lead">PROJECTED LTIR USED : {projectedLTIR}</p>
                    <p className="text lead">PROJECTED CAP SPACE : {projectedCapSpace}</p>

                    <p className="text noMargin">CURRENT CAP SPACE : {currentCap}</p>
                    <p className="text noMargin">DEADLINE CAP SPACE : {deadlineCap}</p>
                    <p className="text">TODAY'S CAP HIT : {todayCap}</p>

                    <p className="text noMargin">ROSTER SIZE: {rosterSize}</p>
                    <p className="text noMargin">CONTRACTS: {contracts}</p>
                    <p className="text noMargin">RESERVE LIST: {reserveList}</p>
                    <p className="text">INJURIES: {injuries}</p>
                    <p className="text noMargin">GENERAL MANAGER: <Link to={' '} className="playerName">{generalManager}</Link></p>
                    <p className="text">HEAD COACH: <Link to={' '} className="playerName">{headCoach}</Link></p>
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
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraftTraded}</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraft}{buffaloDraft}</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraftTraded}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraftTraded}{torontoDraft}</td>
                            <td>{minnesotaDraftTraded}</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraftTraded}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraft}</td>
                            <td>{minnesotaDraft}{avalancheDraft}</td>
                            <td>{minnesotaDraft}{torontoDraft}</td>
                            <td>{minnesotaDraft}{sharksDraft}</td>
                            <td>{minnesotaDraft}{bruinsDraft}</td>
                            <td>{minnesotaDraft}</td>
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
                                    <Link to={row.link}>{minnesotaImg}{row.playerName}</Link>
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
                                     <Link to={row.link}> {minnesotaImg}{row.name}</Link>
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
                          <TableCell scope="col" className="tableTitle">FORWARDS {forwardsTotal}</TableCell>
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
                        <TableCell scope="col" className="tableTitle">DEFENSE {defenseTotal}</TableCell>
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
                        <TableCell scope="col" className="tableTitle">GOALIES {goaliesTotal}</TableCell>
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

export default Wild 