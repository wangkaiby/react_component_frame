

export default function Separate(props) {
	const property = {...props};
	property.className = `coral-separate   ${props.className || "" }`;
    return <span  {...property}  />  
}