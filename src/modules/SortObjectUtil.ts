const SortObjectUtil = {
  sort: (obj: any, isSortArray = true): object => {
    // 1. is array
    if (Array.isArray(obj)) return isSortArray ? obj.sort() : obj;
    // 2. is dictionary
    if ('object' === typeof obj) return SortObjectUtil.sortPlainObject(obj);
    // 3. is primitive
    return obj;
  },
  sortPlainObject: (plainObj: any) =>
    Object.keys(plainObj)
      .sort()
      .reduce((acc: { [s: string]: any }, key) => {
        acc[key] = SortObjectUtil.sort(plainObj[key]);
        return acc;
      }, {})
};

export default SortObjectUtil;
