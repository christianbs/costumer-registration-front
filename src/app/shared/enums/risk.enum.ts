export enum Risk {
    A = 'A', B = 'B', C = 'C'
}

export namespace Risk {
    export function values() {
        return Object.keys(Risk).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}
