import  { Modal,Button }  from 'antd'
let confirm =  Modal.confirm
function deleteModal(props){
    const defaultObj={
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        width: 420,
        className:'coral-modal-confirm'   
      }
      confirm(Object.assign(defaultObj,props)
  )
}
function confirmModal(props){
    const defaultObj={
        okText: '确认',
        okType: 'primer',
        cancelText: '取消',
        width: 420,
        className:'coral-modal-confirm'   

      }
    confirm(Object.assign(defaultObj,props)
  )
}
function modalSuccess(props){
    const defaultObj={
        className: 'coral-modal-confirm'
      }
      Modal.success(Object.assign(defaultObj,props))
}
function modalError(props){
    const defaultObj={
        className: 'coral-modal-confirm'
      }
      Modal.error(Object.assign(defaultObj,props))
}
function modalWarning(props){
    const defaultObj={
        className: 'coral-modal-confirm'
      }
      Modal.warning(Object.assign(defaultObj,props))
}
function modalInfo(props){
    const defaultObj={
        className: 'coral-modal-confirm'
      }
      Modal.info(Object.assign(defaultObj,props))
}

// function targetComponent(props) { 
//     let { wrapClassName='', handleCancel, handleOk, keyword } = props
//     const footerconfig = [<span key='keyword'>{keyword}</span>,<Button key="back" onClick={handleCancel}>取消</Button>,<Button key="submit" type="primary" onClick={handleOk}
//     >确认</Button>]

//     return <Modal 
//                 {...props} 
//                 wrapClassName = {`${wrapClassName} coral-modal`}
//                 footer ={footerconfig}                 
                
//             />     
// }
// const FootModal = hoistStatics(targetComponent, Modal)
const _default = { deleteModal, confirmModal, modalSuccess,modalError,modalWarning,modalInfo} 

export default _default