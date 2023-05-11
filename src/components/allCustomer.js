import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllCustomer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    await axios.get(`http://127.0.0.1:8000/api/customers`).then(({ data }) => {
      setCustomers(data);
    });
  };

  const deleteCustomer = async (id) => {
    await axios
      .delete(`http://127.0.0.1:8000/api/customers/${id}`)
      .then(({ data }) => {
        console.log(data.message);
        //this for reload customersList  after delete customer
        getCustomers();
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">brandName</th>
                  <th scope="col">brandLogo</th>
                  <th scope="col">companyName</th>
                  <th scope="col">taxNumber</th>
                  <th scope="col">contactPerson_name</th>
                  <th scope="col">contactPersonPhone</th>
                  <th scope="col">companyAddress</th>
                  <th scope="col">shopLocation</th>
                  <th scope="col">startDate</th>
                  <th scope="col">endDate</th>
                </tr>
              </thead>
              <tbody>
                {customers.length > 0 &&
                  customers.map((row, key) => (
                    <tr key={key}>
                      <td>{row.brand_name}</td>
                      <td>
                        <img
                          src={`http://localhost:8000/images/${row.brand_logo}`}
                          width="100px"
                          alt="logo"
                        />
                      </td>
                      <td>{row.company_name}</td>
                      <td>{row.tax_number}</td>
                      <td>{row.contact_person_name}</td>
                      <td>{row.contact_person_phone}</td>
                      <td>{row.company_address}</td>
                      <td>{row.shop_location}</td>
                      <td>{row.start_date}</td>
                      <td>{row.end_date}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteCustomer(row.id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <Link
                          className="btn btn-success mb-2 float-end"
                          to={`/customers/edit/${row.id}`}
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <Link to="/customers/add" className="btn btn-primary">
                          Add
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllCustomer;
