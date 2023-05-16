/* exported titleCase */

function titleCase(title) {
  const exceptions = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];

  const splitArr = (
    title[0].toUpperCase() + title.slice(1).toLowerCase()
  ).split(' ');

  for (let i = 0; i < splitArr.length; i++) {
    if (!exceptions.includes(splitArr[i])) {
      splitArr[i] =
        splitArr[i][0].toUpperCase() + splitArr[i].slice(1).toLowerCase();
    }

    if (splitArr[i].includes('Javascript')) {
      splitArr[i] = splitArr[i].replace('s', 'S');
    } else if (splitArr[i].includes('Api')) {
      splitArr[i] = splitArr[i].replace('Api', 'API');
    }

    if (splitArr[i - 1] !== undefined && splitArr[i - 1].slice(-1) === ':') {
      splitArr[i] =
        splitArr[i][0].toUpperCase() + splitArr[i].slice(1).toLowerCase();
    }

    if (splitArr[i].includes('-')) {
      const hyphenSplit = splitArr[i].split('-');
      splitArr[i] =
        hyphenSplit[0] +
        '-' +
        hyphenSplit[1][0].toUpperCase() +
        hyphenSplit[1].slice(1);
    }
  }

  return splitArr.join(' ');
}
