import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { avalancheDraft, blackhawksDraft, bruinsDraft, capitalsDraft, capitalsDraftTraded, capitalsImg, hurricaneDraft, islandersDraft, knightsDraft } from "../../assets/Images";


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
    createPlayer('Ovechkin, Alex "C"', '35+M-NTC, NMC', 'LW', 'NHL', 'Draft', 38, '10.8', '$9,500,000', '$9,500,000', 'UFA', '', '', '', '#'),
    createPlayer('Wilson, Tom "A"', 'M-NTC', 'RW', 'NHL', 'Draft', 30, '7.4', '$6,500,000', '$6,500,000', '$6,500,000', '$6,500,000', '$6,500,000', '$6,500,000', '#'),
    createPlayer('Oshie, T.J. "A"', 'M-NTC', 'RW', 'NHL', 'Trade', 37, '6.5', '$5,750,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Strome, Dylan', '', 'C', 'NHL', 'Signed', 27, '5.7', '$5,000,000', '$5,000,000', '$5,000,000', '$5,000,000', '', '', '#'),
    createPlayer('Protas, Aliaksei', '', 'RW, LW, C', 'NHL', 'Draft', 23, '3.8', '$3,375,000', '$3,375,000', '$3,375,000', '$3,375,000', '$3,375,000', '', '#'),
    createPlayer('Milano, Sonny', '', 'LW, RW', 'NHL', 'Signed', 28, '2.2', '$1,900,000', '$1,900,000', 'UFA', '', '', '', '#'),
    createPlayer('Dowd, Nic', '', 'C', 'NHL', 'Signed', 34, '1.5', '$1,300,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Sgarbossa, Michael', '', 'C', 'NHL', 'Signed', 31, '0.9', '$775,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Malenstyn, Beck', '', 'C, LW', 'NHL', 'Draft', 26, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('McMichael, Connor', '', 'LW, C', 'NHL', 'Draft', 23, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('Aubé-Kubel, Nicolas', '', 'RW', 'NHL', 'Waivers claim', 28, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Pacioretty, Max', '', 'LW', 'NHL', 'Signed', 35, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 30.0, '38.8', '$34,100,000', '$26,275,000', '$14,875,000', '$14,875,000', '$9,875,000', '$6,500,000', '#')
  ];
  
  const defensemenData = [
    createPlayer('Carlson, John "A"', 'M-NTC', 'RD', 'NHL', 'Draft', 34, '9.1', '$8,000,000', '$8,000,000', 'UFA', '', '', '', '#'),
    createPlayer('Sandin, Rasmus', '', 'LD', 'NHL', 'Trade', 24, '5.2', '$4,600,000', '$4,600,000', '$4,600,000', '$4,600,000', '$4,600,000', 'UFA', '#'),
    createPlayer('Jensen, Nick', '', 'RD', 'NHL', 'Trade', 33, '4.6', '$4,050,000', '$4,050,000', 'UFA', '', '', '', '#'),
    createPlayer('van Riemsdyk, Trevor', '', 'RD', 'NHL', 'Signed', 32, '3.4', '$3,000,000', '$3,000,000', 'UFA', '', '', '', '#'),
    createPlayer('Fehérváry, Martin', '', 'LD/RD', 'NHL', 'Draft', 24, '3.0', '$2,675,000', '$2,675,000', 'RFA', '', '', '', '#'),
    createPlayer('Bear, Ethan', '', 'RD', 'NHL', 'Signed', 26, '2.3', '$2,062,500', 'UFA', '', '', '', '', '#'),
    createPlayer('Alexeyev, Alexander', '', 'LD/RD', 'NHL', 'Draft', 24, '0.9', '$825,000', 'RFA', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 28.1, '28.7', '$25,212,500', '$22,325,000', '$4,600,000', '$4,600,000', '$4,600,000', '', '#')
  ];
  
  const goaliesData = [
    createPlayer('Kuemper, Darcy', 'M-NTC', 'G', 'NHL', 'Signed', 34, '6.0', '$5,250,000', '$5,250,000', '$5,250,000', 'UFA', '', '', '#'),
    createPlayer('Lindgren, Charlie', '', 'G', 'NHL', 'Signed', 30, '1.3', '$1,100,000', 'UFA', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 32.0, '7.2', '$6,350,000', '$5,250,000', '$5,250,000', '', '', '', '#')
];

const injuryData = [
    createInjuries('Matt Martin', 'Lower Body (Day to day) - Apr. 27', '#'),
    createInjuries('Matt Martin', 'Cleared - Apr. 25', '#'),
    createInjuries('Matt Martin', 'Undisclosed (GTD) - Apr. 25', '#'),
    createInjuries('Jean-Gabriel Pageau', 'Cleared - Apr. 22', '#'),
    createInjuries('Noah Dobson', 'Cleared - Apr. 19', '#'),
];

const recallData = [
    createRecalls('Robin Salo', 'NHL Injury - Apr. 23', '#'),
    createRecalls('Brian Pinho', 'NHL Injury - Apr. 23', '#'),
    createRecalls('Karson Kuhlman', 'NHL Injury - Apr. 23', '#'),
    createRecalls('Julien Gauthier', 'NHL Injury - Apr. 23', '#'),
    createRecalls('Dennis Cholowski', 'NHL Injury - Apr. 23', '#'),
];

var forwardsTotal = '(8 - $34,100,000)'
var defenseTotal = '(7 - $25,212,500)'
var goaliesTotal = '(2 - $6,350,000)'

var projectedCapHit = '$81,015,000';
var projectedLTIR = '$0';
var projectedCapSpace = '$6,985,000';
var currentCap = '$6,985,000';
var deadlineCap = '$30,933,571';
var todayCap = '$81,015,000';
var rosterSize = '17/23';
var contracts = '33/50';
var reserveList = '51/90';
var injuries = '1';
var generalManager = 'Brian MacLellan';
var headCoach = 'Spencer Carbery';

function Capitals() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">WASHINGTON CAPITALS</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the Washington Capitals" src="https://cdn2.capfriendly.com/images/logos/washington_capitals.svg"></img>
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
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraftTraded}{knightsDraft}</td>
                            <td>{capitalsDraft}{bruinsDraft}{islandersDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraftTraded}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}{bruinsDraft}{avalancheDraft}</td>
                            <td>{capitalsDraft}{hurricaneDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}{blackhawksDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraftTraded}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}{knightsDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}</td>
                            <td>{capitalsDraft}</td>
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
                                    <Link to={row.link}>{capitalsImg}{row.playerName}</Link>
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
                                     <Link to={row.link}> {capitalsImg}{row.name}</Link>
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

export default Capitals 