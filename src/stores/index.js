import { action, observable } from "mobx";
import { UserStore } from "./user/UserStore";
import NProgress from "nprogress";
import axios from "axios";
import { toast } from "react-toastify";
import FileUploader from "./fileUploader";

class Root {
    @observable version = 1;

    /** @type { String } */
    api = "http://127.0.0.1:4567";

    constructor() {
        this.initReq();
        this.userStore = new UserStore(this);
        this.fileUploader = new FileUploader(this);
    }

    @action.bound
    getFullHost(url) {
        return `${this.api}${url}`;
    }

    initReq() {
        this.req = axios.create({
            validateStatus: status => status >= 200 && status < 300
        });

        this.req.interceptors.request.use(
            function(config) {
                NProgress.start();
                return config;
            },
            function(error) {
                NProgress.done();
                return Promise.reject(error);
            }
        );
        this.req.interceptors.response.use(
            function(response) {
                NProgress.done();
                return response;
            },
            error => {
                if (!error.response) {
                    this.error("网络错误,请重试");
                } else {
                    let status = error.response.status,
                        message = error.response.data.message;

                    switch (status) {
                        case 401:
                            window.location = "/login";
                            break;
                        default:
                            if (message) {
                                this.error(message);
                            }
                            break;
                    }
                }

                NProgress.done();
                return Promise.reject(error);
            }
        );
    }

    @action.bound
    info(msg, options = {}) {
        toast.info(msg, options);
    }

    @action.bound
    warn(msg, options = {}) {
        toast.warn(msg, options);
    }

    @action.bound
    error(msg, options = {}) {
        toast.error(msg, options);
    }
}

export default new Root();
