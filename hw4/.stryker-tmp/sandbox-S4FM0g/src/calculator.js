// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class Calculator {
  static main(month1, day1, month2, day2, year) {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      if (stryMutAct_9fa48("3") ? month1 < 1 && month1 > 12 : stryMutAct_9fa48("2") ? false : stryMutAct_9fa48("1") ? true : (stryCov_9fa48("1", "2", "3"), (stryMutAct_9fa48("6") ? month1 >= 1 : stryMutAct_9fa48("5") ? month1 <= 1 : stryMutAct_9fa48("4") ? false : (stryCov_9fa48("4", "5", "6"), month1 < 1)) || (stryMutAct_9fa48("9") ? month1 <= 12 : stryMutAct_9fa48("8") ? month1 >= 12 : stryMutAct_9fa48("7") ? false : (stryCov_9fa48("7", "8", "9"), month1 > 12)))) {
        if (stryMutAct_9fa48("10")) {
          {}
        } else {
          stryCov_9fa48("10");
          throw new Error(stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), "invalid month1"));
        }
      }
      if (stryMutAct_9fa48("14") ? month2 < 1 && month2 > 12 : stryMutAct_9fa48("13") ? false : stryMutAct_9fa48("12") ? true : (stryCov_9fa48("12", "13", "14"), (stryMutAct_9fa48("17") ? month2 >= 1 : stryMutAct_9fa48("16") ? month2 <= 1 : stryMutAct_9fa48("15") ? false : (stryCov_9fa48("15", "16", "17"), month2 < 1)) || (stryMutAct_9fa48("20") ? month2 <= 12 : stryMutAct_9fa48("19") ? month2 >= 12 : stryMutAct_9fa48("18") ? false : (stryCov_9fa48("18", "19", "20"), month2 > 12)))) {
        if (stryMutAct_9fa48("21")) {
          {}
        } else {
          stryCov_9fa48("21");
          throw new Error(stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), "invalid month2"));
        }
      }
      if (stryMutAct_9fa48("25") ? day1 < 1 && day1 > 31 : stryMutAct_9fa48("24") ? false : stryMutAct_9fa48("23") ? true : (stryCov_9fa48("23", "24", "25"), (stryMutAct_9fa48("28") ? day1 >= 1 : stryMutAct_9fa48("27") ? day1 <= 1 : stryMutAct_9fa48("26") ? false : (stryCov_9fa48("26", "27", "28"), day1 < 1)) || (stryMutAct_9fa48("31") ? day1 <= 31 : stryMutAct_9fa48("30") ? day1 >= 31 : stryMutAct_9fa48("29") ? false : (stryCov_9fa48("29", "30", "31"), day1 > 31)))) {
        if (stryMutAct_9fa48("32")) {
          {}
        } else {
          stryCov_9fa48("32");
          throw new Error(stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), "invalid day1"));
        }
      }
      if (stryMutAct_9fa48("36") ? day2 < 1 && day2 > 31 : stryMutAct_9fa48("35") ? false : stryMutAct_9fa48("34") ? true : (stryCov_9fa48("34", "35", "36"), (stryMutAct_9fa48("39") ? day2 >= 1 : stryMutAct_9fa48("38") ? day2 <= 1 : stryMutAct_9fa48("37") ? false : (stryCov_9fa48("37", "38", "39"), day2 < 1)) || (stryMutAct_9fa48("42") ? day2 <= 31 : stryMutAct_9fa48("41") ? day2 >= 31 : stryMutAct_9fa48("40") ? false : (stryCov_9fa48("40", "41", "42"), day2 > 31)))) {
        if (stryMutAct_9fa48("43")) {
          {}
        } else {
          stryCov_9fa48("43");
          throw new Error(stryMutAct_9fa48("44") ? "" : (stryCov_9fa48("44"), "invalid day2"));
        }
      }
      if (stryMutAct_9fa48("47") ? year < 1 && year > 10000 : stryMutAct_9fa48("46") ? false : stryMutAct_9fa48("45") ? true : (stryCov_9fa48("45", "46", "47"), (stryMutAct_9fa48("50") ? year >= 1 : stryMutAct_9fa48("49") ? year <= 1 : stryMutAct_9fa48("48") ? false : (stryCov_9fa48("48", "49", "50"), year < 1)) || (stryMutAct_9fa48("53") ? year <= 10000 : stryMutAct_9fa48("52") ? year >= 10000 : stryMutAct_9fa48("51") ? false : (stryCov_9fa48("51", "52", "53"), year > 10000)))) {
        if (stryMutAct_9fa48("54")) {
          {}
        } else {
          stryCov_9fa48("54");
          throw new Error(stryMutAct_9fa48("55") ? "" : (stryCov_9fa48("55"), "invalid year"));
        }
      }
      if (stryMutAct_9fa48("58") ? month1 === month2 || day1 > day2 : stryMutAct_9fa48("57") ? false : stryMutAct_9fa48("56") ? true : (stryCov_9fa48("56", "57", "58"), (stryMutAct_9fa48("60") ? month1 !== month2 : stryMutAct_9fa48("59") ? true : (stryCov_9fa48("59", "60"), month1 === month2)) && (stryMutAct_9fa48("63") ? day1 <= day2 : stryMutAct_9fa48("62") ? day1 >= day2 : stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61", "62", "63"), day1 > day2)))) {
        if (stryMutAct_9fa48("64")) {
          {}
        } else {
          stryCov_9fa48("64");
          throw new Error(stryMutAct_9fa48("65") ? "" : (stryCov_9fa48("65"), "day1 must be less than day2 if month1 is equal to month2"));
        }
      }
      if (stryMutAct_9fa48("69") ? month1 <= month2 : stryMutAct_9fa48("68") ? month1 >= month2 : stryMutAct_9fa48("67") ? false : stryMutAct_9fa48("66") ? true : (stryCov_9fa48("66", "67", "68", "69"), month1 > month2)) {
        if (stryMutAct_9fa48("70")) {
          {}
        } else {
          stryCov_9fa48("70");
          throw new Error(stryMutAct_9fa48("71") ? "" : (stryCov_9fa48("71"), "month1 must be less than month2"));
        }
      }
      return this.#calculate(month1, day1, month2, day2, year);
    }
  }
  static #calculate(month1, day1, month2, day2, year) {
    if (stryMutAct_9fa48("72")) {
      {}
    } else {
      stryCov_9fa48("72");
      let numDays;
      if (stryMutAct_9fa48("75") ? month2 !== month1 : stryMutAct_9fa48("74") ? false : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74", "75"), month2 === month1)) {
        if (stryMutAct_9fa48("76")) {
          {}
        } else {
          stryCov_9fa48("76");
          numDays = stryMutAct_9fa48("77") ? day2 + day1 : (stryCov_9fa48("77"), day2 - day1);
        }
      } else {
        if (stryMutAct_9fa48("78")) {
          {}
        } else {
          stryCov_9fa48("78");
          // ignore 0 index
          let daysIn = stryMutAct_9fa48("79") ? [] : (stryCov_9fa48("79"), [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
          if (stryMutAct_9fa48("81") ? false : stryMutAct_9fa48("80") ? true : (stryCov_9fa48("80", "81"), this.#isLeapYear(year))) daysIn[2] = 29;else daysIn[2] = 28;
          numDays = stryMutAct_9fa48("82") ? day2 - (daysIn[month1] - day1) : (stryCov_9fa48("82"), day2 + (stryMutAct_9fa48("83") ? daysIn[month1] + day1 : (stryCov_9fa48("83"), daysIn[month1] - day1)));
          for (let i = stryMutAct_9fa48("84") ? month1 - 1 : (stryCov_9fa48("84"), month1 + 1); stryMutAct_9fa48("87") ? i > month2 - 1 : stryMutAct_9fa48("86") ? i < month2 - 1 : stryMutAct_9fa48("85") ? false : (stryCov_9fa48("85", "86", "87"), i <= (stryMutAct_9fa48("88") ? month2 + 1 : (stryCov_9fa48("88"), month2 - 1))); stryMutAct_9fa48("89") ? i-- : (stryCov_9fa48("89"), i++)) stryMutAct_9fa48("90") ? numDays -= daysIn[i] : (stryCov_9fa48("90"), numDays += daysIn[i]);
        }
      }
      return numDays;
    }
  }
  static #isLeapYear(year) {
    if (stryMutAct_9fa48("91")) {
      {}
    } else {
      stryCov_9fa48("91");
      return stryMutAct_9fa48("94") ? year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 : stryMutAct_9fa48("93") ? false : stryMutAct_9fa48("92") ? true : (stryCov_9fa48("92", "93", "94"), (stryMutAct_9fa48("96") ? year % 4 === 0 || year % 100 !== 0 : stryMutAct_9fa48("95") ? false : (stryCov_9fa48("95", "96"), (stryMutAct_9fa48("98") ? year % 4 !== 0 : stryMutAct_9fa48("97") ? true : (stryCov_9fa48("97", "98"), (stryMutAct_9fa48("99") ? year * 4 : (stryCov_9fa48("99"), year % 4)) === 0)) && (stryMutAct_9fa48("101") ? year % 100 === 0 : stryMutAct_9fa48("100") ? true : (stryCov_9fa48("100", "101"), (stryMutAct_9fa48("102") ? year * 100 : (stryCov_9fa48("102"), year % 100)) !== 0)))) || (stryMutAct_9fa48("104") ? year % 400 !== 0 : stryMutAct_9fa48("103") ? false : (stryCov_9fa48("103", "104"), (stryMutAct_9fa48("105") ? year * 400 : (stryCov_9fa48("105"), year % 400)) === 0)));
    }
  }
}
module.exports = Calculator;