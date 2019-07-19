import  { Modal }  from 'coral-components'
import { Button } from 'antd';
import{ confirmModal,deleteModal, modalSuccess,modalError,modalWarning,modalInfo,}  from 'coral-components'
// import{ confirmModal,deleteModal,FootModal}  from 'coral-components'
import  {Notification}  from 'coral-components'




export const title = 'modal';
export const description = <p className={'inline-block'}>模态框---<span className={'warn'}>模态框基本按照antd基本组件分大中小三种样式引入modal，对应small normal large,特定组件从mutiModal中引用</span></p>;
class ModalNormal extends React.Component {
  state = { visible: false,visibles:false }
  showModal = () => {
    this.setState({
      visibles: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visibles: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visibles: false,
    });
  }

 showConfirm() {
  confirmModal({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('K');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
 showDeleteConfirm() {
    deleteModal({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',     
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
  }


  info() {
    modalInfo({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  
 success() {
    modalSuccess({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }
  
  error() {
    modalError({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }
  
  warning() {
    modalWarning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }

  render() {
    return (
      <div>
       <Button onClick={() => Notification('success','ok')}>Success</Button>
       <Button onClick={() => Notification('error','error')}>error</Button> 
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Button onClick={this.showConfirm}>
          Confirm
        </Button>
        <Button onClick={this.showDeleteConfirm} type="danger">
          Delete
        </Button>
        <Button onClick={this.showModal} type="danger">
          footer
        </Button>
        <Button onClick={this.info}>Info</Button>
        <Button onClick={this.success}>Success</Button>
        <Button onClick={this.error}>Error</Button>
        <Button onClick={this.warning}>Warning</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visibles}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName = 'coral-modal-footer'
          size = 'middle'
          footer={[<span key='keyword'>这里输入要提示的内容</span>,<Button key="back" onClick={this.handleCancel}>取消</Button>,<Button key="submit" type="primary" onClick={this.handleOk}>确认</Button>]}
          
          // footer  自定义内容，非必须项目
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>      
      </div>
    );
  }
}



export const contents  = [
	  {
        content: <ModalNormal/>,
        code: `
        showConfirm() {
          confirmModal({
              title: 'Do you Want to delete these items?',
              content: 'Some descriptions',
              onOk() {
                console.log('K');
              },
              onCancel() {
                console.log('Cancel');
              },
            });
          }
          
         showDeleteConfirm() {
            deleteModal({
                title: 'Are you sure delete this task?',
                content: 'Some descriptions',     
                onOk() {
                  console.log('OK');
                },
                onCancel() {
                  console.log('Cancel');
                },
              });
          }
        
        
          info() {
            modalInfo({
              title: 'This is a notification message',
              content: (
                <div>
                  <p>some messages...some messages...</p>
                  <p>some messages...some messages...</p>
                </div>
              ),
              onOk() {},
            });
          }
          
         success() {
            modalSuccess({
              title: 'This is a success message',
              content: 'some messages...some messages...',
            });
          }
          
          error() {
            modalError({
              title: 'This is an error message',
              content: 'some messages...some messages...',
            });
          }
          
          warning() {
            modalWarning({
              title: 'This is a warning message',
              content: 'some messages...some messages...',
            });
          }
        <div>
        <Button onClick={() => Notification('success','3333')}>Success</Button>
        
         <Button type="primary" onClick={this.showModal}>Open</Button>
         <Button onClick={this.showConfirm}>
           Confirm
         </Button>
         <Button onClick={this.showDeleteConfirm} type="danger">
           Delete
         </Button>
         <Button onClick={this.showModal} type="danger">
           footer
         </Button>
         <Button onClick={this.info}>Info</Button>
         <Button onClick={this.success}>Success</Button>
         <Button onClick={this.error}>Error</Button>
         <Button onClick={this.warning}>Warning</Button>
         <Modal
           title="Basic Modal"
           visible={this.state.visibles}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
           wrapClassName = 'coral-modal-footer'
           size = 'middle'
           footer={[<span key='keyword'>这里输入要提示的内容</span>,<Button key="back" onClick={this.handleCancel}>取消</Button>,<Button key="submit" type="primary" onClick={this.handleOk}>确认</Button>]}
           
           // footer  自定义内容，非必须项目
         >
           <p>Some contents...</p>
           <p>Some contents...</p>
         </Modal>      
       </div>       
      `
    },

	
];


