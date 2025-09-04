import { urldomain } from '../config/config.js';
import CreditHtml from './credit.js';
export default class HomeDocument {
  proxies = [];

  constructor(request, cachedProxyList = []) {
    this.html = HomeDocument.baseHTML; // Gunakan HomeDocument.baseHTML
    this.request = request;
    this.url = new URL(this.request.url);
    this.cachedProxyList = cachedProxyList; // Proxies dari luar
  }

  registerProxies(data, proxies) {
    this.proxies.push({
      ...data,
      list: proxies,
    });
  }

  buildCountryFlag() {
    const countryNames = {
      'AF': 'Afghanistan',
      'AX': 'Åland Islands',
      'AL': 'Albania',
      'DZ': 'Algeria',
      'AS': 'American Samoa',
      'AD': 'Andorra',
      'AO': 'Angola',
      'AI': 'Anguilla',
      'AQ': 'Antarctica',
      'AG': 'Antigua and Barbuda',
      'AR': 'Argentina',
      'AM': 'Armenia',
      'AW': 'Aruba',
      'AU': 'Australia',
      'AT': 'Austria',
      'AZ': 'Azerbaijan',
      'BS': 'Bahamas',
      'BH': 'Bahrain',
      'BD': 'Bangladesh',
      'BB': 'Barbados',
      'BY': 'Belarus',
      'BE': 'Belgium',
      'BZ': 'Belize',
      'BJ': 'Benin',
      'BM': 'Bermuda',
      'BT': 'Bhutan',
      'BO': 'Bolivia',
      'BQ': 'Bonaire',
      'BA': 'Bosnia and Herzegovina',
      'BW': 'Botswana',
      'BV': 'Bouvet Island',
      'BR': 'Brazil',
      'IO': 'British Indian Ocean Territory',
      'BN': 'Brunei Darussalam',
      'BG': 'Bulgaria',
      'BF': 'Burkina Faso',
      'BI': 'Burundi',
      'KH': 'Cambodia',
      'CM': 'Cameroon',
      'CA': 'Canada',
      'CV': 'Cape Verde',
      'KY': 'Cayman Islands',
      'CF': 'Central African Republic',
      'TD': 'Chad',
      'CL': 'Chile',
      'CN': 'China',
      'CX': 'Christmas Island',
      'CC': 'Cocos (Keeling) Islands',
      'CO': 'Colombia',
      'KM': 'Comoros',
      'CG': 'Congo',
      'CD': 'Congo, Democratic Republic',
      'CK': 'Cook Islands',
      'CR': 'Costa Rica',
      'CI': 'Côte d\'Ivoire',
      'HR': 'Croatia',
      'CU': 'Cuba',
      'CW': 'Curaçao',
      'CY': 'Cyprus',
      'CZ': 'Czech Republic',
      'DK': 'Denmark',
      'DJ': 'Djibouti',
      'DM': 'Dominica',
      'DO': 'Dominican Republic',
      'EC': 'Ecuador',
      'EG': 'Egypt',
      'SV': 'El Salvador',
      'GQ': 'Equatorial Guinea',
      'ER': 'Eritrea',
      'EE': 'Estonia',
      'ET': 'Ethiopia',
      'FK': 'Falkland Islands',
      'FO': 'Faroe Islands',
      'FJ': 'Fiji',
      'FI': 'Finland',
      'FR': 'France',
      'GF': 'French Guiana',
      'PF': 'French Polynesia',
      'TF': 'French Southern Territories',
      'GA': 'Gabon',
      'GM': 'Gambia',
      'GE': 'Georgia',
      'DE': 'Germany',
      'GH': 'Ghana',
      'GI': 'Gibraltar',
      'GR': 'Greece',
      'GL': 'Greenland',
      'GD': 'Grenada',
      'GP': 'Guadeloupe',
      'GU': 'Guam',
      'GT': 'Guatemala',
      'GG': 'Guernsey',
      'GN': 'Guinea',
      'GW': 'Guinea-Bissau',
      'GY': 'Guyana',
      'HT': 'Haiti',
      'HM': 'Heard Island and McDonald Islands',
      'VA': 'Holy See (Vatican City)',
      'HN': 'Honduras',
      'HK': 'Hong Kong',
      'HU': 'Hungary',
      'IS': 'Iceland',
      'IN': 'India',
      'ID': 'Indonesia',
      'IR': 'Iran',
      'IQ': 'Iraq',
      'IE': 'Ireland',
      'IM': 'Isle of Man',
      'IL': 'Israel',
      'IT': 'Italy',
      'JM': 'Jamaica',
      'JP': 'Japan',
      'JE': 'Jersey',
      'JO': 'Jordan',
      'KZ': 'Kazakhstan',
      'KE': 'Kenya',
      'KI': 'Kiribati',
      'KP': 'North Korea',
      'KR': 'South Korea',
      'KW': 'Kuwait',
      'KG': 'Kyrgyzstan',
      'LA': 'Laos',
      'LV': 'Latvia',
      'LB': 'Lebanon',
      'LS': 'Lesotho',
      'LR': 'Liberia',
      'LY': 'Libya',
      'LI': 'Liechtenstein',
      'LT': 'Lithuania',
      'LU': 'Luxembourg',
      'MO': 'Macao',
      'MK': 'North Macedonia',
      'MG': 'Madagascar',
      'MW': 'Malawi',
      'MY': 'Malaysia',
      'MV': 'Maldives',
      'ML': 'Mali',
      'MT': 'Malta',
      'MH': 'Marshall Islands',
      'MQ': 'Martinique',
      'MR': 'Mauritania',
      'MU': 'Mauritius',
      'YT': 'Mayotte',
      'MX': 'Mexico',
      'FM': 'Micronesia',
      'MD': 'Moldova',
      'MC': 'Monaco',
      'MN': 'Mongolia',
      'ME': 'Montenegro',
      'MS': 'Montserrat',
      'MA': 'Morocco',
      'MZ': 'Mozambique',
      'MM': 'Myanmar',
      'NA': 'Namibia',
      'NR': 'Nauru',
      'NP': 'Nepal',
      'NL': 'Netherlands',
      'NC': 'New Caledonia',
      'NZ': 'New Zealand',
      'NI': 'Nicaragua',
      'NE': 'Niger',
      'NG': 'Nigeria',
      'NU': 'Niue',
      'NF': 'Norfolk Island',
      'MP': 'Northern Mariana Islands',
      'NO': 'Norway',
      'OM': 'Oman',
      'PK': 'Pakistan',
      'PW': 'Palau',
      'PS': 'Palestine',
      'PA': 'Panama',
      'PG': 'Papua New Guinea',
      'PY': 'Paraguay',
      'PE': 'Peru',
      'PH': 'Philippines',
      'PN': 'Pitcairn',
      'PL': 'Poland',
      'PT': 'Portugal',
      'PR': 'Puerto Rico',
      'QA': 'Qatar',
      'RE': 'Réunion',
      'RO': 'Romania',
      'RU': 'Russia',
      'RW': 'Rwanda',
      'BL': 'Saint Barthélemy',
      'SH': 'Saint Helena',
      'KN': 'Saint Kitts and Nevis',
      'LC': 'Saint Lucia',
      'MF': 'Saint Martin',
      'PM': 'Saint Pierre and Miquelon',
      'VC': 'Saint Vincent and the Grenadines',
      'WS': 'Samoa',
      'SM': 'San Marino',
      'ST': 'Sao Tome and Principe',
      'SA': 'Saudi Arabia',
      'SN': 'Senegal',
      'RS': 'Serbia',
      'SC': 'Seychelles',
      'SL': 'Sierra Leone',
      'SG': 'Singapore',
      'SX': 'Sint Maarten',
      'SK': 'Slovakia',
      'SI': 'Slovenia',
      'SB': 'Solomon Islands',
      'SO': 'Somalia',
      'ZA': 'South Africa',
      'GS': 'South Georgia and the South Sandwich Islands',
      'SS': 'South Sudan',
      'ES': 'Spain',
      'LK': 'Sri Lanka',
      'SD': 'Sudan',
      'SR': 'Suriname',
      'SJ': 'Svalbard and Jan Mayen',
      'SZ': 'Eswatini',
      'SE': 'Sweden',
      'CH': 'Switzerland',
      'SY': 'Syria',
      'TW': 'Taiwan',
      'TJ': 'Tajikistan',
      'TZ': 'Tanzania',
      'TH': 'Thailand',
      'TL': 'Timor-Leste',
      'TG': 'Togo',
      'TK': 'Tokelau',
      'TO': 'Tonga',
      'TT': 'Trinidad and Tobago',
      'TN': 'Tunisia',
      'TR': 'Turkey',
      'TM': 'Turkmenistan',
      'TC': 'Turks and Caicos Islands',
      'TV': 'Tuvalu',
      'UG': 'Uganda',
      'UA': 'Ukraine',
      'AE': 'United Arab Emirates',
      'GB': 'United Kingdom',
      'US': 'United States',
      'UM': 'United States Minor Outlying Islands',
      'UY': 'Uruguay',
      'UZ': 'Uzbekistan',
      'VU': 'Vanuatu',
      'VE': 'Venezuela',
      'VN': 'Vietnam',
      'VG': 'Virgin Islands, British',
      'VI': 'Virgin Islands, U.S.',
      'WF': 'Wallis and Futuna',
      'EH': 'Western Sahara',
      'YE': 'Yemen',
      'ZM': 'Zambia',
      'ZW': 'Zimbabwe'
    };

    const flagList = [];
    for (const proxy of this.cachedProxyList) {
      flagList.push(proxy.country);
    }

    let flagElement = `<div class="flag-cards-container">`;

    for (const flag of new Set(flagList)) {
      const proxyData = this.cachedProxyList.filter(
        (proxy) => proxy.country === flag
      );
      const ipCount = proxyData.length;
      const countryName = countryNames[flag] || flag;

      flagElement += `
      <div class="card">
        <div class="card-content">
          <div class="flag-wrapper">
            <img src="https://hatscripts.github.io/circle-flags/flags/${flag.toLowerCase()}.svg" alt="${countryName}" />
          </div>
          <div class="card-info">
            <div class="country-details">
              <div class="info-row">
                <i class="bx bx-globe"></i>
                <span class="info-text">${countryName}</span>
              </div>
              <div class="info-row">
                <i class="bx bx-laptop"></i>
                <span class="info-text">${ipCount} IP</span>
              </div>
            </div>
            <button class="view-button" onclick="loadIframe('${urldomain}/sub?cc=${flag}')">
              <i class="bx bx-search-alt"></i>
              <span>VIEW DETAILS</span>
            </button>
          </div>
        </div>
      </div>
      `;
    }

    flagElement += `</div>`;
    this.html = this.html.replaceAll("PLACEHOLDER_BENDERA_NEGARA", flagElement);
  }

  build() {
    this.buildCountryFlag();

    this.html = this.html.replaceAll(
      "PLACEHOLDER_API_READY",
      globalThis.isApiReady ? "block" : "hidden"
    );

    return this.html.replaceAll(/PLACEHOLDER_\w+/gim, "");
  }

  // Base HTML sebagai properti statis
  static baseHTML = `
<!DOCTYPE html>
<!-- Website - www.codingnepalweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <title>
       Mazlana CloudFlare Serverless
    </title>
    <link rel="icon" href="https://raw.githubusercontent.com/mazlanatampan/managercf/refs/heads/main/logo.png" type="image/png" />
    <link rel="stylesheet" href="style.css" />
    <!-- Boxicons CDN Link -->
    <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
/* Google Font Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}
.sidebar{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: #11101D;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open{
  width: 250px;
}
.sidebar .logo-details{
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logo-details .icon{
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar .logo-details .logo_name{
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-left: 8px;
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar .logo-details .logo-sidebar {
  opacity: 0;
  width: 35px; 
  height: 35px; 
  border-radius: 50%;
  object-fit: cover; 
  border: 1.5px solid white;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details .logo-sidebar,
.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}
.sidebar .logo-details #btn{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details #btn{
  text-align: right;
}
.sidebar i{
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar .nav-list{
  margin-top: 20px;
  height: 100%;
}
.sidebar li{
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li .tooltip{
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}
.sidebar li:hover .tooltip{
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar.open li .tooltip{
  display: none;
}
.sidebar input{
  font-size: 15px;
  color: #FFF;
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: #1d1b31;
}
.sidebar.open input{
  padding: 0 20px 0 50px;
  width: 100%;
}
.sidebar .bx-search{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  background: #1d1b31;
  color: #FFF;
}
.sidebar.open .bx-search:hover{
  background: #1d1b31;
  color: #FFF;
}
.sidebar .bx-search:hover{
  background: #FFF;
  color: #11101d;
}
.sidebar li a{
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #11101D;
}
.sidebar li a:hover{
  background: #FFF;
}
.sidebar li a .links_name{
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .links_name{
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .links_name,
.sidebar li a:hover i{
  transition: all 0.5s ease;
  color: #11101D;
}
.sidebar li i{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.sidebar li.profile{
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: #1d1b31;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar.open li.profile{
  width: 250px;
}
.sidebar li .profile-details{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.sidebar li img{
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}
.sidebar li.profile .name,
.sidebar li.profile .job{
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}
.sidebar li.profile .job{
  font-size: 12px;
}
.sidebar .profile #log_out{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #1d1b31;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}
.sidebar.open .profile #log_out{
  width: 50px;
  background: none;
}
.home-section{
  position: relative;
  background-image: url('https://raw.githubusercontent.com/mazlanatampan/managercf/refs/heads/main/background.jpg');
   background-attachment: fixed;
   background-size: cover;
   background-position: center;
  min-height: 100vh;
  top: 0;
  left: 78px;
  overflow: hidden;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
}

.sidebar.open ~ .home-section{
  left: 250px;
  width: calc(100% - 250px);
}

.sidebar.open ~ .home-section .header-atas {
  left: 250px;
  width: calc(100% - 250px);
}

.home-section .text{
  display: inline-block;
  color: #11101d;
  font-size: 25px;
  font-weight: 500;
  margin: 18px
}
@media (max-width: 420px) {
  .sidebar li .tooltip{
    display: none;
  }
}


.header-atas {
  background-color: #11101d; /* Latar belakang gelap */
  height: 100px;
  width: calc(100% - 78px);
  position: fixed; /* Membuat header tetap di posisi atas */
  z-index:10;
  top: 0; /* Posisi di bagian atas */
  left: 78px;
  transition: all 0.5s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Tambahkan bayangan jika diperlukan */
}


.header-atas .icon {
  color: white;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center; /* Menempatkan elemen secara horizontal di tengah */
  align-items: center; /* Menempatkan elemen secara vertikal di tengah */
  font-size: 4rem;
}

.icon-name {
  color: white;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 10px;
}

.marquee {
  position: absolute;
  font-size: 13px;
  color: white;
  bottom: 5px;
  padding: 0px;
  right: 0;
  animation: marquee 20s linear infinite; /* Animasi teks berjalan */
  white-space: nowrap; /* Mencegah teks membungkus */
}
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}


.home-content{
width:100%;
height: 100%;
margin-top: 100px;
overflow-z: auto;
}


iframe{
 border: none;
 width: 100%;
 height: 100vh;
 overflow: auto;
 opacity: 0.7;
 filter: brightness(1.2) contrast(1.2) saturate(1.0);
 pointer-events: auto;
 z-index: 10; 
}


/* Grid Container */
.flag-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Card Styles - Updated */
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-content {
  background: #1a1b1f;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.flag-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.flag-wrapper img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.card:hover .flag-wrapper img {
  transform: scale(1.1);
}

.country-details {
  margin: 15px 0;
}

.info-row {
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: #fff;
}

.info-row i {
  margin-right: 10px;
  font-size: 1.2em;
  color: #7289da;
}

.info-text {
  font-size: 0.95em;
  font-weight: 500;
}

.view-button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #7289da;
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.view-button:hover {
  background: #5865f2;
  transform: scale(1.02);
}

.view-button i {
  font-size: 1.1em;
}

/* Responsiveness */
@media (max-width: 768px) {
  .flag-cards-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 15px;
  }
  
  .flag-wrapper img {
    width: 70px;
    height: 70px;
  }
}




    
.small-alert {
    width: 300px !important; 
    font-size: 14px; 
  }
      
      
      
    </style>
  </head>
  
  <body>
    <div class="sidebar">
      <div class="logo-details">
        <img src="https://raw.githubusercontent.com/mazlanatampan/managercf/refs/heads/main/logo.png" alt="logosidebar" class="logo-sidebar">
        <div class="logo_name">Mazlana</div>
        <i class="bx bx-menu" id="btn"></i>
      </div>
      <ul class="nav-list">
        <li>
          <i class="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span class="tooltip">Search</span>
        </li>
        <li>
          <a href="/home">
            <i class="bx bx-grid-alt"></i>
            <span class="links_name">Dashboard</span>
          </a>
          <span class="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#"  onclick="loadIframe('${urldomain}/credit')">
            <i class="bx bx-user"></i>
            <span class="links_name">Credit</span>
          </a>
          <span class="tooltip">Credit</span>
        </li>
        <li>
          <a href="#" onclick="loadIframe('https://speedtest.primacom.id')">
            <i class="bx bxs-rocket"></i>
            <span class="links_name">SpeedTest</span>
          </a>
          <span class="tooltip">SpeedTest</span>
        </li>
        <li>
          <a href="#" onclick="loadBFRDashboard()">
            <i class="bx bx-line-chart"></i>
            <span class="links_name">BFR Dashboard</span>
          </a>
          <span class="tooltip">BFR Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-folder"></i>
            <span class="links_name">File Manager</span>
          </a>
          <span class="tooltip">Files</span>
        </li>
        <li>
  <a href="#" onclick="showSweetAlert()">
    <i class="bx bx-cart-alt"></i>
    <span class="links_name">Donasi</span>
  </a>
  <span class="tooltip">Donasi</span>
</li>
<li class="menu-item">
  <a href="#">
    <i class="bx bxs-briefcase"></i>
    <span class="links_name">Other Tools</span>
  </a>
</li>
        <li>
          <a href="#">
            <i class="bx bx-cog"></i>
            <span class="links_name">Setting</span>
          </a>
          <span class="tooltip">Setting</span>
        </li>
        <li class="profile">
          <div class="profile-details">
            <img src="profile.jpg" alt="profileImg" />
            <div class="name_job">
              <div class="name">Mazlana</div>
              <div class="job">Web designer</div>
            </div>
          </div>
          <i class="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
    <section class="home-section">
      <div class="header-atas">
       <div class="icon">
        <i class='bx bxl-slack'></i>
       </div>
         <div class="icon-name"> MAZLANA</div>
        <div class="marquee" id="ip-info">Loading IP...</div>
        </div>
        
        <div class="home-content">
      PLACEHOLDER_BENDERA_NEGARA
        <div id="iframe-container"></div>
        </div>
    </section>

    <script>
    

    
function loadIframe(url) {
    // Menentukan elemen .home-section untuk diganti kontennya
    var homeSection = document.querySelector('.home-content');
    
    var iframe = document.createElement('iframe');
    iframe.src = url; 

    homeSection.innerHTML = '';  
    homeSection.appendChild(iframe);  
    
}

function loadBFRDashboard() {
    // Menentukan elemen .home-section untuk diganti kontennya
    var homeSection = document.querySelector('.home-content');

    // Menampilkan SweetAlert untuk pilihan
    Swal.fire({
      title: 'USER BOX FOR ROOT ONLY',
      text: 'Pilih "LOCAL" JIKA ANDA BERADA DI LOCAL SERVER ATAU "GATEWAY" JIKA ANDA BERADA DI GATEWAY SERVER',
      showCancelButton: true,
      confirmButtonText: 'LOCAL',
      cancelButtonText: 'GATEWAY',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      customClass: {
        popup: 'small-alert' // Kelas kustom untuk mengecilkan ukuran modal
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika memilih Local
        loadIframe('http://127.0.0.1:9090/ui'); // Memanggil fungsi loadIframe dengan URL lokal
      } else {
        // Jika memilih Gateway, tampilkan pesan "Coming Soon"
        Swal.fire({
          title: 'Coming Soon',
          text: 'Fitur ini akan segera tersedia.',
          icon: 'info',
          confirmButtonText: 'OK'
        });
      }
    });
}

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

function showSweetAlert() {
    Swal.fire({
      title: 'Jangan Lupa Donasii 😉',
      text: '',
      imageUrl: 'https://htmlku.com/0/panda/pusn.gif', // Gambar custom
      imageWidth: 100, // Lebar gambar
      imageHeight: 100, // Tinggi gambar
      imageAlt: 'Custom Image', // Alt text untuk gambar
      showCancelButton: true,
      confirmButtonText: 'OKE GASS',
      cancelButtonText: 'NANTI 😁',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      customClass: {
        popup: 'small-alert' // Kelas kustom untuk mengecilkan ukuran modal
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('https://google.com', '_blank');
      }
    });
  }
    
function checkGeoip() {
    const ipInfo = document.getElementById("ip-info");

    fetch('${urldomain}/api/v1/myip')
        .then(async (res) => {
            if (res.status === 200) {
                const respJson = await res.json();
                ipInfo.innerText = 
                    "IP: " + respJson.ip + 
                    " | Country: " + respJson.country + 
                    " | ISP: " + respJson.asOrganization;
            } else {
                ipInfo.innerText = "Unable to retrieve IP information.";
            }
        })
        .catch(() => {
            ipInfo.innerText = "Error: Unable to connect to the server.";
        });
}


window.onload = () => {
        checkGeoip();
}
    </script>
  </body>
</html>
`;
}
