export const get = (obj: Record<string, any>, path: string, def?: any): any => {
    if (obj == null) {
      return def;
    }
    const fullPath = path
      .replace(/\[/g, '.')
      .replace(/]/g, '')
      .split('.')
      .filter(Boolean);
  
    if (obj == null) {
      return def || null;
    }
  
    function everyFunc(step) {
      if (obj[step] !== null) {
        const resultEveryFunc = !(step && (obj = obj[step]) === undefined);
        return resultEveryFunc;
      }
      return null;
    }
  
    return fullPath.every(everyFunc) ? obj : def;
};