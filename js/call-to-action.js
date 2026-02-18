$(document).ready(function () {
   const options = [
      { country: '(+93) Afghanistan', code: '+93', iso: 'AF' },
      { country: '(+355) Albania', code: '+355', iso: 'AL' },
      { country: '(+213) Algeria', code: '+213', iso: 'DZ' },
      { country: '(+1-684) American Samoa', code: '+1-684', iso: 'AS' },
      { country: '(+376) Andorra', code: '+376', iso: 'AD' },
      { country: '(+244) Angola', code: '+244', iso: 'AO' },
      { country: '(+1-264) Anguilla', code: '+1-264', iso: 'AI' },
      { country: '(+672) Antarctica', code: '+672', iso: 'AQ' },
      { country: '(+1-268) Antigua and Barbuda', code: '+1-268', iso: 'AG' },
      { country: '(+54) Argentina', code: '+54', iso: 'AR' },
      { country: '(+374) Armenia', code: '+374', iso: 'AM' },
      { country: '(+297) Aruba', code: '+297', iso: 'AW' },
      { country: '(+61) Australia', code: '+61', iso: 'AU' },
      { country: '(+43) Austria', code: '+43', iso: 'AT' },
      { country: '(+994) Azerbaijan', code: '+994', iso: 'AZ' },
      { country: '(+1-242) Bahamas', code: '+1-242', iso: 'BS' },
      { country: '(+973) Bahrain', code: '+973', iso: 'BH' },
      { country: '(+880) Bangladesh', code: '+880', iso: 'BD' },
      { country: '(+1-246) Barbados', code: '+1-246', iso: 'BB' },
      { country: '(+375) Belarus', code: '+375', iso: 'BY' },
      { country: '(+32) Belgium', code: '+32', iso: 'BE' },
      { country: '(+501) Belize', code: '+501', iso: 'BZ' },
      { country: '(+229) Benin', code: '+229', iso: 'BJ' },
      { country: '(+1-441) Bermuda', code: '+1-441', iso: 'BM' },
      { country: '(+975) Bhutan', code: '+975', iso: 'BT' },
      { country: '(+591) Bolivia', code: '+591', iso: 'BO' },
      { country: '(+387) Bosnia and Herzegovina', code: '+387', iso: 'BA' },
      { country: '(+267) Botswana', code: '+267', iso: 'BW' },
      { country: '(+55) Brazil', code: '+55', iso: 'BR' },
      { country: '(+246) British Indian Ocean Territory', code: '+246', iso: 'IO' },
      { country: '(+1-284) British Virgin Islands', code: '+1-284', iso: 'VG' },
      { country: '(+673) Brunei', code: '+673', iso: 'BN' },
      { country: '(+359) Bulgaria', code: '+359', iso: 'BG' },
      { country: '(+226) Burkina Faso', code: '+226', iso: 'BF' },
      { country: '(+257) Burundi', code: '+257', iso: 'BI' },
      { country: '(+855) Cambodia', code: '+855', iso: 'KH' },
      { country: '(+237) Cameroon', code: '+237', iso: 'CM' },
      { country: '(+1) Canada', code: '+1', iso: 'CA' },
      { country: '(+238) Cape Verde', code: '+238', iso: 'CV' },
      { country: '(+1-345) Cayman Islands', code: '+1-345', iso: 'KY' },
      { country: '(+236) Central African Republic', code: '+236', iso: 'CF' },
      { country: '(+235) Chad', code: '+235', iso: 'TD' },
      { country: '(+56) Chile', code: '+56', iso: 'CL' },
      { country: '(+86) China', code: '+86', iso: 'CN' },
      { country: '(+61) Christmas Island', code: '+61', iso: 'CX' },
      { country: '(+61) Cocos Islands', code: '+61', iso: 'CC' },
      { country: '(+57) Colombia', code: '+57', iso: 'CO' },
      { country: '(+269) Comoros', code: '+269', iso: 'KM' },
      { country: '(+682) Cook Islands', code: '+682', iso: 'CK' },
      { country: '(+506) Costa Rica', code: '+506', iso: 'CR' },
      { country: '(+385) Croatia', code: '+385', iso: 'HR' },
      { country: '(+53) Cuba', code: '+53', iso: 'CU' },
      { country: '(+599) Curacao', code: '+599', iso: 'CW' },
      { country: '(+357) Cyprus', code: '+357', iso: 'CY' },
      { country: '(+420) Czech Republic', code: '+420', iso: 'CZ' },
      {
         country: '(+243) Democratic Republic of the Congo',
         code: '+243',
         iso: 'CD'
      },
      { country: '(+45) Denmark', code: '+45', iso: 'DK' },
      { country: '(+253) Djibouti', code: '+253', iso: 'DJ' },
      { country: '(+1-767) Dominica', code: '+1-767', iso: 'DM' },
      {
         country: '(+1-809, 1-829, 1-849) Dominican Republic',
         code: '+1-809, 1-829, 1-849',
         iso: 'DO'
      },
      { country: '(+670) East Timor', code: '+670', iso: 'TL' },
      { country: '(+593) Ecuador', code: '+593', iso: 'EC' },
      { country: '(+20) Egypt', code: '+20', iso: 'EG' },
      { country: '(+503) El Salvador', code: '+503', iso: 'SV' },
      { country: '(+240) Equatorial Guinea', code: '+240', iso: 'GQ' },
      { country: '(+291) Eritrea', code: '+291', iso: 'ER' },
      { country: '(+372) Estonia', code: '+372', iso: 'EE' },
      { country: '(+251) Ethiopia', code: '+251', iso: 'ET' },
      { country: '(+500) Falkland Islands', code: '+500', iso: 'FK' },
      { country: '(+298) Faroe Islands', code: '+298', iso: 'FO' },
      { country: '(+679) Fiji', code: '+679', iso: 'FJ' },
      { country: '(+358) Finland', code: '+358', iso: 'FI' },
      { country: '(+33) France', code: '+33', iso: 'FR' },
      { country: '(+689) French Polynesia', code: '+689', iso: 'PF' },
      { country: '(+241) Gabon', code: '+241', iso: 'GA' },
      { country: '(+220) Gambia', code: '+220', iso: 'GM' },
      { country: '(+995) Georgia', code: '+995', iso: 'GE' },
      { country: '(+49) Germany', code: '+49', iso: 'DE' },
      { country: '(+233) Ghana', code: '+233', iso: 'GH' },
      { country: '(+350) Gibraltar', code: '+350', iso: 'GI' },
      { country: '(+30) Greece', code: '+30', iso: 'GR' },
      { country: '(+299) Greenland', code: '+299', iso: 'GL' },
      { country: '(+1-473) Grenada', code: '+1-473', iso: 'GD' },
      { country: '(+1-671) Guam', code: '+1-671', iso: 'GU' },
      { country: '(+502) Guatemala', code: '+502', iso: 'GT' },
      { country: '(+44-1481) Guernsey', code: '+44-1481', iso: 'GG' },
      { country: '(+224) Guinea', code: '+224', iso: 'GN' },
      { country: '(+245) Guinea-Bissau', code: '+245', iso: 'GW' },
      { country: '(+592) Guyana', code: '+592', iso: 'GY' },
      { country: '(+509) Haiti', code: '+509', iso: 'HT' },
      { country: '(+504) Honduras', code: '+504', iso: 'HN' },
      { country: '(+852) Hong Kong', code: '+852', iso: 'HK' },
      { country: '(+36) Hungary', code: '+36', iso: 'HU' },
      { country: '(+354) Iceland', code: '+354', iso: 'IS' },
      { country: '(+91) India', code: '+91', iso: 'IN' },
      { country: '(+62) Indonesia', code: '+62', iso: 'ID' },
      { country: '(+98) Iran', code: '+98', iso: 'IR' },
      { country: '(+964) Iraq', code: '+964', iso: 'IQ' },
      { country: '(+353) Ireland', code: '+353', iso: 'IE' },
      { country: '(+44-1624) Isle of Man', code: '+44-1624', iso: 'IM' },
      { country: '(+972) Israel', code: '+972', iso: 'IL' },
      { country: '(+39) Italy', code: '+39', iso: 'IT' },
      { country: '(+225) Ivory Coast', code: '+225', iso: 'CI' },
      { country: '(+1-876) Jamaica', code: '+1-876', iso: 'JM' },
      { country: '(+81) Japan', code: '+81', iso: 'JP' },
      { country: '(+44-1534) Jersey', code: '+44-1534', iso: 'JE' },
      { country: '(+962) Jordan', code: '+962', iso: 'JO' },
      { country: '(+7) Kazakhstan', code: '+7', iso: 'KZ' },
      { country: '(+254) Kenya', code: '+254', iso: 'KE' },
      { country: '(+686) Kiribati', code: '+686', iso: 'KI' },
      { country: '(+383) Kosovo', code: '+383', iso: 'XK' },
      { country: '(+965) Kuwait', code: '+965', iso: 'KW' },
      { country: '(+996) Kyrgyzstan', code: '+996', iso: 'KG' },
      { country: '(+856) Laos', code: '+856', iso: 'LA' },
      { country: '(+371) Latvia', code: '+371', iso: 'LV' },
      { country: '(+961) Lebanon', code: '+961', iso: 'LB' },
      { country: '(+266) Lesotho', code: '+266', iso: 'LS' },
      { country: '(+231) Liberia', code: '+231', iso: 'LR' },
      { country: '(+218) Libya', code: '+218', iso: 'LY' },
      { country: '(+423) Liechtenstein', code: '+423', iso: 'LI' },
      { country: '(+370) Lithuania', code: '+370', iso: 'LT' },
      { country: '(+352) Luxembourg', code: '+352', iso: 'LU' },
      { country: '(+853) Macao', code: '+853', iso: 'MO' },
      { country: '(+389) Macedonia', code: '+389', iso: 'MK' },
      { country: '(+261) Madagascar', code: '+261', iso: 'MG' },
      { country: '(+265) Malawi', code: '+265', iso: 'MW' },
      { country: '(+60) Malaysia', code: '+60', iso: 'MY' },
      { country: '(+960) Maldives', code: '+960', iso: 'MV' },
      { country: '(+223) Mali', code: '+223', iso: 'ML' },
      { country: '(+356) Malta', code: '+356', iso: 'MT' },
      { country: '(+692) Marshall Islands', code: '+692', iso: 'MH' },
      { country: '(+222) Mauritania', code: '+222', iso: 'MR' },
      { country: '(+230) Mauritius', code: '+230', iso: 'MU' },
      { country: '(+262) Mayotte', code: '+262', iso: 'YT' },
      { country: '(+52) Mexico', code: '+52', iso: 'MX' },
      { country: '(+691) Micronesia', code: '+691', iso: 'FM' },
      { country: '(+373) Moldova', code: '+373', iso: 'MD' },
      { country: '(+377) Monaco', code: '+377', iso: 'MC' },
      { country: '(+976) Mongolia', code: '+976', iso: 'MN' },
      { country: '(+382) Montenegro', code: '+382', iso: 'ME' },
      { country: '(+1-664) Montserrat', code: '+1-664', iso: 'MS' },
      { country: '(+212) Morocco', code: '+212', iso: 'MA' },
      { country: '(+258) Mozambique', code: '+258', iso: 'MZ' },
      { country: '(+95) Myanmar', code: '+95', iso: 'MM' },
      { country: '(+264) Namibia', code: '+264', iso: 'NA' },
      { country: '(+674) Nauru', code: '+674', iso: 'NR' },
      { country: '(+977) Nepal', code: '+977', iso: 'NP' },
      { country: '(+31) Netherlands', code: '+31', iso: 'NL' },
      { country: '(+599) Netherlands Antilles', code: '+599', iso: 'AN' },
      { country: '(+687) New Caledonia', code: '+687', iso: 'NC' },
      { country: '(+64) New Zealand', code: '+64', iso: 'NZ' },
      { country: '(+505) Nicaragua', code: '+505', iso: 'NI' },
      { country: '(+227) Niger', code: '+227', iso: 'NE' },
      { country: '(+234) Nigeria', code: '+234', iso: 'NG' },
      { country: '(+683) Niue', code: '+683', iso: 'NU' },
      { country: '(+850) North Korea', code: '+850', iso: 'KP' },
      { country: '(+1-670) Northern Mariana Islands', code: '+1-670', iso: 'MP' },
      { country: '(+47) Norway', code: '+47', iso: 'NO' },
      { country: '(+968) Oman', code: '+968', iso: 'OM' },
      { country: '(+92) Pakistan', code: '+92', iso: 'PK' },
      { country: '(+680) Palau', code: '+680', iso: 'PW' },
      { country: '(+970) Palestine', code: '+970', iso: 'PS' },
      { country: '(+507) Panama', code: '+507', iso: 'PA' },
      { country: '(+675) Papua New Guinea', code: '+675', iso: 'PG' },
      { country: '(+595) Paraguay', code: '+595', iso: 'PY' },
      { country: '(+51) Peru', code: '+51', iso: 'PE' },
      { country: '(+63) Philippines', code: '+63', iso: 'PH' },
      { country: '(+64) Pitcairn', code: '+64', iso: 'PN' },
      { country: '(+48) Poland', code: '+48', iso: 'PL' },
      { country: '(+351) Portugal', code: '+351', iso: 'PT' },
      { country: '(+1-787, 1-939) Puerto Rico', code: '+1-787, 1-939', iso: 'PR' },
      { country: '(+974) Qatar', code: '+974', iso: 'QA' },
      { country: '(+242) Republic of the Congo', code: '+242', iso: 'CG' },
      { country: '(+262) Reunion', code: '+262', iso: 'RE' },
      { country: '(+40) Romania', code: '+40', iso: 'RO' },
      { country: '(+7) Russia', code: '+7', iso: 'RU' },
      { country: '(+250) Rwanda', code: '+250', iso: 'RW' },
      { country: '(+590) Saint Barthelemy', code: '+590', iso: 'BL' },
      { country: '(+290) Saint Helena', code: '+290', iso: 'SH' },
      { country: '(+1-869) Saint Kitts and Nevis', code: '+1-869', iso: 'KN' },
      { country: '(+1-758) Saint Lucia', code: '+1-758', iso: 'LC' },
      { country: '(+590) Saint Martin', code: '+590', iso: 'MF' },
      { country: '(+508) Saint Pierre and Miquelon', code: '+508', iso: 'PM' },
      {
         country: '(+1-784) Saint Vincent and the Grenadines',
         code: '+1-784',
         iso: 'VC'
      },
      { country: '(+685) Samoa', code: '+685', iso: 'WS' },
      { country: '(+378) San Marino', code: '+378', iso: 'SM' },
      { country: '(+239) Sao Tome and Principe', code: '+239', iso: 'ST' },
      { country: '(+966) Saudi Arabia', code: '+966', iso: 'SA' },
      { country: '(+221) Senegal', code: '+221', iso: 'SN' },
      { country: '(+381) Serbia', code: '+381', iso: 'RS' },
      { country: '(+248) Seychelles', code: '+248', iso: 'SC' },
      { country: '(+232) Sierra Leone', code: '+232', iso: 'SL' },
      { country: '(+65) Singapore', code: '+65', iso: 'SG' },
      { country: '(+1-721) Sint Maarten', code: '+1-721', iso: 'SX' },
      { country: '(+421) Slovakia', code: '+421', iso: 'SK' },
      { country: '(+386) Slovenia', code: '+386', iso: 'SI' },
      { country: '(+677) Solomon Islands', code: '+677', iso: 'SB' },
      { country: '(+252) Somalia', code: '+252', iso: 'SO' },
      { country: '(+27) South Africa', code: '+27', iso: 'ZA' },
      { country: '(+82) South Korea', code: '+82', iso: 'KR' },
      { country: '(+211) South Sudan', code: '+211', iso: 'SS' },
      { country: '(+34) Spain', code: '+34', iso: 'ES' },
      { country: '(+94) Sri Lanka', code: '+94', iso: 'LK' },
      { country: '(+249) Sudan', code: '+249', iso: 'SD' },
      { country: '(+597) Suriname', code: '+597', iso: 'SR' },
      { country: '(+47) Svalbard and Jan Mayen', code: '+47', iso: 'SJ' },
      { country: '(+268) Swaziland', code: '+268', iso: 'SZ' },
      { country: '(+46) Sweden', code: '+46', iso: 'SE' },
      { country: '(+41) Switzerland', code: '+41', iso: 'CH' },
      { country: '(+963) Syria', code: '+963', iso: 'SY' },
      { country: '(+886) Taiwan', code: '+886', iso: 'TW' },
      { country: '(+992) Tajikistan', code: '+992', iso: 'TJ' },
      { country: '(+255) Tanzania', code: '+255', iso: 'TZ' },
      { country: '(+66) Thailand', code: '+66', iso: 'TH' },
      { country: '(+228) Togo', code: '+228', iso: 'TG' },
      { country: '(+690) Tokelau', code: '+690', iso: 'TK' },
      { country: '(+676) Tonga', code: '+676', iso: 'TO' },
      { country: '(+1-868) Trinidad and Tobago', code: '+1-868', iso: 'TT' },
      { country: '(+216) Tunisia', code: '+216', iso: 'TN' },
      { country: '(+90) Turkey', code: '+90', iso: 'TR' },
      { country: '(+993) Turkmenistan', code: '+993', iso: 'TM' },
      { country: '(+1-649) Turks and Caicos Islands', code: '+1-649', iso: 'TC' },
      { country: '(+688) Tuvalu', code: '+688', iso: 'TV' },
      { country: '(+1-340) U.S. Virgin Islands', code: '+1-340', iso: 'VI' },
      { country: '(+256) Uganda', code: '+256', iso: 'UG' },
      { country: '(+380) Ukraine', code: '+380', iso: 'UA' },
      { country: '(+971) United Arab Emirates', code: '+971', iso: 'AE' },
      { country: '(+44) United Kingdom', code: '+44', iso: 'GB' },
      { country: '(+1) United States', code: '+1', iso: 'US' },
      { country: '(+598) Uruguay', code: '+598', iso: 'UY' },
      { country: '(+998) Uzbekistan', code: '+998', iso: 'UZ' },
      { country: '(+678) Vanuatu', code: '+678', iso: 'VU' },
      { country: '(+379) Vatican', code: '+379', iso: 'VA' },
      { country: '(+58) Venezuela', code: '+58', iso: 'VE' },
      { country: '(+84) Vietnam', code: '+84', iso: 'VN' },
      { country: '(+681) Wallis and Futuna', code: '+681', iso: 'WF' },
      { country: '(+212) Western Sahara', code: '+212', iso: 'EH' },
      { country: '(+967) Yemen', code: '+967', iso: 'YE' },
      { country: '(+260) Zambia', code: '+260', iso: 'ZM' },
      { country: '(+263) Zimbabwe', code: '+263', iso: 'ZW' }
   ];

   var select = $('#mySelect');

   if ($('#aboutMeId-12').find('.theme-ttl').length == 0) {
      const value = $('.aboutme').find('div').attr('data-value');
      var dynamicHTML = `
      <div class='about-dtl'>
         <p>${value}</p>
      </div>`;
      $('#aboutMeId-12').append(dynamicHTML);
   }
   // window.history.pushState({ id: 1 }, null, '?q=about');

   // Loop through the options array and append options to the select element
   $.each(options, function (index, option) {
      select.append(
         $('<option>', {
            value: option.code,
            text: option.country
         })
      );
   });
   select.val('+91');
   /**
    * save contact func with api call
    */
   $('.SaveContact').click((event) => {
      debugger;
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      console.log('qpiId >>', qpiId);
      itemViewCount({ qpiId });
      $.ajax({
         url: `${apiUrl}/byte-qr-nfc/public/api/v1/save-contact?pageUuid=${$(event.currentTarget)
            .find('div')
            .attr('id')}&qpiId=${qpiId}`,
         method: 'GET',
         //  data: { pageUuid: $(event.currentTarget).find('div').attr('id') },
         dataType: 'text',
         success: function (response, status, xhr) {
            let filename = '';
            let disposition = xhr.getResponseHeader('Content-Disposition');
            if (disposition && disposition.indexOf('filename') !== -1) {
               let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
               let matches = filenameRegex.exec(disposition);
               if (matches !== null && matches[1]) {
                  filename = matches[1].replace(/['"]/g, '');
               }
            }
            // Create a temporary anchor element to initiate the file download
            let downloadLink = document.createElement('a');
            downloadLink.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(response);
            downloadLink.download = filename || 'your.vcf';
            downloadLink.style.display = 'none';

            // Append the anchor element to the document body and trigger the download
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // Clean up the temporary anchor element
            document.body.removeChild(downloadLink);
         },
         error: function (error) {
            // Handle any errors that occur during the AJAX call
            console.error(error);
         }
      });
   });

   /**
    * all icons redirection func
    */

   const itemViewCount = async ({ qpiId }) => {
      let formData = {
         orgId,
         pageId,
         qpiId
      };
      await $.ajax({
         url: `${apiUrl}/byte-qr-nfc/public/api/v1/activity/itemView`,
         method: 'POST',
         type: 'POST',
         data: JSON.stringify(formData),
         contentType: 'application/json',
         success: await function (response, status, xhr) {
            console.error('response >>', response);
         },
         error: function (error) {
            // Handle any errors that occur during the AJAX call
            console.error(error);
         }
      });
   };

   $('.hyperLink').click(async (event) => {
      // whats app number slipt
      if ($(event.currentTarget).find('div').attr('data-') != null) {
         var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
         let phoneNumber = $(event.currentTarget).find('div').attr('data-value').replace(/\s/g, '');
         let type = $(event.currentTarget).find('div').attr('data-action');
         let hayperLink = $(event.currentTarget).find('div').attr('data-');
         const url = `${hayperLink}${phoneNumber}`;
         if (type === 'download') {
            window.open(url);
         } else if (type === 'WhatsApp' || type === 'email' || type === 'call') {
            // window.open(url);
            window.location.href = url;
         } else {
            window.open(url);
         }
         await itemViewCount({ qpiId });
      }
   });

   /**
    * social items function
    */
   $('.Url').click(async (event) => {
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      let socoalRedirect = $(event.currentTarget).find('div').attr('data-value');
      let type = $(event.currentTarget).find('div').attr('data-action');

      // Fix: If it's the specific Website button pointing to our local file
      if (socoalRedirect && socoalRedirect.trim() === 'website.html') {
         window.location.href = socoalRedirect;
         return;
      }

      const url = `${socoalRedirect}`;
      if (type === 'download') {
         window.open(url);
      } else if (type === 'WhatsApp' || type === 'email' || type === 'call') {
         // window.open(url);
         window.location.href = url;
      } else {
         window.open(url);
      }
      await itemViewCount({ qpiId });
   });

   // $('.hyperLink').click((event) => {
   //
   //    if ($(event.currentTarget).find('div').attr('data-') != null) {
   //       var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
   // itemViewCount({ qpiId });
   //       let socoalRedirect = $(event.currentTarget).find('div').attr('data-value').replace(/\s/g, '');
   //       let type = $(event.currentTarget).find('div').attr('data-action');
   //       let hayperLink = $(event.currentTarget).find('div').attr('data-');
   //       const url = `${hayperLink}${socoalRedirect}`;
   //       if (type === 'download') {
   //          window.open(url);
   //       } else {
   //          window.location.href = url;
   //       }
   //    }
   // });

   /**
    * gallery popup
    */

   $('.gallery').click((event) => {
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      itemViewCount({ qpiId });
      $('body').addClass('overflow-hidden active');
      $('#gallery').addClass('active');
      if ($('.model-image').find('.slick-list').length == 0) {
         const images = $(event.currentTarget).find('div').attr('data-value');
         JSON.parse(images).map((img) => {
            let newDiv = `
         <div class='modal-item'>
           <img src='${bktUrl}${img.url}' class='img-fluid' alt='blog-5' />
         </div>
       `;
            $('.model-image').append(newDiv);
            setTimeout(function () {
               $('.model-image').slick({
                  arrows: true,
                  autoplay: true
               });
            }, 100);
            // $('.modal-slider').slick({
            //    slidesToShow: 1,
            //    slidesToScroll: 1,
            //    arrows: false,
            //    autoplay: true
            // });
         });
      }
      window.history.pushState({ id: 1 }, null, '?q=gallery');
   });

   const YoutubeUrl = (uri) => {
      let k = uri.split('/');
      let id = 0;
      if (k[2] === 'www.youtube.com' && k[3] === 'shorts') {
         let link = uri.split('shorts/')[1];
         id = link;
      } else if (k[2] === 'www.youtube.com') {
         let link = uri.split('&');
         let splitId = link[0]?.split('v=');
         id = splitId[1];
      } else if (k[2] === 'youtu.be') {
         let link = uri.split('youtu.be/');
         id = link[1];
      } else if (k[3] === 'shorts') {
         let link = uri.split('shorts/')[1].split('?')[0];
         id = link;
      }
      return id;
   };

   $('.video').click((event) => {
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      itemViewCount({ qpiId });
      $('body').addClass('overflow-hidden active');
      $('#video').addClass('active');
      if ($('.model-video').find('.slick-list').length == 0) {
         const videos = $(event.currentTarget).find('div').attr('data-value');
         JSON.parse(videos).map((video) => {
            let id = YoutubeUrl(video.url);
            let newDiv = `
         <div class='modal-item d-flex justify-content-center  align-items-center flex-column '>
         <div class='d-flex justify-content-center mb-3 '>
         <iframe
              width="560"
              height="315"
              src='https://www.youtube.com/embed/${id}'
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class='bg-white'
            ></iframe>
            </div>
            <div class='d-flex justify-content-center flex-column  '>
            <h3 class='text-white mb-3 '>${video.name}</h3>
            <p class='text-white '>${video.discription}</p>
            </div>
         </div>
       
       `;
            // alert(newDiv);
            $('.model-video').append(newDiv);
            setTimeout(function () {
               $('.model-video').slick({
                  arrows: true,
                  autoplay: false
               });
            }, 100);
            // parentElement.append(newDiv);
         });
      }
      window.history.pushState({ id: 1 }, null, '?q=video');
   });

   /**
    * qr code popup open
    */

   $('.qrCode').click(function (event) {
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      itemViewCount({ qpiId });
      $('body').addClass('overflow-hidden active');
      $('#qrCodeId').addClass('active');
      window.history.pushState({ id: 1 }, null, '?q=qr');
   });

   /**
    * qr code popup open
    */

   $('.share').click(function (event) {
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      itemViewCount({ qpiId });
      $('body').addClass('overflow-hidden active');
      $('#shareId').addClass('active');
      window.history.pushState({ id: 1 }, null, '?q=share');
   });

   /**
    * about me popup open
    */

   $('.aboutme').click(function (event) {
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      itemViewCount({ qpiId });
      // window.location.href = url;
      $('.about-wrapper').addClass('active');
      if ($('#aboutMeId').find('.theme-ttl').length == 0) {
         const images = $(event.currentTarget).find('img').attr('id');
         const value = $(event.currentTarget).find('div').attr('data-value');
         const name = $(event.currentTarget).find('p');
         var dynamicHTML = ` <h4 class='theme-ttl'>${name.prevObject[0].innerText}</h4>
         <div class='profile'>
            <img src=${images} class='img-fluid' alt='avtar' />
         </div>
         <div class='about-dtl'>
            <p>${value}</p>
         </div>`;
         $('#aboutMeId').append(dynamicHTML);
      }
      window.history.pushState({ id: 1 }, null, '?q=about');
   });

   $('#shareBtn').click(function () {
      FB.ui(
         {
            method: 'share',
            quote: 'Your message goes here!',
            href: 'https://www.example.com'
         },
         function (response) { }
      );
   });

   $('#mobileInquary').on('input', function () {
      var inputValue = $(this).val();
      // Remove non-numeric characters
      inputValue = inputValue.replace(/\D/g, '');

      if (inputValue.length > 10) {
         // If the input is longer than 10 digits, trim it
         inputValue = inputValue.substring(0, 10);
      }

      $(this).val(inputValue);
   });

   const handleSubmitInquiry = () => {
      let formData;
      if (brockerId) {
         formData = {
            name: $('#nameInquary').val(),
            mobile: $('#mobileInquary').val(),
            email: $('#emailInquary').val(),
            subject: $('#subjectInquary').val(),
            message: $('#messageInquary').val(),
            pageId: pageId,
            pageUuid: pageUuid,
            orgId: orgId,
            brokerId: brockerId,
            inquiryType: 1
         };
      } else {
         formData = {
            name: $('#nameInquary').val(),
            mobile: $('#mobileInquary').val(),
            email: $('#emailInquary').val(),
            subject: $('#subjectInquary').val(),
            message: $('#messageInquary').val(),
            pageId: pageId,
            pageUuid: pageUuid,
            orgId: orgId,
            inquiryType: 1
         };
      }
      $.ajax({
         url: `${apiUrl}/byte-qr-nfc/public/api/v1/organization/qrPageInquiry`,
         type: 'POST',
         data: JSON.stringify(formData),
         contentType: 'application/json',
         success: function (response) {
            $('#nameInquary').val('');
            $('#mobileInquary').val('');
            $('#emailInquary').val('');
            $('#subjectInquary').val('');
            $('#messageInquary').val('');
            alert(response.message);
            $('.oprnInquary').removeClass('active');
         },
         error: function (xhr) {
            alert(xhr.responseJSON.message);
         }
      });
   };

   // $('.inquiry').click(function (event) {
   //    var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
   //    itemViewCount({ qpiId });
   //    $('.oprnInquary').addClass('active');
   //    $('#myForm').submit(function (event) {
   //       event.preventDefault();
   //       handleSubmitInquiry();
   //    });
   //    window.history.pushState({ id: 1 }, null, '?q=MI');
   // });

   $('.inquiry').click(function (event) {
      var qpiId = $(event.currentTarget).find('div').attr('data-qpiid');
      itemViewCount({ qpiId });
      $('.oprnInquary').addClass('active');
      // Prevent duplicate binding
      $('#myForm')
         .off('submit')
         .on('submit', function (event) {
            event.preventDefault();
            handleSubmitInquiry();
         });
      window.history.pushState({ id: 1 }, null, '?q=MI');
   });

   $('#myInquiryForm').submit(function (event) {
      event.preventDefault();
      handleSubmitInquiry();
   });

   /**
    * default dailog open
    */

   if (isDaislog == 'true') {
      $('body').addClass('overflow-hidden active');
      $('#defaultPopup').addClass('active');
      $('#myFormDefault').submit(function (event) {
         event.preventDefault(); // Prevent form submission
         let formData;
         if (brockerId) {
            formData = {
               name: $('#name').val(),
               mobile: $('#mobile').val(),
               email: $('#email').val(),
               subject: $('#subject').val(),
               message: $('#message').val(),
               pageId: pageId,
               pageUuid: pageUuid,
               orgId: orgId,
               brokerId: brockerId,
               inquiryType: 2
            };
         } else {
            formData = {
               name: $('#name').val(),
               mobile: $('#mobile').val(),
               email: $('#email').val(),
               subject: $('#subject').val(),
               message: $('#message').val(),
               pageId: pageId,
               pageUuid: pageUuid,
               orgId: orgId,
               inquiryType: 2
            };
         }
         $.ajax({
            url: `${apiUrl}/byte-qr-nfc/public/api/v1/organization/qrPageInquiry`, // Replace with your API endpoint
            type: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function (response) {
               $('#name').val('');
               $('#mobile').val('');
               $('#email').val('');
               $('#subject').val('');
               $('#message').val('');
               alert(response.message);
               $('body').removeClass('overflow-hidden active');
               $('#defaultPopup').removeClass('active');
            },
            error: function (xhr) {
               // Handle error response
               alert(xhr.responseJSON.message);
            }
         });
      });
   }
   $('.close').click(function (event) {
      event.preventDefault();
      $('body').removeClass('overflow-hidden active');
      $('#defaultPopup').removeClass('active');
   });

   $('.click').click((event) => {
      let socoalRedirect = $(event.currentTarget).find('div').attr('data-value');
      const urlCreate = window.location.href.split('/');
      if (urlCreate[5] != '-' && urlCreate[5] && urlCreate[6]) {
         window.location.href =
            urlCreate[0] +
            '//' +
            urlCreate[2] +
            '/' +
            urlCreate[3] +
            '/' +
            socoalRedirect +
            '/' +
            urlCreate[5] +
            '/' +
            urlCreate[6];
      } else if (urlCreate[5] != '-') {
         window.location.href =
            urlCreate[0] + '//' + urlCreate[2] + '/' + urlCreate[3] + '/' + socoalRedirect + '/' + urlCreate[5];
      } else {
         window.location.href = urlCreate[0] + '//' + urlCreate[2] + '/' + urlCreate[3] + '/' + socoalRedirect;
      }
   });
});

$('#searchInput').on('input', function () {
   var searchValue = $(this).val().toLowerCase();
   $('#myList p').hide();
   $('#myList p')
      .filter(function () {
         return $(this).text().toLowerCase().indexOf(searchValue) > -1;
      })
      .show();
});
