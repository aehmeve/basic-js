const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsObj = {};
  const domainsArr = domains;
  const reversedDomains = domainsArr.map((val) => val.split('.').reverse());

  for (const domain of reversedDomains) {
    domain.reduce((acc, val) => {
      const newAcc = `${acc}.${val}`;
      dnsObj[newAcc] ? dnsObj[newAcc] += 1 : dnsObj[newAcc] = 1;
      return newAcc;
    }, '');
  }

  return dnsObj;
}

module.exports = {
  getDNSStats
};
