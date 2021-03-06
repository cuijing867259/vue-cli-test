/**
 * @author: CuiJing
 * @description: 验证工具类
 * @date: 2021/02/24 16:57
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
    return /^(https?:|mailto:|tel:)/.test(path);
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str: string) {
    const validMap = ["admin", "editor"];
    return validMap.indexOf(str.trim()) >= 0;
}
