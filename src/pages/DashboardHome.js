import React from 'react';

const DashboardHome = () => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isDoctor = localStorage.getItem('isDoctor') === 'true';
  const isPatient = localStorage.getItem('isPatient') === 'true';

  let userType = '';
  if (isAdmin) userType = 'Admin';
  else if (isDoctor) userType = 'Doctor';
  else if (isPatient) userType = 'Patient';

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome, {userType}!</h1>
      <p>This is your common dashboard page.</p>
      {isAdmin && <p>You have admin privileges.</p>}
      {isDoctor && <p>You have doctor privileges.</p>}
      {isPatient && <p>You have patient privileges.</p>}
    </div>
  );
};

export default DashboardHome; 