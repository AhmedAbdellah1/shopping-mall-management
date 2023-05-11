import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();
  const [brand_name, setBrand_name] = useState("");
  const [brand_logo, setBrand_logo] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [tax_number, setTax_number] = useState("");
  const [contact_person_name, setContact_person_name] = useState("");
  const [contact_person_phone, setContact_person_phone] = useState("");
  const [company_address, setCompany_address] = useState("");
  const [shop_location, setShop_location] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");

  const createCustomer = async (e) => {
    e.preventDefault();
    // this for send data to server
    const formData = new FormData();
    formData.append("brand_name", brand_name);
    formData.append("brand_logo", brand_logo);
    formData.append("company_name", company_name);
    formData.append("tax_number", tax_number);
    formData.append("contact_person_name", contact_person_name);
    formData.append("contact_person_phone", contact_person_phone);
    formData.append("company_address", company_address);
    formData.append("shop_location", shop_location);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);
    // console.log(formData);
    await axios
      .post("http://127.0.0.1:8000/api/customers", formData)
      .then(({ data }) => {
        // after send data to server and get response message of operation success,
        console.log(data.message);
        // after send data to server, redirect to all customers page
        navigate("/");
      })
      .catch(({ response }) => {
        // if error happened, show error message in console log.
        if (response.status === 422) {
          console.log(response.data.errors);
        } else {
          console.log(response.data.message);
        }
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="conl-12 col-sm-12 col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Add Customer</h3>
              <hr></hr>
              <div className="from-wrapper">
                <form onSubmit={createCustomer}>
                  <div className="mb-3">
                    <label className="form-label">brandName</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={brand_name}
                      onChange={(e) => {
                        setBrand_name(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">brandLogo </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setBrand_logo(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">companyName</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={company_name}
                      onChange={(e) => {
                        setCompany_name(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">tax_number</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={tax_number}
                      onChange={(e) => {
                        setTax_number(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">contactPersonName</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={contact_person_name}
                      onChange={(e) => {
                        setContact_person_name(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">contactPersonPhone</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={contact_person_phone}
                      onChange={(e) => {
                        setContact_person_phone(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">companyAddress</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={company_address}
                      onChange={(e) => {
                        setCompany_address(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">shopLocation</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={shop_location}
                      onChange={(e) => {
                        setShop_location(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      // value={start_date}
                      onChange={(e) => {
                        setStart_date(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      // value={end_date}
                      onChange={(e) => {
                        setEnd_date(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary mb-3">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCustomer;
