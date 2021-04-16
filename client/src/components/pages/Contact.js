import React, { useState, useEffect } from "react";
import axios from "axios";

const cors = require("cors");
const nodemailer = require("nodemailer");
// const transporter = require("./config");

function Contact() {
  const [contactInfo, setContactInfo] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchContactInfo();
  }, []);

  async function fetchContactInfo() {
    setIsSubmitting(true);
    const res = await axios.get("/contact");
    // setIsSubmitting(false);
    setContactInfo();
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const postContactInfo = async (data) => {
    await axios.post("/contact", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchContactInfo();
    setIsSubmitting(true);
    const res = await postContactInfo(form);
    // setIsSubmitting(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <main>
        <div class="background">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="aboutmebackground">
                  <div class="row">
                    <div class="col-md-12">
                      <h1>Contact</h1>
                      <hr />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-10">
                      <form id="form" onSubmit={handleSubmit}>
                        <div class="form-group">
                          <label for="exampleFormControlInput1">Name</label>
                          <input
                            name="name"
                            type="name"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Name"
                            onChange={handleChange}
                            value={form.name}
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">Email</label>
                          <input
                            name="email"
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            onChange={handleChange}
                            value={form.email}
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">
                            Message
                          </label>
                          <textarea
                            name="message"
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Message"
                            onChange={handleChange}
                            value={form.message}
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <div style={{ width: 400, marginTop: 20 }}>
                          {JSON.stringify(contactInfo, null, 8)}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
