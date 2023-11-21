import React, { useState, useEffect } from 'react';
import StaticBlock from '../../Component/DashboardComp/StaticBlock/Staticblock'
import Layout from '../../Component/Layouts/layout'
import Load from '../../Component/Loading/loading';



export default function Static_Block_Home () { 
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
       <StaticBlock />
      </React.Fragment>
    )}
  </div>
  
  )
}
Static_Block_Home.layout = Layout;