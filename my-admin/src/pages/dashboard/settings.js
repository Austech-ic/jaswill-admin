import React, { useState, useEffect } from 'react';
import Setting from '../../Component/DashboardComp/SettingComp/setting'
import Layout from '../../Component/Layouts/layout'
import Load from '../../Component/Loading/loading';



export default function Setting_Home () { 
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
       <Setting/>
      </React.Fragment>
    )}
  </div>
   
  )
}
Setting_Home.layout = Layout;