import { Layout, Menu, Icon,  Row, Col, Collapse, Title3  } from 'coral-components';
import React, { Component } from 'react'
import { connect, } from 'dva';
import './index.less'
import siderMenus from './menuConfig';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class BasicLayout extends Component {
	state = {
		collapsed: false,
	};
	componentDidMount(){
		this.resize();
		window.onresize = ()=>{
			this.resize();
		}
	}

	resize = ()=>{
		const {dispatch} = this.props;
		dispatch({
			type: 'global/resize',
		});
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	menuClick = ({ item, key, keyPath })=>{
		// console.log(11);
	}
	render() {
		const {global:{winHeight}, children} = this.props;
		if(!winHeight) return null;
		const subMenus = (arr, item)=>{
			return arr.map((menu,idx)=>{
				const txt = `${menu.title}(${menu.description})`;
				return (
					<Menu.Item key={`${item.key}-${idx+1}`}>
						<a 
							className={'font12 inline-block ellipsis'}
							href={`#${menu.title}`} 
							title={txt}
						>{txt}</a>
					</Menu.Item>
				);
			});
		};
		console.log(this.props)
		return (
			<Layout className={'basic-layout'}>
				<Layout>
					<Header className={'transparent-bg top-header'}>
						<Row>
							<Col span={24}><Title3>Coral-Components</Title3></Col>	
						</Row>
					</Header>
				</Layout>
				<Layout>
					<Sider
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
					>
						<Menu 
							theme="dark" 
							mode="inline" 
							defaultSelectedKeys={['base-1']} 
							defaultOpenKeys={['base']}
							onClick={this.menuClick}
						>
							{
								siderMenus.map((item)=>
									<SubMenu 
										key={item.key} 
										title={item.title} 
									>
										{
											subMenus(item.children, item)
										}
									</SubMenu>
								)
							}
						</Menu>
					</Sider>
					<Layout>
						<Content
							className={'content '} 
							style={{ height: winHeight-64,}}
						>
							{children}
						</Content>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}


export default connect(({ global }) =>{
	return {global};
})(BasicLayout);
