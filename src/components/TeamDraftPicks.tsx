import { TeamDraftPicksProps } from "../types/interfaceTypes";

const TeamDraftPicks: React.FC<TeamDraftPicksProps> = ({ data }) => {
  return (
    <>
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
            {data.map((row, rowIndex) => (
              <tr className="text-center" key={rowIndex}>
                <td>{row.year}</td>
                {row.rounds.map((content, colIndex) => (
                  <td key={colIndex}>{content}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeamDraftPicks;
