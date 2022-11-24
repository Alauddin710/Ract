import { useState } from "react";

function Contact() {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div className="col-sm-8">
      <h2>This Contact page</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Enter Your name"
          />
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Enter Your mail"
          />
          <label>Message</label>
          <input
            type="text"
            className="form-control"
            name="message"
            value={inputs.message}
            onChange={handleChange}
            placeholder="Enter Your message"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="SEND DATA"
        ></input>
      </form>
      Yout have Submitted: {inputs.name} {inputs.email} {inputs.message}
    </div>
  );
}
export default Contact;
