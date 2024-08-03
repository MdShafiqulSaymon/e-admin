export default function LightBtn({colour,title,extCss=""}){
    return(
        <button className={`w-fit border-2 ${colour} ${extCss} p-3 rounded-xl pl-4 pr-4`}>{title}</button>
    );
}