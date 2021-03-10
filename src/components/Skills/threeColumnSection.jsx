import React from "react";

function ThreeColumnSection() {
  return (
    <div class="container-fluid padding">
      <div class="row text-center padding">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <i class="fa fa-code"></i>
          <h3>HTML5</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <i class="fas fa-bold"></i>
          <h3>Bootstrap</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4">
          <i class="fab fa-css3"></i>
          <h3>CSS3</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <hr class="my-4"></hr>
    </div>
  );
}

export default ThreeColumnSection;
