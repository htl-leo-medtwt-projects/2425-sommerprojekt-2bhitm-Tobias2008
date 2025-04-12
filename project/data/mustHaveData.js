const MUST_HAVE_DATA = {
    "nav": [
        {
            "name": "MindQuest",
            "link": "./index.html"
        },
        {
            "name": "UserIcon",
            "link": "./media/Images/USERICON.png"
        },
        {
            "name": "Spielerklärung",
            "link": "./pages/gameExplanation.html"
        },
        {
            "name": "Shop",
            "link": "./pages/shop.html"
        },
        {
            "name": "Quiz Auswahl",
            "link": ""
        },
        {
            "name": "Darkmode",
            "onclick": "changeDarkWhiteMode()"
        }
    ],
    "footer": [
        {
            "name": "Kontakt",
            "Infos": [
                {
                    "name": "Limesstraße 12/14, 4060 Leonding",
                    "link": "https://www.google.at/maps/place/HTL+Leonding/@48.2670915,14.2532357,127a,35y,328.3h,45t/data=!3m1!1e3!4m6!3m5!1s0x477396fb96f68367:0xf2b265395a736637!8m2!3d48.2684159!4d14.2517532!16s%2Fg%2F121_5ddh?hl=de&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                },
                {
                    "name": "+43 732 6733680",
                },
                {
                    "name": "t.payreder@students.htl-leonding.ac.at",
                    "link": "mailto:t.payreder@students.htl-leonding.ac.at?subject=eine%20Mail%20von%20einem%20MindQuest%20Spieler"
                }
            ]
        },
        {
            "name": "Socials",
            "Infos": [
                {
                    "name": "Snapchat - t_obiene",
                    "link": "https://snapchat.com/t/Pbfd80Tp"
                },
                {
                    "name": "Tiktok - tobi_..08",
                    "link": "https://www.tiktok.com/@tobi_..08"
                },
                {
                    "name": "Instagram - tobiene_",
                    "link": "https://www.instagram.com/tobiene_/"
                }
            ]
        },
        {
            "name": "SocialButtons",
            "Infos": [
                {
                    "imgSCR": "./media/SocialMedia/instagram.png",
                    "link": "https://www.instagram.com/tobiene_/"
                },
                {
                    "imgSCR": "./media/SocialMedia/snapchat.png",
                    "link": "https://snapchat.com/t/Pbfd80Tp"
                },
                {
                    "imgSCR": "./media/SocialMedia/tiktok.png",
                    "link": "https://www.tiktok.com/@tobi_..08"
                }
            ]
        }
    ],
    "loginWindow": [
        {
            name: "Login",
            inputUsername: "<input type='text' id='username' placeholder='Username'>",
            inputPassword: "<input type='password' id='password' placeholder='Password'>",
            button: "<div id='loginButton' onclick='login()'>Login</div>",
            info: "Noch keinen Account?",
            registerButton: "Registrieren",
            closeButton: "X",
        }
    ],
    "registerWindow": [
        {
            name: "Registrieren",
            inputUsername: "<input type='text' id='username' placeholder='Username'>",
            inputPassword: "<input type='password' id='password' placeholder='Password'>",
            inputPasswordRepeat: "<input type='password' id='passwordRepeat' placeholder='Password wiederholen'>",
            button: "<div id='registerButton' onclick='register()'>Registrieren</div>",
            info: "Bereits einen Account?",
            loginButton: "Einloggen",
            closeButton: "X",
        }
    ]
}