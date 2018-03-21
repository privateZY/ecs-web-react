import PageLoadable from "../../components/PageLoadable";

export default PageLoadable({
    loader: () => import(/* webpackChunkName: "home" */ "./HomeContainer")
});
