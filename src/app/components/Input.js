export default function Input({value,setValue,placeHolder}){
    const handleChnage=(e)=>{
        setValue(e.target.value)
    }
    return(
        <input value={value} onChange={handleChnage} className="bg-white w-full flex items-center border rounded-md px-4 py-2 cursor-pointer" type="text"  placeholder={placeHolder || "Enter value"} />
    )
}