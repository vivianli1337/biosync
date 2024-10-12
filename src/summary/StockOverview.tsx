import React from 'react';

interface StockItem {
  id: number;
    item: string;
      quantity: number;
        expiration: string;
	  expirationNum: string;
	    min: string;
	    }

const StockOverview: React.FC = () => {
  const stockData: StockItem[] = [
      { id: 1, item: 'Blood Type A+', quantity: 10, expiration: '2023-10-15', expirationNum: '6', min: '4' },
          { id: 2, item: 'Blood Type B-', quantity: 5, expiration: '2023-11-10', expirationNum: '3', min: '2' },
	      { id: 3, item: 'Platelets', quantity: 3, expiration: '2023-10-20', expirationNum: '2', min: '3' },
	        ];

  return (
      <div className="container mt-4">
            <h3 className="display-4">Inventory:</h3>
	          <table className="table table-bordered table-striped">
		          <thead className="table-light">
			            <tr>
				                <th>Item</th>
						            <th>ID</th>
							                <th>Quantity</th>
									            <th>Nearing Expiration</th>
										                <th>Expiration Date</th>
												            <th>Minimum Needed</th>
													              </tr>
														              </thead>
															              <tbody>
																                {stockData.map((item) => (
																		            <tr key={item.id}>
																			                  <td>{item.item}</td>
																					                <td>{item.id}</td>
																							              <td>{item.quantity}</td>
																								                    <td>{item.expirationNum}</td>
																										                  <td>{item.expiration}</td>
																												                <td>{item.min}</td>
																														            </tr>
																															              ))}
																																              </tbody>
																																	            </table>
																																		          <div className="text-center mt-4">
																																			          <a href="#transfer-page">
																																				            <button className="btn btn-success btn-lg">Transfer</button>
																																					            </a>
																																						          </div>
																																							      </div>
																																							        );
																																								};

export default StockOverview;
