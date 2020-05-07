import Modal from "./../../../../../components/modals";
import RecordDelete from './RecordDelete';

const deleteModal = (props = {}) =>{
    const {record, tableName} = props;
    const modalConfig = {
        modalId:  "deleteModal",
        modalTitle: "Delete",
        modalContent: RecordDelete(record, tableName)
    }
    return Modal(modalConfig);
}
export default deleteModal;