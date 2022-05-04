import React from "react";

function Contac() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  function handleInput(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  //   console.log(formData);

  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div
            className="card card-body border-1 py-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
              marginTop: "60px"
            }}
          >
            <h3 className="text-center">Thông tin liên hệ</h3>

            <form className="row g-3">
              <div className="col-lg-6">
                <label htmlFor="fname" className="form-label">
                  Họ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="firstname"
                  onChange={handleInput}
                  value={formData.firstname}
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="lname" className="form-label">
                  Tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  name="lastname"
                  onChange={handleInput}
                  value={formData.lastname}
                />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  value={formData.email}
                />
              </div>
              <div className="col-12">
                <label htmlFor="phonenum" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phonenum"
                  name="phone"
                  onChange={handleInput}
                  value={formData.phone}
                />
              </div>

              <div className="d-grid col-4 py-2 mx-auto">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-3"></div>
        {/* <div className="col-lg-7 justify-content-between flex-column">
          <h4 className="text-center">
            Nhập thông tin của bạn để được tư vấn ngay!!!
          </h4>
          <p className="text-center">
            Đội ngũ hỗ trợ nhiệt tình, hoạt động 24/24
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Contac;
