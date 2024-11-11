TMS.bindDOMLoaded(function(){var Bootstrapper=window["TMS"];var ensightenOptions=TMS.ensightenOptions;setTimeout(function(){if(!Bootstrapper.ensCookieUtils.get("dtPCB")){if(typeof quantumMetric!=="undefined"&&quantumMetric.addImpression)quantumMetric.addImpression("Privacy Banner");var isTripSupportPage=/\/virtual-assist\/.*\/trip-support/.test(window.location.pathname);var privacyPolicyLink=$(".footernav-cookies-privacy-security").attr("href")||"/en_US/privacy-and-security";var bannerCopy="Delta and third parties collect data as necessary to provide this website and for enhanced functionality, analytics and marketing, as outlined in Delta's ";
$("body").append(`
          <ngc-cookie-banner class="fresh-air ${isTripSupportPage?"trip-support-style":""}">
            <div class="privBanner cookie-footer cookie-footer-container text-left ng-star-inserted" style="border-top: rgba(0,0,0,.05) solid;">
              <div class="container outer-cookie-container">
                <div class="row cookie-row">
                  <div class="col-11 p-0 cookie-desc-container" role="alert" tabindex="0" style="">
                    <div class="alert-cookie-details">
                      <div class="cookie-desc cookie-display-block">
                        <p class="mb-0 cookie-banner-content">
                          ${bannerCopy}
                          <a class="privPolicy" href="${privacyPolicyLink}">Privacy Policy.</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="close-cookie col-1 pr-0 pl-0" style="">
                    <button class="btn btn-secondary-cta" role="button" style="">I UNDERSTAND</button>
                  </div>
                </div>
              </div>
            </div>
          </ngc-cookie-banner>
        `);var generalStyles=`
          <style>
            footer > ngc-cookie-banner {
              display: none;
            }
            .fresh-air .container {
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto
            }
  
            @media (min-width: 375px) {
                .fresh-air .container {
                    max-width:375px;
                }
            }
  
            @media (min-width: 768px) {
                .fresh-air .container {
                    max-width:730px
                }
            }
  
            @media (min-width: 992px) {
                .fresh-air .container {
                    max-width:976px
                }
            }
  
            @media (min-width: 1200px) {
                .fresh-air .container {
                    max-width:1140px
                }
            }
  
            @media (min-width: 1440px) {
                .fresh-air .container {
                    max-width:1156px;
                }
            }
  
            @media (min-width: 1600px) {
                .fresh-air .container {
                    max-width:1180px;
                }
            }
            .privBanner .col-1 {
              width: 100%;
              max-width: 19.3%;
              flex: 0 0 19.3%;
              padding-top: 0px!important;
            }
            .privBanner .col-11 {
              max-width: 80.6%;
              flex: 0 0 80.6%;
            }
            
            .privBanner .btn-secondary-cta {
              cursor: pointer;
              padding: 0.375rem 0.75rem;
              border-color: #0b1f66!important;
              color: #0b1f66!important; /* Added '#' to the color code */
              height: 50px;
            }
            
            .privBanner .btn-secondary-cta:hover {
              background-color: #0b1f66; 
              color: white!important;
            }
            
            @media only screen and (max-width: 992px) {
              .privBanner .col-1 {
                flex: 0 0 100%;
                max-width: 100%;
                width: 100%;
                padding-top: 20px!important;
              }
              .privBanner .col-11 {
                flex: 0 0 100%;
                max-width: 100%;
                width: 100%;
              }
              .privBanner .btn-secondary-cta {
                width: 100%;
              }
            }
          </style>
        `;var tripSupportStyles=`
          <style>
            /* Specific styles for virtual-assist/trip-support page */
            ngc-cookie-banner.trip-support-style {
              position: fixed;
               bottom: 0px;
               width: 100%;
            }
            .trip-support-style .privBanner {
              background-color: #fff; 
              padding: 10px;
            }
            .trip-support-style .privPolicy {
              color: rgb(45, 79, 141);
              text-decoration: none;
              font-family: 'Whitney-Semibold';
            }
            .trip-support-style .cookie-banner-content {
              font-family: 'Whitney-Book';
            }
            .trip-support-style .btn-secondary-cta {
            margin-top: -5px;
              background-color: white;
              border-style: solid;
              border-width: 2px;
              font-family: 'Whitney-Semibold';
              font-size: 16px;
              letter-spacing: 1.8px;
            }
            .trip-support-style .btn-secondary-cta:hover {
              color: #fff !important;
              background-color: #0b1f66 !important;
            }
          </style>
        `;$("body").append(generalStyles);if(isTripSupportPage)$("body").append(tripSupportStyles);if(window.s&&$(".privBanner").length<2){s.clearVars();s.linkTrackVars="prop1,events";s.linkTrackEvents="events,event253";s.events="event253";s.prop1="Domestic Consent Banner Presented";s.tl(this,"o",s.prop1)}else if(window.webSDK&&$(".privBanner").length<2){webSDK.linkTrackVars="prop1,events";webSDK.linkTrackEvents="events,event253";webSDK.events="event253";webSDK.prop1="Domestic Consent Banner Presented";
webSDK.sendEvent(this,"o",webSDK.prop1)}$(".privBanner button").on("click",function(){if(window.s){s.clearVars();s.linkTrackVars="prop1,events,eVar171";s.linkTrackEvents="events,event254";s.eVar171="Domestic Opt-In";s.events="event254";s.prop1="Domestic Consent Banner Preferences Saved";s.tl(this,"o",s.prop1)}else if(window.webSDK){webSDK.linkTrackVars="prop1,events,eVar171";webSDK.linkTrackEvents="events,event254";webSDK.eVar171="Domestic Opt-In";webSDK.events="event254";webSDK.prop1="Domestic Consent Banner Preferences Saved";
webSDK.sendEvent(this,"o",webSDK.prop1)}$(".privBanner").parent().remove();Bootstrapper.ensCookieUtils.create("dtPCB",true,90)});$(".privBanner .privPolicy").on("click",function(){if(window.s){s.clearVars();s.linkTrackVars="prop1";s.prop1="Domestic Consent Banner Privacy Policy clicked";s.tl(this,"o",s.prop1)}else if(window.webSDK){webSDK.linkTrackVars="prop1";webSDK.prop1="Domestic Consent Banner Privacy Policy clicked";webSDK.sendEvent(this,"o",webSDK.prop1)}$(".privBanner").parent().remove();Bootstrapper.ensCookieUtils.create("dtPCB",
true,90)})}},1500)},4096995,750673);