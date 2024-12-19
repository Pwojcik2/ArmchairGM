export default function TeamDraftPicks(props: {
  flyersDraftImg?: any;
  floridaDraft?: any;
  jacketsDraft?: any;
  kingsDraft?: any;
  flyersDraftImgTraded?: any;
  bluesDraft?: any;
  avalancheDraft?: any;
  anaheimDraft?: any;
  knightsDraft?: any;
  hurricaneDraft?: any;
}) {
  return (
    <>
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
              {props.flyersDraftImg}
              {props.floridaDraft}
            </td>
            <td>
              {props.flyersDraftImgTraded}
              {props.flyersDraftImg}
              {props.jacketsDraft}
            </td>
            <td>{props.flyersDraftImg}</td>
            <td>{props.flyersDraftImgTraded}</td>
            <td>
              {props.flyersDraftImgTraded}
              {props.kingsDraft}
              {props.knightsDraft}
            </td>
            <td>
              {props.flyersDraftImg}
              {props.bluesDraft}
            </td>
            <td>{props.flyersDraftImg}</td>
          </tr>
          <tr className="text-center">
            <td>2025</td>
            <td>
              {props.flyersDraftImg}
              {props.avalancheDraft}
            </td>
            <td>
              {props.flyersDraftImg}
              {props.anaheimDraft}
            </td>
            <td>{props.flyersDraftImgTraded}</td>
            <td>{props.flyersDraftImgTraded}</td>
            <td>
              {props.flyersDraftImg}
              {props.hurricaneDraft}
            </td>
            <td>{props.flyersDraftImg}</td>
            <td>{props.flyersDraftImg}</td>
          </tr>
          <tr className="text-center">
            <td>2026</td>
            <td>{props.flyersDraftImg}</td>
            <td>{props.flyersDraftImg}</td>
            <td>{props.flyersDraftImg}</td>
            <td>{props.flyersDraftImg}</td>
            <td>{props.flyersDraftImgTraded}</td>
            <td>{props.flyersDraftImg}</td>
            <td>{props.flyersDraftImg}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
