import { Button as Btn } from 'antd'
// import hoistStatics from "hoist-non-react-statics";

function Button (props){
	const {type, className='', onClick, disabled, family, children, icon} = props;
	const cloneProps = {...props};
	if(type==='text'){
		
		const click = (params)=>{
			if(disabled) return;
			typeof onClick === 'function' && onClick(params);
		};
		delete cloneProps.disabled;
		return (
			<span 
				className={`coral-btn text-btn ${className} ${disabled?'disabled':'normal'}`} 
				{...cloneProps}
				onClick={click}
			>{cloneProps.children}</span>
		);
	}
	if(family){
		delete cloneProps.family;
		return (
			<Btn {...cloneProps}  className={`coral-btn self-icon-btn ${className}`}><i className={`${icon} ${family} self-icon`}/>{children}</Btn>
		);
	}
	if(/^(success|caution)$/.test(type)){
		return <Btn {...props} className = {`coral-btn ${type}-btn ${className}`}/>;
	}
	return <Btn {...props}  className={`coral-btn ${className}`}/>;
}

export default Button;