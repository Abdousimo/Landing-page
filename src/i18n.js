import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "fr",
    resources: {
      fr: {
        translation: {
            "Navbar": {
              "list":{
                "home":"Accueil",
                "howitworks":"Comment ça marche",
                "about":"À propos",
                "contact":"Contact"
              },
              "button":{
                "register":"S'inscrire",
                "login":"Se connecter"
            }
        },
        "Hero": {
          "title": {
            "black":"Voyagez en",
            "orange":"Toute Sérénité,"

          },
          "subtitle": {
            "black":"Nous Gérons",
            "orange":"les Imprévus !"},
        },
        "About": {
          "title": "À propos",
          "subtitle":"Notre solution Bag&Go",
          "paragraph": "Bag&Go est une solution dédiée à la gestion rapide et efficace des imprévus de voyage. Que vous soyez confronté à un bagage perdu, un vol retardé ou annulé, notre mission est de transformer votre expérience de voyage en réduisant au minimum les tracas. ",
          "numbers":{
            "one":"Bagages retrouvés",
            "two":"Clients satisfaits",
            "three":"Vols pris en charge",
            "four":"Assistance disponible",
          },
        },
        "Form":{
          "top":{
            "one":"Bagages perdus ou endommagés",
            "two":"Vol retardé ou annulé",
            "three":"Correspondance manquée",
            "four":"Surbooking",
          },
          "bottom":{
            "title":"Informations sur le vol",
            "one":{
              "title":"Départ",
              "placeholder":"Lieu de départ?",
            },
            "two":{
              "title":"Arrivée",
              "placeholder":"Lieu d’arrivée",
            },
            "three":{
              "title":"Date de départ",
              "placeholder":"DD/MM/YYYY",
            },
            "four":{
              "title":"Compagnie aérienne",
              "placeholder":"écrivez votre compagnie aérienne",
            },
            "five":{
              "title":"Aviez-vous un vol direct ou avec escales ?",
              "placeholder":"Choisissez une réponse",
              "option1":"Choisissez une réponse",
              "option2":"Vol direct",
              "option3":"Avec escales",
            },
            "submit":"Signaler mon incident",
          },
        },
        "Testimonials":{
          "title":"Témoignages",
          "subtitle":"Ce qu’ils disent sur nous",
        },
        "HowItWorks": {
          "title": "Comment ça marche",
          "subtitle": "Signalez votre incident de voyage en quelques clics, suivez l'évolution de votre demande en temps réel, et bénéficiez de notre assistance pour trouver des solutions ou obtenir des compensations. Simplifiez la gestion de vos imprévus et voyagez l'esprit léger !",
          "steps": {
            "one": {
              "title": "Signalez Votre Incident",
              "description": "Remplissez rapidement notre formulaire pour bagages perdus, vols retardés ou annulés."
            },
            "two": {
              "title": "Recevez des Mises à Jour",
              "description": "Suivez l'avancement de votre réclamation ou demande en temps réel."
            },
            "three": {
              "title": "Assistance & Compensation",
              "description": "Nous travaillons avec les compagnies pour obtenir des compensations."},
          },
        },
        "FAQ":{
          "title":"Questions Fréquemment Posées (FAQs)",
          "questions":{
            "one":{
              "question":"Comment signaler un vol retardé ou annulé ?",
              "answer":"Pour signaler un vol retardé ou annulé, connectez-vous à votre compte sur notre plateforme et accédez à la section 'Signaler un Incident'. Remplissez le formulaire en renseignant les détails de votre vol, tels que le numéro de vol, la date et la compagnie aérienne, ainsi que la nature de l'incident. Une fois la demande soumise, vous recevrez des mises à jour régulières sur son traitement."
            },
            "two":{
              "question":"Ce service est-il disponible pour tous les vols internationaux ?",
              "answer":"Oui, notre service Bag&Go est disponible pour tous les vols internationaux, quelle que soit la compagnie aérienne ou la destination. Que vous voyagiez pour affaires ou pour le",
          },
          "three":{
            "question":"Puis-je suivre l'évolution de ma demande ?",
            "answer":"Oui, vous pouvez suivre l'évolution de votre demande en vous connectant à votre compte sur notre plateforme. Une fois connecté, accédez à la section 'Suivi de Réclamation' pour consulter l'état de votre demande, les mises à jour et les actions en cours."},
          "four":{
            "question":"Comment obtenir une compensation pour un incident de voyage ?",
            "answer":" Pour obtenir une compensation pour un incident de voyage, veuillez remplir le formulaire de réclamation sur notre plateforme en fournissant les détails de l'incident, tels que la nature du problème, les pertes subies et les dommages causés. Notre équipe traitera votre demande et vous informera des mesures prises pour résoudre le problème.",
          },
        },
        },
        "Panel":{
          "desc":"Où que vous soyez, Bag&Go est là pour transformer vos imprévus de voyage en solutions."
        },
        "Footer":{
          "one":{
            "title":"A propos",
            "content":{
              "one":"A propos de nous",
              "two":"Comment ça marche",
              "three":"FAQ",
            }
          },
          "two":{
            "title":"Support",
            "content":{
              "one":"Contactez-nous",
              "two":"Suivi de votre réclamation",
              "three":"Centre d'aide",
            }
          },
          "three":{
            "title":"Informations légales",
            "content":{
              "one":"Mentions légales",
              "two":"Politique de confidentialité",
              "three":"Conditions d'utilisation",
            }
          },
          "four":{
            "title":"Newsletter",
            "form":{
              "placeholder":"écrivez votre adresse email",
              "button":"S'inscrire"
            },
            "follow":"Suivez-nous",
          },
        }
      },
    },
    en: {
      translation: {
          "Navbar": {
            "list":{
              "home":"Home",
              "howitworks":"How it works",
              "about":"About",
              "contact":"Contact"
            },
            "button":{
              "register":"Register",
              "login":"Login"
          }
      },
      "Hero": {
          "title": {
            "black":"Travel with",
            "orange":"Peace of Mind,"

          },
          "subtitle": {
            "black":"We Manage",
            "orange":"the Unforeseen!"},
        },
        "About": {
  "title": "About",
  "subtitle": "Our Bag&Go Solution",
  "paragraph": "Bag&Go is a solution dedicated to the quick and efficient management of travel disruptions. Whether you are dealing with lost luggage, a delayed or canceled flight, our mission is to transform your travel experience by minimizing hassles.",
  "numbers": {
    "one": "Luggage recovered",
    "two": "Satisfied customers",
    "three": "Flights supported",
    "four": "Available assistance"
  }
},
"Form": {
  "top": {
    "one": "Lost or damaged luggage",
    "two": "Delayed or canceled flight",
    "three": "Missed connection",
    "four": "Overbooking"
  },
  "bottom": {
    "title": "Flight Information",
    "one": {
      "title": "Departure",
      "placeholder": "Departure location?"
    },
    "two": {
      "title": "Arrival",
      "placeholder": "Arrival location"
    },
    "three": {
      "title": "Departure Date",
      "placeholder": "DD/MM/YYYY"
    },
    "four": {
      "title": "Airline",
      "placeholder": "Enter your airline"
    },
    "five": {
      "title": "Was your flight direct or with layovers?",
      "placeholder": "Choose an answer",
      "option1": "Choose an answer",
      "option2": "Direct flight",
      "option3": "With layovers"
    },
    "submit": "Report my incident"
  }
}
,
"Testimonials": {
  "title": "Testimonials",
  "subtitle": "What our clients say about us"
},
"HowItWorks": {
  "title": "How It Works",
  "subtitle": "Report your travel incident in just a few clicks, track the progress of your claim in real-time, and benefit from our assistance to find solutions or obtain compensation. Simplify the management of unexpected issues and travel with peace of mind!",
 "steps": {
  "one": {
    "title": "Report Your Incident",
    "description": "Quickly fill out our form for lost luggage, delayed, or canceled flights."
  },
  "two": {
    "title": "Receive Updates",
    "description": "Track the progress of your claim or request in real-time."
  },
  "three": {
    "title": "Assistance & Compensation",
    "description": "We work with airlines to obtain compensation."
  }
}

},
"FAQ": {
  "title": "Frequently Asked Questions (FAQs)",
  "questions": {
    "one": {
      "question": "How do I report a delayed or canceled flight?",
      "answer": "To report a delayed or canceled flight, log in to your account on our platform and navigate to the 'Report an Incident' section. Fill out the form with details of your flight, such as the flight number, date, airline, and nature of the incident. Once submitted, you will receive regular updates on its progress."
    },
    "two": {
      "question": "Is this service available for all international flights?",
      "answer": "Yes, our Bag&Go service is available for all international flights, regardless of the airline or destination. Whether you are traveling for business or leisure, we have you covered."
    },
    "three": {
      "question": "Can I track the progress of my claim?",
      "answer": "Yes, you can track the progress of your claim by logging into your account on our platform. Once logged in, go to the 'Claim Tracking' section to view the status of your claim, updates, and ongoing actions."
    },
    "four": {
      "question": "How can I get compensation for a travel incident?",
      "answer": "To receive compensation for a travel incident, please fill out the claim form on our platform, providing details of the incident, such as the nature of the issue, losses incurred, and damages caused. Our team will process your request and inform you of the actions taken to resolve the problem."
    }
  }
}
,
"Panel": {
  "desc": "Wherever you are, Bag&Go is here to turn your travel disruptions into solutions."
}
,
        "Footer": {
  "one": {
    "title": "About",
    "content": {
      "one": "About us",
      "two": "How it works",
      "three": "FAQ"
    }
  },
  "two": {
    "title": "Support",
    "content": {
      "one": "Contact us",
      "two": "Track your claim",
      "three": "Help Center"
    }
  },
  "three": {
    "title": "Legal Information",
    "content": {
      "one": "Legal notice",
      "two": "Privacy Policy",
      "three": "Terms of Use"
    }
  },
  "four": {
    "title": "Newsletter",
    "form": {
      "placeholder": "Enter your email address",
      "button": "Sign up"
    },
    "follow": "Follow us"
  }
}

    }},
  },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
      caches: ['cookie']
    },
    // backend: {
    //   loadPath: '/locales/{{lng}}/translation.json',
    // },
  });

  export default i18n;