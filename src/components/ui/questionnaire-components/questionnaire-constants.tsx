export const timelineOptions = [
  {
    label: "Informations personnelles et situation de famille",
    subCategories: [
      {
        label: "Nom, prénom, date de naissance, adresse",
        ids: ["first-name", "last-name", "birth-date", "address"],
      },
      {
        label: "Situation familiale (célibataire, marié, pacsé, divorcé, veuf)",
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
    label: "What’s your first name?",  
    id: "first-name", 
    placeholder: "Enter your first name" 
  },
  { 
    label: "What’s your last name?",  
    id: "last-name", 
    placeholder: "Enter your last name" 
  },
  { 
    label: "When were you born?",  
    id: "birth-date", 
    placeholder: "Enter your birth date (YYYY-MM-DD)" 
  },
  { 
    label: "Where do you live?",  
    id: "address", 
    placeholder: "Enter your address" 
  },
  { 
    label: "What’s your marital status?",  
    id: "marital-status", 
    placeholder: "Enter your marital status (e.g., single, married)" 
  },
  { 
    label: "How many children or dependents do you have?",  
    id: "number-of-dependents", 
    placeholder: "Enter the number of dependents" 
  },

  // Revenus principaux
  { 
    label: "Did you receive any salaries or pensions this year?",  
    id: "received-salaries-or-pensions", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Did you earn income from investments (e.g., interest, dividends)?",  
    id: "received-investment-income", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Did you earn income from rental properties?",  
    id: "received-property-income", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Did you have self-employment income (e.g., micro-entreprise, freelance)?",  
    id: "self-employment-income", 
    placeholder: "Enter 'yes' or 'no'" 
  },

  // Dépenses déductibles et charges
  { 
    label: "Did you incur any actual expenses (e.g., transport, meals)?",  
    id: "incurred-actual-expenses", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Did you pay alimony?",  
    id: "paid-alimony", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Did you carry out renovations in a rental property?",  
    id: "rental-property-renovations", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Do you have any other specific expenses?",  
    id: "other-specific-expenses", 
    placeholder: "Enter 'yes' or 'no'" 
  },

  // Réductions et crédits d’impôts
  { 
    label: "Did you use any personal services (e.g., housekeeping)?",  
    id: "personal-services-used", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Did you make donations to eligible organizations?",  
    id: "donations-to-eligible-organizations", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Did you invest in tax-saving schemes (e.g., Pinel, Duflot)?",  
    id: "invested-in-tax-schemes", 
    placeholder: "Enter 'yes' or 'no'" 
  },
  { 
    label: "Do you have other tax credits (e.g., solar panels)?",  
    id: "other-tax-credits", 
    placeholder: "Enter 'yes' or 'no'" 
  },
];
