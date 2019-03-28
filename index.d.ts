export interface LogF {
    info(msg: any): void
    warn(msg: any): void
    error(msg: any): void
    success(msg: any): void
};
declare const log: LogF;
export default log