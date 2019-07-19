import Panel from '../panel'

export default function Toolbar(props) {
	const property = {...props};
	property.className = `coral-toolbar clearfix  ${props.className || "" }`;
    return <Panel  margin = { '0 4 0 4' }  padding = { '1 0 1 0' } {...property}  />  
}