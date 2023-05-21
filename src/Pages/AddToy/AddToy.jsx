import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Select from "react-select";

const options = [
  { value: "sports", label: "sports" },
  { value: "classic", label: "classic" },
  { value: "truck", label: "truck" },
];

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.category = selectedOption;

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            {...register("Seller name")}
            type="text"
            defaultValue={user?.name}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            value={user?.email}
            name="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            {...register("price")}
            type="text"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("img")}
            type="url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            {...register("quantity")}
            type="number"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            {...register("ratings")}
            type="number"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select {...register("category")}>
            <option value="Sports">Sports</option>
            <option value="Classic">Classic</option>
            <option value="Trucks">Trucks</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category2</span>
          </label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
          />
        </div>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary btn-block">Order Confirm</button>
      </div>
    </form>
  );
};

export default AddToy;
