import React, { useState, useEffect } from 'react';
import RealEstate from '../../Component/DashboardComp/realEstate/realestate'
import Layout from '../../Component/Layouts/layout'
import Load from '../../Component/Loading/loading';


export default function Real_Estate_Home () { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data fetching
    const fetchData = async () => {
      // Your actual data fetching logic goes here
      // For demonstration purposes, let's use a timeout
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return(
    <div>
    {loading ? (
      <Load />
    ) : (
      <React.Fragment>
         <RealEstate />
      </React.Fragment>
    )}
  </div>
)
  
}
Real_Estate_Home.layout = Layout;