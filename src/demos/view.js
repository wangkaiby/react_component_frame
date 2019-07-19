import FlexView from 'react-flexview'
import Divider from "buildo-react-components/lib/Divider"
import  'buildo-react-components/lib/Divider/divider.css'
import { Button ,Select,Separate}  from 'coral-components'
const Option = Select.Option;
export const title = 'view';

export const contents  = [
	{
		content: (<FlexView column height={220} >
		 <FlexView
			style={{ backgroundColor: '#f00' }}
			height='50px'
			marginBottom='auto'
		/>
		 <FlexView column
			style={{ backgroundColor: '#00f' }}
			grow
			marginTop='auto'
			hAlignContent='center'
			vAlignContent='center'
		>
		 <Select defaultValue="lucy" style={{ width: 120 }}>
				<Option value="lucy">lucy</Option>
		</Select>
		</FlexView>
	  </FlexView>),
		code:` 垂直布局，顶部固定，底部自适应
		
		<FlexView column height={220} >
			<FlexView
				style={{ backgroundColor: '#f00' }}
				height='50px'
				marginBottom='auto'
			/>
			<FlexView column
				style={{ backgroundColor: '#00f' }}
				grow
				marginTop='auto'
				hAlignContent='center'
				vAlignContent='center'
			>
				<Select defaultValue="lucy" style={{ width: 120 }}>
						<Option value="lucy">lucy</Option>
				</Select>
			</FlexView>
	  </FlexView>`
	},
	{
		content: (<FlexView   height={220} style={{ backgroundColor: '#f00' }}   hAlignContent='center' vAlignContent='center'>
		 <Select defaultValue="lucy" style={{ width: 120 }}>
				<Option value="lucy">lucy</Option>
		</Select>
	  </FlexView>),
		code:` 水平，垂直居中
		<FlexView   height={220} style={{ backgroundColor: '#f00' }}   hAlignContent='center' vAlignContent='center'>
			<Select defaultValue="lucy" style={{ width: 120 }}>
					<Option value="lucy">lucy</Option>
			</Select>
	  	</FlexView>`
	},
	{
		content: (<FlexView style={{ backgroundColor: '#00f' }}  >
		<FlexView marginRight='auto' shrink={false} grow={false}>
			<Select defaultValue="lucy" style={{ width: 120 }} >
					<Option value="lucy">lucy</Option>
			</Select>
			<Separate/>
			<Select defaultValue="Tom" style={{ width: 120 }} >
					<Option value="Tom">Tom</Option>
			</Select>
		</FlexView>
		
		<FlexView marginLeft='auto' shrink={false} grow={false} >
			<Button>确定</Button><Divider orientation="horizontal" size="medium"/><Button>取消</Button>
		</FlexView>
	 </FlexView>),
		code:` 两端对齐
		<FlexView style={{ backgroundColor: '#00f' }}  >
			<FlexView marginRight='auto' shrink={false} grow={false}>
				<Select defaultValue="lucy" style={{ width: 120 }} >
						<Option value="lucy">lucy</Option>
				</Select>
				<Separate/>
				<Select defaultValue="Tom" style={{ width: 120 }} >
						<Option value="Tom">Tom</Option>
				</Select>
			</FlexView>
			<FlexView marginLeft='auto' shrink={false} grow={false} >
				<Button>确定</Button><Divider orientation="horizontal" size="medium"/><Button>取消</Button>
			</FlexView>
		</FlexView>`
	},
	
	
];


