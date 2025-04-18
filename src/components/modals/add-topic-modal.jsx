import React from "react";
import { useForm } from "react-hook-form";


class AddTopicModal extends React.Component {


    render() {
        
        return (
            <div className="modal fade" id="addTopicModal" tabIndex="-1" role="dialog" aria-labelledby="addTopicModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addTopicModalLabel">Thêm đề tài nghiên cứu mới</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form id="add-topic-form">
                    <div className="form-group">
                        <label htmlFor="projectTitle">Tên đề tài</label>
                        <input type="text" className="form-control" id="projectTitle" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectType">Loại đề tài</label>
                        <select className="form-control" id="projectType" required>
                        <option value="">Chọn loại đề tài</option>
                        <option value="basic">Cơ bản</option>
                        <option value="applied">Ứng dụng</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectField">Lĩnh vực</label>
                        <input type="text" className="form-control" id="projectField" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectDuration">Thời gian thực hiện</label>
                        <input type="text" className="form-control" id="projectDuration" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectFunding">Kinh phí</label>
                        <input type="number" className="form-control" id="projectFunding" required />
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="submit" form="add-topic-form" className="btn btn-primary">Thêm đề tài</button>
                </div>
                </div>
            </div>
            </div>
        );
        }
    }

    export default AddTopicModal;