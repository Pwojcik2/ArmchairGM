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
import { flyersImg, flyersDraftImg, flyersDraftImgTraded, floridaDraft, avalancheDraft, jacketsDraft, anaheimDraft, kingsDraft, knightsDraft, hurricaneDraft, bluesDraft } from "../../assets/Images";

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
    createPlayer('Couturier, Sean "C"', 'NMC', 'C', 'NHL', 'Draft', 31, '8.8', '$7,750,000', '$7,750,000', '$7,750,000', '$7,750,000', '$7,750,000', '$7,750,000', '#'),
    createPlayer('Tippett, Owen', '', 'RW, LW', 'NHL', 'Trade', 25, '7.0', '$6,200,000', '$6,200,000', '$6,200,000', '$6,200,000', '$6,200,000', '$6,200,000', '#'),
    createPlayer('Atkinson, Cam', 'M-NTC', 'RW, LW', 'NHL', 'Trade', 35, '6.7', '$5,875,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Konecny, Travis "A"', '', 'RW, LW', 'NHL', 'Draft', 27, '6.3', '$5,500,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Farabee, Joel', '', 'LW, RW', 'NHL', 'Draft', 24, '5.7', '$5,000,000', '$5,000,000', '$5,000,000', '$5,000,000', 'UFA', '', '#'),
    createPlayer('Johansen, Ryan', 'RS', 'C, RW', 'NHL', 'Trade', 31, '4.5', '$4,000,000', 'UFA', '', '', '', '', '#'),
    createPlayer('Laughton, Scott "A"', '', 'C, LW', 'NHL', 'Draft', 30, '3.4', '$3,000,000', '$3,000,000', 'UFA', '', '', '', '#'),
    createPlayer('Cates, Noah', '', 'C, LW', 'NHL', 'Draft', 25, '3.0', '$2,625,000', 'RFA', '', '', '', '',  '#'),
    createPlayer('Hathaway, Garnet', '', 'RW, LW', 'NHL', 'Signed', 32, '2.7', '$2,375,000', 'UFA', '', '', '', '',  '#'),
    createPlayer('Frost, Morgan', '', 'C', 'NHL', 'Draft', 25, '2.4', '$2,100,000', 'RFA', '', '', '', '',  '#'),
    createPlayer('Poehling, Ryan', '', 'C, LW', 'NHL', 'Signed', 25, '2.2', '$1,900,000', '$1,900,000', 'UFA', '', '', '', '#'),
    createPlayer('Deslauriers, Nicolas', '', 'LW, RW', 'NHL', 'Signed', 33, '2.0', '$1,750,000', '$1,750,000', 'UFA', '', '', '',  '#'),
    createPlayer('Foerster, Tyson', 'ELC', 'RW', 'NHL', 'Draft', 22, '1.0', '$863,333', 'RFA', '', '', '', '',  '#'),
    createPlayer('Gurianov, Denis', '', 'RW, LW', 'NHL', 'Trade', 27, '', 'UFA', '', '', '', '', '',  '#'),
    createPlayer('TOTAL', '', '', '', '', 28.0, '55.6', '$48,938,333', '$25,600,000', '$18,950,000', '$18,950,000', '$13,950,000', '$13,950,000',  '#')
];
  
const defensemenData = [
    createPlayer('Sanheim, Travis', 'NTC', 'LD/RD', 'NHL', 'Draft', 28, '7.1', '$6,250,000', '$6,250,000', '$6,250,000', '$6,250,000', '$6,250,000', '$6,250,000', '#'),
    createPlayer('Seeler, Nick', 'NTC', 'LD/RD', 'NHL', 'Signed', 31, '3.1', '$2,700,000', '$2,700,000', '$2,700,000', '$2,700,000', 'UFA', '','#'),
    createPlayer('Drysdale, Jamie', '', 'RD', 'NHL', 'Trade', 22, '2.6', '$2,300,000', '$2,300,000', 'RFA', '', '', '','#'),
    createPlayer('York, Cam', '', 'LD/RD', 'NHL', 'Draft', 23, '1.8', '$1,600,000', 'RFA', '', '', '', '','#'),
    createPlayer('Zamula, Yegor', '', 'LD/RD', 'NHL', 'Signed', 24, '', 'RFA', '', '', '', '', '','#'),
    createPlayer('Johnson, Erik', '', 'RD', 'NHL', 'Trade', 36, '', 'UFA', '', '', '', '', '','#'),
    createPlayer('Staal, Marc', '', 'LD', 'NHL', 'Signed', 37, '', 'UFA', '', '', '', '', '','#'),
    createPlayer('TOTAL', '', '', '', '', 28.7, '14.6', '$12,850,000', '$11,250,000', '$8,950,000', '$8,950,000', '$6,250,000', '$6,250,000','#')
];
  
const goaliesData = [
    createPlayer('Fedotov, Ivan', '', 'G', 'NHL', 'Draft', 27, '3.7', '$3,275,000', '$3,275,000', 'UFA', '', '', '',  '#'),
    createPlayer('Ersson, Samuel', '', 'G', 'NHL', 'Draft', 24, '1.6', '$1,450,000', '$1,450,000', 'RFA', '', '', '',  '#'),
    createPlayer('TOTAL', '', '', '', '', 25.5, '5.4', '$4,725,000', '$4,725,000', '', '', '', '',  '#')
];
  
const injuryData = [
  createInjuries('Rasmus Ristolainen', 'Arm (3mo) - Apr. 18', '#'),
  createInjuries('Sean Couturier', 'Cleared - Apr. 9', '#'),
  createInjuries('Sean Couturier', 'Shoulder (Day to day) - Apr. 3', '#'),
  createInjuries('Jamie Drysdale', 'Cleared - Apr. 1', '#'),
  createInjuries('Nick Seeler', 'Cleared - Mar. 30', '#'),
];

const recallData = [
  createRecalls('Adam Ginning', 'Minors - Apr. 17', '#'),
  createRecalls('Olle Lycksell', 'Minors - Apr. 17', '#'),
  createRecalls('Bobby Brink', 'Minors - Apr. 17', '#'),
  createRecalls('Ronnie Attard', 'Minors - Apr. 17', '#'),
  createRecalls('Aleksei Kolosov', 'Minors - Apr. 2', '#'),
];

function Flyers() {
    return (
    <>
    <div>
      <Navbar/>
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
            <div className="container-fluid">
                {/* <!-- TEAM FINANCES --> */}
                <div className="text-center">
                    <h1 className="display-5 text">PHILADELPHIA FLYERS</h1>
                    <img style={{ height: "80px", width: "80px", marginBottom: "5px" }} alt="Logo of the Philadelphia Flyers" src="https://cdn2.capfriendly.com/images/logos/philadelphia_flyers.svg"></img>
                    <p className="text noMargin lead">PROJECTED CAP HIT : $87,196,428</p>
                    <p className="text noMargin lead">PROJECTED LTIR USED : $0</p>
                    <p className="text lead">PROJECTED CAP SPACE : $803,572</p>
                    <p className="text noMargin">CURRENT CAP SPACE : $803,572</p>
                    <p className="text noMargin">DEADLINE CAP SPACE : $3,558,676</p>
                    <p className="text">TODAY'S CAP HIT : $87,196,428</p>
                    <p className="text noMargin">ROSTER SIZE: 19/23</p>
                    <p className="text noMargin">CONTRACTS: 38/50</p>
                    <p className="text noMargin">RESERVE LIST: 53/90</p>
                    <p className="text">INJURIES: 2</p>
                    <p className="text noMargin">GENERAL MANAGER: <Link to={' '} className="playerName">Daniel Brière</Link></p>
                    <p className="text">HEAD COACH: <Link to={' '} className="playerName">John Tortorella</Link></p>
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
                            <td>{flyersDraftImg}{floridaDraft}</td>
                            <td>{flyersDraftImgTraded}{flyersDraftImg}{jacketsDraft}</td>
                            <td>{flyersDraftImg}</td>
                            <td>{flyersDraftImgTraded}</td>
                            <td>{flyersDraftImgTraded}{kingsDraft}{knightsDraft}</td>
                            <td>{flyersDraftImg}{bluesDraft}</td>
                            <td>{flyersDraftImg}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td>{flyersDraftImg}{avalancheDraft}</td>
                            <td>{flyersDraftImg}{anaheimDraft}</td>
                            <td>{flyersDraftImgTraded}</td>
                            <td>{flyersDraftImgTraded}</td>
                            <td>{flyersDraftImg}{hurricaneDraft}</td>
                            <td>{flyersDraftImg}</td>
                            <td>{flyersDraftImg}</td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td>{flyersDraftImg}</td>
                            <td>{flyersDraftImg}</td>
                            <td>{flyersDraftImg}</td>
                            <td>{flyersDraftImg}</td>
                            <td>{flyersDraftImgTraded}</td>
                            <td>{flyersDraftImg}</td>
                            <td>{flyersDraftImg}</td>
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
                                    <Link to={row.link}>{flyersImg}{row.playerName}</Link>
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
                                     <Link to={row.link}> {flyersImg}{row.name}</Link>
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
                          <TableCell scope="col" className="tableTitle">FORWARDS (13 - $48,938,333)</TableCell>
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
                        <TableCell scope="col" className="tableTitle">DEFENSE (4 - $12,850,000)</TableCell>
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
                        <TableCell scope="col" className="tableTitle">GOALIES (2 - $4,725,000)</TableCell>
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

export default Flyers