import React from 'react';

interface Request {
  id: number;
    hospital: string;
      item: string;
        urgency: string;
	}

const UrgentRequests: React.FC = () => {
  const requests: Request[] = [
      { id: 1, hospital: 'City Hospital', item: 'Blood Type O-', urgency: 'High' },
          { id: 2, hospital: 'County Medical', item: 'Platelets', urgency: 'Medium' },
	    ];

  return (
      <div className="container mt-4">
            <h3 className="display-4 text-center">Urgent Requests</h3>
	          {requests.map((request) => (
		          <div key={request.id} className="card mb-3 bg-danger text-white">
			            <div className="card-body d-flex justify-content-between align-items-center">
				                <div>
						              <h5 className="card-title mb-1">{request.hospital}</h5>
							                    <p className="mb-1">Requested Item: {request.item}</p>
									                  <p className="mb-0">Urgency: {request.urgency}</p>
											              </div>
												                  <button className="btn btn-success btn-lg">Assist</button>
														            </div>
															            </div>
																          ))}
																	      </div>
																	        );
																		};

export default UrgentRequests;
