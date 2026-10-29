export interface DestinationData {
  slug: string;
  name: string;
  shortName: string;
  regionLabel: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  popularCourses: string[];
  academicPathways: {
    level: string;
    duration: string;
    overview: string;
  }[];
  universityCategories: string;
  universityExamples: {
    name: string;
    category: string;
    focusAreas: string;
  }[];
  indicativeAdmissionRequirements: string[];
  languagePreparation: {
    acceptedTests: string[];
    localLanguageNote: string;
  };
  costGuidance: {
    overview: string;
    tuitionStructureNote: string;
    livingCostFactors: string[];
    lastChecked: string;
  };
  scholarshipGuidance: string[];
  visaPreparation: {
    visaRouteName: string;
    keyRequirements: string[];
    authorityDisclaimer: string;
  };
  accommodationAndPreDeparture: string[];
  studentChecklist: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaLabel: string;
}

export interface ServiceData {
  slug: string;
  number: string;
  navTitle: string;
  title: string;
  blueprintSummary: string;
  blueprintSecondary?: string;
  regulatoryDisclaimer?: string;
  overview: string;
  howItWorks: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  studentRequirements: string[];
  checklistTitle: string;
  preparationChecklist: string[];
  highlights: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ScholarshipItem {
  id: string;
  title: string;
  fundingCategory: 'Merit-Based' | 'Need-Based' | 'Institutional Fee Waiver' | 'Public / Government';
  country: 'United Kingdom' | 'Australia' | 'Germany' | 'Dubai (UAE)' | 'France' | 'South Korea' | 'Multi-Country';
  degreeLevel: "Bachelor's" | "Master's" | 'Doctoral / PhD' | 'All Degrees';
  fundingTypeSummary: string;
  indicativeEligibility: string[];
  applicationWindowNote: string;
  verificationLabel: string;
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  category:
    | 'Country Guides'
    | 'Visa Interview Checklists'
    | 'Cost-of-Living Breakdowns'
    | 'Application & SOP Guides'
    | 'IELTS and PTE Preparation'
    | 'German Language Learning'
    | 'Pre-Departure Checklists';
  targetCountry: string;
  readTime: string;
  publicationStatus: 'Available Online & Printable' | 'Official PDF Available' | 'Awaiting PDF Publication';
  downloadUrl?: string;
  shortDescription: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    body: string;
    checklist?: string[];
  }[];
}

export const SITE_CONFIG = {
  brandName: 'GRADSAIL GLOBAL',
  tagline: 'Sail Towards Your Global Degree',
  brandPromise: 'Your Bridge to Top Global Universities',
  logoUrl: '/assets/aistudio/image_aa7af899.png',
  blueprintPdfUrl: '/assets/aistudio/Gradsail_Global_Website_Blueprint_99eb36de.pdf',
  lastContentReviewDate: 'October 2026',
  // Configurable placeholders for business contact details (kept transparent & uninvented per content accuracy rules)
  contact: {
    emailConfigured: false,
    emailPlaceholder: 'To be configured before launch (e.g., admissions@gradsailglobal.com)',
    phoneConfigured: false,
    phonePlaceholder: 'To be configured before launch (Official Counseling Desk Line)',
    whatsappConfigured: false,
    whatsappPlaceholder: 'WhatsApp Business number pending configuration',
    officeConfigured: false,
    officePlaceholder: 'Advisory office location details to be published upon launch configuration',
    counselingHours: 'Monday – Saturday · By Scheduled Counseling Appointment',
  },
  intakes: ['Spring 2027', 'Fall 2027', 'Future Intake', 'Not Decided'],
  qualifications: ['High School', "Bachelor's", "Master's", 'Other'],
  degreeLevels: ["Bachelor's", "Master's", 'Doctoral / PhD', 'Diploma / Other'],
  countriesList: [
    'United Kingdom',
    'Australia',
    'Germany',
    'Dubai / UAE',
    'France',
    'South Korea',
    'Other',
  ],
};

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Profile Evaluation',
    description:
      'Understand your academic background, preferred destination, budget, and career aspirations.',
    deliverable: 'Structured academic & destination alignment report',
  },
  {
    step: '02',
    title: 'Application & SOP',
    description:
      'Shortlist suitable courses, prepare your Statement of Purpose, and manage university applications.',
    deliverable: 'Curated course shortlist, SOP review & submission tracking',
  },
  {
    step: '03',
    title: 'Visa Guidance',
    description:
      'Get guidance on documentation, financial preparation, and visa interview practice.',
    deliverable: 'Embassy-aligned document checklist & mock interview prep',
  },
  {
    step: '04',
    title: 'Pre-Departure',
    description:
      'Prepare for accommodation, travel, forex requirements, and life in your destination country.',
    deliverable: 'Housing coordination, forex checklist & arrival briefing',
  },
];

export const DESTINATIONS: DestinationData[] = [
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    shortName: 'UK',
    regionLabel: 'Europe · English-Taught',
    tagline: 'Centuries of academic heritage paired with intensive one-year Master’s programs and global research hubs.',
    shortDescription:
      'Explore intensive undergraduate and postgraduate degrees across England, Scotland, Wales, and Northern Ireland with globally recognized research institutions.',
    overview:
      'The United Kingdom remains one of the most established destinations for international students seeking rigorous academic standards, structured degree durations, and globally respected qualifications. Undergraduate Honours degrees typically span three years in England, Wales, and Northern Ireland (four years in Scotland), while most taught Master’s programs complete in twelve months—helping students optimize both time and living expenses.',
    popularCourses: ['STEM (Computer Science, Engineering, Data Analytics)', 'Business, Finance & Management', 'Law (LLB & LLM Pathways)'],
    academicPathways: [
      {
        level: 'Undergraduate (BA / BSc / BEng / LLB)',
        duration: '3 Years (4 Years in Scotland or with Placement)',
        overview: 'Direct entry following qualifying high school credentials or via a recognized International Foundation Year.',
      },
      {
        level: 'Postgraduate Taught (MSc / MA / MBA / LLM)',
        duration: '1 Year Full-Time (Up to 2 Years with Industry Placement)',
        overview: 'Focused academic specialization with dissertation or applied capstone project components.',
      },
      {
        level: 'Doctoral & Research (MPhil / PhD)',
        duration: '3 to 4 Years Full-Time',
        overview: 'Supervisor-led independent research within specialized university faculties and institutes.',
      },
    ],
    universityCategories: 'Russell Group universities, Oxford, London-based institutions',
    universityExamples: [
      {
        name: 'University of Oxford & Historic Collegiate Universities',
        category: 'Collegiate Research Universities',
        focusAreas: 'Humanities, Law, Sciences, Advanced Research',
      },
      {
        name: 'Russell Group Member Institutions',
        category: 'Research-Intensive Public Universities',
        focusAreas: 'STEM, Medicine, Economics, Engineering, Public Policy',
      },
      {
        name: 'London-Based Universities & Specialist Schools',
        category: 'Metropolitan & Industry-Connected Campuses',
        focusAreas: 'Finance, Corporate Law, FinTech, Creative Industries, Management',
      },
    ],
    indicativeAdmissionRequirements: [
      'Completed academic transcripts and certificates from high school (Standard XII / A-Levels / IB) or an accredited undergraduate degree.',
      'Proof of English language proficiency such as IELTS Academic, PTE Academic, or equivalent accepted tests (some universities may assess medium-of-instruction criteria on a case-by-case basis).',
      'Tailored Statement of Purpose (Personal Statement) demonstrating academic motivation and course alignment.',
      'Academic or professional Letters of Recommendation (typically one to two references).',
      'Updated CV/Resume and portfolio or work experience evidence where required by specific MBA or design programs.',
    ],
    languagePreparation: {
      acceptedTests: ['IELTS Academic / UKVI', 'PTE Academic / UKVI', 'TOEFL iBT (where accepted)'],
      localLanguageNote:
        'All degree programs are taught in English. Students requiring UK Student Route visas must ensure their English test meets UK Visas and Immigration (UKVI) SELT requirements if stipulated on their Confirmation of Acceptance for Studies (CAS).',
    },
    costGuidance: {
      overview:
        'Total study costs in the UK depend on university location (Inner/Outer London vs. rest of the UK), degree discipline (classroom-based vs. laboratory/clinical), and lifestyle.',
      tuitionStructureNote:
        'International tuition fees vary by institution and program. One-year Master’s programs reduce the number of years of living expenditure compared to multi-year equivalents.',
      livingCostFactors: [
        'UKVI financial maintenance requirements differ between courses studied in London and courses outside London.',
        'Immigration Health Surcharge (IHS) is payable as part of the Student Route visa application to access NHS healthcare services.',
        'University halls of residence or private purpose-built student accommodation (PBSA) costs vary by city.',
      ],
      lastChecked: 'October 2026 (Refer to official GOV.UK Student Visa guidance for current maintenance figures)',
    },
    scholarshipGuidance: [
      'Institutional Merit Awards: Partial tuition fee reductions offered directly by UK universities based on academic grades.',
      'Departmental & Faculty Bursaries: Subject-specific fee waivers in STEM, Business, and Law faculties.',
      'External & Public Scholarships: Commonwealth and government-supported fellowships with independent application timelines.',
    ],
    visaPreparation: {
      visaRouteName: 'UK Student Route Visa',
      keyRequirements: [
        'Confirmation of Acceptance for Studies (CAS) issued by a licensed Student sponsor institution.',
        'Financial evidence showing required tuition balance and living cost maintenance held for the stipulated consecutive 28-day period.',
        'Valid passport, ATAS certificate (for applicable sensitive postgraduate subjects), and TB test certificate from an approved clinic where applicable.',
        'Credibility interview readiness to articulate genuine student intent, course rationale, and financial planning.',
      ],
      authorityDisclaimer:
        'Visa rules, financial thresholds, and post-study regulations are set solely by UK Visas and Immigration (UKVI). Final visa decisions rest with the UK Home Office.',
    },
    accommodationAndPreDeparture: [
      'Early comparison of university-managed halls versus vetted private student residences near campus.',
      'Guidance on UK banking setup, multi-currency forex cards, and initial arrival budgeting.',
      'Pre-departure briefing covering academic integrity norms, GP registration, and student rail/transport discounts.',
    ],
    studentChecklist: [
      'Shortlist 4–6 UK courses aligned with your academic background and career trajectory',
      'Register and prepare for IELTS Academic or PTE Academic',
      'Prepare academic transcripts, reference letters, and a focused Statement of Purpose',
      'Review unconditional offer conditions and CAS deposit timelines',
      'Organize compliant 28-day financial statements for the UK Student Route visa',
    ],
    faqs: [
      {
        question: 'When should I begin my application for UK universities?',
        answer:
          'Ideally, begin 8 to 12 months before your intended September or January intake. Popular Russell Group and London universities often review applications on a rolling or staged deadline basis.',
      },
      {
        question: 'Are university examples listed on this page direct contractual partners?',
        answer:
          'University names and categories (such as Russell Group, Oxford, and London institutions) are shown as illustrative examples of the UK higher education landscape. During counseling, we verify specific institutional pathways and application routes tailored to your profile.',
      },
      {
        question: 'Can Gradsail Global help with the UK credibility interview?',
        answer:
          'Yes. Our Visa Guidance & Preparation service includes structured mock interviews so you can clearly explain your university choice, course modules, funding arrangement, and career plans.',
      },
    ],
    ctaLabel: 'Explore Study in the UK',
  },
  {
    slug: 'australia',
    name: 'Australia',
    shortName: 'Australia',
    regionLabel: 'Asia-Pacific · English-Taught',
    tagline: 'Research-driven Group of Eight institutions, industry-integrated curricula, and vibrant coastal student cities.',
    shortDescription:
      'Pursue career-focused programs in Information Technology, Healthcare, and Engineering across Sydney, Melbourne, Brisbane, Perth, and Adelaide.',
    overview:
      'Australia offers a globally respected qualification framework regulated by the Tertiary Education Quality and Standards Agency (TEQSA) and the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS). Known for practical learning, modern campus infrastructure, and strong research output, Australian universities attract students seeking high academic standards and dynamic multicultural environments.',
    popularCourses: ['Information Technology (Cybersecurity, Software, Cloud)', 'Healthcare, Nursing & Allied Health Sciences', 'Engineering (Civil, Renewable Energy, Mining & Mechatronics)'],
    academicPathways: [
      {
        level: 'Bachelor’s Degree / Bachelor’s (Honours)',
        duration: '3 to 4 Years Full-Time',
        overview: 'Comprehensive undergraduate education with industry internships and capstone projects across major faculties.',
      },
      {
        level: 'Master’s by Coursework or Extended Master’s',
        duration: '1.5 to 2 Years Full-Time',
        overview: 'Advanced professional or technical training, often accredited by relevant Australian professional bodies (such as ACS or Engineers Australia).',
      },
      {
        level: 'Master’s by Research & Doctoral (PhD)',
        duration: '2 to 4 Years Full-Time',
        overview: 'Intensive research programs supported by world-class laboratories and academic supervision.',
      },
    ],
    universityCategories: 'Go8 universities, Sydney, Melbourne',
    universityExamples: [
      {
        name: 'Group of Eight (Go8) Universities',
        category: 'Leading Research-Intensive Coalition',
        focusAreas: 'Engineering, Medicine, Data Science, Law, Advanced Sciences',
      },
      {
        name: 'Sydney Metropolitan Universities',
        category: 'Global Financial & Technology Hub Campuses',
        focusAreas: 'IT, Business Analytics, FinTech, Health Sciences, Architecture',
      },
      {
        name: 'Melbourne & Regional Capital Institutions',
        category: 'Innovation & Industry-Linked Universities',
        focusAreas: 'Biotechnology, Software Engineering, Education, Allied Health',
      },
    ],
    indicativeAdmissionRequirements: [
      'Academic transcripts and completion certificates meeting the university’s minimum grade equivalency.',
      'English language proficiency test scores (IELTS Academic or PTE Academic) meeting both institutional and Department of Home Affairs visa criteria.',
      'Genuine Student (GS) statement addressing academic progression, study rationale in Australia, and career value of the chosen qualification.',
      'Verified financial documentation demonstrating capacity to cover tuition, living expenses, and travel.',
      'Work experience certificates and updated CV if applying for postgraduate management or specialized programs.',
    ],
    languagePreparation: {
      acceptedTests: ['IELTS Academic', 'PTE Academic', 'TOEFL iBT'],
      localLanguageNote:
        'English is the language of instruction. Healthcare, Nursing, and Education degrees typically require higher band scores across all four communicative skills.',
    },
    costGuidance: {
      overview:
        'Studying in Australia requires planning for CRICOS-registered tuition fees, Overseas Student Health Cover (OSHC), and city-specific living expenses.',
      tuitionStructureNote:
        'Tuition is typically billed per semester or trimester based on enrolled credit points.',
      livingCostFactors: [
        'Mandatory Overseas Student Health Cover (OSHC) for the entire duration of the student visa.',
        'Department of Home Affairs sets annual minimum financial capacity evidence thresholds for primary applicants.',
        'Accommodation costs vary between Sydney/Melbourne metropolitan zones and regional university cities.',
      ],
      lastChecked: 'October 2026 (Refer to official Australian Department of Home Affairs Subclass 500 guidelines)',
    },
    scholarshipGuidance: [
      'Vice-Chancellor & International Merit Scholarships: Percentage-based tuition reductions assessed automatically or via application.',
      'Destination & Regional Campus Bursaries: Institutional incentives for studying at designated regional campuses.',
      'Faculty Excellence Grants: Partial tuition support for high-achieving STEM and Healthcare applicants.',
    ],
    visaPreparation: {
      visaRouteName: 'Australian Student Visa (Subclass 500)',
      keyRequirements: [
        'Confirmation of Enrolment (CoE) issued by a CRICOS-registered Australian education provider.',
        'Genuine Student (GS) requirement responses supported by verifiable academic and career documentation.',
        'Acceptable financial capacity evidence, Overseas Student Health Cover (OSHC) policy, and health/biometric clearances.',
      ],
      authorityDisclaimer:
        'All Subclass 500 visa assessments and processing timelines are determined exclusively by the Australian Government Department of Home Affairs.',
    },
    accommodationAndPreDeparture: [
      'Guidance on on-campus colleges, purpose-built student apartments, and homestay arrangements.',
      'Pre-departure orientation on Australian tenancy norms, public transport smartcards, and student banking.',
      'Assistance with initial tuition fee remittance and multi-currency forex cards.',
    ],
    studentChecklist: [
      'Compare CRICOS-registered courses in IT, Healthcare, or Engineering',
      'Complete PTE Academic or IELTS Academic preparation',
      'Draft Genuine Student (GS) responses and gather financial sponsor documents',
      'Receive Offer Letter, complete financial verification, and obtain your CoE',
      'Arrange OSHC health insurance and submit Subclass 500 visa application',
    ],
    faqs: [
      {
        question: 'What is the Genuine Student (GS) requirement for Australia?',
        answer:
          'The Genuine Student assessment evaluates your personal circumstances, academic progression, reasons for choosing your Australian institution and course, and how the qualification supports your future career.',
      },
      {
        question: 'What are the main intakes for Australian universities?',
        answer:
          'Semester 1 (February/March) and Semester 2 (July) are the primary intakes, with several universities also offering a November/Summer trimester for selected programs.',
      },
      {
        question: 'Do I need health insurance before lodging an Australian student visa?',
        answer:
          'Yes. Overseas Student Health Cover (OSHC) is mandatory for the duration of your stay and must be arranged prior to submitting your Subclass 500 visa application.',
      },
    ],
    ctaLabel: 'Explore Study in Australia',
  },
  {
    slug: 'germany',
    name: 'Germany',
    shortName: 'Germany',
    regionLabel: 'Continental Europe · English & German Tracks',
    tagline: 'World-renowned engineering, applied sciences, and technical research in Europe’s industrial powerhouse.',
    shortDescription:
      'Access rigorous programs in Mechanical Engineering, Data Science, and Artificial Intelligence across TU9 institutes, public universities, and universities of applied sciences.',
    overview:
      'Germany is a premier destination for students seeking deeply technical, research-oriented, and industry-connected higher education. Home to the prestigious TU9 alliance of technical universities, comprehensive public universities, and praxis-oriented Fachhochschulen (Universities of Applied Sciences), Germany offers a broad selection of English-taught international Master’s programs alongside traditional German-taught degrees.',
    popularCourses: ['Mechanical, Automotive & Industrial Engineering', 'Data Science, Robotics & Artificial Intelligence', 'Computer Science, Renewable Energy & Supply Chain Management'],
    academicPathways: [
      {
        level: 'Bachelor’s Degree (B.Sc. / B.Eng.)',
        duration: '3 to 3.5 Years (6 to 7 Semesters)',
        overview: 'Offered at Universities and Universities of Applied Sciences; may require Studienkolleg (foundation year) depending on secondary school qualification equivalency.',
      },
      {
        level: 'Master’s Degree (M.Sc. / M.Eng. / MA)',
        duration: '1.5 to 2 Years (3 to 4 Semesters)',
        overview: 'Consecutive or specialized postgraduate degrees, widely available in English for STEM and Business fields, culminating in a research or industry Master’s thesis.',
      },
      {
        level: 'Language & Preparatory Pathways',
        duration: '6 to 12 Months',
        overview: 'German language progression (A1 through B2/C1) and technical preparation for German-taught degree tracks.',
      },
    ],
    universityCategories: 'TU9, public universities',
    universityExamples: [
      {
        name: 'TU9 German Universities of Technology',
        category: 'Leading Technical University Alliance',
        focusAreas: 'Mechanical Engineering, AI, Robotics, Electrical Engineering, Computer Science',
      },
      {
        name: 'German Public Research Universities (Universitäten)',
        category: 'State-Funded Academic Institutions',
        focusAreas: 'Natural Sciences, Data Science, Economics, Mathematics, Informatics',
      },
      {
        name: 'Universities of Applied Sciences (Hochschulen / FH)',
        category: 'Practice & Industry-Integrated Campuses',
        focusAreas: 'Applied Engineering, Mechatronics, International Management, Embedded Systems',
      },
    ],
    indicativeAdmissionRequirements: [
      'Recognized secondary school certificate (verified via Anabin / Studienkolleg criteria) or an accredited Bachelor’s degree with matching ECTS/subject credit distribution.',
      'APS (Akademische Prüfstelle) certificate where mandatory for applicants from designated countries prior to visa application.',
      'Proof of English proficiency (IELTS / TOEFL / PTE) for English-taught programs, and/or certified German proficiency (Goethe / TestDaF / telc A1–C1) depending on medium of instruction.',
      'Uni-Assist VPD (preliminary review documentation) where required by the target university.',
      'Structured Letter of Motivation, academic CV in Europass format, and module handbook descriptions.',
    ],
    languagePreparation: {
      acceptedTests: ['IELTS Academic / PTE Academic (English tracks)', 'Goethe-Zertifikat / TestDaF / telc (German A1–B2/C1)'],
      localLanguageNote:
        'Even when enrolled in an 100% English-taught Master’s program, completing German A1–B2 modules significantly improves daily integration, internship readiness, and communication.',
    },
    costGuidance: {
      overview:
        'Many German public universities charge minimal or no tuition fees for consecutive degree programs (requiring a semester contribution fee), though specific federal states (such as Baden-Württemberg) or individual universities may levy international tuition fees.',
      tuitionStructureNote:
        'Always verify whether a specific public or private program charges tuition or only a semester administrative/transit contribution.',
      livingCostFactors: [
        'A German Blocked Account (Sperrkonto) is the standard mechanism to prove financial subsistence for a national student visa.',
        'Mandatory German statutory or approved student health insurance is required for university enrollment and visa issuance.',
        'Studentenwerk dormitories offer economical housing compared to private rentals in major cities like Munich, Frankfurt, or Berlin.',
      ],
      lastChecked: 'October 2026 (Refer to official German Missions and Federal Foreign Office guidelines for current Blocked Account figures)',
    },
    scholarshipGuidance: [
      'DAAD (German Academic Exchange Service) Programs: Competitive merit and research fellowships for postgraduate scholars.',
      'Deutschlandstipendium: Merit and civic-engagement stipends co-funded by federal sources and private sponsors at participating universities.',
      'Low-Tuition Public University Model: State-subsidized education at public institutions substantially lowers overall tuition outlay.',
    ],
    visaPreparation: {
      visaRouteName: 'German National Student Visa (D-Visa)',
      keyRequirements: [
        'Official University Admission Letter (Zulassungsbescheid) or conditional preparatory admission.',
        'APS Certificate (where applicable to the applicant’s jurisdiction).',
        'Blocked Account (Sperrkonto) confirmation showing the required annual statutory deposit amount.',
        'Travel and German student health insurance coverage and complete biometric/embassy file.',
      ],
      authorityDisclaimer:
        'Visa processing times and decisions rest solely with the German Embassy/Consulate and local Ausländerbehörde (Foreigners’ Registration Office).',
    },
    accommodationAndPreDeparture: [
      'End-to-end guidance on opening your German Blocked Account (Sperrkonto) and arranging student health insurance.',
      'Guidance on applying early to Studierendenwerk student residences and shared apartments (WG).',
      'Briefing on city registration (Anmeldung), semester ticket usage, and German academic culture.',
    ],
    studentChecklist: [
      'Audit undergraduate credit distribution (ECTS equivalency) for consecutive Master’s eligibility',
      'Apply early for APS verification and Uni-Assist VPD where required',
      'Complete IELTS/PTE and build German A1–B2 conversational skills in our Language Hub',
      'Open and fund your German Blocked Account (Sperrkonto) via approved providers',
      'Prepare your embassy visa dossier and attend mock visa interview sessions',
    ],
    faqs: [
      {
        question: 'Why do consecutive Master’s programs in Germany strictly check Bachelor’s subject credits?',
        answer:
          'German public universities follow a consecutive curriculum model. To enter a Master’s in Data Science or Mechanical Engineering, your Bachelor’s transcript must demonstrate specific credit hours in mathematics, programming, or core engineering modules.',
      },
      {
        question: 'Does Gradsail Global assist with the German Blocked Account and German language training?',
        answer:
          'Yes. Our Forex & Blocked Account Assistance service guides you through setting up an approved German Sperrkonto, and our Language Coaching Hub delivers structured German A1 through B2 training.',
      },
      {
        question: 'When are the application deadlines for German universities?',
        answer:
          'Winter Semester (starting October) deadlines for international applicants typically fall between March and July 15 (often earlier for TU9 and Uni-Assist tracks). Summer Semester (starting April) deadlines generally fall between November and January 15.',
      },
    ],
    ctaLabel: 'Explore Study in Germany',
  },
  {
    slug: 'dubai-uae',
    name: 'Dubai (UAE)',
    shortName: 'Dubai / UAE',
    regionLabel: 'Middle East · Global Branch Campuses',
    tagline: 'Earn internationally accredited degrees at global university branch campuses in a dynamic business and aviation hub.',
    shortDescription:
      'Study Hospitality, Management, and Technology in dedicated academic free zones hosting international branch campuses with modern infrastructure.',
    overview:
      'Dubai has emerged as a prominent international higher education hub, hosting branch campuses of universities from the UK, Australia, Europe, and North America alongside accredited local institutions. Situated in dedicated education zones such as Dubai Knowledge Park and Dubai International Academic City, students gain access to English-taught curricula in a safe, cosmopolitan, and globally connected city.',
    popularCourses: ['Hospitality, Tourism & Aviation Management', 'Business Administration, Supply Chain & FinTech', 'Information Technology, Cybersecurity & Artificial Intelligence'],
    academicPathways: [
      {
        level: 'Foundation & Undergraduate Degrees (BBA / BSc / BA)',
        duration: '3 to 4 Years Full-Time',
        overview: 'Internationally mirrored curricula allowing students to earn degrees awarded by the home campus or UAE-accredited institution.',
      },
      {
        level: 'Postgraduate & Executive Master’s (MBA / MSc)',
        duration: '1 to 2 Years (Full-Time or Flexible Evening Schedules)',
        overview: 'Career-oriented postgraduate programs designed around commercial, technological, and hospitality sectors.',
      },
      {
        level: 'Inter-Campus Mobility Pathways',
        duration: 'Variable (1+2 or 2+1 Formats)',
        overview: 'Selected branch campuses offer structured transfer options to complete final semesters at the home campus, subject to host country visa and academic approval.',
      },
    ],
    universityCategories: 'International branch campuses',
    universityExamples: [
      {
        name: 'UK & Australian International Branch Campuses',
        category: 'Dubai International Academic City & Knowledge Park',
        focusAreas: 'Business Management, Computer Science, Engineering, Accounting',
      },
      {
        name: 'Specialized Hospitality & Luxury Business Institutes',
        category: 'Industry-Aligned Professional Campuses',
        focusAreas: 'Global Hospitality, Culinary & Event Management, Luxury Retail',
      },
      {
        name: 'UAE Accredited Research & Innovation Universities',
        category: 'Technology & Applied Sciences Institutions',
        focusAreas: 'Artificial Intelligence, Sustainable Energy, Logistics, Finance',
      },
    ],
    indicativeAdmissionRequirements: [
      'High school completion transcripts (for Bachelor’s) or recognized Bachelor’s degree transcripts (for Master’s).',
      'English language proficiency (IELTS / PTE / TOEFL) or institutional English placement assessment where applicable.',
      'Statement of Purpose and academic or employer reference letters.',
      'Attested educational documents where required by UAE regulatory authorities.',
      'Valid passport with minimum required validity for UAE student residence visa sponsorship.',
    ],
    languagePreparation: {
      acceptedTests: ['IELTS Academic', 'PTE Academic', 'TOEFL iBT'],
      localLanguageNote:
        'Instruction at international branch campuses in Dubai is in English. Arabic is the official language of the UAE, while English is universally used across business and academic environments.',
    },
    costGuidance: {
      overview:
        'Tuition and accommodation costs in Dubai vary by branch campus, accreditation tier, and whether students reside in dedicated student housing or private city apartments.',
      tuitionStructureNote:
        'Branch campus tuition fees are often competitively structured compared to studying at the parent campus in the UK or Australia.',
      livingCostFactors: [
        'University-sponsored student visa and Emirates ID medical/processing fees.',
        'Purpose-built student residences in Academic City versus shared apartments connected by the Dubai Metro.',
        'Mandatory student health insurance often bundled with university visa sponsorship.',
      ],
      lastChecked: 'October 2026 (Verify specific campus fee schedules and KHDA/CAA accreditation status)',
    },
    scholarshipGuidance: [
      'Early-Application & Academic Merit Bursaries: Tuition discounts offered by international branch campuses based on high school or undergraduate GPA.',
      'Alumni & Family Tuition Waivers: Institutional fee reductions offered by select campuses in Dubai Knowledge Park.',
      'Corporate & Sector-Linked Grants: Partial fee waivers for postgraduate Management and Technology tracks.',
    ],
    visaPreparation: {
      visaRouteName: 'UAE Student Residence Visa (University-Sponsored)',
      keyRequirements: [
        'Confirmed Offer Letter and tuition/visa deposit payment receipt to the sponsoring university.',
        'Clear passport copies, passport-size photographs meeting ICA/GDRFA specifications, and academic transcripts.',
        'Post-arrival medical fitness test and Emirates ID biometrics arranged in coordination with the university visa office.',
      ],
      authorityDisclaimer:
        'UAE entry permits and student residence visas are regulated and approved by UAE Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) and GDRFA Dubai.',
    },
    accommodationAndPreDeparture: [
      'Booking assistance for dedicated student housing communities in Dubai Academic City and Knowledge Park.',
      'Apostille and document attestation guidance for UAE regulatory compliance.',
      'Pre-departure orientation covering UAE cultural norms, Nol transport cards, and student banking.',
    ],
    studentChecklist: [
      'Compare international branch campuses and verify KHDA / CAA program accreditation',
      'Submit academic transcripts and English proficiency credentials',
      'Complete legal attestation / apostille of degree certificates if required',
      'Confirm tuition and university student visa sponsorship deposit',
      'Coordinate student housing and pre-arrival entry permit documentation',
    ],
    faqs: [
      {
        question: 'Who sponsors the student visa for Dubai universities?',
        answer:
          'In most cases, accredited universities and international branch campuses located in Dubai’s academic zones act as the official sponsor for your UAE student entry permit and residence visa once your admission and initial deposit are finalized.',
      },
      {
        question: 'Is the degree awarded by a branch campus recognized internationally?',
        answer:
          'When shortlisting Dubai institutions, our advisors help you review whether the degree is awarded directly by the parent university in the UK/Australia and check its registration status with Dubai’s KHDA or the UAE Ministry of Education CAA.',
      },
      {
        question: 'Can Gradsail Global assist with document attestation for the UAE?',
        answer:
          'Yes. Our Apostille & Legal Attestation service assists students with state HRD, MEA, and embassy attestation workflows required for international study.',
      },
    ],
    ctaLabel: 'Explore Study in Dubai',
  },
  {
    slug: 'france',
    name: 'France',
    shortName: 'France',
    regionLabel: 'Continental Europe · English & French Tracks',
    tagline: 'Elite Grandes Écoles, historic universities, and global leadership in business, fashion, luxury management, and engineering.',
    shortDescription:
      'Study Luxury Management, Fashion, Business, and Engineering at France’s prestigious Grandes Écoles and historic public universities.',
    overview:
      'France combines centuries of intellectual heritage at institutions like the Sorbonne with the distinctive Grandes Écoles system—highly selective business and engineering schools renowned for corporate integration, triple-crown (AACSB, EQUIS, AMBA) accreditations, and global alumni networks. Hundreds of undergraduate and postgraduate programs are taught entirely in English, particularly in Management, Finance, Luxury Brand Management, and STEM.',
    popularCourses: ['Luxury Brand Management, Hospitality & Wine/Gastronomy Business', 'Fashion Design, Creative Direction & Arts Management', 'International Business, Finance, MiM (Master in Management) & Engineering'],
    academicPathways: [
      {
        level: 'Bachelor’s Degree (Licence / Bachelor in Management)',
        duration: '3 to 4 Years Full-Time',
        overview: 'Structured around the European LMD (Licence-Master-Doctorat) system with mandatory corporate internships.',
      },
      {
        level: 'Master in Management (Grande École Program) / MSc / MBA',
        duration: '1 to 2 Years Full-Time',
        overview: 'Specialized MSc degrees (1–2 years depending on prior 3-year or 4-year Bachelor’s) and flagship Grande École Master in Management pathways.',
      },
      {
        level: 'Specialized Art, Culinary & Fashion Diplomas',
        duration: '1 to 3 Years',
        overview: 'Studio-intensive programs in Paris and regional creative hubs with industry ateliers.',
      },
    ],
    universityCategories: 'Grande Écoles, Sorbonne',
    universityExamples: [
      {
        name: 'French Grandes Écoles (Business & Engineering Schools)',
        category: 'Selective Conférence des Grandes Écoles (CGE) Institutions',
        focusAreas: 'Master in Management (MiM), Corporate Finance, Luxury Management, Supply Chain',
      },
      {
        name: 'Sorbonne & Historic French Public Universities',
        category: 'State-Funded Research Universities in Paris & Regions',
        focusAreas: 'Humanities, Sciences, Economics, International Law, Mathematics',
      },
      {
        name: 'Parisian Fashion, Design & Luxury Academies',
        category: 'Specialist Creative & Industry Institutes',
        focusAreas: 'Fashion Merchandising, Haute Couture Design, Perfume & Cosmetics Management',
      },
    ],
    indicativeAdmissionRequirements: [
      'Academic transcripts and diploma equivalency (180 ECTS or 240 ECTS depending on whether applying for a 1-year or 2-year MSc).',
      'Campus France (“Études en France”) online dossier registration and academic interview completion where mandatory.',
      'English proficiency score (IELTS / PTE / TOEFL) for English-taught tracks; DELF/DALF or TCF for French-taught tracks.',
      'GMAT or GRE score for select top-tier Grande École Master in Management or Finance programs.',
      'CV, motivation essays, letters of recommendation, and video/live admissions interview.',
    ],
    languagePreparation: {
      acceptedTests: ['IELTS Academic / PTE Academic / TOEFL', 'DELF / DALF / TCF (for French tracks)'],
      localLanguageNote:
        'Many business and luxury programs are 100% English-taught and include complimentary introductory French classes on campus to prepare students for internships.',
    },
    costGuidance: {
      overview:
        'Tuition varies between state-subsidized public universities and private/consular Grandes Écoles. Students in France may also apply for national student housing support (CAF) subject to eligibility.',
      tuitionStructureNote:
        'Ensure your budget accounts for the CVEC (Contribution de vie étudiante et de campus) student life contribution prior to enrollment.',
      livingCostFactors: [
        'French consulate financial subsistence requirement (monthly living funds proof for visa issuance).',
        'CROUS public student residences vs. private student residences (Studéa, Les Estudines) in Paris or regional cities like Lyon, Toulouse, and Lille.',
        'Eligibility to apply for CAF (Caisse d’Allocations Familiales) housing subsidy after arrival and lease registration.',
      ],
      lastChecked: 'October 2026 (Refer to official Campus France and France-Visas portals for current requirements)',
    },
    scholarshipGuidance: [
      'Eiffel Excellence Scholarship Program: Prestigious French Ministry for Europe and Foreign Affairs award for top Master’s and PhD candidates.',
      'Grande École Merit & Early-Bird Bursaries: Institutional tuition reductions awarded during admissions rounds.',
      'Charpak & Embassy Scholarships: Bilateral study grants administered via French diplomatic missions.',
    ],
    visaPreparation: {
      visaRouteName: 'French Long-Stay Student Visa (VLS-TS)',
      keyRequirements: [
        'Campus France (Études en France) validation certificate (EEF number) following academic interview.',
        'Proof of sufficient monthly financial resources, tuition deposit receipt, and proof of initial accommodation for the first months in France.',
        'Online VLS-TS validation (OFII tax payment) required within three months of arriving in France.',
      ],
      authorityDisclaimer:
        'Campus France academic interviews and France-Visas consular decisions are governed solely by French diplomatic and immigration authorities.',
    },
    accommodationAndPreDeparture: [
      'Support securing verifiable accommodation certificates (Attestation d’hébergement or student residence lease) required for the French visa.',
      'Guidance on post-arrival VLS-TS visa validation, French bank account setup, and Ameli student health registration.',
      'Pre-departure orientation on Campus France procedures and living in Paris vs. regional French student cities.',
    ],
    studentChecklist: [
      'Select between 1-year and 2-year MSc or Grande École programs based on your current degree duration',
      'Prepare for both the school admissions interview and the Campus France academic interview',
      'Arrange certified translations or apostille documents where required',
      'Secure accommodation proof and financial subsistence documentation for France-Visas',
      'Complete VLS-TS visa application and pre-departure orientation',
    ],
    faqs: [
      {
        question: 'Can I study in France with a 3-year Bachelor’s degree?',
        answer:
          'Yes. Many French Grandes Écoles and universities accept 3-year Bachelor’s degrees (equivalent to 180 ECTS) into a 2-year Master’s track (M1 + M2), or into specialized MSc pathways.',
      },
      {
        question: 'What is the Campus France Études en France procedure?',
        answer:
          'Études en France is the official platform managed by Campus France that verifies your academic documents and conducts an academic interview before you submit your student visa application to the French Consulate.',
      },
      {
        question: 'Do I need to speak fluent French before applying to a Business School in France?',
        answer:
          'Not for English-taught Bachelor’s, MSc, MiM, or MBA tracks. However, learning basic conversational French is strongly encouraged for daily life and securing internships in France.',
      },
    ],
    ctaLabel: 'Explore Study in France',
  },
  {
    slug: 'south-korea',
    name: 'South Korea',
    shortName: 'South Korea',
    regionLabel: 'East Asia · English & Korean Tracks',
    tagline: 'Cutting-edge technology, semiconductor & AI research, vibrant creative arts, and immersive Korean studies in Seoul and Daejeon.',
    shortDescription:
      'Pursue degrees in Technology, Arts, and Korean Studies at South Korea’s top SKY universities, KAIST, and innovative research campuses.',
    overview:
      'South Korea has rapidly grown into one of Asia’s most sought-after study destinations, combining world-leading R&D investment in semiconductors, robotics, biotech, and digital media with globally influential cultural industries. Leading national and private universities offer English-taught undergraduate and graduate courses alongside comprehensive Korean language institutes.',
    popularCourses: ['Technology (Semiconductors, AI, Robotics & Computer Science)', 'Digital Media, Film, Design & Contemporary Arts', 'Korean Studies, International Relations & Global Business'],
    academicPathways: [
      {
        level: 'Undergraduate Degree (BA / BSc / BEng)',
        duration: '4 Years Full-Time (8 Semesters)',
        overview: 'Comprehensive degree programs offered in English tracks at international colleges (such as Underwood/Global tracks) or Korean-taught tracks.',
      },
      {
        level: 'Master’s & Combined MS-PhD Programs',
        duration: '2 Years (Master’s) / 3–4 Years (PhD)',
        overview: 'Research-intensive graduate schools with strong laboratory funding in STEM and global policy.',
      },
      {
        level: 'Korean Language Institute (KLI) & Pathway Programs',
        duration: '6 Months to 1.5 Years',
        overview: 'Intensive Korean language immersion preparing students for TOPIK certification and degree matriculation.',
      },
    ],
    universityCategories: 'SKY universities, KAIST',
    universityExamples: [
      {
        name: 'SKY Universities (Seoul Metropolitan Elite Institutions)',
        category: 'Comprehensive Flagship Universities',
        focusAreas: 'International Studies, Business, Humanities, Korean Studies, Sciences',
      },
      {
        name: 'KAIST & National Science/Technology Institutes',
        category: 'Specialized STEM & Innovation Campuses',
        focusAreas: 'AI, Robotics, Semiconductor Engineering, Bioengineering, Industrial Design',
      },
      {
        name: 'Creative Arts & Global Media Universities',
        category: 'Design, Film & Cultural Industry Campuses',
        focusAreas: 'Digital Content, Visual Communication, Korean Language & Culture, Architecture',
      },
    ],
    indicativeAdmissionRequirements: [
      'Complete academic transcripts and graduation certificates verified with Apostille or Korean Consular authentication (mandatory for South Korean university enrollment).',
      'Proof of citizenship and family relationship certificates (translated and notarized) verifying international student eligibility.',
      'English proficiency (IELTS / TOEFL / PTE) for English-track degrees, or TOPIK (Test of Proficiency in Korean) Level 3–5 for Korean-track degrees.',
      'Study Plan / Personal Statement and faculty recommendation letters (plus research proposal or lab contact for STEM graduate tracks).',
      'Bank balance certificate meeting South Korean Ministry of Justice financial thresholds.',
    ],
    languagePreparation: {
      acceptedTests: ['IELTS Academic / TOEFL iBT / PTE (English tracks)', 'TOPIK Levels 1–6 (Korean tracks)'],
      localLanguageNote:
        'Many STEM graduate labs and international undergraduate colleges teach in English. Acquiring TOPIK proficiency opens broader scholarship brackets and daily ease in Korea.',
    },
    costGuidance: {
      overview:
        'South Korean universities divide tuition by humanities/social sciences versus engineering/sciences/arts, with generous institutional tuition waivers frequently tied to GPA or language proficiency.',
      tuitionStructureNote:
        'University on-campus dormitories in Seoul, Daejeon, and Busan are typically much more affordable than off-campus studio rentals requiring key-money deposits (Jeonse/Wolse).',
      livingCostFactors: [
        'Mandatory National Health Insurance Service (NHIS) enrollment for international degree students residing in South Korea.',
        'Ministry of Justice bank balance proof requirement for D-2 (Degree) or D-4 (Language) visa issuance.',
        'On-campus dormitory meals and T-money public transit passes keep student commuting costs predictable.',
      ],
      lastChecked: 'October 2026 (Refer to official Study in Korea and Korean Embassy visa guidelines)',
    },
    scholarshipGuidance: [
      'Global Korea Scholarship (GKS / KGSP): Prestigious Korean government scholarship program administered by NIIED (subject to official annual embassy/university track quotas).',
      'University Admission & GPA Waivers: Partial to full first-semester tuition reductions based on entrance profile, IELTS/TOEFL, or TOPIK score.',
      'STEM Research Assistantships (RA/TA): Lab stipends and tuition support for graduate students working with university research professors.',
    ],
    visaPreparation: {
      visaRouteName: 'South Korea Student Visa (D-2 Degree / D-4 Language)',
      keyRequirements: [
        'Certificate of Admission (Standard Admission Letter) issued by the Korean university.',
        'Apostilled or consular-legalized final academic degree and transcript documents.',
        'Financial bank statement issued within the stipulated validity window and TB screening where required by the jurisdiction.',
      ],
      authorityDisclaimer:
        'D-2 and D-4 visa issuance, Residence Card (ARC) registration, and work-permit approvals are governed by the Republic of Korea Ministry of Justice and Korean Diplomatic Missions.',
    },
    accommodationAndPreDeparture: [
      'Fast-track MEA Apostille and notarized academic translation assistance required by Korean admissions offices.',
      'On-campus dormitory application timing and guidance on off-campus Goshiwon/Sharehouse options.',
      'Pre-departure briefing on Residence Card (ARC) biometrics, Korean banking, and cultural etiquette.',
    ],
    studentChecklist: [
      'Review application windows early (Spring intake starts in March; Fall intake starts in September)',
      'Complete Apostille attestation and certified English/Korean translation of transcripts and family documents',
      'Prepare your Study Plan essay and secure academic recommendation letters',
      'Arrange fresh bank balance certificates matching D-2 visa rules',
      'Apply for university dormitory housing immediately upon admission confirmation',
    ],
    faqs: [
      {
        question: 'Why is Apostille attestation so important for South Korean university applications?',
        answer:
          'South Korean universities and immigration authorities require official Apostille authentication (or Korean Embassy legalization) on physical graduation certificates and transcripts before issuing final admission or visa documents. Our Apostille & Legal Attestation service handles this workflow end to end.',
      },
      {
        question: 'When are the intakes for South Korean universities?',
        answer:
          'The primary academic year starts in Spring (March), and the second intake starts in Fall (September). Application portals typically open 5 to 6 months ahead of the semester start date.',
      },
      {
        question: 'Can I study in South Korea in English?',
        answer:
          'Yes. Leading universities—including SKY institutions, KAIST, and international colleges—offer degree tracks taught entirely in English, particularly in STEM, Global Business, and International Studies.',
      },
    ],
    ctaLabel: 'Explore Study in South Korea',
  },
];

export const SERVICES: ServiceData[] = [
  {
    slug: 'admissions-university-selection',
    number: '01',
    navTitle: 'Admissions & University Selection',
    title: 'Admissions & University Selection',
    blueprintSummary:
      'Tailored course shortlisting aligned with student academic background, budget, and long-term career aspirations.',
    blueprintSecondary:
      'Comprehensive SOP editing, application submissions, and offer tracking.',
    overview:
      'Choosing the right university and program is the foundation of a successful international education journey. Rather than pushing generic course lists, our advisors evaluate your academic transcripts, subject prerequisites, financial plans, and career goals to build a balanced shortlist across ambitious, target, and safe university options.',
    howItWorks: [
      {
        stepNumber: '01',
        title: 'Academic & Career Profile Audit',
        description:
          'We review your transcripts, credit hours, backlogs (if any), work experience, and target budget to determine realistic eligibility across our six destinations.',
      },
      {
        stepNumber: '02',
        title: 'Curated Course & University Shortlisting',
        description:
          'Receive a transparent comparison of modules, intake dates, tuition structures, and admission criteria across shortlisted universities.',
      },
      {
        stepNumber: '03',
        title: 'Statement of Purpose (SOP) & LOR Structuring',
        description:
          'Our editorial team provides iterative feedback on your Statement of Purpose, motivation essays, and CV so your authentic academic voice stands out.',
      },
      {
        stepNumber: '04',
        title: 'Application Submission & Offer Management',
        description:
          'We audit every application portal entry before submission, track conditional/unconditional offers, and guide you through deposit deadlines.',
      },
    ],
    studentRequirements: [
      'Academic transcripts and completion certificates (High School, Bachelor’s, or Master’s as applicable).',
      'Updated Resume / Curriculum Vitae detailing internships, projects, or work experience.',
      'Passport copy and English/target language test status (or planned test date).',
      'Clarity on preferred study destination(s), intended intake, and approximate annual tuition/living budget.',
    ],
    checklistTitle: 'Application Preparation Checklist',
    preparationChecklist: [
      'Compile semester-wise mark sheets, consolidated transcripts, and provisional/final degree certificates',
      'Identify 2–3 academic professors or workplace supervisors for Letters of Recommendation (LORs)',
      'Draft your initial Statement of Purpose outline highlighting academic progression and career motivation',
      'Verify university-specific application portals (direct portal, UCAS, Uni-Assist, or Campus France)',
      'Calendarize priority scholarship and rolling admission deadlines for Spring/Fall intakes',
    ],
    highlights: [
      {
        title: 'Profile-Aligned Shortlisting',
        description: 'Courses matched to your actual credit background, ECTS equivalency, and career objectives.',
      },
      {
        title: 'SOP & Essay Editorial Review',
        description: 'Structured narrative guidance tailored to country-specific expectations (UK Personal Statement, German Letter of Motivation, Korean Study Plan).',
      },
      {
        title: 'End-to-End Offer Tracking',
        description: 'Transparent tracking from application acknowledgment to conditional clearance and final enrollment.',
      },
    ],
    faqs: [
      {
        question: 'How many universities should I apply to?',
        answer:
          'Most students apply to between 4 and 6 carefully selected programs—balancing competitive reach institutions with strong target options that match their academic profile and budget.',
      },
      {
        question: 'Do you write Statements of Purpose from scratch or edit the student’s draft?',
        answer:
          'We practice ethical, student-centric advisory. We guide you with structured prompts, brainstorm your academic and career narrative, and provide comprehensive editing and refinement so the Statement of Purpose remains authentically yours.',
      },
      {
        question: 'Can I apply before receiving my final semester grades or IELTS score?',
        answer:
          'Many universities in the UK, Australia, and France issue Conditional Offer Letters based on current transcripts, allowing you to submit final semester marks or English test scores before enrollment. Requirements for Germany and South Korea vary by institution.',
      },
    ],
  },
  {
    slug: 'visa-guidance-preparation',
    number: '02',
    navTitle: 'Visa Guidance & Preparation',
    title: 'Visa Guidance & Counseling',
    blueprintSummary:
      'Embassy-specific documentation audits, financial file preparation, and rigorous mock interview sessions designed to maximize visa approval rates.',
    regulatoryDisclaimer:
      'Important Notice: All visa rules, processing timelines, and final issuance decisions rest solely with the respective national embassies, consulates, and immigration authorities. No consultancy can legally guarantee a visa outcome.',
    overview:
      'Even with an unconditional university offer, a student visa application requires meticulous documentation and clear financial evidence. Our visa counseling team helps you prepare a compliant, well-organized application file tailored to the exact checklist of your destination country’s embassy or immigration portal.',
    howItWorks: [
      {
        stepNumber: '01',
        title: 'Embassy-Specific Document Mapping',
        description:
          'We generate a personalized checklist aligned with your destination route (UK Student Route, Australia Subclass 500, German D-Visa, UAE Student Visa, French VLS-TS, or Korean D-2/D-4).',
      },
      {
        stepNumber: '02',
        title: 'Financial File & Sponsor Audit',
        description:
          'We verify that bank statements, education loan sanction letters, blocked account confirmations, and sponsor affidavits meet official holding-period and liquidity rules.',
      },
      {
        stepNumber: '03',
        title: 'Mock Visa & Credibility Interviews',
        description:
          'Practice one-on-one mock sessions covering UK credibility interviews, Australian Genuine Student (GS) narratives, Campus France academic interviews, and German embassy appointments.',
      },
      {
        stepNumber: '04',
        title: 'Application Review & Biometrics Briefing',
        description:
          'Final line-by-line audit of your visa forms, health insurance/IHS/OSHC confirmations, and VFS/consular biometric appointment readiness.',
      },
    ],
    studentRequirements: [
      'Official unconditional admission confirmation (CAS, CoE, Zulassungsbescheid, EEF validation, or Standard Admission Letter).',
      'Valid passport with sufficient blank pages and validity beyond intended course duration.',
      'Financial documentation (bank statements, blocked account confirmation, or approved education loan letters).',
      'Academic originals, language test scorecards, and medical/TB clearance certificates where applicable.',
    ],
    checklistTitle: 'Visa Application Readiness Checklist',
    preparationChecklist: [
      'Confirm official enrollment document (CAS / CoE / Zulassungsbescheid / Certificate of Admission) has zero spelling discrepancies with passport',
      'Verify financial maintenance funds meet the exact holding period and currency conversion rules of the embassy',
      'Complete mandatory student health cover (UK IHS, Australia OSHC, German Statutory Insurance, or UAE/Korea coverage)',
      'Conduct at least two mock credibility/embassy interview practice sessions with your advisor',
      'Organize physical and digital document folders in the exact sequence requested by VFS or the consulate',
    ],
    highlights: [
      {
        title: 'Documentation Audits',
        description: 'Thorough verification of enrollment letters, identity records, and academic credentials before filing.',
      },
      {
        title: 'Financial File Preparation',
        description: 'Clear guidance on liquid funds, sponsor affidavits, blocked accounts, and acceptable banking institutions.',
      },
      {
        title: 'Mock Interview Practice',
        description: 'Targeted preparation for consular, Campus France, and UKVI credibility interviews.',
      },
    ],
    faqs: [
      {
        question: 'Can Gradsail Global guarantee my student visa approval?',
        answer:
          'No ethical advisor can guarantee a visa outcome, as visa decisions are made exclusively by sovereign embassies and immigration officers. What we provide is rigorous documentation auditing, accurate financial file preparation, and thorough mock interview coaching to ensure your application is complete and well-prepared.',
      },
      {
        question: 'When should I start preparing my financial documents for the visa?',
        answer:
          'Start at least 3 to 4 months before your visa filing date. Countries like the UK require funds to be held for a consecutive 28-day period prior to application, and German Blocked Accounts require time for account opening and international remittance clearance.',
      },
      {
        question: 'Do you help with Visa SOPs and Genuine Student (GS) statements?',
        answer:
          'Yes. We guide you in structuring clear, truthful, and well-evidenced visa cover letters and Genuine Student responses aligned with your academic history and financial documentation.',
      },
    ],
  },
  {
    slug: 'forex-blocked-account-assistance',
    number: '03',
    navTitle: 'Forex & Blocked Account Assistance',
    title: 'Forex & Financial Assistance',
    blueprintSummary:
      'Secure international tuition transfers, multi-currency student debit cards, blocked account creation (Germany/Europe), and education loan guidance.',
    regulatoryDisclaimer:
      'Important Notice: Gradsail Global is an education advisory consultancy and not a bank, lender, payment processor, or licensed financial institution. All remittances, forex cards, blocked accounts, and education loans are executed through regulated banking and authorized financial partners.',
    overview:
      'Managing cross-border tuition payments, blocked accounts, and living expense remittances requires compliance with foreign exchange regulations and university payment deadlines. We guide students and families through safe, transparent channels so funds reach universities and blocked accounts on time.',
    howItWorks: [
      {
        stepNumber: '01',
        title: 'Financial Requirement Assessment',
        description:
          'Calculate total tuition deposits, blocked account amounts, and initial living expenses based on your university offer letter and destination country.',
      },
      {
        stepNumber: '02',
        title: 'Germany / Europe Blocked Account Setup',
        description:
          'Step-by-step guidance on opening an approved German Sperrkonto, transferring the statutory annual deposit, and obtaining the official blocking confirmation (Sperrbestätigung) for your visa.',
      },
      {
        stepNumber: '03',
        title: 'International Tuition Remittance & Forex Cards',
        description:
          'Understand wire transfer procedures (SWIFT / Flywire / Convera / authorized bank channels) and multi-currency student forex card options for initial arrival expenses.',
      },
      {
        stepNumber: '04',
        title: 'Education Loan Documentation Guidance',
        description:
          'Assist families in organizing university admission letters, fee schedules, and course accreditation details required by banks and financial institutions for education loan assessment.',
      },
    ],
    studentRequirements: [
      'University Offer Letter and official tuition fee invoice / payment schedule.',
      'Student and financial sponsor KYC documents (Passport, PAN/National ID, tax/income records as required by authorized dealers).',
      'Destination country financial threshold confirmation (for Blocked Accounts or maintenance proof).',
    ],
    checklistTitle: 'Financial Preparation Checklist',
    preparationChecklist: [
      'Verify official university beneficiary bank details or authorized payment portal link from the offer letter',
      'Initiate German Blocked Account (Sperrkonto) setup early to allow 5–10 business days for remittance confirmation',
      'Compare exchange rates, transfer fees, and tax compliance (such as TCS rules where applicable) with your bank',
      'Retain all SWIFT copies, payment receipts, and blocking confirmations for your visa file',
      'Arrange a multi-currency student forex card and emergency backup payment method before departure',
    ],
    highlights: [
      {
        title: 'Tuition Transfer Guidance',
        description: 'Clear walkthroughs for paying university tuition deposits securely with verifiable SWIFT/portal receipts.',
      },
      {
        title: 'Germany Blocked Account (Sperrkonto)',
        description: 'Structured guidance from digital verification to receiving your official visa blocking confirmation.',
      },
      {
        title: 'Multi-Currency Cards & Loan Support',
        description: 'Practical preparation for student forex cards and academic documentation needed for education loan applications.',
      },
    ],
    faqs: [
      {
        question: 'Is Gradsail Global a bank or financial institution?',
        answer:
          'No. Gradsail Global provides procedural guidance and documentation support. All currency conversions, tuition transfers, blocked accounts, and loan sanctions are performed directly between the student/parent and regulated banks or authorized financial providers.',
      },
      {
        question: 'What is a Blocked Account (Sperrkonto) for Germany?',
        answer:
          'A Blocked Account is a special bank account required by German authorities to demonstrate that an international student has sufficient living funds for one year. Once you arrive in Germany and register your address, the account releases a fixed monthly allowance into your local current account.',
      },
      {
        question: 'How early should I transfer my tuition deposit or blocked account funds?',
        answer:
          'We recommend initiating international transfers at least 2 to 3 weeks ahead of your university deposit or visa appointment deadline to account for banking compliance checks and international clearing times.',
      },
    ],
  },
  {
    slug: 'apostille-legal-attestation',
    number: '04',
    navTitle: 'Apostille & Legal Attestation',
    title: 'Apostille & Legal Attestation',
    blueprintSummary:
      'Fast-track MEA apostille processing, HRD state attestations, notary verifications, and certified academic translation services.',
    regulatoryDisclaimer:
      'Important Notice: Document attestation timelines and legal authentication outcomes depend on state education departments (HRD), the Ministry of External Affairs (MEA), and destination embassies. Always initiate attestation well ahead of university deadlines.',
    overview:
      'Many international universities and immigration authorities—particularly in Germany, South Korea, France, and the UAE—require academic degrees, mark sheets, and civil documents to be legally authenticated via Hague Convention Apostille stamps, state HRD verification, or embassy attestation, often accompanied by certified translations.',
    howItWorks: [
      {
        stepNumber: '01',
        title: 'Destination Authentication Audit',
        description:
          'We verify whether your target university and embassy require a Hague Apostille (e.g., Germany, South Korea, France) or Consular/Embassy Attestation (e.g., UAE).',
      },
      {
        stepNumber: '02',
        title: 'Notary & State HRD / SDM Verification',
        description:
          'Guidance on preparing original degree certificates and transcripts for initial notarization and state-level authentication.',
      },
      {
        stepNumber: '03',
        title: 'MEA Apostille & Embassy Legalization',
        description:
          'Coordination for Ministry of External Affairs (MEA) Apostille sticker/stamp processing or destination embassy legalization.',
      },
      {
        stepNumber: '04',
        title: 'Certified Academic Translations',
        description:
          'Coordinate certified translations of academic transcripts, diplomas, and birth/family certificates into German, French, Korean, or English as required.',
      },
    ],
    studentRequirements: [
      'Original degree certificates, provisional certificates, and official university-issued transcripts.',
      'Clear passport copies and authorization letters where required by attestation agencies.',
      'Exact university admission instructions specifying whether originals or notarized true copies should receive the Apostille stamp.',
    ],
    checklistTitle: 'Document Attestation & Translation Checklist',
    preparationChecklist: [
      'Check that your name and date of birth match across your passport, degree certificate, and transcripts',
      'Confirm whether your destination country is a Hague Apostille member (such as Germany, South Korea, France) or requires embassy legalization (such as UAE)',
      'Verify whether the university requires Apostille on the original document or on a notarized copy',
      'Arrange certified translations by accredited translators if documents are not in English or the target language',
      'Scan high-resolution color copies of all attested documents before dispatching physical packets',
    ],
    highlights: [
      {
        title: 'MEA Apostille & State HRD Guidance',
        description: 'Structured support for authenticating high school and university diplomas for Hague Convention countries.',
      },
      {
        title: 'Notary & True Copy Verification',
        description: 'Proper preparation of academic dossiers to prevent rejection during university enrollment.',
      },
      {
        title: 'Certified Academic Translations',
        description: 'Accurate translation workflows for transcripts and civil records required by European and Asian universities.',
      },
    ],
    faqs: [
      {
        question: 'Which study destinations commonly require Apostille or Embassy Attestation?',
        answer:
          'South Korea strictly requires Apostille authentication (or Korean Embassy verification) on final academic documents for enrollment and D-2 visas. Dubai (UAE) requires attested degree certificates for UAE Ministry/visa formalities, and several German and French procedures require certified copies and translations.',
      },
      {
        question: 'How long does HRD and MEA Apostille processing take?',
        answer:
          'Processing durations vary significantly depending on the issuing university, state HRD department verification queues, and Ministry workloads. Because official processing times cannot be guaranteed, we advise starting as soon as your transcripts are issued.',
      },
      {
        question: 'When do I need certified translations?',
        answer:
          'If any of your academic transcripts, degree certificates, or family relationship documents are issued in a regional language rather than English (or if a German/French/Korean institution explicitly requests a target-language translation), a certified translation must accompany the authenticated document.',
      },
    ],
  },
  {
    slug: 'language-coaching-hub',
    number: '05',
    navTitle: 'Language Hub — IELTS, PTE, German A1–B2',
    title: 'Language Coaching Hub',
    blueprintSummary:
      'Targeted test preparation for IELTS and PTE, alongside structured target language training including German language modules (A1 through B2 levels).',
    regulatoryDisclaimer:
      'Important Notice: Exam band scores and language proficiency certifications depend on individual student dedication and official test performance. Class schedules, batch availability, and module fees are shared transparently upon inquiry.',
    overview:
      'Strong language proficiency is both an admissions gateway and a catalyst for academic confidence abroad. The Gradsail Language Coaching Hub equips students for English proficiency tests (IELTS Academic and PTE Academic) and delivers structured CEFR-aligned German language progression from beginner A1 through upper-intermediate B2.',
    howItWorks: [
      {
        stepNumber: '01',
        title: 'Diagnostic Baseline Assessment',
        description:
          'Take a diagnostic evaluation in reading, writing, listening, and speaking (or assess your current CEFR level for German) to identify focus areas.',
      },
      {
        stepNumber: '02',
        title: 'Structured Module Roadmap',
        description:
          'Enroll in targeted IELTS, PTE, or German A1–B2 modules aligned with your university application and visa timelines.',
      },
      {
        stepNumber: '03',
        title: 'Practice Drills & Writing/Speaking Feedback',
        description:
          'Complete timed section practice, essay evaluations, speaking simulations, and vocabulary building.',
      },
      {
        stepNumber: '04',
        title: 'Official Exam Registration Guidance',
        description:
          'Guidance on selecting the right test format (e.g., IELTS Academic vs. IELTS for UKVI, PTE Academic, Goethe-Zertifikat, or TestDaF) and booking official test dates.',
      },
    ],
    studentRequirements: [
      'Clarity on target university band score or CEFR language level requirement.',
      'Consistent study schedule for live sessions, self-study drills, and mock assessments.',
      'Valid passport (required for registering on official IELTS, PTE, or Goethe exam portals).',
    ],
    checklistTitle: 'Language & Test Prep Readiness Checklist',
    preparationChecklist: [
      'Confirm the minimum overall and sectional scores required by your shortlisted universities and visa category',
      'Verify whether you need a standard academic test or a UKVI-specific SELT exam',
      'Plan a realistic timeline for German CEFR progression (each level from A1 to B2 requires dedicated study hours)',
      'Complete full-length timed mock tests under exam conditions prior to booking your official test slot',
      'Ensure your official test scorecard will arrive at least 3–4 weeks before your university conditional clearance deadline',
    ],
    highlights: [
      {
        title: 'IELTS Academic & UKVI Prep',
        description: 'Comprehensive preparation across Listening, Reading, Task 1 & 2 Writing rubrics, and 1-on-1 Speaking drills.',
      },
      {
        title: 'PTE Academic Preparation',
        description: 'Computer-based test strategies, oral fluency practice, integrated task templates, and timed mock scoring.',
      },
      {
        title: 'German Language Modules (A1–B2)',
        description: 'CEFR-structured German progression (A1, A2, B1, B2) preparing students for Goethe/telc exams and life in Germany.',
      },
    ],
    faqs: [
      {
        question: 'Should I take IELTS Academic or PTE Academic?',
        answer:
          'Both IELTS Academic and PTE Academic are widely accepted across the UK, Australia, and many English-taught programs in Europe and Asia. During counseling, we check the exact accepted test list for your target universities and help you choose the format that best suits your test-taking style.',
      },
      {
        question: 'How are the German A1 to B2 modules structured?',
        answer:
          'Our German training follows the Common European Framework of Reference for Languages (CEFR): A1 (Beginner foundations and everyday expressions), A2 (Routine communication), B1 (Independent intermediate communication), and B2 (Upper-intermediate academic and workplace fluency).',
      },
      {
        question: 'Do I still need German if my Master’s in Germany is taught in English?',
        answer:
          'While English-taught Master’s programs may only require IELTS/TOEFL for academic admission, completing at least German A1–A2 (and ideally B1–B2) makes everyday life, part-time student jobs, and post-study career integration in Germany vastly smoother.',
      },
    ],
  },
  {
    slug: 'pre-departure-accommodation',
    number: '06',
    navTitle: 'Pre-Departure & Accommodation',
    title: 'Pre-Departure & Housing',
    blueprintSummary:
      'Guaranteed student accommodation booking assistance, airfare student discount booking, forex card loading, and pre-departure cultural orientation sessions.',
    regulatoryDisclaimer:
      'Important Notice: We provide dedicated student accommodation booking assistance across vetted housing providers and university halls. Specific room availability, lease terms, and student airfare baggage/discount offers are subject to provider inventory and carrier terms at the time of booking.',
    overview:
      'Securing your student visa is a major milestone, but transitioning smoothly to a new country requires practical preparation. Our Pre-Departure & Housing team supports you from booking verified student accommodation and student-fare flights to cultural orientation and arrival checklists.',
    howItWorks: [
      {
        stepNumber: '01',
        title: 'Student Accommodation Shortlisting & Booking Assistance',
        description:
          'Compare university halls of residence, Purpose-Built Student Accommodation (PBSA), Studierendenwerk dorms, or verified private residences based on commute time and budget.',
      },
      {
        stepNumber: '02',
        title: 'Student Airfare & Baggage Guidance',
        description:
          'Guidance on utilizing international student airfare programs (offering extra baggage allowances and flexible date changes where offered by airlines) once your visa is granted.',
      },
      {
        stepNumber: '03',
        title: 'Forex Card Loading & Initial Banking Setup',
        description:
          'Checklist for loading multi-currency student forex cards, carrying emergency funds safely, and documents needed to open a local student bank account upon arrival.',
      },
      {
        stepNumber: '04',
        title: 'Pre-Departure Cultural & Academic Orientation',
        description:
          'Interactive briefing covering airport immigration documents, local SIM/transport cards, police/city registration (such as German Anmeldung or Korean ARC), and safety best practices.',
      },
    ],
    studentRequirements: [
      'Confirmed university enrollment and campus postcode/location details.',
      'Monthly accommodation budget preference and room type preference (en-suite, studio, or shared apartment).',
      'Passport and visa approval details (prior to confirming non-refundable flight tickets).',
    ],
    checklistTitle: 'Pre-Departure & Travel Readiness Checklist',
    preparationChecklist: [
      'Finalize student accommodation contract and verify move-in check-in hours before booking flights',
      'Pack carry-on hand luggage folder with Passport, Visa, Offer Letter/CAS/CoE, accommodation proof, and financial statements for border control',
      'Load multi-currency student forex card and enable international transactions on backup cards',
      'Carry prescribed medications with doctor’s generic prescriptions and university immunization records',
      'Book airport transfer to campus housing and note university international student orientation dates',
    ],
    highlights: [
      {
        title: 'Accommodation Booking Assistance',
        description: 'Dedicated support comparing and booking verified student housing options near your university campus.',
      },
      {
        title: 'Student Airfare & Forex Readiness',
        description: 'Practical guidance on student flight concessions, extra baggage policies, and forex card preparation.',
      },
      {
        title: 'Cultural & Arrival Orientation',
        description: 'Country-specific briefings on local compliance, healthcare access, academic norms, and campus life.',
      },
    ],
    faqs: [
      {
        question: 'How does your student accommodation booking assistance work?',
        answer:
          'Every student receives dedicated assistance from our pre-departure desk to compare university dormitories and vetted private student housing platforms near their campus, review lease terms before signing, and secure official accommodation confirmation letters.',
      },
      {
        question: 'Should I book my flight tickets before my visa is approved?',
        answer:
          'Unless an embassy checklist explicitly requests a flight itinerary reservation, we strongly advise waiting until your student visa is officially granted before purchasing non-refundable airline tickets.',
      },
      {
        question: 'What documents must I keep in my cabin baggage when flying abroad?',
        answer:
          'Always carry your passport with valid visa/eVisa printout, unconditional offer letter (CAS/CoE/Zulassungsbescheid), accommodation contract, tuition fee receipts, financial proof, health insurance certificate, and emergency university contact numbers in your cabin bag—never in checked luggage.',
      },
    ],
  },
];

export const LANGUAGE_PATHWAYS = [
  {
    code: 'IELTS',
    title: 'IELTS Academic & UKVI Preparation',
    levelTag: 'English Proficiency · Global Standard',
    durationNote: 'Diagnostic-driven modular coaching',
    targetDestinations: 'UK, Australia, Germany, Dubai, France, South Korea',
    description:
      'Structured preparation across Academic Reading, Listening, Writing Task 1 & Task 2 analytical essays, and live 1-on-1 Speaking mock interviews.',
    modules: ['Diagnostic Band Evaluation', 'Writing Task 1 & 2 Rubric Mastery', 'Timed Reading & Listening Strategies', 'Full-Length Mock Exams & Speaking Clinics'],
  },
  {
    code: 'PTE',
    title: 'PTE Academic Preparation',
    levelTag: 'Computer-Based English Test',
    durationNote: 'Fast-track computer-lab & online practice',
    targetDestinations: 'Australia, UK, New Zealand & Global English Tracks',
    description:
      'Master integrated speaking, writing, reading, and listening question types with AI-aligned pronunciation and oral fluency feedback.',
    modules: ['Speaking & Oral Fluency Drills', 'Summarize Written & Spoken Text', 'Reading Fill-in-the-Blanks Mastery', 'Simulated Scored Practice Tests'],
  },
  {
    code: 'GER-A1',
    title: 'German Level A1 (Beginner Foundation)',
    levelTag: 'CEFR Level A1 · Foundation',
    durationNote: 'Zero-to-A1 structured curriculum',
    targetDestinations: 'Germany & DACH Region',
    description:
      'Build foundational German grammar, pronunciation, everyday vocabulary, and conversational confidence required for Goethe-Zertifikat A1.',
    modules: ['Core Phonetics & Sentence Structure', 'Everyday Campus & City Dialogues', 'Nominative & Accusative Grammar', 'Goethe A1 Exam Format Practice'],
  },
  {
    code: 'GER-A2',
    title: 'German Level A2 (Elementary Proficiency)',
    levelTag: 'CEFR Level A2 · Elementary',
    durationNote: 'Follows A1 completion',
    targetDestinations: 'Germany & DACH Region',
    description:
      'Expand conversational fluency for routine academic, housing, and administrative interactions in Germany with past-tense and dative structures.',
    modules: ['Perfekt & Modal Verb Mastery', 'Formal & Informal Written Correspondence', 'Listening Comprehension for Daily Life', 'Goethe / telc A2 Exam Readiness'],
  },
  {
    code: 'GER-B1',
    title: 'German Level B1 (Intermediate Independent)',
    levelTag: 'CEFR Level B1 · Intermediate',
    durationNote: 'Independent user milestone',
    targetDestinations: 'Germany (Studienkolleg & Workplace Readiness)',
    description:
      'Achieve independent proficiency to discuss academic topics, internship expectations, and complex narratives required for B1 certification.',
    modules: ['Subordinate Clauses & Complex Syntax', 'Structured Presentation & Debate Skills', 'Academic & Newspaper Reading', 'Full B1 Modular Mock Tests'],
  },
  {
    code: 'GER-B2',
    title: 'German Level B2 (Upper-Intermediate Academic)',
    levelTag: 'CEFR Level B2 · Upper-Intermediate',
    durationNote: 'University & professional bridge',
    targetDestinations: 'Germany (German-Taught Pathways & Career Integration)',
    description:
      'Develop nuanced comprehension of technical texts, university seminars, and professional communication across engineering and business contexts.',
    modules: ['Academic Essay & Argumentation', 'Technical & Seminar Listening Comprehension', 'Advanced Idiomatic & Passive Structures', 'Goethe B2 / TestDaF Bridge Preparation'],
  },
];

export const SCHOLARSHIP_CATEGORIES: ScholarshipItem[] = [
  {
    id: 'sch-uk-merit',
    title: 'UK University International Academic Merit Bursaries',
    fundingCategory: 'Merit-Based',
    country: 'United Kingdom',
    degreeLevel: "Master's",
    fundingTypeSummary: 'Partial tuition fee waivers assessed on undergraduate GPA and academic consistency',
    indicativeEligibility: [
      'Strong undergraduate academic record (typically First Class or high Upper Second Class equivalency).',
      'Holding a conditional or unconditional offer for an eligible full-time taught Master’s program.',
      'Submission of a scholarship statement before the university’s priority intake deadline.',
    ],
    applicationWindowNote: 'Assessed automatically with admission or via dedicated university scholarship portal prior to Fall/Spring intake.',
    verificationLabel: 'Informational Category — Specific award amounts verified per university offer',
  },
  {
    id: 'sch-uk-dept',
    title: 'UK Undergraduate & STEM Faculty Fee Waivers',
    fundingCategory: 'Institutional Fee Waiver',
    country: 'United Kingdom',
    degreeLevel: "Bachelor's",
    fundingTypeSummary: 'First-year or multi-year tuition reductions awarded by participating faculties',
    indicativeEligibility: [
      'High school academic achievement exceeding standard program entry requirements.',
      'Enrollment in designated STEM, Business, or Law undergraduate pathways.',
    ],
    applicationWindowNote: 'Reviewed during UCAS or direct institutional admission cycles.',
    verificationLabel: 'Informational Category — Subject to annual university faculty budgets',
  },
  {
    id: 'sch-aus-vc',
    title: 'Australian International Vice-Chancellor & Merit Scholarships',
    fundingCategory: 'Merit-Based',
    country: 'Australia',
    degreeLevel: 'All Degrees',
    fundingTypeSummary: 'Percentage-based tuition fee reductions across coursework degrees',
    indicativeEligibility: [
      'Demonstrated high academic achievement in prior High School or Bachelor’s qualification.',
      'Meeting CRICOS program admission and English proficiency requirements.',
    ],
    applicationWindowNote: 'Available for Semester 1 (Feb) and Semester 2 (July) intakes at participating universities.',
    verificationLabel: 'Informational Category — Exact percentage depends on institution & GPA tier',
  },
  {
    id: 'sch-ger-public',
    title: 'German Public University State-Subsidized Tuition Model & Stipends',
    fundingCategory: 'Public / Government',
    country: 'Germany',
    degreeLevel: "Master's",
    fundingTypeSummary: 'State-subsidized public education (semester contribution model) plus merit stipends like Deutschlandstipendium',
    indicativeEligibility: [
      'Direct admission to a state-funded German public university or TU9 institution.',
      'Strong academic grades and extracurricular/civic engagement for Deutschlandstipendium consideration.',
      'Note: Specific federal states or specialized executive programs may charge international tuition.',
    ],
    applicationWindowNote: 'Aligned with Winter and Summer semester enrollment cycles.',
    verificationLabel: 'Informational Category — Verified per federal state & university statute',
  },
  {
    id: 'sch-dubai-branch',
    title: 'Dubai International Branch Campus Early-Application & Merit Grants',
    fundingCategory: 'Institutional Fee Waiver',
    country: 'Dubai (UAE)',
    degreeLevel: "Bachelor's",
    fundingTypeSummary: 'Tuition fee discounts based on high school marks or early admission confirmation',
    indicativeEligibility: [
      'Qualifying high school or undergraduate grades meeting the branch campus scholarship slab.',
      'Timely submission of admission documents for upcoming intake.',
    ],
    applicationWindowNote: 'Offered across September, January, and May intakes at participating Dubai campuses.',
    verificationLabel: 'Informational Category — Confirmed directly on institutional offer letters',
  },
  {
    id: 'sch-fra-ge',
    title: 'French Grande École & Eiffel Excellence Scholarship Pathways',
    fundingCategory: 'Merit-Based',
    country: 'France',
    degreeLevel: "Master's",
    fundingTypeSummary: 'Institutional merit tuition waivers at Grandes Écoles and French Ministry nomination tracks',
    indicativeEligibility: [
      'Strong academic GPA, GMAT/GRE (where applicable), and admissions interview performance.',
      'For Eiffel Excellence nominations: early application through the nominating French institution (typically October–December for the following Fall).',
    ],
    applicationWindowNote: 'Early admissions rounds (Rounds 1 & 2) carry highest scholarship availability.',
    verificationLabel: 'Informational Category — Competitive selection by host schools/ministries',
  },
  {
    id: 'sch-kor-gpa',
    title: 'South Korea University Entrance, TOPIK & STEM Lab Scholarships',
    fundingCategory: 'Merit-Based',
    country: 'South Korea',
    degreeLevel: 'All Degrees',
    fundingTypeSummary: 'Partial to full tuition fee waivers linked to admission score, IELTS/TOPIK level, or graduate lab RA/TA roles',
    indicativeEligibility: [
      'Strong entrance academic evaluation, certified English (IELTS/TOEFL) or Korean (TOPIK) scores.',
      'Maintaining required semester GPA after enrollment for continuing scholarship renewal.',
    ],
    applicationWindowNote: 'Evaluated during March (Spring) and September (Fall) admission windows.',
    verificationLabel: 'Informational Category — Governed by individual Korean university regulations',
  },
  {
    id: 'sch-need-bursary',
    title: 'Institutional Need-Sensitive & Diversity Tuition Bursaries',
    fundingCategory: 'Need-Based',
    country: 'Multi-Country',
    degreeLevel: 'All Degrees',
    fundingTypeSummary: 'Supplementary fee waivers or bursaries combining academic readiness with documented financial context',
    indicativeEligibility: [
      'Academic offer from a participating university that administers need-sensitive international bursaries.',
      'Verifiable family income documentation and personal statement explaining funding plan.',
    ],
    applicationWindowNote: 'Requires separate bursary application prior to acceptance deadline.',
    verificationLabel: 'Informational Category — Availability varies by institution',
  },
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'res-blueprint',
    slug: 'gradsail-global-official-blueprint',
    title: 'Gradsail Global — Official Study Abroad Architecture & Service Overview',
    category: 'Country Guides',
    targetCountry: 'All 6 Destinations',
    readTime: '3 pages · Official PDF',
    publicationStatus: 'Official PDF Available',
    downloadUrl: '/assets/aistudio/Gradsail_Global_Website_Blueprint_99eb36de.pdf',
    shortDescription:
      'Download our official structural overview covering the 4-Step Student Journey, 6 Study Destinations, and 6 Core Advisory Services.',
    keyTakeaways: [
      'Overview of UK, Australia, Germany, Dubai (UAE), France, and South Korea study pathways',
      'Breakdown of our 4-step journey from Profile Evaluation to Pre-Departure',
      'Summary of all 6 core student advisory and documentation services',
    ],
    sections: [
      {
        heading: 'What This Official Reference Covers',
        body: 'This downloadable PDF document outlines Gradsail Global’s core service framework, destination focus areas, and student support workflow.',
        checklist: [
          'Review popular courses and university categories across all 6 destinations',
          'Understand how Admissions, Visa Guidance, Forex, Apostille, Language Hub, and Housing connect',
          'Use as a reference sheet during your free counseling session',
        ],
      },
    ],
  },
  {
    id: 'res-country-comparison',
    slug: 'six-country-destination-comparison-guide',
    title: '2026–2027 Six-Destination Study Abroad Comparison Guide',
    category: 'Country Guides',
    targetCountry: 'UK, Australia, Germany, Dubai, France, South Korea',
    readTime: '8 min read',
    publicationStatus: 'Available Online & Printable',
    shortDescription:
      'Compare degree durations, popular academic disciplines, intake timelines, and language pathways across all six Gradsail destinations.',
    keyTakeaways: [
      '1-year intensive Master’s in the UK vs. 1.5–2 year structures in Australia, Germany, France, and South Korea',
      'English-taught programs in Continental Europe (Germany & France) and East Asia (South Korea)',
      'When to initiate applications for Spring vs. Fall intakes',
    ],
    sections: [
      {
        heading: '1. Matching Your Academic Profile to Destination Structure',
        body: 'Different higher education systems evaluate undergraduate transcripts differently. While UK and Australian universities frequently consider overall grade averages and holistic work experience, German public universities strictly audit subject-specific credit hours (ECTS equivalency) from your Bachelor’s degree.',
        checklist: [
          'United Kingdom: Ideal for 1-year taught Master’s and 3-year Honours Bachelor’s degrees in STEM, Business, and Law',
          'Australia: Strong 1.5–2 year Master’s and 3–4 year Bachelor’s in IT, Healthcare, and Engineering',
          'Germany: TU9 and public universities excelling in Mechanical Engineering, Data Science, and AI',
          'Dubai (UAE): International branch campuses offering Hospitality, Management, and Technology pathways',
          'France: Grandes Écoles and public universities leading in Luxury Management, Fashion, and Business',
          'South Korea: SKY universities and KAIST leading in Technology, Arts, and Korean Studies',
        ],
      },
      {
        heading: '2. Planning Your Application Calendar',
        body: 'Starting 9 to 12 months before your target intake allows time for standardized tests (IELTS/PTE/German), document authentication (APS, Uni-Assist, Campus France, or Apostille), and priority scholarship consideration.',
      },
    ],
  },
  {
    id: 'res-visa-checklist',
    slug: 'embassy-visa-interview-and-file-checklist',
    title: 'Student Visa Documentation & Credibility Interview Checklist',
    category: 'Visa Interview Checklists',
    targetCountry: 'All Destinations',
    readTime: '7 min read',
    publicationStatus: 'Available Online & Printable',
    shortDescription:
      'A structured pre-submission audit covering enrollment confirmations, financial liquidity rules, health cover, and interview readiness.',
    keyTakeaways: [
      'How to audit your CAS, CoE, Zulassungsbescheid, or Certificate of Admission for zero data errors',
      'Financial documentation rules: 28-day UK holding rules, German Blocked Accounts, and Australian GS financial proof',
      'Core questions asked in credibility and consular interviews',
    ],
    sections: [
      {
        heading: '1. Core Visa File Audit',
        body: 'Most preventable visa delays stem from inconsistent spellings, incomplete bank statement date ranges, or unverified sponsor explanations. Every document in your file must tell a consistent, verifiable story.',
        checklist: [
          'Passport validity covers your full program duration plus buffer months',
          'Unconditional admission confirmation matches passport bio-data character for character',
          'Financial funds are held in an acceptable liquid account or approved Blocked Account for the mandated period',
          'Health insurance / IHS / OSHC / Statutory cover receipt is generated and attached',
          'Academic originals and language scorecards are organized in chronological order',
        ],
      },
      {
        heading: '2. Visa Credibility Interview Preparation',
        body: 'Consular and credibility officers assess whether you are a genuine student with a realistic study and funding plan. Be ready to explain why you chose this specific course over domestic alternatives, the exact modules you will study in Semester 1 and Semester 2, and how your family or loan is funding the degree.',
      },
    ],
  },
  {
    id: 'res-cost-living',
    slug: 'international-student-cost-of-living-framework',
    title: 'Student Cost-of-Living & Financial Planning Framework',
    category: 'Cost-of-Living Breakdowns',
    targetCountry: 'All Destinations',
    readTime: '6 min read',
    publicationStatus: 'Available Online & Printable',
    shortDescription:
      'Understand fixed vs. variable student expenses—tuition deposits, blocked accounts, health cover, housing leases, and forex management.',
    keyTakeaways: [
      'Separating pre-departure statutory costs from monthly on-campus living budgets',
      'How city choice (e.g., London vs. regional UK, Paris vs. Lyon/Lille, Munich vs. Aachen) impacts rent',
      'Smart practices for tuition wire transfers and multi-currency forex cards',
    ],
    sections: [
      {
        heading: '1. Pre-Arrival vs. Post-Arrival Expense Categories',
        body: 'When budgeting for study abroad, families should map out three distinct phases: Application & Testing costs, Pre-Visa Deposits (tuition deposit, Blocked Account, health surcharge), and Monthly Living Expenses abroad.',
        checklist: [
          'Phase 1: Standardized test fees (IELTS/PTE), credential evaluation (APS/Uni-Assist), and Apostille fees',
          'Phase 2: Initial university tuition deposit, German Sperrkonto deposit (if applicable), and visa/health insurance fees',
          'Phase 3: Accommodation security deposit, monthly rent & utilities, groceries, and public transit pass',
        ],
      },
    ],
  },
  {
    id: 'res-sop-guide',
    slug: 'statement-of-purpose-and-lor-blueprint',
    title: 'Statement of Purpose (SOP) & Academic CV Structuring Guide',
    category: 'Application & SOP Guides',
    targetCountry: 'All Destinations',
    readTime: '9 min read',
    publicationStatus: 'Available Online & Printable',
    shortDescription:
      'Learn how to structure a persuasive, authentic Statement of Purpose, Letter of Motivation, or Study Plan tailored to international admissions committees.',
    keyTakeaways: [
      'The 5-part architecture of an effective academic Statement of Purpose',
      'How a German Letter of Motivation differs from a UK UCAS/Postgraduate Personal Statement',
      'Common clichés and plagiarism pitfalls to avoid',
    ],
    sections: [
      {
        heading: '1. Five-Part SOP Structure',
        body: 'Admissions officers read thousands of essays. Avoid generic childhood anecdotes and focus on your academic preparation, relevant projects, why this specific curriculum bridges your knowledge gap, and your post-graduation career direction.',
        checklist: [
          'Section 1 — Academic Hook & Core Direction: Clearly state the degree and your intellectual motivation',
          'Section 2 — Undergraduate Foundation & Projects: Highlight relevant coursework, thesis work, or technical projects',
          'Section 3 — Professional / Internship Experience: Connect practical exposure to the skills you now need to acquire',
          'Section 4 — Why This University & Curriculum: Reference specific modules, labs, or faculty research areas',
          'Section 5 — Long-Term Career Vision: Articulate realistic, well-researched post-study career goals',
        ],
      },
    ],
  },
  {
    id: 'res-ielts-pte',
    slug: 'ielts-and-pte-preparation-strategy',
    title: 'IELTS Academic vs. PTE Academic: Preparation & Target Band Strategy',
    category: 'IELTS and PTE Preparation',
    targetCountry: 'UK, Australia & English Tracks',
    readTime: '6 min read',
    publicationStatus: 'Available Online & Printable',
    shortDescription:
      'Compare test formats, scoring rubrics, and daily practice routines for achieving your target English proficiency score.',
    keyTakeaways: [
      'Understanding sectional cut-offs (e.g., no band less than 6.0 or 6.5) vs. overall scores',
      'When to register for IELTS for UKVI vs. standard IELTS Academic or PTE Academic',
      'Structuring a 4-to-6 week diagnostic and mock-test study plan',
    ],
    sections: [
      {
        heading: '1. Choosing the Right Test & Variant',
        body: 'Before booking an exam slot, verify the exact accepted test list on your university’s official admissions page and check whether you require a UKVI-approved SELT test (for foundation, pre-sessional, or specific visa pathways).',
        checklist: [
          'Take a full diagnostic mock test to identify your weakest communicative skill',
          'Practice Writing Task 1 and Task 2 under strict 60-minute time constraints with rubric feedback',
          'Record and review speaking responses to eliminate fillers and improve lexical resource',
          'Schedule your official exam at least 6 weeks before your application or conditional offer deadline',
        ],
      },
    ],
  },
  {
    id: 'res-german-a1-b2',
    slug: 'german-language-pathway-a1-to-b2-roadmap',
    title: 'German Language Learning Roadmap: Navigating CEFR Levels A1 to B2',
    category: 'German Language Learning',
    targetCountry: 'Germany',
    readTime: '7 min read',
    publicationStatus: 'Available Online & Printable',
    shortDescription:
      'A practical guide to CEFR German proficiency levels (A1, A2, B1, B2), exam bodies (Goethe, TestDaF, telc), and study timelines.',
    keyTakeaways: [
      'What each CEFR milestone (A1, A2, B1, B2) enables in academic and daily life in Germany',
      'How early to begin German training alongside your university application prep',
      'Combining English-taught STEM studies with conversational German fluency',
    ],
    sections: [
      {
        heading: '1. Understanding the CEFR Progression Ladder',
        body: 'Language acquisition is cumulative. Rushing through levels without mastering grammar foundations slows down intermediate progress. Our Language Coaching Hub structures German into four clear modules from A1 through B2.',
        checklist: [
          'Level A1: Everyday survival German, introductions, shopping, and foundational sentence word order',
          'Level A2: Routine conversations, past tense (Perfekt), housing inquiries, and daily appointments',
          'Level B1: Independent communication, expressing opinions, Studienkolleg entry readiness, and workplace basics',
          'Level B2: Upper-intermediate comprehension of complex texts, technical discussions, and university seminar readiness',
        ],
      },
    ],
  },
  {
    id: 'res-pre-departure',
    slug: 'international-student-pre-departure-master-checklist',
    title: 'Pre-Departure Master Checklist: Housing, Forex, Packing & Arrival Week',
    category: 'Pre-Departure Checklists',
    targetCountry: 'All Destinations',
    readTime: '6 min read',
    publicationStatus: 'Available Online & Printable',
    shortDescription:
      'Everything you need to organize in the final 30 days before your flight—from cabin-bag documents to first-week campus registration.',
    keyTakeaways: [
      'Essential documents for airport immigration and border control inspection',
      'Forex card, emergency cash, and international roaming setup',
      'First 7 days after landing: city registration, local banking, and university enrollment',
    ],
    sections: [
      {
        heading: '1. Final 30-Day Pre-Departure Countdown',
        body: 'Use this checklist once your student visa is approved and your accommodation lease is confirmed.',
        checklist: [
          'Verify accommodation move-in date and out-of-hours key collection instructions',
          'Prepare two physical folders of all original academic, admission, visa, housing, and financial documents',
          'Load multi-currency student forex card and notify your home bank of international travel dates',
          'Pack weather-appropriate clothing, universal power adapters, and prescribed medicines with doctor notes',
          'Attend Gradsail Global’s pre-departure orientation session for destination-specific arrival steps',
        ],
      },
    ],
  },
];

export const COMPREHENSIVE_FAQS = [
  {
    category: 'Admissions & Course Selection',
    items: [
      {
        question: 'How does Gradsail Global help me choose the right country and course?',
        answer:
          'During your free counseling session, we evaluate your academic transcripts, subject credits, career objectives, preferred study duration, and budget. We then compare suitable programs across the United Kingdom, Australia, Germany, Dubai (UAE), France, and South Korea so you can make an informed decision.',
      },
      {
        question: 'Are there any hidden charges in your counseling process?',
        answer:
          'No. Gradsail Global operates on a strictly transparent fee philosophy. Initial profile evaluation and counseling sessions are free, and any service or third-party statutory costs (such as university application fees, courier charges, apostille fees, or embassy visa fees) are disclosed clearly upfront.',
      },
    ],
  },
  {
    category: 'Applications & Statement of Purpose (SOP)',
    items: [
      {
        question: 'How early should I start my study abroad application?',
        answer:
          'We recommend starting 8 to 12 months before your target intake (Spring or Fall). This gives you ample time to prepare for IELTS/PTE or German modules, complete APS/Campus France/Apostille formalities where required, and apply before priority scholarship deadlines.',
      },
      {
        question: 'How do you assist with my Statement of Purpose (SOP) and LORs?',
        answer:
          'We provide destination-specific structural templates, brainstorming sessions, and multi-stage editorial feedback so your Statement of Purpose, Letter of Motivation, or Study Plan highlights your authentic academic achievements and career goals.',
      },
    ],
  },
  {
    category: 'Scholarships',
    items: [
      {
        question: 'Can you guarantee a 100% scholarship?',
        answer:
          'No ethical consultancy can guarantee a scholarship. Scholarship awards are determined by universities, ministries, and funding bodies based on academic merit, test scores, or financial need. Our role is to identify eligible merit-based, need-based, and institutional fee waiver options and help you submit strong, timely applications.',
      },
    ],
  },
  {
    category: 'Visa Guidance',
    items: [
      {
        question: 'What is included in your Visa Guidance & Preparation service?',
        answer:
          'We provide country-specific documentation checklists, financial file and sponsor verification, assistance with visa cover letters/GS statements, and one-on-one mock visa interview practice. Please note that final visa decisions always rest with the relevant embassy or immigration authority.',
      },
    ],
  },
  {
    category: 'Forex & Blocked Accounts',
    items: [
      {
        question: 'How do you help with German Blocked Accounts and international tuition transfers?',
        answer:
          'We guide students step by step through opening an approved German Blocked Account (Sperrkonto), remitting tuition deposits safely through authorized banking channels, obtaining multi-currency student forex cards, and organizing academic documents required for education loans.',
      },
    ],
  },
  {
    category: 'Language Preparation',
    items: [
      {
        question: 'Which language and test preparation programs do you offer?',
        answer:
          'Our Language Coaching Hub offers targeted preparation for IELTS Academic and PTE Academic, as well as structured CEFR-aligned German language training across levels A1, A2, B1, and B2.',
      },
    ],
  },
  {
    category: 'Accommodation & Pre-Departure',
    items: [
      {
        question: 'What pre-departure and housing support do you provide?',
        answer:
          'Every student receives dedicated assistance comparing and booking student accommodation near their university, guidance on student airfare options and forex card loading, and a comprehensive pre-departure cultural and arrival orientation.',
      },
    ],
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Student-Centric Guidance',
    description:
      'Recommendations built around your academic background, career goals, and realistic budget rather than generic one-size-fits-all lists.',
  },
  {
    number: '02',
    title: 'Transparent Fee Structures',
    description:
      'Clear, upfront explanation of university tuition, living costs, and statutory fees with zero hidden charges.',
  },
  {
    number: '03',
    title: 'Course & University Shortlisting',
    description:
      'Structured shortlisting across the UK, Australia, Germany, Dubai (UAE), France, and South Korea tailored to your degree level.',
  },
  {
    number: '04',
    title: 'Application & SOP Assistance',
    description:
      'Iterative editorial feedback on your Statement of Purpose, CV, and application portals with complete offer tracking.',
  },
  {
    number: '05',
    title: 'Visa Preparation Guidance',
    description:
      'Embassy-aligned documentation audits, financial file checks, and one-on-one mock interview practice.',
  },
  {
    number: '06',
    title: 'Scholarship Guidance',
    description:
      'Practical support identifying and applying for merit-based, need-based, and institutional tuition fee waivers.',
  },
  {
    number: '07',
    title: 'Financial & Forex Assistance',
    description:
      'Procedural guidance for international tuition transfers, German Blocked Accounts, student forex cards, and loan documentation.',
  },
  {
    number: '08',
    title: 'Pre-Departure & Housing Support',
    description:
      'Dedicated student accommodation booking assistance, student airfare guidance, and cultural arrival briefings.',
  },
];
