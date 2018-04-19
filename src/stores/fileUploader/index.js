import { action, computed, observable } from "mobx";
import axios from "axios";

export default class FileUploader {
    constructor(root) {
        this.store = root;
    }

    uploadFile(file) {
        this.store.req.get(this.store.api + "/statics/signature").then(res => {
            const form = new FormData();

            //注意顺序
            // 				form.append("name", res.data.name);
            form.append("key", res.data.name);
            form.append("policy", res.data.policy);
            form.append("OSSAccessKeyId", res.data.accessid);
            form.append("signature", res.data.signature);
            form.append("file", file);
            form.append("x-oss-meta-uid", file.name);
            // 				let xhr = new XMLHttpRequest();
            // 				xhr.open("put",res.data.host, false);
            // 				xhr.send(form);
            // 				xhr.setRequestHeader("x-oss-meta-name",file.name);
            // 				return ;
            return this.store.req.request({
                method: "post",
                url: res.data.host,
                data: form,
                onUploadProgress: ({ loaded, total }) => {},
                headers: this.transformMeta({
                    uid: 123,
                    name: encodeURIComponent(file.name)
                })
            });
        });
    }

    transformMeta(meta = {}) {
        let obj = {};

        Object.keys(meta).forEach(k => {
            obj[`x-oss-meta-${k}`] = meta[k];
        });

        return obj;
    }
}
