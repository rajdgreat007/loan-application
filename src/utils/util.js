import schema from "../mock/schema";

const isValidData =  (schemaKey, data) => {
  const currentSchema = schema[schemaKey];
  const keys = Object.keys(currentSchema);
  if(data instanceof Array) data = data[0];
  for(let i=0;i<keys.length;i++) {
    const key = keys[i];
    if(key === "type") continue;
    const val = currentSchema[key];
    const dataVal = data[key];
    if(!dataVal) return false;
    if(val.num === "1+" && !(dataVal instanceof Array)) return false;
  }
  return true;
};

export default isValidData;