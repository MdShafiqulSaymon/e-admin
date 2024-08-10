"use client"
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import Breadcrumbs from "../components/Breadcrumbs";
import LightBtn from "../components/light-btn";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    subtitle: '',
  });
  const [loading, setLoading] = useState(false); // New loading state

  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Categories", href: "/categories" },
  ];
  const header = ["ID", "Category Name", "Products", "Edit"];
  const data = [
    {
      ID: 1,
      CategoryName: "Laptop",
      Products: '20"',
      Edit: "...",
    },
    {
      ID: 2,
      CategoryName: "Laptop PC",
      Products: "30",
      Edit: "...",
    },
    {
      ID: 3,
      CategoryName: "Accessories",
      Products: "15",
      Edit: "...",
    },
  ];
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="main-container flex flex-col w-full p-6 gap-5">
      <div className="title-part">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <LightBtn colour={"bg-teal-300"} title={"Category"} />
      </div>
      <form className="input-box flex flex-col gap-3">
        <label className="text-gray-700">Create New Category</label>
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-lg"
        />
        <input
          type="text"
          name="title"
          placeholder="Category Title"
          value={formData.title}
          onChange={handleChange}
          className="p-3 rounded-lg"
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Category Subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          className="p-3 rounded-lg"
        />
        <div className="image-upload border-4 w-fit border-dashed flex flex-col p-8 gap-5 justify-center items-center">
          <FontAwesomeIcon icon={faUpload} className="w-20 h-20 text-blue-300" />
          <label>Upload Image</label>
        </div>
        <LightBtn colour={"bg-sky-600"} title={"Save"} type="submit" />
      </form>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
        </div>
      ) : (
        <Table data={data} />
      )}
    </div>
  );
};

export default Categories;
