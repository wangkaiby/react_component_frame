import { Button, notification } from 'antd';
const openNotificationWithIcon = (type,msg) => {
    notification[type]({
        message: 'Notification Title',
        description: `${msg}`,
        duration: null
  });
};
export default openNotificationWithIcon
