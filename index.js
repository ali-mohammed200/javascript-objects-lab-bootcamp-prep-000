let recipes = {};
function updateObjectWithKeyAndValue(obj, k, v){
  let newObj = Object.assign({}, obj);
  newObj[k] = v;
  return newObj;
}
