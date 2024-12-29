import { useLocation } from "react-router-dom";
import {
  NewRangersType,
  NewRangersFinancesType,
} from "../../types/interfaceTypes";

interface IProps {
  rangers?: NewRangersType[];
  rangersFinance?: NewRangersFinancesType[];
}

function CapSpace() {
  const location = useLocation();
  const { rangers, rangersFinance } = location.state as IProps;

  console.log("RANGERS", rangers);
  console.log("RANGERS FINANCE", rangersFinance);

  return (
    <div>
      {rangers && rangers.length ? (
        <>
          {rangers.map((ranger) => (
            <div key={ranger.id}></div>
          ))}
        </>
      ) : (
        <p>No rangers info</p>
      )}

      {rangersFinance && rangersFinance.length ? (
        <>
          <h1>Rangers Finance</h1>
          {rangersFinance.map((finance) => (
            <div key={finance.id}>
              <h2>{finance.contracts}</h2>
            </div>
          ))}
        </>
      ) : (
        <p>No rangers finance info</p>
      )}
    </div>
  );
}

export default CapSpace;
