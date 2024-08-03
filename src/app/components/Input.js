export default function Input({value,setValue}){
    const handleChnage=(e)=>{
        setValue(e.target.value)
    }
    return(
        <input value={value} onChange={handleChnage} className="bg-inherit w-full flex items-center border rounded-md px-4 py-2 cursor-pointer" type="text" placeholder="bismillah"/>
    )
}