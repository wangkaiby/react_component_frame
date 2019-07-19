import { Breadcrumb,Icon} from 'coral-components'

export const title = 'breadcrumb';
export const description = <p className={'inline-block'}>图标---<span className={'warn'}></span></p>;

export const contents  = [
	{
		content: 
                <Breadcrumb className = 'nnn'>
                    <Breadcrumb.Item href="">
                    <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                    <Icon type="user" />
                    <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    Application
                    </Breadcrumb.Item>
                 </Breadcrumb>,
		code: `<Breadcrumb>
                    <Breadcrumb.Item href="">
                    <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                    <Icon type="user" />
                    <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    Application
                    </Breadcrumb.Item>
                 </Breadcrumb>`
	},

];


