"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


const MultiSelect = ({selectedOptions,setSelectedOptions,items,placeHolder}) => {


  return (
    <div className="w-full ">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={items}
        value={selectedOptions}
        onChange={setSelectedOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder={placeHolder ||"Select trending"}
      />
    </div>
  );
};

export default MultiSelect;
