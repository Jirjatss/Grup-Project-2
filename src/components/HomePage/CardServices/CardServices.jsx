import React from "react";

function CardServices(props) {
  return (
    <>
      <div class="col-lg-4 col-sm-6 mb-4">
        <div data-aos="flip-left" data-aos-duration="2000">
          <div class="populer-item">
            <img class="img-fluid" src={props.url} alt="" />
            <div class="Populer-caption">
              <h4 class="Populer-caption-heading">{props.nama}</h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardServices;
