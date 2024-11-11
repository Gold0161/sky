// idp.datalayer.js (/master/sitewide/preprocessed/javascript/datalayer/idp.datalayer.js)

var idp = idp || {};
var isHomePage = false;
idp.dataLayer = {
  isDebugEnabled: false,
  retrySiteCatalystValues: true,
  clsExceptions: ["contactus"],
  config: {
    maxWaitTimeForDDLApps: 5000,
    maxWaitTimeForDDLCQ: 10000,
    maxWaitTime: null,
    defaultEmptyString: "",
    dataPoints: {
      core: [
        {
          srcPath: "pageInstanceID",
          destPath: "pageInstanceID",
          isRequired: true,
        },
        {
          srcPath: "pageID",
          destPath: "page.pageInfo.pageID",
          isRequired: true,
        },
        {
          srcPath: "pageName",
          destPath: "page.pageInfo.pageName",
          isRequired: true,
        },
        {
          srcPath: "language",
          destPath: "page.pageInfo.language",
          isRequired: true,
        },
        {
          srcPath: "primaryCategory",
          destPath: "page.category.primaryCategory",
        },
        {
          srcPath: "subCategory",
          destPath: "page.category.subCategory",
        },
        {
          srcPath: "membershipLevel",
          destPath: "user.segment.medallionStatus",
        },
        {
          srcPath: "customerID",
          destPath: "user.profile.profileInfo.profileID",
        },
        {
          srcPath: "primaryEmailAddress",
          destPath: "user.profile.profileInfo.email",
        },
        {
          srcPath: "loggedIn",
          destPath: "user.profile.attributes.isLoggedIn",
          isRequired: true,
        },
        {
          srcPath: "country",
          destPath: "attributes.country",
        },
        {
          srcPath: "smBalance",
          destPath: "user.profile.attributes.availableMiles",
        },
        {
          srcPath: "smNumber",
          destPath: "user.profile.attributes.skymilesNumber",
        },
        {
          srcPath: "cachekey",
          destPath: "attributes.ecommBusSessionID",
        },
        {
          srcPath: "xssid",
          destPath: "attributes.sessionID",
        },
        {
          srcPath: "optimost",
          destPath: "attributes.OptimostCreativeID",
        },
        {
          srcPath: "tealeaf",
          destPath: "attributes.tealeafSessionID",
        },
        {
          srcPath: "isIpad",
          destPath: "attributes.isIpad",
        },
        {
          srcPath: "primaryPaymentType",
          destPath: "user.profile.attributes.primaryPaymentType",
        },
        /*
				{
					srcPath: '',
					destPath: 'user.profile.profileInfo.userName'
				},
				{
					srcPath: '',
					destPath: 'user.profile.profileInfo.returningStatus'
				},
				{
					srcPath: '',
					destPath: 'user.profile.profileInfo.type'
				},
*/
      ],
      transaction: [
        {
          srcPath: "transactionID",
          destPath: "cart.transaction.transactionID",
          isRequired: true,
        },
        {
          srcPath: "transactionBasePrice",
          destPath: "cart.transaction.total.basePrice",
          isRequired: true,
        },
        {
          srcPath: "transactionCurrency",
          destPath: "cart.transaction.total.currency",
          isRequired: true,
        },
        {
          srcPath: "transactionTaxRate",
          destPath: "cart.transaction.total.taxRate",
          isRequired: true,
        },
        {
          srcPath: "transactionPriceWithTax",
          destPath: "cart.transaction.total.priceWithTax",
          isRequired: true,
        },
        {
          srcPath: "transactionTotal",
          destPath: "cart.transaction.total.transactionTotal",
          isRequired: true,
        },
      ],
      ticketTypeDataPoints: [
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
      ],
      cartDataPoints: [
        {
          srcPath: "cartID",
          destPath: "cart.cartID",
          isRequired: true,
        },
        {
          srcPath: "basePrice",
          destPath: "cart.price.basePrice",
          isRequired: true,
        },
        {
          srcPath: "currency",
          destPath: "cart.price.currency",
          isRequired: true,
        },
        {
          srcPath: "taxRate",
          destPath: "cart.price.taxRate",
          isRequired: true,
        },
        {
          srcPath: "priceWithTax",
          destPath: "cart.price.priceWithTax",
          isRequired: true,
        },
        {
          srcPath: "cartTotal",
          destPath: "cart.price.cartTotal",
          isRequired: true,
        },
      ],
      cartDetailDataPoints: [
        {
          srcPath: "cartProductID",
          destPath: "cart.item[0].productInfo.productID", //,
          //isRequired: false
        },
        {
          srcPath: "cartProductDescription",
          destPath: "cart.item[0].productInfo.description",
        },
        {
          srcPath: "cartProductType",
          destPath: "cart.item[0].productInfo.productType", //,
          //isRequired: false
        },
        {
          srcPath: "cartFlightType",
          destPath: "cart.item[0].productInfo.flightType", //,
          //isRequired: true
        },
        {
          srcPath: "cartFareType",
          destPath: "cart.item[0].productInfo.fareType", //,
          //isRequired: true
        },
        {
          srcPath: "cartFareClass",
          destPath: "cart.item[0].productInfo.fareClass", //,
          //isRequired: true
        },
        {
          srcPath: "cartCabin",
          destPath: "cart.item[0].productInfo.cabinType", //,
          //isRequired: true
        },
        {
          srcPath: "cartDepartureDate",
          destPath: "cart.item[0].productInfo.departureDate", //,
          //isRequired: true
        },
        {
          srcPath: "cartArrivalDate",
          destPath: "cart.item[0].productInfo.arrivalDate", //,
          //isRequired: true
        },
        {
          srcPath: "cartOriginAirportCode",
          destPath: "cart.item[0].productInfo.originAirportCode", //,
          //isRequired: true
        },
        {
          srcPath: "cartDestinationAirportCode",
          destPath: "cart.item[0].productInfo.destinationAirportCode", //,
          //isRequired: true
        },
        {
          srcPath: "cartNumberTravellers",
          destPath: "cart.item[0].productInfo.numberOfTravellers", //,
          //isRequired: true
        },
      ],
      airShopping: [
        {
          srcPath: "searchType",
          destPath: "attributes.searchType",
          isRequired: true,
        },
        {
          srcPath: "searchOptions",
          destPath: "attributes.searchOptions",
          isRequired: true,
        },
        {
          srcPath: "searchMethod",
          destPath: "attributes.searchMethod",
          isRequired: true,
        },
        {
          srcPath: "offeredBookingTypes",
          destPath: "attributes.offeredBookingTypes",
          isRequired: true,
        },
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
      ],
      tripSummary: [
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
      ],
      bookingConfirmation: [
        {
          srcPath: "pnr",
          destPath: "cart.transaction.pnr",
          isRequired: true,
        },
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
      ],
      checkIn: [
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
      ],
      checkInBagConfirmation: [
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
        {
          srcPath: "bagUnits",
          destPath: "attributes.bagUnits",
          isRequired: true,
        },
        {
          srcPath: "cartCurrency",
          destPath: "cart.price.currency",
          isRequired: true,
        },
        {
          srcPath: "cartBagRevenue",
          destPath: "cart.price.baggageRevenue",
          isRequired: true,
        },
      ],
      checkInConfirmation: [
        {
          srcPath: "bagUnits",
          destPath: "attributes.bagUnits",
          isRequired: true,
        },
        {
          srcPath: "cartBagRevenue",
          destPath: "transaction.total.baggageRevenue",
          isRequired: true,
        },
      ],
      myTrips: [
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
      ],
      manageMyTrips: [
        {
          srcPath: "ticketType",
          destPath: "attributes.ticketType",
          isRequired: true,
        },
        {
          srcPath: "availableSeats",
          destPath: "attributes.availableSeats",
          isRequired: true,
        },
        {
          srcPath: "offeredTripExtras",
          destPath: "attributes.offeredTripExtras",
          isRequired: true,
        },
      ],
      flightinfo: [
        {
          srcPath: "flightNumber",
          destPath: "attributes.flightStatus.flightNumber",
          isRequired: true,
        },
        {
          srcPath: "departureDate",
          destPath: "attributes.flightStatus.departureDate",
          isRequired: true,
        },
        {
          srcPath: "originAirportCode",
          destPath: "attributes.flightStatus.originAirportCode",
          isRequired: true,
        },
        {
          srcPath: "destinationAirportCode",
          destPath: "attributes.flightStatus.destinationAirportCode",
          isRequired: true,
        },
      ],
      skyMilesEnrollment: [
        {
          srcPath: "promoEmailSubscribe",
          destPath: "attributes.subPromEmail",
          isRequired: true,
        },
      ],
      skyNotificationPref: [
        {
          srcPath: "promoEmailSubscribe",
          destPath: "attributes.subPromEmail",
          isRequired: true,
        },
        {
          srcPath: "promoEmailUnsubscribe",
          destPath: "attributes.unsubPromEmail",
          isRequired: true,
        },
      ],
      cartReview: [],
    },
  },
  appContext: null,
  dataPointsProvided: [],
  ddlTimeoutHandle: null,
  isAppDataReady: false,
  isDataReady: false,
  isSPA: false,
  addType: function (type) {
    for (var i = 0; i < this.dataPointsProvided.length; i++) {
      if (this.dataPointsProvided[i] == type) {
        return;
      }
    }
    this.dataPointsProvided.push(type.replace("-", ""));
  },
  checkData: function () {
    var dataPoint;
    for (var i = 0; i < this.dataPointsProvided.length; i++) {
      if (
        idp.dataLayer.config.dataSettings[this.dataPointsProvided[i]] !==
        undefined
      ) {
        for (
          var j = 0;
          j <
          idp.dataLayer.config.dataSettings[this.dataPointsProvided[i]]
            .requiredDataPoints.length;
          j++
        ) {
          for (
            var k = 0;
            k <
            idp.dataLayer.config.dataSettings[this.dataPointsProvided[i]]
              .requiredDataPoints[j].length;
            k++
          ) {
            try {
              dataPoint =
                idp.dataLayer.config.dataSettings[this.dataPointsProvided[i]]
                  .requiredDataPoints[j][k].destPath;
              if (
                idp.dataLayer.config.dataSettings[this.dataPointsProvided[i]]
                  .requiredDataPoints[j][k].isRequired
              ) {
                if (!this.checkDataPoint(this.digitalData, dataPoint)) {
                  return;
                }
              }
            } catch (error) {
              idp.utils.logger.logMessage("Caught Error: " + error, "error");
            }
          }
        }
      }
      this.isDataReady = true;
      if (this.isApplication() && !this.isAppDataReady) {
        this.checkApplicationData();
      } else {
        this.notifyTMS();
      }
    }
  },
  checkAppDataTimeoutHandle: "",
  checkApplicationData: function () {
    var currCount = 0;
    var maxCount = 30;
    (function poll() {
      idp.dataLayer.checkAppDataTimeoutHandle = setTimeout(function () {
        if (idp.dataLayer.isAppDataReady || currCount == maxCount) {
          idp.dataLayer.clearCheckAppDataTimeoutHandle();
          idp.dataLayer.notifyTMS();
        } else {
          currCount++;
          poll();
        }
      }, 1000);
    })();
  },
  clearCheckAppDataTimeoutHandle: function () {
    window.clearTimeout(idp.dataLayer.checkAppDataTimeoutHandle);
  },
  checkDataPoint: function (object, path) {
    if (
      jsocrud.get(object, path) !== null &&
      jsocrud.get(object, path) !== idp.dataLayer.config.defaultEmptyString
    ) {
      return true;
    }
    return false;
  },
  getData: function () {
    return this.digitalData;
  },
  checkPref: function () {
    var countryLanguageCookieName = CookieUtils.get("prefUI");
    if (
      countryLanguageCookieName == undefined ||
      countryLanguageCookieName == null
    ) {
      var country = "";
      var language = "";
      var defaultCountry = "us";
      var defaultLanguage = "en";
      var suportingLanguageDomains = {
        ru: "ru.idp.com",
        ko: "ko.idp.com",
        zh: "zh.idp.com",
        zt: "zt.idp.com",
        ja: "ja.idp.com",
        es: "es.idp.com",
        fr: "fr.idp.com",
        it: "it.idp.com",
        pt: "pt.idp.com",
        de: "de.idp.com",
      };
      var supportedLanguages = {
        de: "de",
        es: "us",
        fr: "fr",
        it: "it",
        ja: "jp",
        ko: "kr",
        pt: "br",
        zh: "cn",
        ru: "ru",
        zt: "tw",
      };
      var domain = window.location.host;
      var env = window.location.host.split(".")[0];
      if (
        env.indexOf("si") != -1 ||
        env.indexOf("st") != -1 ||
        env.indexOf("qat") != -1 ||
        env.indexOf("dvl") != -1 ||
        env.indexOf("www") != -1
      ) {
        country = defaultCountry;
        language = defaultLanguage;
      } else {
        country = suportingLanguageDomains[domain];
        language = supportedLanguages[env];
      }
      countryLanguageCookieName = language + "-" + country;
      CookieUtils.create("prefUI", countryLanguageCookieName, 1);
    }
  },
  getCountryLanguage: function () {
    var data = {};
    try {
      var prefCookie = CookieUtils.get("prefUI");
      if (prefCookie !== undefined && prefCookie !== null) {
        var prefCookieVal = prefCookie.split("-");
        data.language = prefCookieVal[0];
        data.country = prefCookieVal.length > 1 ? prefCookieVal[1] : "";
      } else {
        var navLang = navigator.language;
        if (navLang !== undefined && navLang !== null) {
          var navLangVal = navLang.split("-");
          data.country =
            navLangVal.length > 1 ? navLangVal[1].toLowerCase() : "";
          data.language = navLangVal[0].toLowerCase();
        }
      }
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
    }
    this.setData({
      core: data,
    });
  },
  getCPPValues: function () {
    var data = {};
    try {
      data.xssid = CookieUtils.get("xssid");
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
    }
    try {
      if (
        this.getAppContext() == "cart" &&
        window.location.pathname.match("cacheKeySuffix")
      ) {
        data.cachekey = this.getCacheKey();
      }
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
    }
    try {
      data.optimost = CookieUtils.get("opForeseeCreative");
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
    }
    try {
      data.tealeaf = CookieUtils.get("TLTSID");
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
    }
    try {
      data.isIpad =
        window.location.href.indexOf("iPad%20App") > 0 ? "true" : "false";
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
    }
    this.setData({
      core: data,
    });
  },
  getSiteCatalystValues: function () {
    var data = {};
    var pid = "-";
    var pageName;
    var pageID;
    var pageInstanceID;
    var env = window.location.href.split("//")[1].split(".")[0];
    if (env.match("www")) {
      pid += "production";
    } else if (env.match("si") || env.match("stg")) {
      pid += "staging";
    } else if (env.match(/qat/) || env.match("st")) {
      pid += "systemtest";
    } else if (env.match("int")) {
      pid += "integration";
    } else if (env.match(/dvl/)) {
      pid += "development";
    } else {
    }
    /*try {
			pageName = (UserTracking.getProp("pageName") !== undefined) ? UserTracking.getProp("pageName") : s.pageName;
			pageID = this.removeSpaces(pageName).toLowerCase();
			pageInstanceID = this.removeSpaces(pageName) + pid;
			pageInstanceID = pageInstanceID.toLowerCase();
			data.pageName = pageName;
			data.pageID = pageID;
			data.pageInstanceID = pageInstanceID;
		} catch (error) {
			idp.utils.logger.logMessage("Caught Error: " + error, "error");
		}
		try {
			data.channel = s.channel;
		} catch (error) {
			idp.utils.logger.logMessage("Caught Error: " + error, "error");
		}
		try {
			if(typeof(s.hier1)!=='undefined'){
			data.primaryCategory = s.hier1.split(":")[0];
			}
		} catch (error) {
			idp.utils.logger.logMessage("Caught Error: " + error, "error");
		}
		try {
			if(typeof(s.hier1)!=='undefined'){
			data.subCategory = s.hier1.split(":").shift().join(":");
			}
		} catch (error) {
			idp.utils.logger.logMessage("Caught Error: " + error, "error");
		}*/
    this.setData({
      core: data,
    });
  },
  getTypes: function () {
    return this.dataPointsProvided;
  },
  /* Consumes DeltaUtils methods by duplicating here, we are not invoking DeltaUtils object from outside (jQuery dependency exists) - START */
  getAppContext: function () {
    var url = window.location.pathname;
    var app = url.split("/")[1];
    if (app === "") {
      app = "core";
    }
    return app;
  },
  isCQPage: function () {
    var path = window.location.pathname;
    var pathParts = path.split("/");
    for (var i = 0; i < pathParts.length; i++) {
      if (pathParts[i].match(/content/i)) {
        return true;
      }
    }
    return false;
  },
  isHomePage: function () {
    try {
      if (isHomePage) {
        return true;
      }
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
      return false;
    }
  },
  isClsException: function () {
    var isException = false;
    for (var i = 0; i < this.clsExceptions.length; i++) {
      if (window.location.toString().match(this.clsExceptions[i])) {
        isException = true;
      }
    }
    return isException;
  },
  isApplication: function () {
    var isApp = true;
    if (this.isCQPage() || this.isHomePage() || this.isClsException()) {
      isApp = false;
    }
    return isApp;
  },
  getCacheKey: function () {
    var queryString = window.location.pathname.split("?")[1];
    var params = queryString.split("&");
    for (var i = 0; i < params.length; i++) {
      if (params[i].match("cacheKeySuffix")) {
        return params[i].split("=")[1];
      }
    }
  },
  removeSpaces: function (str) {
    return str.replace(/\s*/g, "");
  },
  /* Consumes DeltaUtils methods by duplicating here, we are not invoking DeltaUtils object from outside (jQuery dependency exists) - END */
  init: function () {
    /*
		this.config.spaContext = ["air-shopping"];
		if(idp.dataLayer.config.spaContext.indexOf(DeltaUtils.getAppContext()) !== -1) {
			this.isSPA = true;
		}
		*/
    var env = window.location.href.split("//")[1].split(".")[0];
    if (!env.match("localhost")) {
      if (arguments.length == 1) {
        this.appContext = idp.dataLayer.config.dataSettings[arguments[0]];
      } else {
        this.appContext =
          idp.dataLayer.config.dataSettings[this.getAppContext()];
      }
      this.config.maxWaitTime = this.isApplication()
        ? this.config.maxWaitTimeForDDLApps
        : this.config.maxWaitTimeForDDLCQ;
      this.mapCommonDataPoints();
      this.getCPPValues();
      this.getCountryLanguage();
      this.getSiteCatalystValues();
      idp.dataLayer.config.ddlTimeoutHandle = setTimeout(function () {
        if (idp.dataLayer.retrySiteCatalystValues) {
          idp.dataLayer.getSiteCatalystValues();
        }
        if (!idp.dataLayer.isReady()) {
          if (idp.dataLayer.isDebugEnabled) {
            idp.dataLayer.logMessage({
              type: "error",
              message:
                "DDL not ready after " +
                idp.dataLayer.config.maxWaitTime +
                " milliseconds.",
            });
          }
        }
      }, idp.dataLayer.config.maxWaitTime);
      this.checkData();
    }
  },
  isReady: function () {
    if (!this.isDataReady) {
      this.checkData();
    }
    return this.isDataReady;
  },
  logMessage: function (message) {
    if (this.isDebugEnabled) {
      try {
        console.log(message);
      } catch (error) {}
    }
  },
  mapCommonDataPoints: function () {
    //set common cart value mappings
    for (
      var i = 0;
      i < idp.dataLayer.config.dataPoints.cartDetailDataPoints.length;
      i++
    ) {
      idp.dataLayer.config.dataPoints.airShopping.push(
        idp.dataLayer.config.dataPoints.cartDetailDataPoints[i]
      );
      idp.dataLayer.config.dataPoints.cartReview.push(
        idp.dataLayer.config.dataPoints.cartDetailDataPoints[i]
      );
      //idp.dataLayer.config.dataPoints.checkIn.push(idp.dataLayer.config.dataPoints.cartDetailDataPoints[i]);
      idp.dataLayer.config.dataPoints.checkInBagConfirmation.push(
        idp.dataLayer.config.dataPoints.cartDetailDataPoints[i]
      );
      idp.dataLayer.config.dataPoints.checkInConfirmation.push(
        idp.dataLayer.config.dataPoints.cartDetailDataPoints[i]
      );
      idp.dataLayer.config.dataPoints.manageMyTrips.push(
        idp.dataLayer.config.dataPoints.cartDetailDataPoints[i]
      );
      idp.dataLayer.config.dataPoints.myTrips.push(
        idp.dataLayer.config.dataPoints.cartDetailDataPoints[i]
      );
    }
    // set common transaction value mappings
    for (i = 0; i < idp.dataLayer.config.dataPoints.transaction.length; i++) {
      idp.dataLayer.config.dataPoints.bookingConfirmation.push(
        idp.dataLayer.config.dataPoints.transaction[i]
      );
      idp.dataLayer.config.dataPoints.checkInConfirmation.push(
        idp.dataLayer.config.dataPoints.transaction[i]
      );
    }
    for (
      i = 0;
      i < idp.dataLayer.config.dataPoints.cartDataPoints.length;
      i++
    ) {
      idp.dataLayer.config.dataPoints.tripSummary.push(
        idp.dataLayer.config.dataPoints.cartDataPoints[i]
      );
      idp.dataLayer.config.dataPoints.checkInConfirmation.push(
        idp.dataLayer.config.dataPoints.cartDataPoints[i]
      );
    }
  },
  notifyTMS: function () {
    try {
      Bootstrapper.ddlReady();
      // reset init variables for SPAs
      /*
			if(idp.dataLayer.isSPA) {
				idp.dataLayer.isAppDataReady = false;
			}
			*/
    } catch (error) {
      idp.utils.logger.logMessage("Caught Error: " + error, "error");
    }
  },
  setData: function (dataObj) {
    var dataObjKeys = Object.keys(dataObj);
    var dataObjLength = dataObjKeys.length;
    for (i = 0; i < dataObjLength; i++) {
      var type = dataObjKeys[i];
      var data = dataObj[type];
      idp.dataLayer.addType(type);
      /*if (type != "cartDetailDataPoints") {
				/*$.each(data, function (key, value) {
					$.each(idp.dataLayer.config.dataPoints[type], function (index, obj) {
						if (key == obj.srcPath) {
							idp.dataLayer.setValue(idp.dataLayer.digitalData, obj.destPath, value);
						}
					});
				});*/
      /*for (var k in data){
					if (data.hasOwnProperty(k)) {
						 for(m=0;m<idp.dataLayer.config.dataPoints[type].length;m++){
							if (k == idp.dataLayer.config.dataPoints[type][m].srcPath) {
								idp.dataLayer.setValue(idp.dataLayer.digitalData, idp.dataLayer.config.dataPoints[type][m].destPath, data[k]);
							}
						}
					}
				}
			} else {
				if (data instanceof Array) {
					idp.dataLayer.digitalData.cart.item = data;
				} else {
					idp.dataLayer.digitalData.cart.item.push(data);
				}
			}*/
    }
    // check whether we think all data has been set and then notify TMS if we think it has all been set
    if (
      (dataObjLength > 1 && this.isApplication()) ||
      (dataObjLength === 1 && dataObjKeys[0] !== "core" && this.isApplication())
    ) {
      // initialize the isAppDataReady variable
      idp.dataLayer.isAppDataReady = true;
    }
  },
  setValue: function (object, path, value) {
    this.digitalData = jsocrud.set(object, path, value);
  },
};
// idp.dataLayer.config.dataSettings.js (/master/sitewide/preprocessed/javascript/datalayer/idp.dataLayer.config.dataSettings.js)

idp.dataLayer.config.dataSettings = {
  core: {
    requiredDataPoints: [idp.dataLayer.config.dataPoints.core],
  },
  cartDetailDataPoints: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.cartDetailDataPoints,
      idp.dataLayer.config.dataPoints.ticketTypeDataPoints,
      idp.dataLayer.config.dataPoints.transaction,
      idp.dataLayer.config.dataPoints.cartDataPoints,
    ],
  },
  airshopping: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.airShopping,
      idp.dataLayer.config.dataPoints.ticketTypeDataPoints,
      idp.dataLayer.config.dataPoints.cartDetailDataPoints,
    ],
  },
  tripSummary: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.ticketTypeDataPoints,
      idp.dataLayer.config.dataPoints.tripSummary,
    ],
  },
  bookingConfirmation: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.ticketTypeDataPoints,
      idp.dataLayer.config.dataPoints.tripSummary,
      idp.dataLayer.config.dataPoints.bookingConfirmation,
    ],
  },
  checkIn: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.checkIn,
    ],
  },
  checkInBagConfirmation: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.checkInBagConfirmation,
    ],
  },
  checkInConfirmation: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.checkInConfirmation,
    ],
  },
  myTrips: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.myTrips,
      idp.dataLayer.config.dataPoints.cartDetailDataPoints,
    ],
  },
  manageMyTrips: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.manageMyTrips,
      idp.dataLayer.config.dataPoints.cartDetailDataPoints,
    ],
  },
  seat: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.cartDetailDataPoints,
    ],
  },
  flightinfo: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.flightStatus,
    ],
  },
  skyMilesEnrollment: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.skyMilesEnrollment,
    ],
  },
  skyNotificationPref: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.skyNotificationPref,
    ],
  },
  cartReview: {
    requiredDataPoints: [
      idp.dataLayer.config.dataPoints.core,
      idp.dataLayer.config.dataPoints.cartReview,
    ],
  },
};
// idp.dataLayer.digitalData.js (/master/sitewide/preprocessed/javascript/datalayer/idp.dataLayer.digitalData.js)

idp.dataLayer.digitalData = {
  pageInstanceID: idp.dataLayer.config.defaultEmptyString,
  page: {
    pageInfo: {
      pageID: idp.dataLayer.config.defaultEmptyString,
      pageName: idp.dataLayer.config.defaultEmptyString,
      destinationURL: window.location.href,
      referringURL: document.referrer,
      sysEnv: "idp.com",
      language: idp.dataLayer.config.defaultEmptyString,
    },
    category: {
      primaryCategory: idp.dataLayer.config.defaultEmptyString,
      subCategory: idp.dataLayer.config.defaultEmptyString,
    },
  },
  user: {
    segment: {
      medallionStatus: idp.dataLayer.config.defaultEmptyString,
    },
    loginData: {
      crprtAgrmntFound: idp.dataLayer.config.defaultEmptyString,
      isBusinessAccount: idp.dataLayer.config.defaultEmptyString,
      selectedCompany: idp.dataLayer.config.defaultEmptyString,
      enrollmentDate: idp.dataLayer.config.defaultEmptyString,
      is360Tier: idp.dataLayer.config.defaultEmptyString,
      millionMiler: idp.dataLayer.config.defaultEmptyString,
      prefix: idp.dataLayer.config.defaultEmptyString,
      rememberMeIndicator: idp.dataLayer.config.defaultEmptyString,
      skyPriority: idp.dataLayer.config.defaultEmptyString,
      partnershipsLink: idp.dataLayer.config.defaultEmptyString,
      systemProvidedHomeAirportCode: idp.dataLayer.config.defaultEmptyString,
      userProvidedHomeAirportCode: idp.dataLayer.config.defaultEmptyString,
      authenticated: idp.dataLayer.config.defaultEmptyString,
      warmState: idp.dataLayer.config.defaultEmptyString,
    },
    ddcfbData: {
      crprtAgrmntTypeCode: idp.dataLayer.config.defaultEmptyString,
      pgmType: idp.dataLayer.config.defaultEmptyString,
      pgm: idp.dataLayer.config.defaultEmptyString,
      permissions: idp.dataLayer.config.defaultEmptyString,
    },
    profile: {
      profileInfo: {
        profileID: idp.dataLayer.config.defaultEmptyString,
        userName: idp.dataLayer.config.defaultEmptyString,
        email: idp.dataLayer.config.defaultEmptyString,
        returningStatus: idp.dataLayer.config.defaultEmptyString, // unavailable
        type: "",
      },
      address: {
        line1: idp.dataLayer.config.defaultEmptyString, // unavailable
        line2: idp.dataLayer.config.defaultEmptyString, // unavailable
        city: idp.dataLayer.config.defaultEmptyString, // unavailable
        stateProvince: idp.dataLayer.config.defaultEmptyString, // unavailable
        postalCode: idp.dataLayer.config.defaultEmptyString, // unavailable
        country: idp.dataLayer.config.defaultEmptyString, // unavailable
      },
      attributes: {
        isLoggedIn: idp.dataLayer.config.defaultEmptyString,
        skymilesNumber: idp.dataLayer.config.defaultEmptyString,
        availableMiles: null,
        primaryPaymentType: idp.dataLayer.config.defaultEmptyString,
      },
    },
  },
  cart: {
    cartID: idp.dataLayer.config.defaultEmptyString,
    item: [],
    /*			{
						productInfo: {
							productID: idp.dataLayer.config.defaultEmptyString,
							description: idp.dataLayer.config.defaultEmptyString,
							productType: idp.dataLayer.config.defaultEmptyString,
							flightType: idp.dataLayer.config.defaultEmptyString,
							fareType: idp.dataLayer.config.defaultEmptyString,
							fareClass: idp.dataLayer.config.defaultEmptyString,
							cabinType: idp.dataLayer.config.defaultEmptyString,
							departureDate: idp.dataLayer.config.defaultEmptyString,
							arrivalDate: idp.dataLayer.config.defaultEmptyString,
							originAirportCode: idp.dataLayer.config.defaultEmptyString,
							destinationAirportCode: idp.dataLayer.config.defaultEmptyString,
							numberOfTravellers: null
						}
					}
				],
		*/
    price: {
      basePrice: null,
      currency: idp.dataLayer.config.defaultEmptyString,
      taxRate: null,
      priceWithTax: null,
      cartTotal: null,
      baggageRevenue: null,
    },
    transaction: {
      transactionID: idp.dataLayer.config.defaultEmptyString,
      pnr: idp.dataLayer.config.defaultEmptyString,
      total: {
        basePrice: null,
        currency: idp.dataLayer.config.defaultEmptyString,
        taxRate: null,
        priceWithTax: null,
        baggageRevenue: null,
        transactionTotal: null,
        milesUsedTotal: null,
      },
      attributes: {
        paymentType: idp.dataLayer.config.defaultEmptyString,
        billingCountry: idp.dataLayer.config.defaultEmptyString,
        billingCity: idp.dataLayer.config.defaultEmptyString,
      },
    },
  },
  attributes: {
    country: idp.dataLayer.config.defaultEmptyString,
    searchType: idp.dataLayer.config.defaultEmptyString,
    searchOptions: idp.dataLayer.config.defaultEmptyString,
    searchMethod: idp.dataLayer.config.defaultEmptyString,
    ticketType: idp.dataLayer.config.defaultEmptyString,
    flowType: idp.dataLayer.config.defaultEmptyString,
    bookingType: idp.dataLayer.config.defaultEmptyString,
    offeredBookingTypes: null, // array
    bagUnits: null,
    availableSeats: null,
    flightStatus: {
      flightNumber: idp.dataLayer.config.defaultEmptyString,
      departureDate: idp.dataLayer.config.defaultEmptyString,
      originAirportCode: idp.dataLayer.config.defaultEmptyString,
      destinationAirportCode: idp.dataLayer.config.defaultEmptyString,
    },
    subPromEmail: null, // array
    unsubPromEmail: null, //array
    nonCarImp: idp.dataLayer.config.defaultEmptyString,
    tealeafSessionID: null,
    ecommBusSessionID: null,
    sessionID: null,
    OptimostCreativeID: null,
    isIpad: null,
  },
  version: "1.0",
};

// idp.utils.cookie.js (/master/sitewide/preprocessed/javascript/core/idp.utils.cookie.js)

var CookieUtils = {
  create: function (name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie =
      name + "=" + value + expires + "; path=/" + "; domain=idp.com";
  },
  remove: function (name) {
    var value = this.get(name);
    if (DeltaUtils.exists(value)) {
      document.cookie =
        name + "=;path=/;domain=idp.com;expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
  },
  get: function (name) {
    var nameEQ = name + "=";
    var cookieArray = document.cookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
      var c = cookieArray[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
  },
};

// jsocrud.js (/master/sitewide/preprocessed/javascript/lib/jsocrud.js)

var PATH_VALIDATION_REGEX =
  /^((\.[_a-zA-Z$][_a-zA-Z0-9$]*)|(\[(('[^'\\]*(?:\\.[^'\\]*)*')|("[^"\\]*(?:\\.[^"\\]*)*")|(\d+))\]))+$/;
/**
 * jsocrud module
 * @constructor
 */
function jsocrud() {}
/**
 * Validates the given path. Adds a leading "." if necessary.
 * @param {String} path Path in an object - Example: ["foo"][2].bar
 * @returns {String} Validated path string
 */
jsocrud.validatePath = function (path) {
  if (typeof path !== "string" || !path) {
    throw new Error('Argument "path" must be a non-empty string.');
  }
  var firstCharacter = path[0];
  if (firstCharacter !== "[" && firstCharacter !== ".") {
    if (firstCharacter !== "'" && firstCharacter !== '"') {
      path = "." + path;
    }
  }
  if (!PATH_VALIDATION_REGEX.test(path)) {
    throw new Error(path + " is not a valid path");
  }
  return path;
};
/**
 * Parse a validated path into components
 * @param {String} validatedPath Validated path - Example: ["foo"][2].bar
 * @returns {Array} Path components
 */
jsocrud.parsePath = function (validatedPath) {
  var pathSplitRegex =
    /(\.[[_a-zA-Z$][_a-zA-Z0-9$]+)|(\[(('[^'\\]*(?:\\.[^'\\]*)*')|("[^"\\]*(?:\\.[^"\\]*)*")|(\d+))\])/g;
  var parsedPath = [];
  var match;
  while ((match = pathSplitRegex.exec(validatedPath))) {
    match = match[0];
    if (match.indexOf(".") === 0) {
      match = match.substring(1, match.length);
    } else if (match.indexOf('["') === 0 || match.indexOf("['") === 0) {
      match = match.substring(2, match.length - 2);
    } else if (match.indexOf("[") === 0) {
      match = parseInt(match.substring(1, match.length - 1));
    } else {
      throw new Error('Malformed path match: "' + match + '".');
    }
    parsedPath.push(match);
  }
  return parsedPath;
};
/**
 * Attempts to insert the given value into the given object at the given path.
 * If attempting insert a deep value, all layers to that path must already exist in the object.
 * @param {Object} object Object in which to insert the value
 * @param {String} path Path in the object to set the value - Example: ["foo"][2].bar
 * @param {Object|Array|String|Boolean|Number} value Value to insert into the object
 * @returns {Object} Object after insertion
 */
jsocrud.insert = function (object, path, value) {
  path = this.validatePath(path);
  try {
    var exists = typeof this.get(object, path) !== "undefined";
  } catch (e) {
    exists = false;
  }
  if (exists) {
    throw new Error("An entity already exists at path: " + path);
  }
  return this.set(object, path, value);
};
/**
 * Gets the value from the given object at the given path
 * @param {Object} object Object from which data is to be retrieved
 * @param {String} path Path in the object where the desired data exists - Example: ["foo"][2].bar
 * @param {Object|Array|String|Boolean|Number} defaultReturnValue *Optional* default return value if this.get() retrieves
 * undefined or an error occurs. User beware: if undefined is passed as this argument,
 * this function will act as if no default return value was set.
 * @returns {Object|Array|String|Boolean|Number} Value in the object at the specified path
 */
jsocrud.get = function (object, path, defaultReturnValue) {
  var parsedPath = this.parsePath(this.validatePath(path));
  try {
    var i;
    var currentObject = object;
    for (i = 0; i < parsedPath.length; ++i) {
      currentObject = currentObject[parsedPath[i]];
    }
    if (typeof currentObject === "undefined") {
      throw new Error("Not found");
    }
    return currentObject;
  } catch (e) {
    if (typeof defaultReturnValue === "undefined") {
      throw new Error("No entity exists in the given object at path: " + path);
    }
    return defaultReturnValue;
  }
};
/**
 * Sets the given value in the given object at the given path
 * @param {Object} object Object in which value will be set
 * @param {String} path Path in the object to set the value - Example: ["foo"][2].bar
 * @param {Object|Array|String|Boolean|Number} value Value to set in the object
 * @returns {Object} Object after setting value
 */
jsocrud.set = function (object, path, value) {
  var parsedPath = this.parsePath(this.validatePath(path));
  try {
    var i;
    var currentObject = object;
    for (i = 0; i < parsedPath.length - 1; ++i) {
      currentObject = currentObject[parsedPath[i]];
    }
    currentObject[parsedPath[i]] = value;
    return object;
  } catch (e) {
    throw new Error(
      "There was an error setting the given value at the path: " + path
    );
  }
};
/**
 * Deletes data from an object at the specified path
 * @param {Object} object Object from which data is to be deleted
 * @param {String} path Path in the object to delete - Example: ["foo"][2].bar
 * @returns {Object} Object after removal
 */
jsocrud.remove = function (object, path) {
  var parsedPath = this.parsePath(this.validatePath(path));
  try {
    var i;
    var currentObject = object;
    for (i = 0; i < parsedPath.length - 1; ++i) {
      currentObject = currentObject[parsedPath[i]];
    }
    delete currentObject[parsedPath[i]];
    return object;
  } catch (e) {
    throw new Error(
      "There was an error deleting from the given object at path: " + path
    );
  }
};
/*
// Exports ---------------------------------------------------------------------
module.exports = {
    validatePath: jsocrud.validatePath,
    parsePath: jsocrud.parsePath,
    insert: jsocrud.insert,
    get: jsocrud.get,
    set: jsocrud.set,
    remove: jsocrud.remove
};
*/

/* Set Country Language cookie */
idp.dataLayer.checkPref();
