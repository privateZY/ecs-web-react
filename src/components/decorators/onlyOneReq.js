import { decorate, invokedWithArgs } from "./util";
import { action, observable, extendObservable } from "mobx";

function getDecorator(withArgs, lockName) {
    return (target, key, descriptor) => {
        if (!withArgs) {
            lockName = `__${Math.random()
                .toString(32)
                .slice(2, 8)}`;
        }
        const fn = descriptor.value;
        return {
            ...descriptor,
            /**
             *  不能使用 target, 因为 target !== this
             * @param params { * }
             * @return {undefined | Promise}
             */
            @action
            value(...params) {
                if (this[lockName]) {
                    return undefined;
                }
                let result = fn.apply(this, [...params]);
                if (result instanceof Promise) {
                    if (withArgs && typeof this[lockName] !== "boolean") {
                        extendObservable(this, {
                            [lockName]: true
                        });
                    } else {
                        this[lockName] = true;
                    }
                    return result
                        .then(
                            action(`${lockName}-unlock`, res => {
                                this[lockName] = false;
                                return Promise.resolve(res);
                            })
                        )
                        .catch(
                            action(`${lockName}-unlock`, e => {
                                this[lockName] = false;
                                return Promise.reject(e);
                            })
                        );
                } else {
                    return result;
                }
            }
        };
    };
}

export const onlyOneReq = function(lockName) {
    const withArgs = invokedWithArgs(arguments);
    const decorator = getDecorator(withArgs, lockName);
    return decorate(withArgs, decorator, arguments);
};
