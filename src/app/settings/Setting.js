"use client";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import LightBtn from "../components/light-btn";
import MultiSelect from "../components/MultiInput";
import Input from "../components/Input";
import MultiSelectImage from "../components/ImageBanner";

export default function Setting() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedProdects, setSelectedProdects] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [headerTitle, setHeaderTitle] = useState("");
  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Settings", href: "/settings" },
  ];
  const products = [
    {
      value: "Men’s Casual Slim Fit Blazer",
      label: "Men’s Casual Slim Fit Blazer",
    },
    {
      value: "Beautiful Handloom Silk Saree",
      label: "Beautiful Handloom Silk Saree",
    },
    { value: "Sparkling Georgette Saree", label: "Sparkling Georgette Saree" },
    { value: "Tangali Skirt", label: "Tangali Skirt" },
    { value: "New Jamdani Saree", label: "New Jamdani Saree" },
    {
      value: "New Pakistani Designed Saree",
      label: "New Pakistani Designed Saree",
    },
    { value: "Basic Kameez From India", label: "Basic Kameez From India" },
  ];
  const categories = [
    { value: "Sarees", label: "Sarees" },
    { value: "Lehenga", label: "Lehenga" },
    { value: "3-pcs", label: "3-pcs" },
    { value: "Blazers", label: "Blazers" },
    { value: "Skirts", label: "Skirts" },
    { value: "Kameez", label: "Kameez" },
  ];

  return (
    <div className="flex flex-col p-2 md:p-6 gap-2">
      <Breadcrumbs breadcrumbs={breadcrumbData} />
      <LightBtn colour={"bg-teal-300"} title={"Settings"} />
      <div>
        <span className="pl-2 text-gray-600">Trending Now</span>
        <MultiSelect
          selectedOptions={selectedProdects}
          setSelectedOptions={setSelectedProdects}
          items={products}
          placeHolder={"Select Trending Items"}
        />
      </div>
      <div>
        <span className="pl-2 text-gray-600">Trending Categories Now</span>
        <MultiSelect
          selectedOptions={selectedCategories}
          setSelectedOptions={setSelectedCategories}
          items={categories}
          placeHolder={"Select Trending Categories"}
        />
      </div>
      <div>
        <span className="pl-2 text-gray-600">Header Caption</span>
        <Input
          value={headerTitle}
          setValue={setHeaderTitle}
          placeHolder={"Enter Header Caption to "}
        />
      </div>
      <div>
        <span className="pl-2 text-gray-600">Banner Images</span>
        <MultiSelectImage selectedImages={selectedImages} setSelectedImages={setSelectedImages}/>
      </div>
    </div>
  );
}
