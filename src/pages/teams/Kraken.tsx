import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { calgaryDraft, capitalsDraft, devilsDraft, minnesotaDraft, montrealDraft, montrealDraftTraded, montrealImg, oilersDraft, penguinsDraft, redwWingsDraft, sharksDraft, vancouverDraft } from "../../assets/Images";


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
    createPlayer('Nick Suzuki', '', 'C', 'NHL', 'Trade', 24, '8.9', '$7,875,000', '$7,875,000', '$7,875,000', '$7,875,000', '$7,875,000', '$7,875,000', '#'),
    createPlayer('Cole Caufield', '', 'LW, RW', 'NHL', 'Draft', 23, '8.9', '$7,850,000', '$7,850,000', '$7,850,000', '$7,850,000', '$7,850,000', '$7,850,000', '#'),
    createPlayer('Brendan Gallagher', 'M-NTC, NMC', 'RW, LW', 'NHL', 'Draft', 32, '7.4', '$6,500,000', '$6,500,000', '$6,500,000', 'UFA', '', '', '#'),
    createPlayer('Josh Anderson', 'M-NTC', 'RW, LW', 'NHL', 'Trade', 30, '6.3', '$5,500,000', '$5,500,000', '$5,500,000', 'UFA', '', '', '#'),
    createPlayer('Christian Dvorak', 'M-NTC', 'C', 'NHL', 'Trade', 28, '5.1', '$4,450,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Joel Armia', '', 'RW, LW', 'NHL', 'Trade', 31, '3.9', '$3,400,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Alex Newhook', '', 'C, LW', 'NHL', 'Trade', 23, '3.3', '$2,900,000', '$2,900,000', '$2,900,000', 'RFA', '', '', '#'),
    createPlayer('Jake Evans', '', 'C', 'NHL', 'Draft', 28, '1.9', '$1,700,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Rafaël Harvey-Pinard', '', 'LW, RW', 'NHL', 'Draft', 25, '1.3', '$1,100,000', 'RFA', '', '', '', '', '#'),
    createPlayer('Juraj Slafkovsky', 'ELC', 'RW, LW', 'NHL', 'Draft', 20, '1.1', '$950,000', 'RFA', '', '', '', '', '#'),
    createPlayer('Michael Pezzetta', '', 'LW, RW', 'NHL', 'Draft', 26, '0.9', '$812,500', 'UFA', '', '', '', '', '#'),
    createPlayer('Jesse Ylönen', '', 'RW, LW', 'NHL', 'Draft', 24, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('Tanner Pearson', '', 'LW', 'NHL', 'Trade', 31, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('Colin White', '', 'C, RW', 'NHL', 'Waivers claim', 27, '', 'UFA', '', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 26.6, '48.9', '$43,037,500', '$30,625,000', '$30,625,000', '$15,725,000', '$15,725,000', '$15,725,000', '#')
  ];
  
  const defensemenData = [
    createPlayer('Michael Matheson', 'M-NTC', 'LD', 'NHL', 'Trade', 30, '5.5', '$4,875,000', '$4,875,000', 'UFA', '', '', '', '#'),
    createPlayer('David Savard', '', 'RD', 'NHL', 'Signed', 33, '4.0', '$3,500,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Jordan Harris', '', 'LD/RD', 'NHL', 'Draft', 23, '1.6', '$1,400,000', 'RFA', '', '', '', '', '#'),
    createPlayer('Lane Hutson', 'ELC', 'LD', 'NHL', 'Draft', 20, '1.1', '$950,000', '$950,000', 'RFA', '', '', '', '#'),
    createPlayer('Kaiden Guhle', 'ELC', 'LD/RD', 'NHL', 'Draft', 22, '1.0', '$863,333', 'RFA', '', '', '', '', '#'),
    createPlayer('Johnathan Kovacevic', '', 'RD', 'NHL', 'Waivers claim', 26, '0.9', '$766,667', 'UFA', '', '', '', '', '#'),
    createPlayer('Arber Xhekaj', 'Waivers Exempt', 'LD/RD', 'NHL', 'Signed', 23, '', 'RFA', '', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 25.3, '14.0', '$12,355,000', '$5,825,000', '', '', '', '', '#')
  ];
  
  const goaliesData = [
    createPlayer('Samuel Montembeault', '', 'G', 'NHL', 'Waivers claim', 27, '3.6', '$3,150,000', '$3,150,000', '$3,150,000', 'UFA', '', '', '#'),
    createPlayer('Cayden Primeau', '', 'G', 'NHL', 'Draft', 24, '1.0', '$890,000', 'RFA', '', '', '', '', '#'),
    createPlayer('TOTAL', '', '', '', '', 25.5, '4.6', '$4,040,000', '$3,150,000', '$3,150,000', '', '', '', '#')
];

const injuryData = [
    createInjuries('Joshua Roy', 'Cleared - Apr. 17', '#'),
    createInjuries('Christian Dvorak', 'Cleared - Apr. 9', '#'),
    createInjuries('Arber Xhekaj', 'Shoulder (Out for ssn) - Apr. 9', '#'),
    createInjuries('Arber Xhekaj', 'Upper Body (Unk) - Apr. 6', '#'),
    createInjuries('Kaiden Guhle', 'Upper Body (Day to day) - Apr. 6', '#'),
];

const recallData = [
    createRecalls('Logan Mailloux', 'Minors - Apr. 17', '#'),
    createRecalls('Jayden Struble', 'Minors - Apr. 17', '#'),
    createRecalls('Joshua Roy', 'Minors - Apr. 17', '#'),
    createRecalls('Justin Barron', 'Minors - Apr. 17', '#'),
    createRecalls('Logan Mailloux', 'NHL - Apr. 16', '#'),
];

var forwardsTotal = '(11 - $43,037,500)'
var defenseTotal = '(6 - $12,355,000)'
var goaliesTotal = '(2 - $4,040,000)'

const projectedCapHit = '$78,586,250';
const projectedLTIR = '$0';
const projectedCapSpace = '$9,413,750';
const currentCap = '$9,413,750';
const deadlineCap = '$41,689,464';
const todayCap = '$78,586,250';
const rosterSize = '19/23';
const contracts = '41/50';
const reserveList = '58/90';
const injuries = '2';
const generalManager = 'Kent Hughes';
const headCoach = 'Martin St. Louis';

function Canadiens() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">MONTREAL CANADIENS</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the Montreal Canadiens" src="https://cdn2.capfriendly.com/images/logos/montreal_canadiens.svg"></img>
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
                            <td>{montrealDraft}</td>
                            <td>{montrealDraftTraded}</td>
                            <td>{montrealDraft}{minnesotaDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}{sharksDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}{oilersDraft}{capitalsDraft}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{montrealDraft}{calgaryDraft}</td>
                            <td>{montrealDraft}{penguinsDraft}</td>
                            <td>{montrealDraft}{devilsDraft}{vancouverDraft}</td>
                            <td>{montrealDraft}{redwWingsDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
                            <td>{montrealDraft}</td>
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
                                    <Link to={row.link}>{montrealImg}{row.playerName}</Link>
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
                                     <Link to={row.link}> {montrealImg}{row.name}</Link>
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

export default Canadiens 