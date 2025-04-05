import React from "react";

class AddAccountModal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="addAccountModal" tabIndex="-1" role="dialog" aria-labelledby="addAccountModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addAccountModalLabel">Thêm tài khoản mới</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="add-account-form">
                                <div className="form-group">
                                    <label htmlFor="username">Tên đăng nhập</label>
                                    <input type="text" className="form-control" id="username" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input type="password" className="form-control" id="password" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Vai trò</label>
                                    <select className="form-control" id="role" required>
                                        <option value="">Chọn vai trò</option>
                                        <option value="admin">Quản trị viên</option>
                                        <option value="lecturer">Giảng viên</option>
                                        <option value="student">Sinh viên</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="submit" form="add-account-form" className="btn btn-primary">Thêm tài khoản</button>
                        </div>
                    </div>
                </div>
            </div>

        );
        }
    }

    export default AddAccountModal;