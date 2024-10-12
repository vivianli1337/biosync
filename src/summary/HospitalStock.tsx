import React from 'react';
import Navbar from './Navbar';
import StockOverview from './StockOverview';
import UrgentRequests from './UrgentRequests';

const HospitalStock: React.FC = () => {
  return (
      <div>
            <Navbar />
	          <UrgentRequests />
		        <StockOverview />
			    </div>
			      );
			      };

export default HospitalStock;
