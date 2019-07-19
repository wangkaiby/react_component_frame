import './style/index.less'
import Alert from './alert';
import Button from './button';
import Breadcrumb from './breadcrumb'
import Icon from './icon';
import LabelItem from './labelitem';
import Modal from './modal';
import mutiModal from './mutiModal';
import Notification from './notification';
import Pagination from './pagination'
import Panel from './panel';
import Separate from './separate';
import Spin from './spin';
import Table from './table';
import Text from './text';
import Toolbar from './toolbar';


let antd;
try {
    antd = require('antd-components');
}catch(err){
    antd = require('antd');
}



module.exports = {
	...antd,
	Alert,
	Button,
	Breadcrumb,
	Icon,
    LabelItem,
	Modal,
	...mutiModal,
	Notification,
	Panel,
	Pagination,
	Separate,
	Spin,
	Table,
	...Text,
    Toolbar,
}