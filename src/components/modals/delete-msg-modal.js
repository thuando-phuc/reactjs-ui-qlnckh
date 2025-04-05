import React from "react";

class DeleteMSG extends React.Component {
    render() {
        return (
            <div
                className="modal fade"
                id="deletemsgModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Xoá?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn muốn xoá tài khoản này?
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Bỏ qua</button>
                            <a className="btn btn-primary" href="# ">Xoá</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteMSG;