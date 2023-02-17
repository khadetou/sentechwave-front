import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import SlideDown from "react-slidedown";
import { toast } from "react-toastify";
import { useCart, Item, Metadata } from "react-use-cart";
import { login } from "redux/auth/authSlice";
import { createOrder, reset } from "redux/order/orderSlice";

const MainCheckout = () => {
  // OPTIONS
  const options = [
    { value: "10000", label: "Dakar" },
    { value: "15000", label: "Kedougou" },
    { value: "200000", label: "Ziguinchor" },
    { value: "5000", label: "Kaolack" },
    { value: "7000", label: "Tamba" },
    { value: "8500", label: "Matam" },
    { value: "6000", label: "Podor" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "PW", label: "Belau" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BQ", label: "Bonaire, Saint Eustatius and Saba" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BV", label: "Bouvet Island" },
    { value: "BR", label: "Brazil" },
    { value: "IO", label: "British Indian Ocean Territory" },
    { value: "VG", label: "British Virgin Islands" },
    { value: "BN", label: "Brunei" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CV", label: "Cape Verde" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" },
    { value: "CC", label: "Cocos (Keeling) Islands" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo (Brazzaville)" },
    { value: "CD", label: "Congo (Kinshasa)" },
    { value: "CK", label: "Cook Islands" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CW", label: "CuraÇao" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FK", label: "Falkland Islands" },
    { value: "FO", label: "Faroe Islands" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GF", label: "French Guiana" },
    { value: "PF", label: "French Polynesia" },
    { value: "TF", label: "French Southern Territories" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GR", label: "Greece" },
    { value: "GL", label: "Greenland" },
    { value: "GD", label: "Grenada" },
    { value: "GP", label: "Guadeloupe" },
    { value: "GT", label: "Guatemala" },
    { value: "GG", label: "Guernsey" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HM", label: "Heard Island and McDonald Islands" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IM", label: "Isle of Man" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "CI", label: "Ivory Coast" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JE", label: "Jersey" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macao S.A.R., China" },
    { value: "MK", label: "Macedonia" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MS", label: "Montserrat" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "AN", label: "Netherlands Antilles" },
    { value: "NC", label: "New Caledonia" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "NF", label: "Norfolk Island" },
    { value: "KP", label: "North Korea" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PS", label: "Palestinian Territory" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PN", label: "Pitcairn" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "IE", label: "Republic of Ireland" },
    { value: "RE", label: "Reunion" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "ST", label: "São Tomé and Príncipe" },
    { value: "BL", label: "Saint Barthélemy" },
    { value: "SH", label: "Saint Helena" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "SX", label: "Saint Martin (Dutch part)" },
    { value: "MF", label: "Saint Martin (French part)" },
    { value: "PM", label: "Saint Pierre and Miquelon" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "SM", label: "San Marino" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "GS", label: "South GeorgiaSandwich Islands" },
    { value: "KR", label: "South Korea" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SJ", label: "Svalbard and Jan Mayen" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks and Caicos Islands" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom (UK)" },
    { value: "US", label: "USA (US)" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VA", label: "Vatican" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "WF", label: "Wallis and Futuna" },
    { value: "EH", label: "Western Sahara" },
    { value: "WS", label: "Western Samoa" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];
  const options1 = [
    { value: "", label: "United Kingdom" },
    { value: "AX", label: "Aland Islands" },
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "PW", label: "Belau" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BQ", label: "Bonaire, Saint Eustatius and Saba" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BV", label: "Bouvet Island" },
    { value: "BR", label: "Brazil" },
    { value: "IO", label: "British Indian Ocean Territory" },
    { value: "VG", label: "British Virgin Islands" },
    { value: "BN", label: "Brunei" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CV", label: "Cape Verde" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" },
    { value: "CC", label: "Cocos (Keeling) Islands" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo (Brazzaville)" },
    { value: "CD", label: "Congo (Kinshasa)" },
    { value: "CK", label: "Cook Islands" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CW", label: "CuraÇao" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FK", label: "Falkland Islands" },
    { value: "FO", label: "Faroe Islands" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GF", label: "French Guiana" },
    { value: "PF", label: "French Polynesia" },
    { value: "TF", label: "French Southern Territories" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GR", label: "Greece" },
    { value: "GL", label: "Greenland" },
    { value: "GD", label: "Grenada" },
    { value: "GP", label: "Guadeloupe" },
    { value: "GT", label: "Guatemala" },
    { value: "GG", label: "Guernsey" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HM", label: "Heard Island and McDonald Islands" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IM", label: "Isle of Man" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "CI", label: "Ivory Coast" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JE", label: "Jersey" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macao S.A.R., China" },
    { value: "MK", label: "Macedonia" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MS", label: "Montserrat" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "AN", label: "Netherlands Antilles" },
    { value: "NC", label: "New Caledonia" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "NF", label: "Norfolk Island" },
    { value: "KP", label: "North Korea" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PS", label: "Palestinian Territory" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PN", label: "Pitcairn" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "IE", label: "Republic of Ireland" },
    { value: "RE", label: "Reunion" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "ST", label: "São Tomé and Príncipe" },
    { value: "BL", label: "Saint Barthélemy" },
    { value: "SH", label: "Saint Helena" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "SX", label: "Saint Martin (Dutch part)" },
    { value: "MF", label: "Saint Martin (French part)" },
    { value: "PM", label: "Saint Pierre and Miquelon" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "SM", label: "San Marino" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "GS", label: "South GeorgiaSandwich Islands" },
    { value: "KR", label: "South Korea" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SJ", label: "Svalbard and Jan Mayen" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks and Caicos Islands" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom (UK)" },
    { value: "US", label: "USA (US)" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VA", label: "Vatican" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "WF", label: "Wallis and Futuna" },
    { value: "EH", label: "Western Sahara" },
    { value: "WS", label: "Western Samoa" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  //   REACT SELECT STYLING
  const selectStyles: StylesConfig<any, false> = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      marginBottom: 15,
      boxShadow: "none !important",
      border: "1px solid #BCE3C9 !important",
      borderRadius: "5px",
    }),
    input: (base) => ({
      width: "100%",
      height: "40px",
      border: "none",
      input: {
        height: "100%",
        paddingLeft: "20px !important",
      },
    }),
    container: (base) => ({
      ...base,
      padding: "15px",
      borderRadius: "5px",
      minWidth: "220px",
      height: "286px",
      backgroundColor: "#fff",
      borderTop: "none",
      borderBottom: "1px solid #ececec",
      borderLeft: "1px solid #ececec",
      borderRight: "1px solid #ececec",
    }),
    valueContainer: (base) => ({
      width: "100%",
      height: "100%",
    }),
    menu: (base) => ({
      ...base,
      width: "100%",
      margin: 0,
      position: "static",
      border: "none",
      boxShadow: "none",
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px",
      "&::-webkit-scrollbar": {
        width: " 0.375rem",
        height: "0.375rem",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "100vh",
        backgroundColor: "#f4f4f4",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#d1d1d1",
        borderRadius: "100vh",
        border: "3px solid #d1d1d1",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#ececec" : "transparent",
      color: state.isSelected ? "#7e7e7e" : "#7e7e7e",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ececec" : "#9ddbc9",
      },
    }),
    placeholder: (base) => ({
      display: "none",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),
  };

  const [value, setValue] = useState<any>("United Kingdom");
  const [value1, setValue1] = useState<any>("United Kingdom");
  const [checkbox, setCheckbox] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const onSelectChange = (value: any) => {
    setIsOpen(!isOpen);
    setShippingPrice(value.value);
    setRegion(value.label);
  };
  const onSelectChange1 = (value: any) => {
    setIsOpen1(!isOpen1);
    setValue1(value.label);
  };

  const [total, setTotal] = useState(0);
  const [metaDatas, setMetaDatas] = useState<Metadata>({});
  const [Items, setItems] = useState<Item[]>([]);
  const { items, cartTotal, setCartMetadata, metadata, totalItems, emptyCart } =
    useCart();
  const [totalItem, setTotalItem] = useState(0);
  const [region, setRegion] = useState("");
  const [ville, setVille] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [note, setNote] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(false);

  const dispatch = useAppDispatch();
  const { isSuccess, isError, message, isLoading, order } = useAppSelector(
    (store) => store.order
  );
  const { push } = useRouter();

  useEffect(() => {
    setTotal(cartTotal);
    setItems(items);
    setMetaDatas(metadata!);
    setTotalItem(totalItems);
    if (metadata && Object.keys(metadata!).length !== 0) {
      setRegion(metaDatas.region);
      setVille(metaDatas.ville);
      setShippingPrice(metaDatas.price);
      setAddress(metaDatas.address);
      setFirstname(metaDatas.firstname);
      setLastname(metaDatas.lastname);
      setShippingPrice(metaDatas.shippingPrice);
      setPhone(metaDatas.phone);
      setNote(metaDatas.note);
      setDeliveryMode(metaDatas.deliveryMode);
      setPaymentMode(metaDatas.paymentMode);
      setEmail(metaDatas.email);
    }
    if (isSuccess) {
      toast.success("Votre commande a été éffectuer avec succès!");
      emptyCart();
      dispatch(reset());
      push(`/dashboard`);
    }
    if (isError) {
      if (message.message !== "undefined" && Array.isArray(message.message)) {
        if (message.message.length > 0) {
          let list: Array<string> = [...message.message];
          list.map((item: any) => toast.error(item));
        }
      } else if (message.message !== "undefined" && message.message) {
        toast.error(message.message);
      } else if (Array.isArray(message)) {
        if (message.length > 0) {
          let list: Array<string> = [...message];
          list.map((item: any) => toast.error(item));
        }
      } else {
        toast.error(message);
      }
      dispatch(reset());
    }
    if (isLoading) {
      setDisable(true);
    }
  }, [
    cartTotal,
    items,
    metadata,
    metaDatas,
    isSuccess,
    isError,
    isLoading,
    push,
    dispatch,
    message,
    totalItems,
    emptyCart,
  ]);

  let cartItems: any[] = [];
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("Veuillez vous connectez !");
      return;
    }
    setValidate(true);

    Items.map(({ id, price, quantity, name, images }) => {
      cartItems.push({
        name,
        qty: quantity,
        images,
        price,
        product: id,
      });
    });

    if (!region || !address || !phone || !ville) {
      toast.error("Remplissez les champs obligatoires");
    } else {
      setCartMetadata({
        region,
        shippingPrice:
          typeof Number(shippingPrice) === "number" && shippingPrice
            ? Number(shippingPrice)
            : 0,
        firstname,
        lastname,
        ville,
        address,
        phone,
        note,
        deliveryMode,
        paymentMode,
      });
    }

    const cart = {
      orderItems: cartItems,
      shippingAddress: {
        firstname,
        lastname,
        email,
        shipping: deliveryMode,
        payment: paymentMode,
        address,
        phone,
        ville,
        region,
      },
      itemsPrice: cartTotal,
      note,
      shippingPrice:
        typeof Number(shippingPrice) === "number" ? Number(shippingPrice) : 0,
      totalPrice:
        cartTotal +
        (typeof Number(shippingPrice) && shippingPrice
          ? Number(shippingPrice)
          : 0),
    };
    dispatch(createOrder(cart));
  };
  const [show, setShow] = useState(false);
  const [credentials, setCredentials] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit1 = (e: any) => {
    setValidate(true);
    e.preventDefault();
    const userData = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(login(userData));
  };

  const { isAuthenticated } = useAppSelector((store) => store.auth);

  return (
    <section className="section-box shop-template">
      <div className="containers">
        <div className="row">
          <div className="col-lg-6">
            <div className="box-border">
              <div className="box-payment">
                <a className="btn btn-gpay">
                  <Image
                    src="/imgs/page/checkout/gpay.svg"
                    width={101}
                    height={42}
                    alt="Ecom"
                  />
                </a>
                <a className="btn btn-paypal">
                  <Image
                    src="/imgs/page/checkout/paypal.svg"
                    width={101}
                    height={42}
                    alt="Ecom"
                  />
                </a>
                <a className="btn btn-amazon">
                  <Image
                    src="/imgs/page/checkout/amazon.svg"
                    width={101}
                    height={42}
                    alt="Ecom"
                  />
                </a>
              </div>
              <div className="border-bottom-4 text-center mb-20">
                <div className="text-or font-md color-gray-500">Or</div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 mb-20">
                  <h5 className="font-md-bold color-brand-3 text-sm-start text-center">
                    Contact information
                  </h5>
                </div>
                <div className="col-lg-6 col-sm-6 mb-20 text-sm-end text-center">
                  <span className="font-sm color-brand-3">
                    Already have an account?
                  </span>
                  <a className="font-sm color-brand-1" href="page-login.html">
                    {" "}
                    Login
                  </a>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Email*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label
                      className="font-sm color-brand-3"
                      htmlFor="checkboxOffers"
                    >
                      <input
                        className="checkboxOffer"
                        id="checkboxOffers"
                        type="checkbox"
                      />
                      Keep me up to date on news and exclusive offers
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <h5 className="font-md-bold color-brand-3 mt-15 mb-20">
                    Shipping address
                  </h5>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="First name*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Last name*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Address 1*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Address 2*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <select className="form-control font-sm select-style1 color-gray-700">
                      <option value="">Select an option...</option>
                      <option value="1">Option 1</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="City*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="PostCode / ZIP*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Phone*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-0">
                    <textarea
                      className="form-control font-sm"
                      placeholder="Additional Information"
                      rows={5}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-lg-6 col-5 mb-20">
                <a
                  className="btn font-sm-bold color-brand-1 arrow-back-1"
                  href="shop-cart.html"
                >
                  Return to Cart
                </a>
              </div>
              <div className="col-lg-6 col-7 mb-20 text-end">
                <a
                  className="btn btn-buy w-auto arrow-next"
                  href="shop-checkout.html"
                >
                  Place an Order
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-border">
              <h5 className="font-md-bold mb-20">Your Order</h5>
              <div className="listCheckout">
                <div className="item-wishlist">
                  <div className="wishlist-product">
                    <div className="product-wishlist">
                      <div className="product-image">
                        <a href="shop-single-product.html">
                          <Image
                            src="/imgs/page/product/img-sub.png"
                            alt="Ecom"
                            width={339}
                            height={246}
                          />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="shop-single-product.html">
                          <h6 className="color-brand-3">
                            Gateway 23.8&quot; All-in-one Desktop, Fully
                            Adjustable Stand
                          </h6>
                        </a>
                        <div className="rating">
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-status">
                    <h5 className="color-gray-500">x1</h5>
                  </div>
                  <div className="wishlist-price">
                    <h4 className="color-brand-3 font-lg-bold">$2.51</h4>
                  </div>
                </div>
                <div className="item-wishlist">
                  <div className="wishlist-product">
                    <div className="product-wishlist">
                      <div className="product-image">
                        <a href="shop-single-product.html">
                          <Image
                            src="/imgs/page/product/img-sub2.png"
                            alt="Ecom"
                            width={339}
                            height={246}
                          />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="shop-single-product.html">
                          <h6 className="color-brand-3">
                            HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM
                          </h6>
                        </a>
                        <div className="rating">
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-status">
                    <h5 className="color-gray-500">x1</h5>
                  </div>
                  <div className="wishlist-price">
                    <h4 className="color-brand-3 font-lg-bold">$1.51</h4>
                  </div>
                </div>
                <div className="item-wishlist">
                  <div className="wishlist-product">
                    <div className="product-wishlist">
                      <div className="product-image">
                        <a href="shop-single-product.html">
                          <Image
                            src="/imgs/page/product/img-sub3.png"
                            alt="Ecom"
                            width={339}
                            height={246}
                          />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="shop-single-product.html">
                          <h6 className="color-brand-3">
                            Dell Optiplex 9020 Small Form Business Desktop Tower
                            PC
                          </h6>
                        </a>
                        <div className="rating">
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            width={12}
                            height={12}
                            className="inline"
                          />
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-status">
                    <h5 className="color-gray-500">x1</h5>
                  </div>
                  <div className="wishlist-price">
                    <h4 className="color-brand-3 font-lg-bold">$3.51</h4>
                  </div>
                </div>
              </div>
              <div className="form-group d-flex mt-15">
                <input
                  className="form-control mr-15"
                  placeholder="Enter Your Coupon"
                />
                <button className="btn btn-buy w-auto">Apply</button>
              </div>
              <div className="form-group mb-0">
                <div className="row mb-10">
                  <div className="col-lg-6 col-6">
                    <span className="font-md-bold color-brand-3">Subtotal</span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="font-lg-bold color-brand-3">$6.51</span>
                  </div>
                </div>
                <div className="border-bottom mb-10 pb-5">
                  <div className="row">
                    <div className="col-lg-6 col-6">
                      <span className="font-md-bold color-brand-3">
                        Shipping
                      </span>
                    </div>
                    <div className="col-lg-6 col-6 text-end">
                      <span className="font-lg-bold color-brand-3">-</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="font-md-bold color-brand-3">Total</span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="font-lg-bold color-brand-3">$6.51</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCheckout;
