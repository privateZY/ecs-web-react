import { action, computed, observable } from "mobx";

export default class FileStore {
    @observable model = null;
    @observable signature = null;
    constructor(root, file, signature) {
        this.store = root;
        this.model = file;
        this.signature = signature;
    }

    @computed
    get name() {
        return this.signature.name;
    }

    @computed
    get headers() {
        return {};
    }

    _convertMetaToHeaders(meta, headers) {
        if (!meta) {
            return;
        }

        Object.keys(meta).forEach(k => {
            headers[`x-oss-meta-${k}`] = meta[k];
        });
    }
}
