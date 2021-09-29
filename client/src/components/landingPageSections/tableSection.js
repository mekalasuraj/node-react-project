import React from 'react';

const TableSection = (props) => {
  
  return (
    <>
     
     <table className="table table-striped table-hover">
        
        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
        
          {
            props.dataList.map((item)=>(
              <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}<br/>{item.address.geo.lat},{item.address.geo.lng}</td>
            <td>{item.phone}</td>
            <td>@{item.website}</td>
          </tr>
            ))
          }
          
          
        </tbody>
      </table>

    </>
  );
};



export default React.memo(TableSection);

