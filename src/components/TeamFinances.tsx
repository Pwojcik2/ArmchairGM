import { Link } from "react-router-dom";

export default function TeamFinances(flyers: {
  contracts?: string;
  currentCapSpace?: string;
  deadlineCapSpace?: string;
  generalManager?: string;
  headCoach?: string;
  injuries?: string;
  projectedCapHit?: string;
  projectedCapSpace?: string;
  projectedLTIR?: string;
  reserveList?: string;
  rosterSize?: string;
  teamName?: string;
  todayCapHit?: string;
  id?: string;
}) {
  return (
    <>
      <div className="text-center">
        <h1 className="display-5 text">{flyers.teamName}</h1>
        <img
          style={{
            height: "80px",
            width: "80px",
            marginBottom: "5px",
          }}
          alt="Logo of the Philadelphia Flyers"
          src="https://cdn2.capfriendly.com/images/logos/philadelphia_flyers.svg"
        ></img>
        <p className="text noMargin lead">
          PROJECTED CAP HIT : {flyers.projectedCapHit}
        </p>
        <p className="text noMargin lead">
          PROJECTED LTIR USED : {flyers.projectedLTIR}
        </p>
        <p className="text lead">
          PROJECTED CAP SPACE : {flyers.projectedCapSpace}
        </p>
        <p className="text noMargin">
          CURRENT CAP SPACE : {flyers.currentCapSpace}
        </p>
        <p className="text noMargin">
          DEADLINE CAP SPACE : {flyers.deadlineCapSpace}
        </p>
        <p className="text">TODAY'S CAP HIT : {flyers.todayCapHit}</p>
        <p className="text noMargin">ROSTER SIZE: {flyers.rosterSize}</p>
        <p className="text noMargin">CONTRACTS: {flyers.contracts}</p>
        <p className="text noMargin">RESERVE LIST: {flyers.reserveList}</p>
        <p className="text">INJURIES: {flyers.injuries}</p>
        <p className="text noMargin">
          GENERAL MANAGER:
          <Link to={" "} className="playerName">
            {flyers.generalManager}
          </Link>
        </p>
        <p className="text">
          HEAD COACH:
          <Link to={" "} className="playerName">
            {flyers.headCoach}
          </Link>
        </p>
      </div>
    </>
  );
}
