let recipes = {};
function updateObjectWithKeyAndValue(obj, k, v){
  let newObj = Object.assign({}, obj);
  newObj[k] = v;
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(obj, k, v){
  obj[k] = v;
  return obj;
}