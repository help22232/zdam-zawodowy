/* Katalog kwalifikacji (podstawa programowa kształcenia w zawodach, od 2019 r.) */
window.KURSY = window.KURSY || {};
window.KATALOG = [
  // Teleinformatyczna
  { kod: "INF.02", branza: "Branża teleinformatyczna", nazwa: "Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych", zawody: ["technik informatyk", "technik teleinformatyk"] },
  { kod: "INF.03", branza: "Branża teleinformatyczna", nazwa: "Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych", zawody: ["technik informatyk", "technik programista"] },
  { kod: "INF.04", branza: "Branża teleinformatyczna", nazwa: "Projektowanie, programowanie i testowanie aplikacji", zawody: ["technik programista"] },
  { kod: "INF.07", branza: "Branża teleinformatyczna", nazwa: "Montaż i konfiguracja lokalnych sieci komputerowych", zawody: ["technik teleinformatyk"] },
  { kod: "INF.08", branza: "Branża teleinformatyczna", nazwa: "Eksploatacja i konfiguracja oraz administrowanie sieciami rozległymi", zawody: ["technik teleinformatyk"] },

  // Ekonomiczno-administracyjna
  { kod: "EKA.01", branza: "Branża ekonomiczno-administracyjna", nazwa: "Obsługa klienta w jednostkach administracji", zawody: ["technik administracji"] },
  { kod: "EKA.04", branza: "Branża ekonomiczno-administracyjna", nazwa: "Prowadzenie dokumentacji w jednostce organizacyjnej", zawody: ["technik ekonomista", "technik prac biurowych", "technik rachunkowości"] },
  { kod: "EKA.05", branza: "Branża ekonomiczno-administracyjna", nazwa: "Prowadzenie spraw kadrowo-płacowych i gospodarki finansowej jednostek organizacyjnych", zawody: ["technik ekonomista"] },
  { kod: "EKA.07", branza: "Branża ekonomiczno-administracyjna", nazwa: "Prowadzenie rachunkowości", zawody: ["technik rachunkowości"] },

  // Spedycyjno-logistyczna
  { kod: "SPL.01", branza: "Branża spedycyjno-logistyczna", nazwa: "Obsługa magazynów", zawody: ["technik logistyk", "magazynier-logistyk"] },
  { kod: "SPL.04", branza: "Branża spedycyjno-logistyczna", nazwa: "Organizacja transportu", zawody: ["technik logistyk", "technik spedytor"] },

  // Handlowa
  { kod: "HAN.01", branza: "Branża handlowa", nazwa: "Prowadzenie sprzedaży", zawody: ["sprzedawca", "technik handlowiec", "technik księgarstwa"] },
  { kod: "HAN.02", branza: "Branża handlowa", nazwa: "Prowadzenie działań handlowych", zawody: ["technik handlowiec"] },

  // Hotelarsko-gastronomiczno-turystyczna
  { kod: "HGT.01", branza: "Branża hotelarsko-gastronomiczno-turystyczna", nazwa: "Wykonywanie usług kelnerskich", zawody: ["kelner", "technik usług kelnerskich"] },
  { kod: "HGT.02", branza: "Branża hotelarsko-gastronomiczno-turystyczna", nazwa: "Przygotowanie i wydawanie dań", zawody: ["kucharz", "technik żywienia i usług gastronomicznych"] },
  { kod: "HGT.03", branza: "Branża hotelarsko-gastronomiczno-turystyczna", nazwa: "Obsługa gości w obiekcie świadczącym usługi hotelarskie", zawody: ["technik hotelarstwa"] },
  { kod: "HGT.06", branza: "Branża hotelarsko-gastronomiczno-turystyczna", nazwa: "Realizacja usług w recepcji", zawody: ["technik hotelarstwa"] },
  { kod: "HGT.07", branza: "Branża hotelarsko-gastronomiczno-turystyczna", nazwa: "Przygotowanie i realizacja imprez i usług turystycznych", zawody: ["technik organizacji turystyki"] },
  { kod: "HGT.12", branza: "Branża hotelarsko-gastronomiczno-turystyczna", nazwa: "Organizacja żywienia i usług gastronomicznych", zawody: ["technik żywienia i usług gastronomicznych"] },

  // Spożywcza
  { kod: "SPC.01", branza: "Branża spożywcza", nazwa: "Produkcja wyrobów cukierniczych", zawody: ["cukiernik", "technik technologii żywności"] },

  // Motoryzacyjna
  { kod: "MOT.02", branza: "Branża motoryzacyjna", nazwa: "Obsługa, diagnozowanie oraz naprawa mechatronicznych systemów pojazdów samochodowych", zawody: ["elektromechanik pojazdów samochodowych", "technik pojazdów samochodowych"] },
  { kod: "MOT.05", branza: "Branża motoryzacyjna", nazwa: "Obsługa, diagnozowanie oraz naprawa pojazdów samochodowych", zawody: ["mechanik pojazdów samochodowych", "technik pojazdów samochodowych"] },
  { kod: "MOT.06", branza: "Branża motoryzacyjna", nazwa: "Organizacja i prowadzenie procesu obsługi pojazdów samochodowych", zawody: ["technik pojazdów samochodowych"] },

  // Elektroenergetyczna
  { kod: "ELE.02", branza: "Branża elektroenergetyczna", nazwa: "Montaż, uruchamianie i konserwacja instalacji, maszyn i urządzeń elektrycznych", zawody: ["elektryk", "technik elektryk"] },
  { kod: "ELE.05", branza: "Branża elektroenergetyczna", nazwa: "Eksploatacja maszyn, urządzeń i instalacji elektrycznych", zawody: ["technik elektryk"] },

  // Elektroniczno-mechatroniczna
  { kod: "ELM.02", branza: "Branża elektroniczno-mechatroniczna", nazwa: "Montaż oraz instalowanie układów i urządzeń elektronicznych", zawody: ["elektronik", "technik elektronik"] },
  { kod: "ELM.03", branza: "Branża elektroniczno-mechatroniczna", nazwa: "Montaż, uruchamianie i konserwacja urządzeń i systemów mechatronicznych", zawody: ["mechatronik", "technik mechatronik"] },
  { kod: "ELM.06", branza: "Branża elektroniczno-mechatroniczna", nazwa: "Eksploatacja i programowanie urządzeń i systemów mechatronicznych", zawody: ["technik mechatronik"] },

  // Mechaniczna
  { kod: "MEC.03", branza: "Branża mechaniczna", nazwa: "Montaż i obsługa maszyn i urządzeń", zawody: ["mechanik-monter maszyn i urządzeń", "technik mechanik"] },
  { kod: "MEC.05", branza: "Branża mechaniczna", nazwa: "Użytkowanie obrabiarek skrawających", zawody: ["operator obrabiarek skrawających", "technik mechanik"] },
  { kod: "MEC.08", branza: "Branża mechaniczna", nazwa: "Wykonywanie i naprawa elementów maszyn, urządzeń i narzędzi", zawody: ["ślusarz", "technik mechanik"] },
  { kod: "MEC.09", branza: "Branża mechaniczna", nazwa: "Organizacja i nadzorowanie procesów produkcji maszyn i urządzeń", zawody: ["technik mechanik"] },

  // Budowlana
  { kod: "BUD.11", branza: "Branża budowlana", nazwa: "Wykonywanie robót montażowych, okładzinowych i wykończeniowych", zawody: ["monter zabudowy i robót wykończeniowych w budownictwie"] },
  { kod: "BUD.12", branza: "Branża budowlana", nazwa: "Wykonywanie robót murarskich i tynkarskich", zawody: ["murarz-tynkarz", "technik budownictwa"] },
  { kod: "BUD.14", branza: "Branża budowlana", nazwa: "Organizacja i kontrola robót budowlanych oraz sporządzanie kosztorysów", zawody: ["technik budownictwa"] },

  // Fryzjersko-kosmetyczna
  { kod: "FRK.01", branza: "Branża fryzjersko-kosmetyczna", nazwa: "Wykonywanie zabiegów fryzjerskich", zawody: ["fryzjer", "technik usług fryzjerskich"] },
  { kod: "FRK.03", branza: "Branża fryzjersko-kosmetyczna", nazwa: "Projektowanie fryzur", zawody: ["technik usług fryzjerskich"] },
  { kod: "FRK.04", branza: "Branża fryzjersko-kosmetyczna", nazwa: "Wykonywanie zabiegów kosmetycznych", zawody: ["technik usług kosmetycznych"] },

  // Rolno-hodowlana
  { kod: "ROL.04", branza: "Branża rolno-hodowlana", nazwa: "Prowadzenie produkcji rolniczej", zawody: ["rolnik", "technik rolnik"] },
  { kod: "ROL.10", branza: "Branża rolno-hodowlana", nazwa: "Organizacja i nadzorowanie produkcji rolniczej", zawody: ["technik rolnik"] }
];
