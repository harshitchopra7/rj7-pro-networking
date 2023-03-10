import React, { useEffect } from "react";
import "./Homepage.css";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import RightMenu from "../../components/RightMenu/RightMenu";
import Feed from "../../components/Feed/Feed";

function Homepage() {
  useEffect(() => {
    async function callApi() {
      const response = await fetch(
        "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=BHDozqdi551iHipEmfJLqcwnJUzOGkr8"
      );
      const data = await response.json();
      // console.log("data", data);
    }
    callApi();
  }, []);

  return (
    <div>
      {/* this div will be shown in devices other than mobiles (for screen sizes greater than 500px)  */}
      <div className="homepage_container">
        <LeftMenu />
        <Feed />
        <RightMenu />
      </div>

      {/* this div will only be shown in mobiles  */}
      <div className="homepage_container_mobile">
        <LeftMenu />
        <Feed />
      </div>
    </div>
  );
}

export default Homepage;
