import React from "react";

const Home = ({managersCount}) => {
  return(
    <p>We {managersCount > 0 ? 'HAVE' : 'DON\'T HAVE'} openings for Product Managers!</p>
  )
}

export default Home;
