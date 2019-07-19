
const Title3 = (props)=><h5 {...props} className={`title3 ${props.className || ''}`} >{props.children}</h5>
const Title2 = (props)=><h4 {...props} className={`title2 ${props.className || ''}`} >{props.children}</h4>
const Title1 = (props)=><h3 {...props} className={`title1 ${props.className || ''}`} >{props.children}</h3>

export default {
	Title1,
	Title2,
	Title3,
};