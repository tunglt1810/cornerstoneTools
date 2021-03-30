export default modality => {
  let str = 'MO';

  if (modality === 'CT') {
    str = 'HU';
  }

  return str;
};
