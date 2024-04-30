export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const aset = Array.from(set);
  const asetf = aset.filter((a) => a.startsWith(startString) || startString === '');
  const asetfm = asetf.map((elem) => elem.replace(startString, ''));
  return asetfm.join('-');
}
