import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { islandersDraft, islandersDraftTraded, islandersImg, kingsDraft, lightningDraft, vancouverDraft } from "../../assets/Images";


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
    createPlayer('Barzal, Mathew', 'M-NTC', 'C, RW', 'NHL', 'Draft', 27, '10.4', '$9,150,000', '$9,150,000', '$9,150,000', '$9,150,000', '$9,150,000', '$9,150,000', '#'),
    createPlayer('Horvat, Bo', 'NTC', 'C', 'NHL', 'Trade', 29, '9.7', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '$8,500,000', '#'),
    createPlayer('Lee, Anders "C"', 'M-NTC', 'LW', 'NHL', 'Signed', 33, '8.0', '$7,000,000', '$7,000,000', 'UFA', '', '', '', '#'),
    createPlayer('Nelson, Brock', 'M-NTC', 'C, LW', 'NHL', 'Draft', 32, '6.8', '$6,000,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Pageau, Jean-Gabriel', 'M-NTC', 'C', 'NHL', 'Trade', 31, '5.7', '$5,000,000', '$5,000,000', 'UFA', '', '', '', '#'),
    createPlayer('Palmieri, Kyle', 'M-NTC', 'RW, LW', 'NHL', 'Signed', 33, '5.7', '$5,000,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Engvall, Pierre', 'M-NTC', 'RW, LW', 'NHL', 'Signed', 28, '3.4', '$3,000,000', '$3,000,000', '$3,000,000', '$3,000,000', '$3,000,000', '$3,000,000', '#'),
    createPlayer('Cizikas, Casey', '', 'C', 'NHL', 'Signed', 33, '2.8', '$2,500,000', '$2,500,000', '$2,500,000', 'UFA', '', '', '#'),
    createPlayer('Gauthier, Julien', '', 'RW', 'NHL', 'Signed', 26, '0.9', '$787,500', 'UFA', '', '', '', '', '#'),
    createPlayer('Fasching, Hudson', '', 'RW', 'NHL', 'Signed', 28, '0.9', '$775,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Holmström, Simon', '', 'RW', 'NHL', 'Draft', 23, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('Iskhakov, Ruslan', 'Waivers Exempt', 'C', 'NHL', 'Draft', 23, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('MacLean, Kyle', 'Waivers Exempt', 'LW, C', 'NHL', 'Signed', 25, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('Wahlstrom, Oliver', '', 'RW', 'NHL', 'Draft', 24, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('Clutterbuck, Cal "A"', '', 'RW', 'NHL', 'Trade', 36, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Kuhlman, Karson', '', 'RW', 'NHL', 'Signed', 28, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Martin, Matt', '', 'LW, RW', 'NHL', 'Signed', 35, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Pinho, Brian', '', 'C, RW', 'NHL', 'Signed', 29, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 29.1, '54.2', '$47,712,500', '$35,150,000', '$23,150,000', '$20,650,000', '$20,650,000', '$20,650,000', '#')
  ];
  
  const defensemenData = [
    createPlayer('Pulock, Ryan', 'NTC', 'RD', 'NHL', 'Draft', 29, '7.0', '$6,150,000', '$6,150,000', '$6,150,000', '$6,150,000', '$6,150,000', '$6,150,000', '#'),
    createPlayer('Pelech, Adam', 'NTC', 'LD', 'NHL', 'Draft', 29, '6.5', '$5,750,000', '$5,750,000', '$5,750,000', '$5,750,000', '$5,750,000', 'UFA', '#'),
    createPlayer('Dobson, Noah', '', 'RD', 'NHL', 'Draft', 24, '4.5', '$4,000,000', 'RFA', '', '', '', '', '#'),
    createPlayer('Romanov, Alexander', '', 'LD', 'NHL', 'Trade', 24, '2.8', '$2,500,000', 'RFA', '', '', '', '', '#'),
    createPlayer('Bolduc, Samuel', '', 'LD', 'NHL', 'Draft', 23, '0.9', '$800,000', 'RFA', '', '', '', '', '#'),
    createPlayer('Cholowski, Dennis', '', 'LD', 'NHL', 'Signed', 26, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('Aho, Sebastian', '', 'LD', 'NHL', 'Draft', 28, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Bortuzzo, Robert', '', 'RD', 'NHL', 'Trade', 35, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Reilly, Mike', '', 'LD', 'NHL', 'Waivers claim', 30, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Salo, Robin', '', 'LD', 'NHL', 'Draft', 25, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 27.3, '21.8', '$19,200,000', '$11,900,000', '$11,900,000', '$11,900,000', '$11,900,000', '$6,150,000', '#')
  ];
  
  const goaliesData = [
    createPlayer('Sorokin, Ilya', 'NMC', 'G', 'NHL', 'Draft', 28, '9.4', '$8,250,000', '$8,250,000', '$8,250,000', '$8,250,000', '$8,250,000', '$8,250,000', '#'),
    createPlayer('Varlamov, Semyon', '35+NTC', 'G', 'NHL', 'Signed', 36, '3.1', '$2,750,000', '$2,750,000', '$2,750,000', 'UFA', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 32.0, '12.5', '$11,000,000', '$11,000,000', '$11,000,000', '$8,250,000', '$8,250,000', '$8,250,000', '#')
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

var forwardsTotal = '(10 - $47,712,500)'
var defenseTotal = '(5 - $19,200,000)'
var goaliesTotal = '(2 - $11,000,000)'

var projectedCapHit = '$81,412,500';
var projectedLTIR = '$0';
var projectedCapSpace = '$6,587,500';
var currentCap = '$6,587,500';
var deadlineCap = '$29,173,214';
var todayCap = '$81,412,500';
var rosterSize = '17/23';
var contracts = '35/50';
var reserveList = '45/90';
var injuries = '1';
var generalManager = 'Lou Lamoriello';
var headCoach = 'Patrick Roy';

function Islanders() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">NEW YORK ISLANDERS</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the New York Islanders" src="https://cdn2.capfriendly.com/images/logos/new_york_islanders.svg"></img>
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
                            <td>{islandersDraftTraded}{lightningDraft}</td>
                            <td>{islandersDraftTraded}{kingsDraft}{vancouverDraft}</td>
                            <td>{islandersDraftTraded}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraftTraded}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraftTraded}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
                            <td>{islandersDraft}</td>
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
                                    <Link to={row.link}>{islandersImg}{row.playerName}</Link>
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
                                     <Link to={row.link}> {islandersImg}{row.name}</Link>
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

export default Islanders 