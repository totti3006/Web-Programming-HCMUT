import React from "react";
import DummyComment from "./DummyComment";
import image from "../images/phone-1.jpg";
const Commented = (id, value) => {
  const fakeData = React.useState(DummyComment[0]);
  return (
    <div className="commented">
      <div className="row">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <div className="avatar rounded-circle">
            <img
              src={image}
              alt="avatar"
              className="rounded-circle mx-auto d-block"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h5 className="name mb-1">{fakeData[0].name}</h5>
          <p className="content mb-0 text-secondary fst-italic">
            {fakeData[0].comment}
          </p>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
          <div className="text-center ">
            <span>{fakeData[0].time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commented;
