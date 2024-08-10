"use client";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import LightBtn from "@/app/components/light-btn";
import Input from "@/app/components/Input";
import { useState, useEffect } from "react";
import MultiSelectImage from "@/app/components/ImageBanner";
import { FaTrashAlt } from "react-icons/fa";
import SelectDropDown from "@/app/components/SelectDropDown";

export default function NewProduct() {
  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Products", href: "/products" },
    { label: "New Product", href: "/products/new" },
  ];

  const [selectedImages, setSelectedImages] = useState([]);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [strikethroughPrice, setStrikethroughPrice] = useState("");
  const [costPerItem, setCostPerItem] = useState("");
  const [sku, setSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [variants, setVariants] = useState([]);
  const [combinations, setCombinations] = useState([]);
  const [combinationStates, setCombinationStates] = useState([]);
  const [shippingValue,setShippingValue]=useState(0)
  const [shippingUnit,setShippingUnit]=useState("kg")
  const [procuctStatus,setProcuctStatus]=useState("")
  const shippingOptions = ["kg","g","lb","oz"];
  const product_status_option=['Active','Sold Out']
  const categories=['sarees','Panjabi','Lehenga','T-shirt','Shirt','Pant']
  const [seoPageTitle, setSeoPageTitle] = useState("");
  const [seoUrl, setSeoUrl] = useState("");
  const [seoDscp, setSeoDscp] = useState("");
  const [selectedCategory,setSelectedCategory]=useState('');
  const addVariant = () => {
    setVariants([...variants, { name: "", values: [] }]);
  };

  const updateVariant = (index, value) => {
    const updatedVariants = variants.map((variant, i) =>
      i === index ? { ...variant, name: value } : variant
    );
    setVariants(updatedVariants);
  };

  const removeVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariants(updatedVariants);
  };

  const addValue = (variantIndex) => {
    const updatedVariants = variants.map((variant, i) =>
      i === variantIndex
        ? { ...variant, values: [...variant.values, ""] }
        : variant
    );
    setVariants(updatedVariants);
  };

  const updateValue = (variantIndex, valueIndex, value) => {
    const updatedVariants = variants.map((variant, i) =>
      i === variantIndex
        ? {
            ...variant,
            values: variant.values.map((v, vi) =>
              vi === valueIndex ? value : v
            ),
          }
        : variant
    );
    setVariants(updatedVariants);
  };

  const removeValue = (variantIndex, valueIndex) => {
    const updatedVariants = variants.map((variant, i) =>
      i === variantIndex
        ? {
            ...variant,
            values: variant.values.filter((_, vi) => vi !== valueIndex),
          }
        : variant
    );
    setVariants(updatedVariants);
  };

  useEffect(() => {
    const generateCombinations = () => {
      if (variants.length === 0) return [];
      const combinations = variants.reduce(
        (acc, variant) =>
          acc.flatMap((combination) =>
            variant.values.map((value) => `${combination}/${value}`)
          ),
        [""]
      );
      return combinations;
    };

    const newCombinations = generateCombinations();
    setCombinations(newCombinations);

    // Initialize or reset combinationStates when combinations change
    const initialCombinationStates = newCombinations.map(() => ({
      price: "",
      quantity: "",
      sku: "",
      barcode: "",
    }));
    setCombinationStates(initialCombinationStates);
  }, [variants]);

  const updateCombinationState = (index, field, value) => {
    const updatedCombinationStates = combinationStates.map((state, i) =>
      i === index ? { ...state, [field]: value } : state
    );
    setCombinationStates(updatedCombinationStates);
  };

  return (
    <div className="main flex flex-col w-full p-6 gap-5">
      <div className="title-part flex flex-col gap-3">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <div className="flex w-full justify-between">
          <LightBtn colour={"bg-teal-300"} title={"New Products"} />
        </div>
        <div className="input-sections flex flex-col gap-5">
          <div className="flex flex-col gap-1 p-5 bg-white rounded-lg shadow-lg">
            <span className="sm:text-2xl text-xl">Basic Info</span>
            <Input value={title} setValue={setTitle} placeHolder={"Title"} />
            <Input
              value={subTitle}
              setValue={setSubTitle}
              placeHolder={"Subtitle"}
            />
            <Input
              value={description}
              setValue={setDescription}
              placeHolder={"Description"}
            />
          </div>
          <div className="imageSection flex flex-col gap-1 p-5 bg-white rounded-lg shadow-lg">
            <span className="sm:text-2xl text-xl">Images</span>
            <MultiSelectImage
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          </div>
          <div className="PriceAndInventory flex flex-col md:flex-row justify-around gap-3 ">
            <div className="w-full p-5 bg-white rounded-lg shadow-lg flex flex-col gap-2">
              <span className="sm:text-2xl text-xl">Price </span>
              <Input value={price} setValue={setPrice} placeHolder={"Price"} />
              <Input
                value={strikethroughPrice}
                setValue={setStrikethroughPrice}
                placeHolder={"Strike Through Price"}
              />
              <Input
                value={costPerItem}
                setValue={setCostPerItem}
                placeHolder={"Cost Per Items"}
              />
            </div>
            <div className="w-full p-5 bg-white rounded-lg shadow-lg flex flex-col gap-2">
              <span className="sm:text-2xl text-xl">Inventory </span>
              <Input value={sku} setValue={setSku} placeHolder={"SKU"} />
              <Input
                value={barcode}
                setValue={setBarcode}
                placeHolder={"Barcode"}
              />
              <Input
                value={quantity}
                setValue={setQuantity}
                placeHolder={"Quantity"}
              />
            </div>
          </div>
          {/* Variants Section */}
          <div className="variantsSection flex flex-col gap-3 p-5 bg-white rounded-lg shadow-lg">
            <span className="sm:text-2xl text-xl">Variants</span>
            {variants.map((variant, variantIndex) => (
              <div key={variantIndex} className="flex flex-col gap-2 border-2 p-2 rounded-md shadow-lg shadow-inner">
                <div className="flex items-center gap-2">
                  <Input
                    value={variant.name}
                    setValue={(value) => updateVariant(variantIndex, value)}
                    placeHolder={`Variant ${variantIndex + 1}`}
                  />
                  <button
                    className="text-red-500"
                    onClick={() => removeVariant(variantIndex)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                {variant.values.map((value, valueIndex) => (
                  <div
                    key={valueIndex}
                    className="flex items-center gap-2 ml-6"
                  >
                    <Input
                      value={value}
                      setValue={(newValue) =>
                        updateValue(variantIndex, valueIndex, newValue)
                      }
                      placeHolder={`Value ${valueIndex + 1}`}
                    />
                    <button
                      className="text-red-500"
                      onClick={() => removeValue(variantIndex, valueIndex)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
                <button
                  className="text-white p-2 rounded-lg w-fit border-2 bg-blue-600"
                  onClick={() => addValue(variantIndex)}
                >
                  Add Value
                </button>
              </div>
            ))}
            <button className="text-white p-2 rounded-lg w-fit border-2 bg-emerald-600" onClick={addVariant}>
              Add Variant
            </button>
          </div>
          {/* Combinations Section */}
          <div className="combinationsSection flex flex-col gap-1 p-5 bg-white rounded-lg shadow-lg">
            <span className="sm:text-2xl text-xl">Variants Combination</span>
            {combinations.map((combination, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="sm:text-2xl text-xl">{`Combination: ${combination.slice(1)}`}</span>
                  <Input
                    value={combinationStates[index].price}
                    setValue={(value) =>
                      updateCombinationState(index, "price", value)
                    }
                    placeHolder="Price"
                  />
                  <Input
                    value={combinationStates[index].quantity}
                    setValue={(value) =>
                      updateCombinationState(index, "quantity", value)
                    }
                    placeHolder="Quantity"
                  />
                  <Input
                    value={combinationStates[index].sku}
                    setValue={(value) =>
                      updateCombinationState(index, "sku", value)
                    }
                    placeHolder="SKU"
                  />
                  <Input
                    value={combinationStates[index].barcode}
                    setValue={(value) =>
                      updateCombinationState(index, "barcode", value)
                    }
                    placeHolder="Barcode"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="ShippingAndStatus flex flex-col md:flex-row justify-around gap-3">
            <div className="w-full p-4 shadow-lg bg-white rounded-md flex flex-col gap-2">
            <span className="sm:text-2xl text-xl">Shipping</span>
              <Input value={shippingValue} setValue={setShippingValue} placeHolder={'Set Shipping Value'}/>
              <SelectDropDown options={shippingOptions} selectedOption={shippingUnit} setSelectedOption={setShippingUnit} placeHolder={"Select Shipping Unit"}/>
            </div>
            <div className="w-full p-4 shadow-lg bg-white rounded-md flex flex-col gap-2">
            <span className="sm:text-2xl text-xl">Status</span>
              <SelectDropDown options={product_status_option} selectedOption={procuctStatus} setSelectedOption={setProcuctStatus} placeHolder={"Select Shipping Unit"}/>
            </div>
          </div>
          <div className="SEO-Section flex flex-col gap-1 p-5 bg-white rounded-lg shadow-lg">
            <span className="sm:text-2xl text-xl">SEO Page Info</span>
            <Input value={seoPageTitle} setValue={setSeoPageTitle} placeHolder={"Page Title"}/>
            <Input value={seoUrl} setValue={setSeoUrl} placeHolder={"URL"}/>
            <Input value={seoDscp} setValue={setSeoDscp} placeHolder={"Description"}/>
          </div>
          <div className="OrgAndCategory flex flex-col md:flex-row justify-around gap-3 ">
            <div className="w-full p-5 bg-white rounded-lg shadow-lg flex flex-col gap-2">
              <span className="sm:text-2xl text-xl">Organizations </span>
              <Input value={price} setValue={setPrice} placeHolder={"Brand Name"} />
            </div>
            <div className="w-full p-5 bg-white rounded-lg shadow-lg flex flex-col gap-2">
              <span className="sm:text-2xl text-xl">Category </span>
              <SelectDropDown options={categories} selectedOption={selectedCategory} setSelectedOption={setSelectedCategory} placeHolder={"Select Category"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
