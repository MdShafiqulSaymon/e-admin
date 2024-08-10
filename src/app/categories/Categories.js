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

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // After successful submission, fetch updated categories
      await fetchCategories();

      setFormData({ name: '', title: '', subtitle: '' }); // Clear the form
      console.log(formData);
      console.log(response);
    } catch (error) {
      console.error('Error creating category:', error);
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  return (
    <div className="main-container flex flex-col w-full p-6 gap-5">
      <div className="title-part">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <LightBtn colour={"bg-teal-300"} title={"Category"} />
      </div>
      <form onSubmit={handleSubmit} className="input-box flex flex-col gap-3">
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
        <Table data={categories} />
      )}
    </div>
  );
};

export default Categories;
