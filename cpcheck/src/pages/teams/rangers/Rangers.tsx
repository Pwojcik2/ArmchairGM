
function Rangers() {
    return (
        <>
        <div>
        {/* <!-- HEADER --> */}
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                {/* <!-- <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> --> */}
                <span className="fs-4">CapCheck</span>
              </a>
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
              </form>
        
              <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
    
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Teams</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
    
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Players</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
    
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
              </ul>
            </header>
        </div>

    
        <div className="p-5 mb-4 bg-light rounded-3">
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
                    <p className="text noMargin">GENERAL MANAGER: <a href="#" className="playerName">Chris Drury</a></p>
                    <p className="text">HEAD COACH: <a href="#" className="playerName">Peter Laviolette</a></p>
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
                            <td>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                            </td>
                            <td>
                                <img className="pickTraded" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                            </td>
                            <td>
                                <img className="pickTraded" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                            </td>
                            <td>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                            </td>
                            <td>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                            </td>
                            <td>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                            </td>
                            <td>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>2025</td>
                            <td><img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="pickTraded" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="pickTraded" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="pickTraded" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the Minnesota Wild" src="https://cdn2.capfriendly.com/images/logos/minnesota_wild.svg"/>
                            </td>
                            <td><img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                          </tr>
                          <tr className="text-center">
                            <td>2026</td>
                            <td><img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="pickTraded" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="pickTraded" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td><img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/></td>
                            <td>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the New York Rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                <img className="im_mid" style={{height: '18px', width: '18px',  marginTop: '4px',}} alt="Logo of the Vancouver Canucks" src="https://cdn2.capfriendly.com/images/logos/vancouver_canucks.svg"/>
                            </td>
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
                            <table className="table">
                                <tbody>
                                  <tr>
                                    <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Louis Domingue</a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>Set to Roster - May 25</td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Adam Sýkora</a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>NHL <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                                      </svg> - May 25</td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Brandon Scanlin</a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>NHL <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                                      </svg> - May 25</td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Matthew Robertson</a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>NHL <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                                      </svg> - May 25</td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Tyler Pitlick</a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>NHL <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                                      </svg> - May 25</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button className="btn btn-outline-secondary btn-block" type="button">See All</button>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="h-100 p-5 bg-light border rounded-3">
                            <h2 className="text-center">Injuries</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                      <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Jimmy Vesey</a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td>Upper Body <span className="small">(Wk to wk)</span> - May 26</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Filip Chytil</a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td>Cleared - May 22</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Blake Wheeler</a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td>Cleared - May 16</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Filip Chytil</a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td>Cleared - May 9</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <img className="im_mid" style={{ height: '15px', width: '15px', marginRight: '5px', marginTop: '-2px' }} alt="Logo of the rangers" title="rangers" src="https://cdn2.capfriendly.com/images/logos/new_york_rangers.svg"/>
                                        <a href="#" className="playerName">Erik Gustafsson</a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td>Cleared - Apr. 3</td>
                                    </tr>
                                  </tbody>
                            </table>
                            <button className="btn btn-outline-secondary btn-block" type="button">See All</button>
                          </div>
                        </div>
                    </div>
                </div>

                {/* <!-- FORWARDS CONTRACTS --> */}
                <div>
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                              <th scope="col">FORWARDS (12 - $46,754,524)</th>
                              <th scope="col">TERMS</th>
                              <th scope="col">POS</th>
                              <th scope="col">STATUS</th>
                              <th scope="col">ACQUIRED</th>
                              <th scope="col">AGE</th>
                              <th scope="col">CAP%	</th>
                              <th scope="col">2024-25</th>
                              <th scope="col">2025-26</th>
                              <th scope="col">2026-27</th>
                              <th scope="col">2027-28</th>
                              <th scope="col">2028-29</th>
                              <th scope="col">2029-30</th>
                            </tr>
                          </thead>
                        <tbody>
                            {/* <!-- PANARIN --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Panarin, Artemi</a> "A"</td>
                            <td>NMC</td>
                            <td>LW</td>
                            <td>NHL</td>
                            <td>Signed</td>
                            <td>32</td>
                            <td>13.2</td>
                            <td>$11,642,857</td>
                            <td>$11,642,857</td>
                            <td><div className="redUFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- MIKA --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Zibanejad, Mika</a> "A"</td>
                            <td>NMC</td>
                            <td>C</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>31</td>
                            <td>9.7</td>
                            <td>$8,500,000</td>
                            <td>$8,500,000</td>
                            <td>$8,500,000</td>
                            <td>$8,500,000</td>
                            <td>$8,500,000</td>
                            <td>$8,500,000</td>
                          </tr>
                          {/* <!-- KRIEDER --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Kreider, Chris</a> "A"</td>
                            <td className="text-nowrap">M-NTC, NMC</td>
                            <td>LW</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>32</td>
                            <td>7.4</td>
                            <td>$6,500,000</td>
                            <td>$6,500,000</td>
                            <td>$6,500,000</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- TROCHEK --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Trocheck, Vincent</a></td>
                            <td>NMC</td>
                            <td className="text-nowrap">C, RW</td>
                            <td>NHL</td>
                            <td>Signed</td>
                            <td>30</td>
                            <td>6.4</td>
                            <td>$5,625,000</td>
                            <td>$5,625,000</td>
                            <td>$5,625,000</td>
                            <td>$5,625,000</td>
                            <td>$5,625,000</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                          </tr>
                          {/* <!-- CHYTIL --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Chytil, Filip</a></td>
                            <td></td>
                            <td>C, LW</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>24</td>
                            <td>5.0</td>
                            <td>$4,437,500</td>
                            <td>$4,437,500</td>
                            <td>$4,437,500</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- GOODROW --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Goodrow, Barclay</a>"A"</td>
                            <td>M-NTC</td>
                            <td className="text-nowrap">C, LW</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>31</td>
                            <td>4.1</td>
                            <td>$3,641,667</td>
                            <td>$3,641,667</td>
                            <td>$3,641,667</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- LAFRENIERE --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Lafrenière, Alexis</a></td>
                            <td></td>
                            <td className="text-nowrap">LW, RW</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>22</td>
                            <td>2.6</td>
                            <td>$2,325,000</td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- EDSTROM --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Edström, Adam</a></td>
                            <td>ELC</td>
                            <td className="text-nowrap">C, LW</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>23</td>
                            <td>1.0</td>
                            <td>$846,667</td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- CUYLLE --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Cuylle, Will</a></td>
                            <td>ELC</td>
                            <td className="text-nowrap">LW</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>22</td>
                            <td>0.9</td>
                            <td>$828,333</td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- REMPE --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Rempe, Matt</a></td>
                            <td>ELC</td>
                            <td className="text-nowrap">C, RW</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>21</td>
                            <td>0.9</td>
                            <td>$820,000</td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- VESEY --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Cuylle, Will</a></td>
                            <td></td>
                            <td className="text-nowrap">RW, LW</td>
                            <td>NHL</td>
                            <td>Signed</td>
                            <td>31</td>
                            <td>0.9</td>
                            <td>$800,000</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- BRODZINSKI --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Brodzinski, Jonny</a></td>
                            <td></td>
                            <td className="text-nowrap">C</td>
                            <td>NHL</td>
                            <td>Signed</td>
                            <td>30</td>
                            <td>0.9</td>
                            <td>$787,500</td>
                            <td>$787,500</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- KAKKO --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Kakko, Kaapo</a></td>
                            <td></td>
                            <td className="text-nowrap">RW</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>23</td>
                            <td></td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- ROSLOVIC --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Roslovic, Jack</a></td>
                            <td></td>
                            <td className="text-nowrap">C, RW</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>27</td>
                            <td></td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- WENNBERG --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Wennberg, Alexander</a></td>
                            <td></td>
                            <td className="text-nowrap">C</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>29</td>
                            <td></td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- WHEELER --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Wheeler, Blake</a></td>
                            <td></td>
                            <td className="text-nowrap">RW</td>
                            <td>NHL</td>
                            <td>Signed</td>
                            <td>37</td>
                            <td></td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- TOTAL --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap">TOTAL</td>
                            <td></td>
                            <td className="text-nowrap"></td>
                            <td></td>
                            <td></td>
                            <td>27.9</td>
                            <td>53.1</td>
                            <td>$46,754,524</td>
                            <td>$41,134,524</td>
                            <td>$28,704,167</td>
                            <td>$14,125,000</td>
                            <td>$14,125,000</td>
                            <td>$8,500,000</td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!-- DEFENSE CONTRACTS --> */}
                <div>
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                              <th scope="col">DEFENSE (4 - $22,184,500)</th>
                              <th scope="col">TERMS</th>
                              <th scope="col">POS</th>
                              <th scope="col">STATUS</th>
                              <th scope="col">ACQUIRED</th>
                              <th scope="col">AGE</th>
                              <th scope="col">CAP%	</th>
                              <th scope="col">2024-25</th>
                              <th scope="col">2025-26</th>
                              <th scope="col">2026-27</th>
                              <th scope="col">2027-28</th>
                              <th scope="col">2028-29</th>
                              <th scope="col">2029-30</th>
                            </tr>
                          </thead>
                        <tbody>
                            {/* <!-- FOX --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Fox, Adam</a></td>
                            <td></td>
                            <td>RD</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>26</td>
                            <td>10.8</td>
                            <td>$9,500,000</td>
                            <td>$9,500,000</td>
                            <td>$9,500,000</td>
                            <td>$9,500,000</td>
                            <td>$9,500,000</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                          </tr>
                          {/* <!-- TROUBA --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Trouba, Jacob</a> "C"</td>
                            <td>M-NTC</td>    
                            <td>RD</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>30</td>
                            <td>9.1</td>
                            <td>$8,000,000</td>
                            <td>$8,000,000</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- MILLER --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Miller, K'Andre</a></td>
                            <td className="text-nowrap"></td>
                            <td>LD</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>24</td>
                            <td>4.4</td>
                            <td>$3,872,000</td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- JONES --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Jones, Zachary</a></td>
                            <td></td>
                            <td className="text-nowrap">LD</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>23</td>
                            <td>0.9</td>
                            <td>$812,500</td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- LINDGREN --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Lindgren, Ryan</a></td>
                            <td></td>
                            <td>LD</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>26</td>
                            <td></td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- SCHNEIDER --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Schneider, Braden</a></td>
                            <td></td>
                            <td className="text-nowrap">RD</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>22</td>
                            <td></td>
                            <td><div className="blueRFA fw-bold">RFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- GUSTAFSSON --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Gustafsson, Erik</a></td>
                            <td></td>
                            <td className="text-nowrap">LD</td>
                            <td>NHL</td>
                            <td>Signed</td>
                            <td>32</td>
                            <td></td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- RUHWEDEL --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap"><a href="#" className="playerName">Ruhwedel, Chad</a></td>
                            <td></td>
                            <td className="text-nowrap">RD</td>
                            <td>NHL</td>
                            <td>Trade</td>
                            <td>34</td>
                            <td></td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- TOTAL --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap">TOTAL</td>
                            <td></td>
                            <td className="text-nowrap"></td>
                            <td></td>
                            <td></td>
                            <td>27.1</td>
                            <td>25.2</td>
                            <td>$22,184,500</td>
                            <td>$17,500,000</td>
                            <td>$9,500,000</td>
                            <td>$9,500,000</td>
                            <td>$9,500,000</td>
                            <td></td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!-- GOALIES CONTRACTS --> */}
                <div>
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                              <th scope="col">GOALIES (2 - $6,941,667)</th>
                              <th scope="col">TERMS</th>
                              <th scope="col">POS</th>
                              <th scope="col">STATUS</th>
                              <th scope="col">ACQUIRED</th>
                              <th scope="col">AGE</th>
                              <th scope="col">CAP%	</th>
                              <th scope="col">2024-25</th>
                              <th scope="col">2025-26</th>
                              <th scope="col">2026-27</th>
                              <th scope="col">2027-28</th>
                              <th scope="col">2028-29</th>
                              <th scope="col">2029-30</th>
                            </tr>
                          </thead>
                        <tbody>
                            {/* <!-- IGOR --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Shesterkin, Igor</a></td>
                            <td>M-NTC</td>
                            <td>G</td>
                            <td>NHL</td>
                            <td>Draft</td>
                            <td>28</td>
                            <td>6.4</td>
                            <td>$5,666,667</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- QUICK --> */}
                          <tr className="text-center">
                            <td className="text-left"><a href="#" className="playerName">Quick, Jonathan</a></td>
                            <td>35+ M-NTC</td>    
                            <td>G</td>
                            <td>NHL</td>
                            <td>Signed</td>
                            <td>38</td>
                            <td>1.4</td>
                            <td>$1,275,000</td>
                            <td><div className="redUFA fw-bold">UFA</div></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {/* <!-- TOTAL --> */}
                          <tr className="text-center">
                            <td className="text-left text-nowrap">TOTAL</td>
                            <td></td>
                            <td className="text-nowrap"></td>
                            <td></td>
                            <td></td>
                            <td>33.0</td>
                            <td>7.9</td>
                            <td>$6,941,667	</td>
                            <td></td>                            
                            <td></td>                            
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    

    </div>
    </>
    )
}

export default Rangers