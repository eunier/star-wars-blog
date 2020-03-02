import React from 'react';
import PropTypes from 'prop-types';

const Details = props => (
  <div className="container containerDetail">
    <div className="card mb-3 mt-4 cardDetail" style={styles.card}>
      <div className="row no-gutters">
        <div className="col" style={styles.cardImage}>
        <img
          className="img-fluid"
          src="https://media.gettyimages.com/photos/american-actor-mark-hamill-on-the-set-of-star-wars-episode-iv-a-new-picture-id607402146?s=612x612"

          alt="details"
        />
      </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">{props.detailsData.name}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              impedit mollitia temporibus ipsum dolorum debitis sint rerum rem
              voluptatem? Culpa fugiat delectus iusto sed perspiciatis sapiente
              corporis explicabo possimus aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <ul className="list-group list-group-horizontal-md">
          {Object.entries(props.detailsData).map((val, idx) => (
            <li className="list-group-item" key={idx}>
              {`${val[0]}: ${val[1]}`}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <button
          className="btn btn-secondary mt-3"
          type="button"
          onClick={() => props.setDetailsData(null)}
        >
          {'<- Go Back'}
        </button>
      </div>
    </div>
  </div>
);

const styles = {
  card: {
    maxWidth: '540px'
  },
  cardImage: {
    minHeight: '20rem',
    minWidth: '20rem',
    background: '#ccc'
  }
};

Details.propTypes = {
  detailsData: PropTypes.object.isRequired,
  setDetailsData: PropTypes.func.isRequired
};

export default Details;
