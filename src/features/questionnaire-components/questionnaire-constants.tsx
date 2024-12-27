export const timelineOptions = [
  {
    label: "Informations personnelles et situation de famille",
    subCategories: [
      {
        label: "Prénom",
        ids: ["first-name"],
      },
      {
        label: "Nom de famille",
        ids: ["last-name"],
      },
      {
        label: "Date de naissance",
        ids: ["birth-date"],
      },

      {
        label: "Adresse",
        ids: ["address"],
      },
      {
        label: "Situation familiale",
        ids: ["marital-status"],
      },
      {
        label: "Nombre d’enfants ou autres personnes à charge",
        ids: ["number-of-dependents"],
      },
    ],
  },
  {
    label: "Revenus principaux",
    subCategories: [
      {
        label: "Avez-vous perçu des salaires ou retraites cette année ?",
        ids: ["received-salaries-or-pensions"],
      },
      {
        label:
          "Avez-vous perçu des revenus de placement (intérêts, dividendes) ?",
        ids: ["received-investment-income"],
      },
      {
        label: "Avez-vous perçu des revenus fonciers (loyers) ?",
        ids: ["received-property-income"],
      },
      {
        label:
          "Avez-vous des revenus d’activité indépendante (micro-entreprise, profession libérale) ?",
        ids: ["self-employment-income"],
      },
    ],
  },
  {
    label: "Dépenses déductibles et charges",
    subCategories: [
      {
        label: "Avez-vous engagé des frais réels (transport, repas) ?",
        ids: ["incurred-actual-expenses"],
      },
      {
        label: "Avez-vous versé des pensions alimentaires ?",
        ids: ["paid-alimony"],
      },
      {
        label: "Avez-vous effectué des travaux dans un logement locatif ?",
        ids: ["rental-property-renovations"],
      },
      {
        label: "Autres charges spécifiques ?",
        ids: ["other-specific-expenses"],
      },
    ],
  },
  {
    label: "Réductions et crédits d’impôts",
    subCategories: [
      {
        label: "Avez-vous eu recours à des services à la personne ?",
        ids: ["personal-services-used"],
      },
      {
        label: "Avez-vous réalisé des dons à des associations éligibles ?",
        ids: ["donations-to-eligible-organizations"],
      },
      {
        label:
          "Avez-vous investi dans des dispositifs fiscaux (Pinel, Duflot) ?",
        ids: ["invested-in-tax-schemes"],
      },
      {
        label: "Autres crédits d’impôts (ex : panneaux solaires) ?",
        ids: ["other-tax-credits"],
      },
    ],
  },
];

export const questions = [
  // Informations personnelles et situation de famille
  {
    label: "Quel est votre prénom ?",
    id: "first-name",
    placeholder: "Entrez votre prénom",
  },
  {
    label: "Quel est votre nom de famille ?",
    id: "last-name",
    placeholder: "Entrez votre nom de famille",
  },
  {
    label: "Quelle est votre date de naissance ?",
    id: "birth-date",
    placeholder: "Entrez votre date de naissance (AAAA-MM-JJ)",
  },
  {
    label: "Où habitez-vous ?",
    id: "address",
    placeholder: "Entrez votre adresse",
  },
  {
    label: "Quel est votre statut matrimonial ?",
    id: "marital-status",
    placeholder:
      "Entrez votre statut matrimonial (ex : célibataire, marrié.e, divorcié.e, veuf/veuve,...)",
  },
  {
    label: "Combien d'enfants ou de personnes à charge avez-vous ?",
    id: "number-of-dependents",
    placeholder: "Entrez le nombre de personnes à charge",
  },

  // Revenus principaux
  {
    label: "Avez-vous perçu des salaires ou des pensions cette année ?",
    id: "received-salaries-or-pensions",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label:
      "Avez-vous perçu des revenus d'investissements (ex : intérêts, dividendes) ?",
    id: "received-investment-income",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label: "Avez-vous perçu des revenus de biens locatifs ?",
    id: "received-property-income",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label:
      "Avez-vous des revenus d'activité indépendante (ex : micro-entreprise, freelance) ?",
    id: "self-employment-income",
    placeholder: "Entrez 'oui' ou 'non'",
  },

  // Dépenses déductibles et charges
  {
    label: "Avez-vous engagé des frais réels (ex : transport, repas) ?",
    id: "incurred-actual-expenses",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label: "Avez-vous payé une pension alimentaire ?",
    id: "paid-alimony",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label: "Avez-vous effectué des rénovations dans un bien locatif ?",
    id: "rental-property-renovations",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label: "Avez-vous d'autres dépenses spécifiques ?",
    id: "other-specific-expenses",
    placeholder: "Entrez 'oui' ou 'non'",
  },

  // Réductions et crédits d’impôts
  {
    label: "Avez-vous utilisé des services à la personne (ex : ménage) ?",
    id: "personal-services-used",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label: "Avez-vous fait des dons à des organismes éligibles ?",
    id: "donations-to-eligible-organizations",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label:
      "Avez-vous investi dans des dispositifs de défiscalisation (ex : Pinel, Duflot) ?",
    id: "invested-in-tax-schemes",
    placeholder: "Entrez 'oui' ou 'non'",
  },
  {
    label: "Avez-vous d'autres crédits d'impôt (ex : panneaux solaires) ?",
    id: "other-tax-credits",
    placeholder: "Entrez 'oui' ou 'non'",
  },
];
