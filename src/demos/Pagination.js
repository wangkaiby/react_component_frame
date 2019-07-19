import { Pagination }  from 'coral-components'

export const title = 'pagination';
export const description = <p className={'inline-block'}>分页---<span className={'warn'}>分页基本按照antd分页api</span></p>;

export const contents  = [
	{
		content: <Pagination defaultCurrent={1} total={500}  showSizeChanger showQuickJumper  showItems />,
		code: ` <Pagination defaultCurrent={1} total={500}  showSizeChanger showQuickJumper showItems />`
	},
	{
		content: <Pagination defaultCurrent={1} total={500}  showSizeChanger showQuickJumper  showItems size ='small' />,
		code: ` <Pagination defaultCurrent={1} total={500}  showSizeChanger showQuickJumper showItems />`
	},
	
];


