import React from "react";
import './../styles.css';

export default function HomeFooter() {
  return (
    <div className="row footer">
      <div className="col-6">
        <ul className="unstyled-list text-white">
          <li>Contact us</li>
          <li>Supprot us</li>
          <li>Love us</li>
        </ul>
      </div>
      <div className="col-6">
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          non corporis, nam quod temporibus vel, atque illo reiciendis quas
          quidem voluptas nesciunt voluptates obcaecati autem accusamus sapiente
          laboriosam, excepturi ab.
        </p>
      </div>
    </div>
  );
}
