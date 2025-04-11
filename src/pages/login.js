import React from 'react';

class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const role = event.target.role.value;

        // Virtual credentials for each role
        const credentials = {
            admin: { username: 'adminUser', password: 'adminPass' },
            lecture: { username: 'lectureUser', password: 'lecturePass' }
        };

        // Simulate login logic
        if (role === '0' && username === credentials.admin.username && password === credentials.admin.password) {
            window.location.href = './admin';
        } else if (role === '1' && username === credentials.lecture.username && password === credentials.lecture.password) {
            window.location.href = './lecture';
        } else {
            alert('Invalid username or password');
        }
    };

    render() {
        return (
            <div style={{height: '100vh', backgroundColor: 'lightblue'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block">
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <img src="assets/images/SGU-LOGO.png" style={{width: '80%'}} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-lg-5 mt-lg-5" style={{fontWeight: 'bolder'}}>
                                                        Đăng Nhập
                                                    </h1>
                                                    {/* <h1 className="text-3xl font-bold underline">
                                                        Hello world!
                                                    </h1>                                                     */}
                                                </div>
                                                <form className="user" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-user mb-4"
                                                            id="username"
                                                            name="username"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Tài khoản"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user mb-4"
                                                            id="password"
                                                            name="password"
                                                            placeholder="Mật khẩu"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name="role"
                                                                id="admin-role"
                                                                value="0"
                                                                defaultChecked
                                                            />
                                                            <label className="custom-control-label" htmlFor="admin-role">Quản trị viên</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox small">
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name="role"
                                                                id="lecture-role"
                                                                value="1"
                                                            />
                                                            <label className="custom-control-label" htmlFor="lecture-role">Giảng viên</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
