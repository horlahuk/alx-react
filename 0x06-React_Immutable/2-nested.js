import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableObj = fromJS(object);
  return immutableObj.getIn(array, undefined);
}