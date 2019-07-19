import {Table  }  from 'coral-components'


export const title = 'table';
const columns = [{
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
	
	render: text => <a href="#">{text}</a>,
  }, {
	title: 'Tel',
	dataIndex: 'tel',
	key: 'tel',
	className: 'tel',
  }, {
	title: 'Address',
	dataIndex: 'address',
	key: 'address',
  }, {
	title: 'Action',
	key: 'action',
	render: (text, record) => (
	  <span>
		<a href="#">Action 一 {record.name}</a>
		<span className="ant-divider" />
		<a href="#">Delete</a>
		<span className="ant-divider" />
		
	  </span>
	),
  }];
  const data = [{
	key: '1',
	name: 'John Brown',
	tel: "13121234567",
	address: 'New York No. 1 Lake Park',
  }, {
	key: '2',
	name: 'Jim Green',
	tel: "010-123456789",
	address: 'London No. 1 Lake Park',
  }, {
	key: '3',
	name: "0111-123456789",
	tel: 22,
	address: 'London3 No. 3 Lake Park',
  }];
export const contents  = [
	{
		content: (<Table size='small' columns={columns} dataSource={data}  pagination={false}   striped='odd'/>),
		code:"<Table size='small' columns={columns} dataSource={data}  pagination={false}   striped='odd'/>"
	},
	{
		content: (<Table columns={columns} dataSource={data}  pagination={false}  striped='even' bordered />),
		code:"<Table columns={columns} dataSource={data}  pagination={false}  striped='even' />"
	},
	{
		content: (<Table columns={columns} dataSource={data}  pagination={false}  noBorder />),
		code:"<Table columns={columns} dataSource={data}  pagination={false}  noBorder />"
	},
	{
		content: (<Table size='large' columns={columns} dataSource={data}  pagination={false} bordered/>),
		code:"<Table size='large' columns={columns} dataSource={data}  pagination={false} bordered/>"
	},
];


