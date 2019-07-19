import * as  _ from 'loadsh'
import React from 'react'
import PropTypes from 'prop-types';

const marginBase = 8;
const paddingBase = 8;
const spaces = ['mt', 'mb', 'ml', 'mr', 'pt', 'pb', 'pl', 'pr'];
// console.log(_)
class Panel extends React.PureComponent{
	render(){
		const cloneProps = Object.assign({}, this.props);
		let {className='', margin=[], padding=[], border=false, horizontal, vitical, style = {} } = cloneProps;
		let clonestyle={...style}; 
		if(_.isArray(margin) || _.isString(margin)){
			margin = Array.isArray(margin) ? margin : margin.replace(/(\s+)/g, '#').split('#');
			margin = margin.map((item)=>{
				const value = parseInt(item, 10) * marginBase;
				return `${value}px`;
			});
			clonestyle.margin = margin.join(' ');
		}
		
		if(_.isObject(margin)){
			for(const item in margin){
				const num = parseInt(margin[item], 10);
				if(!num) return false;
				if(num>4 || num<1){
					console.warn('已超出默认样式！确定是否要这样做，与设计规范有出入！')
				}
				className += `${item}-${margin[item]} `
			}
		}
		
		if(_.isArray(padding) || _.isString(padding)){
			padding = Array.isArray(padding) ? padding : padding.replace(/(\s+)/g, '#').split('#');
			padding = padding.map((item)=>{
				const value = parseInt(item, 10) * paddingBase;
				return `${value}px`;
			});
			clonestyle.padding = padding.join(' ');
			
		}
		
		if(_.isObject(padding)){
			for(const item in padding){
				const num = parseInt(padding[item], 10);
				if(!num) return false;
				if(num>4 || num<1){
					console.warn('已超出默认样式！确定是否要这样做，与设计规范有出入！')
				}
				className += `${item}-${padding[item]} `
			}
		}
		
		// 添加字符类名
		spaces.forEach((item)=>{
			const num = parseInt(cloneProps[item], 10);
			if(!num) return false;
			if(num>4 || num<1){
				console.warn('已超出默认样式！确定是否要这样做，与设计规范有出入！')
			}
			if(cloneProps[item]){
				className += `${item}-${cloneProps[item]} `
			}
		
			delete cloneProps[item];
		});
		
		
		if(_.isObject(horizontal)){
			for(const item in  horizontal){
				
				const num = parseInt(horizontal[item], 10);
				if(item === 'margin'){
					const marginVal = num * marginBase;
					margin =  `${num * marginBase}px`
					clonestyle.marginLeft = clonestyle.marginRight = `${marginVal}px`;
				}
				if(item === 'padding'){
					const paddingVal = num * paddingBase;
					padding =  `${num * paddingBase}px`
					clonestyle.paddingLeft = clonestyle.paddingRight = `${paddingVal}px`;
				}
			}
		}
		
		if(_.isObject(vitical)){
			for(const item in  vitical){
				
				const num = parseInt(vitical[item], 10);
				if(item === 'margin'){
					const marginVal = num * marginBase;
					margin =  `${num * marginBase}px`
					clonestyle.marginTop = clonestyle.marginBottom = `${marginVal}px`;
				}
				if(item === 'padding'){
					const paddingVal = num * paddingBase;
					padding =  `${num * paddingBase}px`
					clonestyle.paddingTop = clonestyle.paddingBottom = `${paddingVal}px`;
				}
			}
		}
		delete cloneProps.border;
		delete cloneProps.margin;
		delete cloneProps.padding;
		delete cloneProps.horizontal;
		delete cloneProps.vitical;
		return (
			<div  
				{...cloneProps} 
				className={ `coral-panel ${className} ${border? 'border' : ''}`} 
				style={{...clonestyle}}
			>
				{cloneProps.children}
			</div>
		);
	}
}

Panel.propTypes = {
	border: PropTypes.bool,
	margin: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),
	padding: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),
	horizontal: PropTypes.object,
	vitical: PropTypes.object,
	mt: PropTypes.number,
	mb: PropTypes.number,
	ml: PropTypes.number,
	mr: PropTypes.number,
	pt: PropTypes.number,
	pb: PropTypes.number,
	pl: PropTypes.number,
	pr: PropTypes.number,

};

export default Panel