export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                The library team is curious about what you're currently reading.
                Share your thoughts with us! We will be able to provide
                personalized recommendations based on your reading preferences.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                sing up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Check our content daily as it is constantly updated. We are
                working hard to provide you with the best reading experience
                possible. We are always looking for new books to add to our
                collection, so if you have any suggestions, please let us know!
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>
      {/*mobile heros*/}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                The library team is curious about what you're currently reading.
                Share your thoughts with us! We will be able to provide
                personalized recommendations based on your reading preferences.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                sing up
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-rigth"></div>
            <div className="mt-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Check our content daily as it is constantly updated. We are
                working hard to provide you with the best reading experience
                possible. We are always looking for new books to add to our
                collection, so if you have any suggestions, please let us know!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
