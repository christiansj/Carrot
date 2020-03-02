import Modal from "client/components/modals";
import RecordDelete from './RecordDelete';

const deleteModal = (props = {}) =>{
    const {record, tableName} = props;
    return Modal("deleteModal", "Delete", RecordDelete(record, tableName));
}
export default deleteModal;