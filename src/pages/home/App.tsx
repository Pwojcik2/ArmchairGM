import React, { useEffect } from 'react';
import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'
import Navbar from '../../components/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { hotelsCollection } from '../../lib/controller';
import { NewHotelType } from '../../types/hotel';
import CapSpace from './CapSpace';

function createTeam(
  name: string,
  rosterSize: string,
  contracts: string,
  retained: string,
  projCapHit: string,
  projCapSpace: string,
  ltirCand: string,
  ltirCandCapSpace: string,
  link: string
) {
  return {
    name,
    rosterSize,
    contracts,
    retained,
    projCapHit,
    projCapSpace,
    ltirCand,
    ltirCandCapSpace,
    link
  };
}

const teamsData = [
  createTeam(
    'Philadelphia Flyers',
    '19/23',
    '38/50',
    '1/3',
    '$87,196,428',
    '$803,572',
    '$6,250,000',
    '$7,053,572',
    '#'
  ),
  createTeam(
    'Vegas Golden Knights',
    '20/23',
    '38/50',
    '0/3',
    '$86,802,484',
    '$1,197,516',
    '$5,000,000',
    '$6,197,516',
    '#'
  ),
  createTeam(
    'Tampa Bay Lightning',
    '18/23',
    '33/50',
    '0/3',
    '$82,665,000',
    '$5,335,000',
    '-',
    '-',
    '#'
  ),
  createTeam(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '#'
  ),
];

function App() {

  const [hotels, setHotels] = useState<NewHotelType[]>([])

  useEffect(() => onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
    setHotels(
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    )
  }), []
)

  return (
    <>
      <div>
      <Navbar/>
    {/* <!-- <div className="b-example-divider"></div> --> */}

    {/* <!-- SOCIAL HERO --> */}
    <div className="custom-bg mt-5">
        <div className="px-4 py-4 text-center">
            <h1 className="display-5">Follow CapCheck</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Forecheck.. Backcheck.. CapCheck</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 18">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                        </svg> 
                        Twitter
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 18">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                        Instagram
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 18">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    </div>

    {hotels && hotels.length ? (
                  <div>
                    {
                      hotels?.map((hotel) => (
                        <CapSpace key={hotel.id} hotel={hotel}/>
                      ))
                    }
                  </div>
                ) : (
                  <h1>Error</h1>
                )}

    {/* <!-- SIGNINGS/FREE AGENT HERO --> */}
    <div className="my-5">
        <div className="row align-items-md-stretch">
            <div className="col-lg-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2 className="text-center">Signings</h2>
                <table className="table">
                    <thead>
                        <tr>
                          <th scope="col">PLAYER</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">CAP HIT</th>
                        </tr>
                      </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                        <img style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Rangers" title="Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                        </td>
                        <td><Link to={' '} className="playerName">Mathias Laferrière</Link></td>
                        <td></td>
                        <td></td>
                        <td className="right">$775,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the lightning" title="lightning" src="https://cdn2.capfriendly.com/images/logos/tampa_bay_lightning.svg"/>
                        </td>
                        <td><Link to={' '} className="playerName">Declan Carlile</Link></td>
                        <td></td>
                        <td></td>
                        <td>$775,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the kings" title="kings" src="https://cdn2.capfriendly.com/images/logos/los_angeles_kings.svg"/>
                        </td>
                        <td><Link to={' '} className="playerName">Akil Thomas</Link></td>
                        <td></td>
                        <td></td>
                        <td>$775,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the kings" title="kings" src="https://cdn2.capfriendly.com/images/logos/los_angeles_kings.svg"/>
                        </td>
                        <td><Link to={' '} className="playerName">Andre Lee</Link></td>
                        <td></td>
                        <td></td>
                        <td>$775,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the canadiens" title="canadiens" src="https://cdn2.capfriendly.com/images/logos/montreal_canadiens.svg"/>
                        </td>
                        <td><Link to={' '} className="playerName">Connor Hughes</Link></td>
                        <td></td>
                        <td></td>
                        <td>$775,000</td>
                      </tr>
                    </tbody>
                </table>
                <button className="btn btn-outline-secondary btn-block" type="button">See All</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2 className="text-center">Unrestricted Free Agents</h2>
                <table className="table">
                    <thead>
                        <tr>
                          <th scope="col">PLAYER</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">PREVIOUS CAP HIT</th>
                        </tr>
                      </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the lightning" title="lightning" src="https://cdn2.capfriendly.com/images/logos/tampa_bay_lightning.svg"/></td>
                        <td><Link to={' '} className="playerName">Steven Stamkos</Link></td>
                        <td></td>
                        <td></td>
                        <td>$8,500,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the panthers" title="panthers" src="https://cdn2.capfriendly.com/images/logos/florida_panthers.svg"/></td>
                        <td><Link to={' '} className="playerName">Sam Reinhart</Link></td>
                        <td></td>
                        <td></td>
                        <td>$6,500,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the mapleleafs" title="mapleleafs" src="https://cdn2.capfriendly.com/images/logos/toronto_maple_leafs.svg"/></td>
                            <td><Link to={' '} className="playerName">Matt Murray</Link></td>
                        <td></td>
                        <td></td>
                        <td>$6,250,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the hurricanes" title="hurricanes" src="https://cdn2.capfriendly.com/images/logos/carolina_hurricanes.svg"/></td>
                            <td ><Link to={' '} className="playerName">Jake Guentzel</Link></td>
                        <td></td>
                        <td></td>
                        <td>$6,000,000</td>
                      </tr>
                      <tr>
                        <td scope="row">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the canucks" title="canucks" src="https://cdn2.capfriendly.com/images/logos/vancouver_canucks.svg"/></td>
                            <td ><Link to={' '} className="playerName">Tyler Myers</Link></td>
                        <td></td>
                        <td></td>
                        <td>$6,000,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-outline-secondary btn-block" type="button">Browse UFAs</button>
              </div>
            </div>
          </div>
    </div>

    {/* <!-- CAP SPACE HERO --> */}
    <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid">
            <h1 className="display-5 text text-center">2024-25 CAP SPACE</h1>
            <p className="text text-center">&#9650 UPPER LIMIT: 88.0M | &#9660 LOWER LIMIT: 65.0M</p>
            {/* <TableContainer className="table">
            <Table aria-label="teams table">
              <TableHead>
                <TableRow>
                  <TableCell scope="col">TEAM</TableCell>
                  <TableCell scope="col">ROSTER SIZE</TableCell>
                  <TableCell scope="col">CONTRACTS</TableCell>
                  <TableCell scope="col">RETAINED</TableCell>
                  <TableCell scope="col"></TableCell>
                  <TableCell scope="col" className="text-center">PROJ. CAP HIT</TableCell>
                  <TableCell scope="col">PROJ. CAP SPACE</TableCell>
                  <TableCell scope="col">LTIR CAND.</TableCell>
                  <TableCell scope="col">LTIR CAND. CAP SPACE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamsData.map((row) => (
                  <TableRow key={row.name} className="text-center" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell scope="row" className='text-nowrap'>
                      <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px'}} alt={`Logo of ${row.name}`} src={`https://cdn2.capfriendly.com/images/logos/${row.name.toLowerCase().replace(/\s/g, '_')}.svg`} />
                      <Link to={row.link} className="teamName full">{row.name}</Link>
                      <Link to={row.link} className="teamName abbreviated">{row.name}</Link>
                    </TableCell>
                    <TableCell>{row.rosterSize}</TableCell>
                    <TableCell>{row.contracts}</TableCell>
                    <TableCell>{row.retained}</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-center">{row.projCapHit}</TableCell>
                    <TableCell className="text-center">{row.projCapSpace}</TableCell>
                    <TableCell className="text-center">{row.ltirCand}</TableCell>
                    <TableCell className="text-center">{row.ltirCandCapSpace}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
            <table className="table">
                <thead>
                    <tr>
                      <th scope="col">TEAM</th>
                      <th scope="col">ROSTER SIZE</th>
                      <th scope="col">CONTRACTS</th>
                      <th scope="col">RETAINED</th>
                      <th scope="col"></th>
                      <th scope="col" className="text-center">PROJ. CAP HIT</th>
                      <th scope="col">PROJ. CAP SPACE</th>
                      <th scope="col">LTIR CAND.</th>
                      <th scope="col">LTIR CAND. CAP SPACE</th>
                    </tr>
                  </thead>
                <tbody>
                    {/* <!-- FLYERS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Philadelphia Flyers" src="https://cdn2.capfriendly.com/images/logos/philadelphia_flyers.svg"/>
                        <Link to={'/teams/flyers'} className="teamName full">Philadelphia Flyers</Link>
                        <Link to={'/teams/flyers'} className="teamName abbreviated">PHI</Link>
                    </td>
                    <td className="text-center">19/23</td>
                    <td className="text-center">38/50</td>
                    <td className="text-center">1/3</td>
                    <td></td>
                    <td className="text-center">$87,196,428</td>
                    <td className="text-center">$803,572</td>
                    <td className="text-center">$6,250,000</td>
                    <td className="text-center">$7,053,572</td>
                  </tr>

                    {/* <!-- GOLDEN KNIGHTS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Vegas Golden Knights" src="https://cdn2.capfriendly.com/images/logos/vegas_golden_knights.svg"/>
                        <Link to={'/teams/goldenknights'} className="teamName full">Vegas Golden Knights</Link>
                        <Link to={'/teams/goldenknights'} className="teamName abbreviated">VGK</Link>
                    </td>
                    <td className="text-center">20/23</td>
                    <td className="text-center">38/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$86,802,484</td>
                    <td className="text-center">$1,197,516</td>
                    <td className="text-center">$5,000,000</td>
                    <td className="text-center">$6,197,516</td>
                  </tr>

                    {/* <!-- TAMPA --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Tampa Bay Lightning" src="https://cdn2.capfriendly.com/images/logos/tampa_bay_lightning.svg"/>
                        <Link to={'/teams/lightning'} className="teamName full">Tampa Bay Lightning</Link>
                        <Link to={'/teams/lightning'} className="teamName abbreviated">TBL</Link>
                    </td>
                    <td className="text-center">18/23</td>
                    <td className="text-center">33/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$82,665,000	</td>
                    <td className="text-center">$5,335,000	</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- MINNESOTA --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Minnesota Wild" src="https://cdn2.capfriendly.com/images/logos/minnesota_wild.svg"/>
                        <Link to={'/teams/wild'} className="teamName full">Minnesota Wild</Link>
                        <Link to={'/teams/wild'} className="teamName abbreviated">MIN</Link>
                    </td>
                    <td className="text-center">19/23</td>
                    <td className="text-center">35/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$81,743,588</td>
                    <td className="text-center">$6,256,412</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- ISLANDERS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the New York Islanders" src="https://cdn2.capfriendly.com/images/logos/new_york_islanders.svg"/>
                        <Link to={'/teams/islanders'} className="teamName full">New York Islanders</Link>
                        <Link to={'/teams/islanders'} className="teamName abbreviated">NYI</Link>
                    </td>
                    <td className="text-center">17/23</td>
                    <td className="text-center">35/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$81,412,500	</td>
                    <td className="text-center">$6,587,500</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- CAPITALS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Washington Capitals" src="https://cdn2.capfriendly.com/images/logos/washington_capitals.svg"/>
                        <Link to={'/teams/capitals'} className="teamName full">Washington Capitals</Link>
                        <Link to={'/teams/capitals'} className="teamName abbreviated">WSH</Link>
                    </td>
                    <td className="text-center">17/23</td>
                    <td className="text-center">35/50</td>
                    <td className="text-center">1/3</td>
                    <td></td>
                    <td className="text-center">$81,015,000</td>
                    <td className="text-center">$6,985,000</td>
                    <td className="text-center">$9,200,000</td>
                    <td className="text-center">$16,185,000</td>
                  </tr>

                    {/* <!-- MONTREAL --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Montreal Canadiens" src="https://cdn2.capfriendly.com/images/logos/montreal_canadiens.svg"/>
                        <Link to={'/teams/canadiens'} className="teamName full">Montreal Canadiens</Link>
                        <Link to={'/teams/canadiens'} className="teamName abbreviated">MTL</Link>
                    </td>
                    <td className="text-center">19/23</td>
                    <td className="text-center">41/50</td>
                    <td className="text-center">2/3</td>
                    <td></td>
                    <td className="text-center">$78,586,250</td>
                    <td className="text-center">$9,413,750</td>
                    <td className="text-center">$10,500,000</td>
                    <td className="text-center">$19,913,750</td>
                  </tr>

                    {/* <!-- OILERS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Edmonton Oilers" src="https://cdn2.capfriendly.com/images/logos/edmonton_oilers.svg"/>
                        <Link to={' '} className="teamName full">Edmonton Oilers</Link>
                        <Link to={' '} className="teamName abbreviated">EDM</Link>
                    </td>
                    <td className="text-center">14/23</td>
                    <td className="text-center">29/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$77,966,667</td>
                    <td className="text-center">$10,033,333</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- RANGERS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                        <Link to={'/teams/rangers'} className="teamName full">New York Rangers</Link>
                        <Link to={'/teams/rangers'} className="teamName abbreviated">NYR</Link>
                    </td>
                    <td className="text-center">18/23</td>
                    <td className="text-center">38/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$76,393,191</td>
                    <td className="text-center">$11,606,809</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- SENATORS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Ottawa Senators" src="https://cdn2.capfriendly.com/images/logos/ottawa_senators_21.svg"/>
                        <Link to={' '} className="teamName full">Ottawa Senators</Link>
                        <Link to={' '} className="teamName abbreviated">OTT</Link>
                    </td>
                    <td className="text-center">16/23</td>
                    <td className="text-center">29/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$75,534,047</td>
                    <td className="text-center">$12,465,953</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- PENGUINS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Pittsburgh Penguins" src="https://cdn2.capfriendly.com/images/logos/pittsburgh_penguins.svg"/>
                        <Link to={' '} className="teamName full">Pittsburgh Penguins</Link>
                        <Link to={' '} className="teamName abbreviated">PIT</Link>
                    </td>
                    <td className="text-center">14/23</td>
                    <td className="text-center">36/50</td>
                    <td className="text-center">1/3</td>
                    <td></td>
                    <td className="text-center">$74,754,342</td>
                    <td className="text-center">$13,245,658</td>
                    <td className="text-center">$900,000</td>
                    <td className="text-center">$14,145,658</td>
                  </tr>

                    {/* <!-- JETS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Winnipeg Jets" src="https://cdn2.capfriendly.com/images/logos/winnipeg_jets.svg"/>
                        <Link to={' '} className="teamName full">Winnipeg Jets</Link>
                        <Link to={' '} className="teamName abbreviated">WPG</Link>
                    </td>
                    <td className="text-center">17/23</td>
                    <td className="text-center">32/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$74,347,024</td>
                    <td className="text-center">$13,652,976</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- BLUES --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the St. Louis Blues" src="https://cdn2.capfriendly.com/images/logos/st_louis_blues.svg"/>
                        <Link to={' '} className="teamName full">St. Louis Blues</Link>
                        <Link to={' '} className="teamName abbreviated">STL</Link>
                    </td>
                    <td className="text-center">17/23</td>
                    <td className="text-center">40/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$72,057,262</td>
                    <td className="text-center">$15,942,738</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- AVALANCHE --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Colorado Avalanche" src="https://cdn2.capfriendly.com/images/logos/colorado_avalanche.svg"/>
                        <Link to={' '} className="teamName full">Colorado Avalanche</Link>
                        <Link to={' '} className="teamName abbreviated">COL</Link>
                    </td>
                    <td className="text-center">12/23</td>
                    <td className="text-center">27/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$71,783,750	</td>
                    <td className="text-center">$16,216,250</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- STARS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Dallas Stars" src="https://cdn2.capfriendly.com/images/logos/dallas_stars.svg"/>
                        <Link to={' '} className="teamName full">Dallas Stars</Link>
                        <Link to={' '} className="teamName abbreviated">DAL</Link>
                    </td>
                    <td className="text-center">13/23</td>
                    <td className="text-center">30/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$71,753,741</td>
                    <td className="text-center">$16,246,259</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- MAPLE LEAFS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Toronto Maple Leafs" src="https://cdn2.capfriendly.com/images/logos/toronto_maple_leafs.svg"/>
                        <Link to={' '} className="teamName full">Toronto Maple Leafs</Link>
                        <Link to={' '} className="teamName abbreviated">TOR</Link>
                    </td>
                    <td className="text-center">16/23</td>
                    <td className="text-center">33/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$69,169,667</td>
                    <td className="text-center">$18,830,333</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- DEVILS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the New Jersey Devils" src="https://cdn2.capfriendly.com/images/logos/new_jersey_devils.svg"/>
                        <Link to={' '} className="teamName full">New Jersey Devils</Link>
                        <Link to={' '} className="teamName abbreviated">NJD</Link>
                    </td>
                    <td className="text-center">15/23</td>
                    <td className="text-center">34/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$68,876,397</td>
                    <td className="text-center">$19,123,603</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- PANTHERS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Florida Panthers" src="https://cdn2.capfriendly.com/images/logos/florida_panthers.svg"/>
                        <Link to={' '} className="teamName full">Florida Panthers</Link>
                        <Link to={' '} className="teamName abbreviated">FLA</Link>
                    </td>
                    <td className="text-center">14/23</td>
                    <td className="text-center">32/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$67,983,334	</td>
                    <td className="text-center">$20,016,666</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- FLAMES --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Calgary Flames" src="https://cdn2.capfriendly.com/images/logos/calgary_flames.svg"/>
                        <Link to={' '} className="teamName full">Calgary Flames</Link>
                        <Link to={' '} className="teamName abbreviated">CGY</Link>
                    </td>
                    <td className="text-center">19/23</td>
                    <td className="text-center">33/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$67,875,833</td>
                    <td className="text-center">$20,124,167</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- KINGS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Los Angeles Kings" src="https://cdn2.capfriendly.com/images/logos/los_angeles_kings.svg"/>
                        <Link to={' '} className="teamName full">Los Angeles Kings</Link>
                        <Link to={' '} className="teamName abbreviated">LAK</Link>
                    </td>
                    <td className="text-center">13/23</td>
                    <td className="text-center">25/50</td>
                    <td className="text-center">1/3</td>
                    <td></td>
                    <td className="text-center">$67,800,000</td>
                    <td className="text-center">$20,200,000</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- BRUINS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Boston Bruins" src="https://cdn2.capfriendly.com/images/logos/boston_bruins.svg"/>
                        <Link to={' '} className="teamName full">Boston Bruins</Link>
                        <Link to={' '} className="teamName abbreviated">BOS</Link>
                    </td>
                    <td className="text-center">17/23</td>
                    <td className="text-center">30/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$66,790,834</td>
                    <td className="text-center">$21,209,166</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- KRAKEN --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Seattle Kraken" src="https://cdn2.capfriendly.com/images/logos/seattle_kraken.svg"/>
                        <Link to={' '} className="teamName full">Seattle Kraken</Link>
                        <Link to={' '} className="teamName abbreviated">SEA</Link>
                    </td>
                    <td className="text-center">15/23</td>
                    <td className="text-center">35/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$64,575,833 (-424,167)</td>
                    <td className="text-center">$23,424,167</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- SABRES --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Buffalo Sabres" src="https://cdn2.capfriendly.com/images/logos/buffalo_sabres_21.svg"/>
                        <Link to={' '} className="teamName full">Buffalo Sabres</Link>
                        <Link to={' '} className="teamName abbreviated">BUF</Link>
                    </td>
                    <td className="text-center">12/23</td>
                    <td className="text-center">27/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$64,481,070 (-518,930)</td>
                    <td className="text-center">$23,518,930</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- BLUE JACKETS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Columbus Blue Jackets" src="https://cdn2.capfriendly.com/images/logos/columbus_blue_jackets.svg"/>
                        <Link to={' '} className="teamName full">Columbus Blue Jackets</Link>
                        <Link to={' '} className="teamName abbreviated">CBJ</Link>
                    </td>
                    <td className="text-center">15/23</td>
                    <td className="text-center">32/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$64,225,000 (-775,000)</td>
                    <td className="text-center">$23,775,000</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- CANUCKS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Vancouver Canucks" src="https://cdn2.capfriendly.com/images/logos/vancouver_canucks.svg"/>
                        <Link to={' '} className="teamName full">Vancouver Canucks</Link>
                        <Link to={' '} className="teamName abbreviated">VAN</Link>
                    </td>
                    <td className="text-center">15/23</td>
                    <td className="text-center">33/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$63,921,667 (-1,078,333)</td>
                    <td className="text-center">$24,078,333</td>
                    <td className="text-center">$2,500,000</td>
                    <td className="text-center">$26,578,333</td>
                  </tr>

                    {/* <!-- PREDATORS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Nashville Predators" src="https://cdn2.capfriendly.com/images/logos/nashville_predators.svg"/>
                        <Link to={' '} className="teamName full">Nashville Predators</Link>
                        <Link to={' '} className="teamName abbreviated">NSH</Link>
                    </td>
                    <td className="text-center">15/23</td>
                    <td className="text-center">30/50</td>
                    <td className="text-center">2/3</td>
                    <td></td>
                    <td className="text-center">$61,654,199 (-3,345,801)</td>
                    <td className="text-center">$26,345,801</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- HURRICANES --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Carolina Hurricanes" src="https://cdn2.capfriendly.com/images/logos/carolina_hurricanes.svg"/>
                        <Link to={' '} className="teamName full">Carolina Hurricanes</Link>
                        <Link to={' '} className="teamName abbreviated">CAR</Link>
                    </td>
                    <td className="text-center">18/23</td>
                    <td className="text-center">28/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$61,125,833 (-3,874,167)</td>
                    <td className="text-center">$26,874,167</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- RED WINGS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Detroit Red Wings" src="https://cdn2.capfriendly.com/images/logos/detroit_red_wings.svg"/>
                        <Link to={' '} className="teamName full">Detroit Red Wings</Link>
                        <Link to={' '} className="teamName abbreviated">DET</Link>
                    </td>
                    <td className="text-center">13/23</td>
                    <td className="text-center">33/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$58,632,640 (-6,367,360)</td>
                    <td className="text-center">$29,367,360</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- DUCKS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Anaheim Ducks" src="https://cdn2.capfriendly.com/images/logos/anaheim_ducks.svg"/>
                        <Link to={' '} className="teamName full">Anaheim Ducks</Link>
                        <Link to={' '} className="teamName abbreviated">ANA</Link>
                    </td>
                    <td className="text-center">16/23</td>
                    <td className="text-center">36/50</td>
                    <td className="text-center">0/3</td>
                    <td></td>
                    <td className="text-center">$54,694,167 (-10,305,833)</td>
                    <td className="text-center">$33,305,833</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- BLACKHAWKS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Chicago Blackhawks" src="https://cdn2.capfriendly.com/images/logos/chicago_blackhawks.svg"/>
                        <Link to={' '} className="teamName full">Chicago Blackhawks</Link>
                        <Link to={' '} className="teamName abbreviated">CHI</Link>
                    </td>
                    <td className="text-center">14/23</td>
                    <td className="text-center">31/50</td>
                    <td className="text-center">1/3</td>
                    <td></td>
                    <td className="text-center">$53,910,000 (-11,090,000)</td>
                    <td className="text-center">$34,090,000</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- SHARKS --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the San Jose Sharks" src="https://cdn2.capfriendly.com/images/logos/san_jose_sharks.svg"/>
                        <Link to={' '} className="teamName full">San Jose Sharks</Link>
                        <Link to={' '} className="teamName abbreviated">SJS</Link>
                    </td>
                    <td className="text-center">13/23</td>
                    <td className="text-center">33/50</td>
                    <td className="text-center">3/3</td>
                    <td></td>
                    <td className="text-center">$50,479,167 (-14,520,833)</td>
                    <td className="text-center">$37,520,833</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>

                    {/* <!-- UTAH --> */}
                  <tr>
                    <td scope="row" className='text-nowrap'>
                        <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the Utah" src="https://cdn2.capfriendly.com/images/logos/nhl_shield.svg"/>
                        <Link to={' '} className="teamName full">Utah</Link>
                        <Link to={' '} className="teamName abbreviated">UTA</Link>
                    </td>
                    <td className="text-center">11/23</td>
                    <td className="text-center">23/50</td>
                    <td className="text-center">1/3</td>
                    <td></td>
                    <td className="text-center">$44,435,476 (-20,564,524)</td>
                    <td className="text-center">$43,564,524</td>
                    <td className="text-center">$7,857,143</td>
                    <td className="text-center">$51,421,667</td>
                  </tr>
                </tbody>
            </table>
            </div>
    </div>

    {/* <!-- POPULAR ACTIVE/INACTIVE HERO --> */}
    <div className="row align-items-md-stretch mb-5">
              <div className="col-xl-4">
                <div className="h-100 p-5 bg-light border rounded-3">
                  <h2 className="text-center">Recalls & Reassignments</h2>
                  <table className="table">
                      <thead>
                          <tr>
                            <th scope="col">PLAYER</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">TRANSACTION</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the capitals" title="capitals" src="https://cdn2.capfriendly.com/images/logos/washington_capitals.svg"/>
                            <Link to={' '} className="playerName">Ethan Bear</Link></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-center">NHL
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                              </svg>
                          </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the bluejackets" title="bluejackets" src="https://cdn2.capfriendly.com/images/logos/columbus_blue_jackets.svg"/>
                                <Link to={' '} className="playerName">Denton Mateychuk</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center">Minors</td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the bluejackets" title="bluejackets" src="https://cdn2.capfriendly.com/images/logos/columbus_blue_jackets.svg"/>
                                <Link to={' '} className="playerName">Brendan Gaunce</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center">Minors
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                                  </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                <Link to={' '} className="playerName">Louis Domingue</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center">Set to Roster</td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                <Link to={' '} className="playerName">Adam Sýkora</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center">NHL
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                                  </svg>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  <button className="btn btn-outline-secondary btn-block" type="button">See All</button>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="h-100 p-5 bg-light border rounded-3">
                  <h2 className="text-center">Popular Active</h2>
                  <table className="table">
                      <thead>
                          <tr>
                            <th scope="col">PLAYER</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td><Link to={' '} className="playerName">
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the oilers" title="oilers" src="https://cdn2.capfriendly.com/images/logos/edmonton_oilers.svg"/>
                            Connor McDavid</Link></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                            <td><Link to={' '} className="playerName">
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the hurricanes" title="hurricanes" src="https://cdn2.capfriendly.com/images/logos/carolina_hurricanes.svg"/>
                                Jake Guentzel</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><Link to={' '} className="playerName">
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the hurricanes" title="hurricanes" src="https://cdn2.capfriendly.com/images/logos/carolina_hurricanes.svg"/>
                                Martin Necas</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><Link to={' '} className="playerName">
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the canadiens" title="canadiens" src="https://cdn2.capfriendly.com/images/logos/montreal_canadiens.svg"/>
                                Samuel Montembeault</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><Link to={' '} className="playerName">
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the panthers" title="panthers" src="https://cdn2.capfriendly.com/images/logos/florida_panthers.svg"/>
                                Sergei Bobrovsky</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                      </tbody>
                    </table>
                    <button className="btn btn-outline-secondary btn-block" type="button">Browse Active</button>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="h-100 p-5 bg-light border rounded-3">
                  <h2 className="text-center">Popular Inactive</h2>
                  <table className="table">
                      <thead>
                          <tr>
                            <th scope="col">PLAYER</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the " title="" src="https://cdn2.capfriendly.com/images/logos/nhl_shield.svg"/>
                            <Link to={' '} className="playerName">Wayne Gretzky</Link></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the " title="" src="https://cdn2.capfriendly.com/images/logos/nhl_shield.svg"/>
                              <Link to={' '} className="playerName">Tij Iginla</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the " title="" src="https://cdn2.capfriendly.com/images/logos/nhl_shield.svg"/>
                              <Link to={' '} className="playerName">Macklin Celebrini</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the " title="" src="https://cdn2.capfriendly.com/images/logos/nhl_shield.svg"/>
                              <Link to={' '} className="playerName">Rick DiPietro</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <img className="im_mid" style={{height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px',}} alt="Logo of the " title="" src="https://cdn2.capfriendly.com/images/logos/nhl_shield.svg"/>
                              <Link to={' '} className="playerName">Henrik Lundqvist</Link></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="btn btn-outline-secondary btn-block" type="button">Browse Inactive</button>
                </div>
              </div>
    </div>
        
    {/* <!-- RECENT TRADES HERO --> */}
    <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid">
            <h1 className="display-5 text text-center">Recent Trades</h1>
            <p className="text text-center"><Link to={' '} className="playerName">FILTER TRADES</Link></p>
            <table className="table">
                <thead>
                    <tr>
                      <th scope="col">DATE</th>
                      <th scope="col"></th>
                      <th scope="col" className="text-center">TRADE DETAILS</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">May 24, 2024</td>
                    <td className="text-center">
                    <p>Chicago Blackhawks Acquire:</p>
                        <img style={{height: '35px', width: '35px',}} alt="Logo of the Chicago Blackhawks" src="https://cdn2.capfriendly.com/images/logos/chicago_blackhawks.svg"/>
                    <p>2024 1st round pick (NYI - #18)</p>
                    <p>2024 2nd round pick (NYI - #50)</p>
                    </td>
                    <td className="text-center align-middle">
                        <img alt="Trade" height="15" width="15" style={{ margin: '0 0 -2px 0' }} src="https://cdn2.capfriendly.com/images/icons/trades/trade.svg"/>
                    </td>
                    <td className="text-center">
                    <p>New York Islanders Acquire:</p>
                    <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the New York Islanders" src="https://cdn2.capfriendly.com/images/logos/new_york_islanders.svg"/>
                    <p>2024 1st round pick (TBL - #20)</p>
                    <p>2024 2nd round pick (LAK - #54)</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="align-middle">May 21, 2024</td>
                    <td className="text-center">
                    <p>Nashville Predators Acquire:</p>
                        <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the Nashville Predators" src="https://cdn2.capfriendly.com/images/logos/nashville_predators.svg"/>
                    <p>2024 7th round pick (TBL - #213)</p>
                    <p>2025 2nd round pick (TBL)</p>
                    </td>
                    <td className="text-center align-middle">
                        <img alt="Trade" height="15" width="15" style={{ margin: '0 0 -2px 0' }} src="https://cdn2.capfriendly.com/images/icons/trades/trade.svg"/>
                    </td>
                    <td className="text-center">
                    <p>Tampa Bay Lightning Acquire:</p>
                    <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the Tampa Bay Lightning" src="https://cdn2.capfriendly.com/images/logos/tampa_bay_lightning.svg"/>
                    <p>Ryan McDonagh · $6,750,000</p>
                    <p>2024 4th round pick (EDM - #128)</p>
                    </td>
                  </tr>

                    <tr>
                        <td className="align-middle">Mar. 15, 2024</td>
                        <td className="text-center">
                            <p>Ottawa Senators Acquire:</p>
                            <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the Ottawa Senators" src="https://cdn2.capfriendly.com/images/logos/ottawa_senators_21.svg"/>
                            <p>Wyatt Bongiovanni · $0 (AHL/JR)</p>
                            </td>
                            <td className="text-center align-middle">
                                <img alt="Trade" height="15" width="15" style={{ margin: '0 0 -2px 0' }} src="https://cdn2.capfriendly.com/images/icons/trades/trade.svg"/>
                            </td>
                            <td className="text-center">
                            <p>Winnipeg Jets Acquire:</p>
                            <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the Winnipeg Jets" src="https://cdn2.capfriendly.com/images/logos/winnipeg_jets.svg"/>
                            <p>Future Considerations</p>
                            </td>
                    </tr>

                    <tr>
                        <td className="align-middle">Mar. 15, 2024</td>
                        <td className="text-center">
                            <p>Carolina Hurricanes Acquire:</p>
                            <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the Carolina Hurricanes" src="https://cdn2.capfriendly.com/images/logos/carolina_hurricanes.svg"/>
                            <p>2024 6th round pick (OTT - #168)</p>
                            </td>
                            <td className="text-center align-middle">
                                <img alt="Trade" height="15" width="15" style={{ margin: '0 0 -2px 0' }} src="https://cdn2.capfriendly.com/images/icons/trades/trade.svg"/>
                            </td>
                            <td className="text-center">
                            <p>Ottawa Senators Acquire:</p>
                            <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the Ottawa Senators" src="https://cdn2.capfriendly.com/images/logos/ottawa_senators_21.svg"/>
                            <p>Jamieson Rees · $0 (AHL/JR)</p>
                            </td>
                    </tr>

                    <tr>
                        <td className="align-middle">Mar. 11, 2024</td>
                        <td className="text-center">
                            <p>Montreal Canadiens Acquire:</p>
                            <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the Montreal Canadiens" src="https://cdn2.capfriendly.com/images/logos/montreal_canadiens.svg"/>
                            <p>Arnaud Durandeau · $0 (AHL/JR)</p>
                            </td>
                            <td className="text-center align-middle">
                                <img alt="Trade" height="15" width="15" style={{ margin: '0 0 -2px 0' }} src="https://cdn2.capfriendly.com/images/icons/trades/trade.svg"/>
                            </td>
                            <td className="text-center">
                            <p>New Jersey Devils Acquire:</p>
                            <img className="im_mid" style={{height: '35px', width: '35px',}} alt="Logo of the New Jersey Devils" src="https://cdn2.capfriendly.com/images/logos/new_jersey_devils.svg"/>
                            <p>Nathan Légaré · $0 (AHL/JR)</p>
                            </td>
                    </tr>
                </tbody>
            </table>
            </div>
    </div>   
  </div>
    </>
  )
}

export default App
