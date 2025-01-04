import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../home/App.css";
import {
  DefenseData,
  GoalieData,
  NewRangersFinancesType,
  TeamDraftPicksProps,
} from "../../types/interfaceTypes";
import TeamFinances from "../../components/TeamFinances";
import TeamRecallInuries from "../../components/TeamRecallInjuries";
import ForwardFinances from "../../components/ForwardFinances";
import { ForwardData } from "../../types/interfaceTypes";
import DefensemenContractsTable from "../../components/DefensemanFinances";
import GoalieContractsTable from "../../components/GoalieFinanaces";
import TeamDraftPicks from "../../components/TeamDraftPicks";
import Images from "../../assets/Images";

function createInjuries(
  teamImage: string,
  name: string,
  injury: string,
  link: string
) {
  return { teamImage, name, injury, link };
}

function createRecalls(
  teamImage: string,
  playerName: string,
  recall: string,
  link: string
) {
  return { teamImage, playerName, recall, link };
}

const forwardData: ForwardData[] = [
  {
    name: 'Panarin, Artemi "A"',
    terms: "NMC",
    pos: "LW",
    status: "NHL",
    acquired: "Signed",
    age: 32,
    cap: "13.2",
    year2024: "$11,642,857",
    year2025: "$11,642,857",
    year2026: "RFA",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: 'Zibanejad, Mika "A"',
    terms: "NMC",
    pos: "C",
    status: "NHL",
    acquired: "Trade",
    age: 31,
    cap: "9.7",
    year2024: "$8,500,000",
    year2025: "$8,500,000",
    year2026: "$8,500,000",
    year2027: "$8,500,000",
    year2028: "$8,500,000",
    year2029: "$8,500,000",
    link: "#",
  },
  {
    name: 'Kreider, Chris "A"',
    terms: "M-NTC, NMC",
    pos: "LW",
    status: "NHL",
    acquired: "Draft",
    age: 32,
    cap: "7.4",
    year2024: "$6,500,000",
    year2025: "$6,500,000",
    year2026: "$6,500,000",
    year2027: "UFA",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Trocheck, Vincent",
    terms: "NMC",
    pos: "C, RW",
    status: "NHL",
    acquired: "Signed",
    age: 30,
    cap: "6.4",
    year2024: "$5,625,000",
    year2025: "$5,625,000",
    year2026: "$5,625,000",
    year2027: "$5,625,000",
    year2028: "$5,625,000",
    year2029: "UFA",
    link: "#",
  },
  {
    name: "Chytil, Filip",
    terms: "",
    pos: "C, LW",
    status: "NHL",
    acquired: "Draft",
    age: 24,
    cap: "5.0",
    year2024: "$4,437,500",
    year2025: "$4,437,500",
    year2026: "$4,437,500",
    year2027: "UFA",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: 'Goodrow, Barclay "A"',
    terms: "M-NTC",
    pos: "C, LW",
    status: "NHL",
    acquired: "Trade",
    age: 31,
    cap: "4.1",
    year2024: "$3,641,667",
    year2025: "$3,641,667",
    year2026: "$3,641,667",
    year2027: "UFA",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Lafrenière, Alexis",
    terms: "",
    pos: "LW, RW",
    status: "NHL",
    acquired: "Draft",
    age: 22,
    cap: "2.6",
    year2024: "$2,325,000",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Edström, Adam",
    terms: "ELC",
    pos: "C, LW",
    status: "NHL",
    acquired: "Draft",
    age: 23,
    cap: "1.0",
    year2024: "$846,667",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Cuylle, Will",
    terms: "ELC",
    pos: "LW",
    status: "NHL",
    acquired: "Draft",
    age: 22,
    cap: "0.9",
    year2024: "$828,333",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Rempe, Matt",
    terms: "ELC",
    pos: "C, RW",
    status: "NHL",
    acquired: "Draft",
    age: 21,
    cap: "0.9",
    year2024: "$820,000",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Cuylle, Will",
    terms: "",
    pos: "RW, LW",
    status: "NHL",
    acquired: "Signed",
    age: 31,
    cap: "0.9",
    year2024: "$800,000",
    year2025: "UFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Brodzinski, Jonny",
    terms: "",
    pos: "C",
    status: "NHL",
    acquired: "Signed",
    age: 30,
    cap: "0.9",
    year2024: "$787,500",
    year2025: "$787,500",
    year2026: "UFA",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Kakko, Kaapo",
    terms: "",
    pos: "RW",
    status: "NHL",
    acquired: "Draft",
    age: 23,
    cap: "",
    year2024: "RFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Roslovic, Jack",
    terms: "",
    pos: "C, RW",
    status: "NHL",
    acquired: "Trade",
    age: 27,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Wennberg, Alexander",
    terms: "",
    pos: "C",
    status: "NHL",
    acquired: "Trade",
    age: 29,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Wheeler, Blake",
    terms: "",
    pos: "RW",
    status: "NHL",
    acquired: "Signed",
    age: 37,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "TOTAL",
    terms: "",
    pos: "",
    status: "",
    acquired: "",
    age: 27.9,
    cap: "53.1",
    year2024: "$46,754,524",
    year2025: "$41,134,524",
    year2026: "$28,704,167",
    year2027: "$14,125,000",
    year2028: "$14,125,000",
    year2029: "$8,500,000",
    link: "#",
  },
];

const defenseData: DefenseData[] = [
  {
    name: "Fox, Adam",
    terms: "",
    pos: "RD",
    status: "NHL",
    acquired: "Trade",
    age: 26,
    cap: "10.8",
    year2024: "$9,500,000",
    year2025: "$9,500,000",
    year2026: "$9,500,000",
    year2027: "$9,500,000",
    year2028: "$9,500,000",
    year2029: "UFA",
    link: "#",
  },
  {
    name: 'Trouba, Jacob "C"',
    terms: "M-NTC",
    pos: "RD",
    status: "NHL",
    acquired: "Trade",
    age: 30,
    cap: "9.1",
    year2024: "$8,000,000",
    year2025: "$8,000,000",
    year2026: "UFA",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Miller, K'Andre",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Draft",
    age: 24,
    cap: "4.4",
    year2024: "$3,872,000",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Jones, Zachary",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Draft",
    age: 23,
    cap: "0.9",
    year2024: "$812,500",
    year2025: "RFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Lindgren, Ryan",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Trade",
    age: 26,
    cap: "",
    year2024: "RFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Schneider, Braden",
    terms: "",
    pos: "RD",
    status: "NHL",
    acquired: "Draft",
    age: 22,
    cap: "",
    year2024: "RFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Gustafsson, Erik",
    terms: "",
    pos: "LD",
    status: "NHL",
    acquired: "Signed",
    age: 32,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Ruhwedel, Chad",
    terms: "",
    pos: "RD",
    status: "NHL",
    acquired: "Trade",
    age: 34,
    cap: "",
    year2024: "UFA",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "TOTAL",
    terms: "",
    pos: "",
    status: "",
    acquired: "",
    age: 27.1,
    cap: "25.2",
    year2024: "$22,184,500",
    year2025: "$17,500,000",
    year2026: "$9,500,000",
    year2027: "$9,500,000",
    year2028: "$9,500,000",
    year2029: "",
    link: "#",
  },
];

const goalieData: GoalieData[] = [
  {
    name: "Shesterkin, Igor",
    terms: "M-NTC",
    pos: "G",
    status: "NHL",
    acquired: "Draft",
    age: 28,
    cap: "6.4",
    year2024: "$5,666,667",
    year2025: "UFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "Quick, Jonathan",
    terms: "35+ M-NTC",
    pos: "G",
    status: "NHL",
    acquired: "Signed",
    age: 38,
    cap: "1.4",
    year2024: "$1,275,000",
    year2025: "UFA",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
  {
    name: "TOTAL",
    terms: "",
    pos: "",
    status: "",
    acquired: "",
    age: 33.0,
    cap: "7.9",
    year2024: "$6,941,667",
    year2025: "",
    year2026: "",
    year2027: "",
    year2028: "",
    year2029: "",
    link: "#",
  },
];

const injuryData = [
  createInjuries(
    Images.rangersImg,
    "Jimmy Vesey",
    "Upper Body(Wk to wk) - May 26",
    "#"
  ),
  createInjuries(Images.rangersImg, "Filip Chytil", "Cleared - May 22", "#"),
  createInjuries(Images.rangersImg, "Blake Wheeler", "Cleared - May 16", "#"),
  createInjuries(Images.rangersImg, "Filip Chytil", "Cleared - May 9", "#"),
  createInjuries(Images.rangersImg, "Erik Gustafsson", "Cleared - Apr. 3", "#"),
];

const recallData = [
  createRecalls(
    Images.rangersImg,
    "Louis Domingue",
    "Set to Roster - May 25",
    "#"
  ),
  createRecalls(Images.rangersImg, "Adam Sýkora", "NHL - May 25", "#"),
  createRecalls(Images.rangersImg, "Brandon Scanlin", "NHL - May 25", "#"),
  createRecalls(Images.rangersImg, "Matthew Robertson", "NHL - May 25", "#"),
  createRecalls(Images.rangersImg, "Tyler Pitlick", "NHL - May 25", "#"),
];

const draftData: TeamDraftPicksProps["data"] = [
  {
    year: "2024",
    rounds: [
      Images.rangersImg,
      Images.rangersImg,
      Images.rangersImgTraded,
      Images.rangersImg,
      Images.rangersImg,
      Images.rangersImg,
      Images.rangersImg,
    ],
  },
  {
    year: "2025",
    rounds: [
      Images.rangersImg,
      Images.rangersImgTraded,
      Images.rangersImgTraded,
      Images.rangersImgTraded,
      Images.rangersImg,
      Images.rangersImg,
      Images.rangersImg,
    ],
  },
  {
    year: "2026",
    rounds: [
      Images.rangersImg,
      Images.rangersImgTraded,
      Images.rangersImg,
      Images.rangersImgTraded,
      Images.rangersImg,
      Images.rangersImg,
      Images.rangersImg,
    ],
  },
];

const formattedInjuryData = injuryData.map(
  ({ teamImage, name, injury, link }) => ({
    teamImage,
    name,
    injury,
    link,
  })
);

const formattedRecallData = recallData.map(
  ({ teamImage, playerName, recall, link }) => ({
    teamImage,
    playerName,
    recall,
    link,
  })
);

interface IProps {
  rangersFinance?: NewRangersFinancesType[];
}

function Rangers() {
  const location = useLocation();
  const { rangersFinance } = location.state as IProps;

  return (
    <>
      <div>
        {rangersFinance && rangersFinance.length ? (
          <>
            {rangersFinance.map((rangers) => (
              <div key={rangers.id}>
                <Navbar />
                <div className="p-5 mb-4 mt-5 bg-light rounded-3">
                  <div className="container-fluid">
                    {/* <!-- TEAM FINANCES --> */}
                    <TeamFinances
                      teamImage={Images.rangersImg}
                      teamName={rangers.teamName}
                      projectedCapHit={rangers.projectedCapHit}
                      projectedLTIR={rangers.projectedLTIR}
                      projectedCapSpace={rangers.projectedCapSpace}
                      currentCapSpace={rangers.currentCapSpace}
                      deadlineCapSpace={rangers.deadlineCapSpace}
                      todayCapHit={rangers.todayCapHit}
                      rosterSize={rangers.rosterSize}
                      contracts={rangers.contracts}
                      reserveList={rangers.reserveList}
                      injuries={rangers.injuries}
                      generalManager={rangers.generalManager}
                      headCoach={rangers.headCoach}
                    />

                    {/* <!-- DRAFT PICKS --> */}
                    <TeamDraftPicks data={draftData} />

                    {/* <!-- RECALLS & INJURIES --> */}
                    <TeamRecallInuries
                      recallData={formattedRecallData}
                      injuryData={formattedInjuryData}
                    />

                    {/* <!-- FORWARDS CONTRACTS --> */}
                    <div>
                      <ForwardFinances forwardData={forwardData} />
                    </div>

                    {/* <!-- DEFENSE CONTRACTS --> */}
                    <div>
                      <DefensemenContractsTable defenseData={defenseData} />
                    </div>

                    {/* <!-- GOALIES CONTRACTS --> */}
                    <div>
                      <GoalieContractsTable goalieData={goalieData} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No rangers finance info</p>
        )}
      </div>
    </>
  );
}

export default Rangers;
