function prepareForEs(mongoDoc: {
  _id: string;
  __v: number;
  [key: string]: any;
}) {
  const { _id, __v, ...rest } = mongoDoc;
  return rest;
}
function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
const paginate = (page = 1, pageSize = 1000) => {
  const offset = (page - 1) * pageSize;
  return { skip: offset, take: pageSize };
};
export { prepareForEs, getRandomElement, paginate };
