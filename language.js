(() => {
  const STORAGE_KEY = "misterDonerLanguage";

  const translations = {
    es: {
      pageTitle: "Mister Doner Espartinas | Gran inauguración 15 de octubre",
      ogLocale: "es_ES",
      text: {
        navPickup: "Recoger",
        navDelivery: "A domicilio",
        navDineIn: "Consumo en el local",
        navAbout: "Sobre nosotros",
        navContact: "Contacto",
        bookTable: "Reservar mesa",
        menuOpen: "Abrir menú",
        heroTitleOne: "Gran",
        heroTitleTwo: "inauguración",
        heroDateLabel: "El gran día",
        heroDate: "15 de octubre",
        directions: "Pedido ahora",
        brandTagline: "Aquí manda el sabor.",
        tickerDate: "15 OCTUBRE",
        tickerLocation: "ESPARTINAS",
        tickerEvent: "GRAN INAUGURACIÓN",
        flavourSectionLabel: "Aquí manda el sabor",
        flavourSignature: "MISTER DONER - Aquí manda el sabor.",
        infoSectionLabel: "Información",
        infoCopy: "Somos fáciles de encontrar y siempre estamos encantados de saber de ti. Llámanos o ven a visitarnos cuando quieras.",
        addressLabel: "Dirección",
        phoneLabel: "Teléfono",
        tapToCall: "Pulsa para llamar",
        followUsLabel: "Síguenos",
        socialSectionLabel: "Redes sociales",
        socialCopy: "Síguenos en nuestras redes sociales para ofertas exclusivas, novedades y más.",
        socialInfoTitle: "Información",
        emailLabel: "Email",
        appDownloadTitle: "Descarga Foodsted App",
        openingHoursLabel: "Horario",
        openingHoursSummary: "Horario semanal",
        openingHoursTitle: "Horario de apertura",
        todayLabel: "Hoy",
        dayMonday: "Lunes",
        dayTuesday: "Martes",
        dayWednesday: "Miércoles",
        dayThursday: "Jueves",
        dayFriday: "Viernes",
        daySaturday: "Sábado",
        daySunday: "Domingo",
        copyright: "2026 Mister Doner. Todos los derechos reservados.",
        poweredBy: "Desarrollado por",
      },
      html: {
        heroLocation: '<span aria-hidden="true"></span> Espartinas · Sevilla',
        flavourTitle: "El sabor es<br><em>el protagonista.</em>",
        flavourIntroOne:
          "En <strong>MISTER DONER Espartinas</strong> el sabor es el protagonista. Disfruta de döner kebab, dürums recién preparados, burgers irresistibles, pizzas, tacos, platos combinados y mucho más, elaborados al momento para que todo llegue caliente, recién hecho y con todo su sabor.",
        flavourIntroTwo:
          "Carne sabrosa, ingredientes frescos, salsas que marcan la diferencia y combinaciones pensadas para cuando quieres comer bien de verdad. Ya sea para un almuerzo rápido, una cena con amigos, recoger tu pedido o disfrutarlo en nuestro restaurante, en <strong>MISTER DONER</strong> siempre hay una buena excusa para volver.",
        flavourClosing: "Ven con hambre.<br>Nosotros nos encargamos del resto.",
        infoTitle: "Nos vemos<br>en Espartinas.",
        socialTitle: "Sígue<br><em>nos.</em>",
        openMaps: 'Abrir en Google Maps <span aria-hidden="true">↗</span>',
      },
      aria: {
        headerLabel: "Cabecera",
        homeLabel: "Mister Doner, inicio",
        navLabel: "Navegación principal",
        languageSwitcherLabel: "Seleccionar idioma",
        heroLogoLabel: "Logotipo oficial de Mister Doner",
        foodGridLabel: "Selección de platos de Mister Doner",
        phoneAriaLabel: "Llamar al 955 64 04 90",
        socialMapsAriaLabel: "Abrir Mister Doner en Google Maps, se abre en una pestaña nueva",
        emailAriaLabel: "Enviar email a info@plazalacruz19.com",
        appDownloadGoogleAriaLabel: "Descarga la app de Foodsted en Google Play",
        appDownloadAppleAriaLabel: "Descarga la app de Foodsted en App Store",
        socialNavLabel: "Redes sociales de Mister Doner",
        facebookAriaLabel: "Mister Doner en Facebook, se abre en una pestaña nueva",
        instagramAriaLabel: "Mister Doner en Instagram, se abre en una pestaña nueva",
        tiktokAriaLabel: "Mister Doner en TikTok, se abre en una pestaña nueva",
      },
    },
    en: {
      pageTitle: "Mister Doner Espartinas | Grand Opening October 15",
      ogLocale: "en_US",
      text: {
        navPickup: "Pick-up",
        navDelivery: "Delivery",
        navDineIn: "Dine-in",
        navAbout: "About",
        navContact: "Contact",
        bookTable: "Book Table",
        menuOpen: "Open menu",
        heroTitleOne: "Grand",
        heroTitleTwo: "opening",
        heroDateLabel: "The big day",
        heroDate: "October 15",
        directions: "Order now",
        brandTagline: "Flavor runs the show.",
        tickerDate: "OCTOBER 15",
        tickerLocation: "ESPARTINAS",
        tickerEvent: "GRAND OPENING",
        flavourSectionLabel: "Flavor runs the show",
        flavourSignature: "MISTER DONER - Flavor runs the show.",
        infoSectionLabel: "Information",
        infoCopy: "We are easy to find and always happy to hear from you. Reach out or visit us anytime.",
        addressLabel: "Address",
        phoneLabel: "Phone",
        tapToCall: "Tap to call",
        followUsLabel: "Follow us",
        socialSectionLabel: "Social media",
        socialCopy: "Follow us on social media for exclusive offers, news, and more.",
        socialInfoTitle: "Information",
        emailLabel: "Email",
        appDownloadTitle: "Download Foodsted App",
        openingHoursLabel: "Opening hours",
        openingHoursSummary: "Weekly schedule",
        openingHoursTitle: "Opening hours",
        todayLabel: "Today",
        dayMonday: "Monday",
        dayTuesday: "Tuesday",
        dayWednesday: "Wednesday",
        dayThursday: "Thursday",
        dayFriday: "Friday",
        daySaturday: "Saturday",
        daySunday: "Sunday",
        copyright: "2026 Mister Doner. All rights reserved.",
        poweredBy: "Powered by",
      },
      html: {
        heroLocation: '<span aria-hidden="true"></span> Espartinas · Seville',
        flavourTitle: "Flavor is<br><em>the main event.</em>",
        flavourIntroOne:
          "At <strong>MISTER DONER Espartinas</strong>, flavor is the main event. Enjoy döner kebab, freshly prepared dürüms, irresistible burgers, pizzas, tacos, combo plates, and much more, made to order so everything arrives hot, fresh, and full of flavor.",
        flavourIntroTwo:
          "Juicy meat, fresh ingredients, sauces that make the difference, and combinations made for when you really want to eat well. Whether it is a quick lunch, dinner with friends, picking up your order, or enjoying it in our restaurant, at <strong>MISTER DONER</strong> there is always a good reason to come back.",
        flavourClosing: "Come hungry.<br>We will handle the rest.",
        infoTitle: "See you<br>in Espartinas.",
        socialTitle: "Follow<br><em>us.</em>",
        openMaps: 'Open in Google Maps <span aria-hidden="true">↗</span>',
      },
      aria: {
        headerLabel: "Header",
        homeLabel: "Mister Doner, home",
        navLabel: "Main navigation",
        languageSwitcherLabel: "Select language",
        heroLogoLabel: "Official Mister Doner logo",
        foodGridLabel: "Selection of Mister Doner dishes",
        phoneAriaLabel: "Call 955 64 04 90",
        socialMapsAriaLabel: "Open Mister Doner in Google Maps, opens in a new tab",
        emailAriaLabel: "Email info@plazalacruz19.com",
        appDownloadGoogleAriaLabel: "Download the Foodsted app on Google Play",
        appDownloadAppleAriaLabel: "Download the Foodsted app on the App Store",
        socialNavLabel: "Mister Doner social media",
        facebookAriaLabel: "Mister Doner on Facebook, opens in a new tab",
        instagramAriaLabel: "Mister Doner on Instagram, opens in a new tab",
        tiktokAriaLabel: "Mister Doner on TikTok, opens in a new tab",
      },
    },
  };

  const getSavedLanguage = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  };

  const saveLanguage = (language) => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The switcher still works when storage is unavailable.
    }
  };

  const setLanguage = (language) => {
    const selectedLanguage = translations[language] ? language : "es";
    const content = translations[selectedLanguage];
    const ogLocale = document.querySelector('meta[property="og:locale"]');

    document.documentElement.lang = selectedLanguage;
    document.title = content.pageTitle;

    if (ogLocale) {
      ogLocale.setAttribute("content", content.ogLocale);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = content.text[element.dataset.i18n];

      if (value) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = content.html[element.dataset.i18nHtml];

      if (value) {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = content.aria[element.dataset.i18nAriaLabel];

      if (value) {
        element.setAttribute("aria-label", value);
      }
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
    });

    saveLanguage(selectedLanguage);
  };

  const initLanguageSwitcher = () => {
    const savedLanguage = getSavedLanguage();

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.language);
      });
    });

    setLanguage(translations[savedLanguage] ? savedLanguage : "es");
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
