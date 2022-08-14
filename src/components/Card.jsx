import mapLogo from "../assets/card-map.png";
import "../css/card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={props.item.imageUrl}
              className="card--img"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="card--stats">
                <img src={mapLogo} className="card-map-logo" alt="" />
                <span className="card-map-title"> {props.item.location} </span>
              </div>
              <h5 className="card-title"> {props.item.title} </h5>
              <p className="card-text">
                {props.item.description}
              </p>
              <p className="card-text">
                <small className="text-muted">{props.item.lastUpdated}</small>
              </p>

              <a href={props.item.moreUrl} >
                <button type="button" className="btn btn-outline-success">
                  Click to more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
