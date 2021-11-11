import React from "react";
import client1 from "./form-assests/client1.png";
import client2 from "./form-assests/client2.png";
import client3 from "./form-assests/client3.png";
import client4 from "./form-assests/client4.png";
import client5 from "./form-assests/client5.png";
import client6 from "./form-assests/client6.png";
import client7 from "./form-assests/client7.png";

const Companies = () => {
    const data = [
      { id: 1, company1: {client1} },
      { id: 2, company2: {client2} },
      { id: 3, company3: {client3} },
      { id: 4, company4: {client4} },
      { id: 5, company5: {client5} },
      { id: 6, company6: {client6} },
      { id: 7, company7: {client7} },
    ];
  
    return (
      <div className="companys">
        {data.map((company) => (
          <div className="companys">{company}</div>
        ))}
      </div>
    );
  };


export default  Companies;