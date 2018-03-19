import Loadable from "react-loadable";
import NProgress from "nprogress";

export default ({ loader, loading = () => null }) =>
    Loadable({
        loading,
        loader: () => {
            NProgress.start();
            return loader()
                .then(res => {
                    NProgress.done();
                    return Promise.resolve(res);
                })
                .catch(e => {
                    NProgress.done();
                    return Promise.reject(e);
                });
        }
    });
