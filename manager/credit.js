const CreditHtml = `
<head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

    body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
        overflow: hidden;
    }

    .credit-container {
        text-align: center;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        padding: 60px;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        border: 2px solid #4CAF50;
        max-width: 500px;
        width: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: fadeIn 1.5s ease-in-out;
    }

    .credit-container:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
    }

    .credit-title {
        color: #fff;
        font-size: 2.5em;
        margin-bottom: 20px;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        animation: slideIn 1s ease-in-out;
        border-bottom: 2px solid #4CAF50;
    }

    .credit-text {
        color: #e0e0e0;
        font-size: 1.2em;
        line-height: 1.6;
        margin-bottom: 20px;
        animation: fadeIn 2s ease-in-out;
    }

    .credit-logo-container {
        margin: 30px 0;
        animation: bounceIn 1.5s ease-in-out;
    }

    .credit-logo {
        width: 150px;
        border-radius: 50%;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }

    .credit-logo:hover {
        transform: rotate(360deg) scale(1.1);
    }

    .credit-footer {
        color: #e0e0e0;
        font-size: 0.9em;
        margin-top: 20px;
        animation: fadeIn 2.5s ease-in-out;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes slideIn {
        0% { transform: translateY(-50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes bounceIn {
        0% { transform: scale(0.5); opacity: 0; }
        60% { transform: scale(1.1); opacity: 1; }
        80% { transform: scale(0.9); }
        100% { transform: scale(1); }
    }

    .credit-list li {
        list-style: none; /* Menghilangkan bullet point */
    }

    .animated-name {
        opacity: 0; /* Mulai dengan transparan */
        transform: translateY(20px); /* Geser ke bawah */
        animation: fadeInUp 0.6s ease forwards; /* Panggil animasi dengan easing */
        animation-delay: 0.3s; /* Delay sebelum animasi dimulai */
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0; /* Mulai transparan */
            transform: translateY(20px); /* Mulai dari bawah */
        }
        100% {
            opacity: 1; /* Akhirnya terlihat */
            transform: translateY(0); /* Kembali ke posisi normal */
        }
    }

    .credit-list .icon {
        display: inline-block;
        width: 10px; /* Atur lebar ikon */
        height: 10px; /* Atur tinggi ikon */
        background-color: black; /* Ganti dengan warna yang diinginkan */
        border-radius: 50%; /* Membuat ikon berbentuk lingkaran */
        margin-right: 5px; /* Jarak antara ikon dan nama */
    }

    @media (max-width: 600px) {
        .credit-container {
            padding: 20px; /* Mengurangi padding pada perangkat kecil */
            border-radius: 10px; /* Mengurangi radius border */
        }

        .credit-title {
            font-size: 2em; /* Mengurangi ukuran font judul */
        }

        .credit-text {
            font-size: 1em; /* Mengurangi ukuran font teks */
        }

        .credit-logo {
            width: 100px; /* Mengurangi ukuran logo */
        }
    }
</style>

<body>
    <div class="credit-container">
        <h2 class="credit-title">MAZLANA CF SERVERLESS</h2>
        <p class="credit-text">Terimakasih telah menggunakan MAZLANA CF SERVERLESS</p>
        <p class="credit-text">CREDIT DAN COPYRIGHT</p>
        <ul class="credit-list">
            <li class="animated-name">DICKY M.F
                <div>
                    <a href="https://github.com/dickymuliafiqri" target="_blank">
                        <i class='bx bxl-github'></i> GitHub
                    </a> | 
                    <a href="https://t.me/d_fordlalatina" target="_blank">
                        <i class='bx bxl-telegram'></i> Telegram
                    </a>
                </div>
            </li>
            <li class="animated-name">VLESS GRATIS 
                <div>
                    <a href="https://t.me/cfvless" target="_blank">
                        <i class='bx bxl-telegram'></i> Telegram
                        </a>
                </div>
            </li>
            <li class="animated-name">FOOLISH 
                <div>
                    <a href="https://nautia.foolvpn.me/sub" target="_blank"> 
                        <i class='bx bx-link-alt'></i> BASE VLESS
                    </a> | 
                    <a href="https://t.me/foolvpn" target="_blank">
                        <i class='bx bxl-telegram'></i> Telegram
                    </a>
                </div>
            </li>
        </ul>
        <div class="credit-logo-container">
            <img src="https://raw.githubusercontent.com/mazlanatampan/managercf/refs/heads/main/logo.png" alt="Logo Perusahaan" class="credit-logo">
        </div>
        <p class="credit-footer">&copy; 2025</p>
    </div>
</body>
`;

export default CreditHtml;