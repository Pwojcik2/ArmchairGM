import { Link } from "react-router-dom";

export default function TeamFinances(props: {
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
        <h1 className="display-5 text">{props.teamName}</h1>
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
          PROJECTED CAP HIT : {props.projectedCapHit}
        </p>
        <p className="text noMargin lead">
          PROJECTED LTIR USED : {props.projectedLTIR}
        </p>
        <p className="text lead">
          PROJECTED CAP SPACE : {props.projectedCapSpace}
        </p>
        <p className="text noMargin">
          CURRENT CAP SPACE : {props.currentCapSpace}
        </p>
        <p className="text noMargin">
          DEADLINE CAP SPACE : {props.deadlineCapSpace}
        </p>
        <p className="text">TODAY'S CAP HIT : {props.todayCapHit}</p>
        <p className="text noMargin">ROSTER SIZE: {props.rosterSize}</p>
        <p className="text noMargin">CONTRACTS: {props.contracts}</p>
        <p className="text noMargin">RESERVE LIST: {props.reserveList}</p>
        <p className="text">INJURIES: {props.injuries}</p>
        <p className="text noMargin">
          GENERAL MANAGER:
          <Link to={" "} className="playerName">
            {props.generalManager}
          </Link>
        </p>
        <p className="text">
          HEAD COACH:
          <Link to={" "} className="playerName">
            {props.headCoach}
          </Link>
        </p>
      </div>
    </>
  );
}
