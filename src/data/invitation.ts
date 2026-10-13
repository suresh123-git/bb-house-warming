export type Language = 'te' | 'en';

export interface BilingualText {
  te: string;
  en: string;
}

export interface HouseFeature {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  iconName: 'tulasi' | 'pooja' | 'kitchen' | 'living';
  tag: BilingualText;
}

export interface HousewarmingRitual {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  timeSlot: BilingualText | null;
  isTimeConfirmed: boolean;
  dateStr: BilingualText;
  significance: BilingualText;
  description: BilingualText;
  iconName: 'cow' | 'milk' | 'flame' | 'bell';
}

export interface JourneyMilestone {
  stage: BilingualText;
  title: BilingualText;
  description: BilingualText;
  icon: string;
}

export interface InvitationData {
  couple: {
    groom: {
      firstName: string;
      fullName: BilingualText;
      degree?: string;
      parents: BilingualText;
    };
    bride: {
      firstName: string;
      fullName: BilingualText;
      degree?: string;
      parents: BilingualText;
    };
    familySignature: BilingualText;
    homeownersHeadline: BilingualText;
  };
  eventDate: {
    isoDate: string; // '2026-11-16'
    dayOfWeek: BilingualText;
    fullDate: BilingualText;
    teluguTithiPending: boolean;
  };
  venue: {
    isConfirmed: boolean;
    name: BilingualText;
    addressLine1: BilingualText;
    addressLine2: BilingualText;
    city: BilingualText;
    landmark?: BilingualText;
    googleMapsUrl: string | null;
  };
  meal: {
    isConfirmed: boolean;
    title: BilingualText;
    timing: BilingualText | null;
    description: BilingualText;
  };
  rituals: HousewarmingRitual[];
  houseFeatures: HouseFeature[];
  journey: JourneyMilestone[];
  weddingWebsiteUrl: string;
}

export const invitationData: InvitationData = {
  couple: {
    groom: {
      firstName: 'Bikas',
      fullName: {
        te: 'బికాస్ జెనా',
        en: 'Bikas Jena',
      },
      degree: 'B.Tech (Mech)',
      parents: {
        te: 'శ్రీ ఫకీర్ జెనా & శ్రీమతి బెంగుళి జెనా ల కుమారుడు',
        en: 'Son of Sri Fakir Jena & Smt. Benguli Jena',
      },
    },
    bride: {
      firstName: 'Bhargavi',
      fullName: {
        te: 'భార్గవి దిద్ది',
        en: 'Bhargavi Diddi',
      },
      degree: 'B.Tech (CSE)',
      parents: {
        te: 'శ్రీ వెంకట రమణ దిద్ది & శ్రీమతి విజయ లక్ష్మి దిద్ది ల కుమార్తె (రాజమండ్రి)',
        en: 'Daughter of Sri Venkata Ramana Diddi & Smt. Vijaya Lakshmi Diddi (Rajahmundry)',
      },
    },
    familySignature: {
      te: 'జెనా మరియు దిద్ది కుటుంబ సభ్యులు',
      en: 'Jena & Diddi Family',
    },
    homeownersHeadline: {
      te: 'నూతన గృహస్థులు: బికాస్ & భార్గవి',
      en: 'Proud Homeowners: Bikas & Bhargavi',
    },
  },

  eventDate: {
    isoDate: '2026-11-16',
    dayOfWeek: {
      te: 'సోమవారం',
      en: 'Monday',
    },
    fullDate: {
      te: '16 నవంబర్ 2026',
      en: '16th November 2026',
    },
    teluguTithiPending: true,
  },

  venue: {
    isConfirmed: false,
    name: {
      te: 'శ్రీ నిలయం (నూతన గృహం)',
      en: 'Sri Nilayam (Our New Home)',
    },
    addressLine1: {
      te: 'వేదిక చిరునామా కుటుంబ పెద్దలచే త్వరలో తెలియజేయబడును',
      en: 'Exact venue address to be shared upon family confirmation',
    },
    addressLine2: {
      te: 'రాజమండ్రి / విశాఖపట్నం పరిసర ప్రాంతం',
      en: 'Rajahmundry / Visakhapatnam region',
    },
    city: {
      te: 'ఆంధ్రప్రదేశ్',
      en: 'Andhra Pradesh',
    },
    landmark: {
      te: 'గూగుల్ మ్యాప్స్ లొకేషన్ వివరాలు త్వరలోనే అందించబడును',
      en: 'Google Maps pin & landmarks will be updated soon',
    },
    googleMapsUrl: null,
  },

  meal: {
    isConfirmed: false,
    title: {
      te: 'గృహప్రవేశ విందు & తీర్థ ప్రసాదాలు',
      en: 'Housewarming Feast & Prasadam',
    },
    timing: null,
    description: {
      te: 'పూజా కార్యక్రమాల అనంతరం ఆత్మీయ బంధుమిత్రులకు సాంప్రదాయ విందు భోజనం.',
      en: 'Traditional celebratory feast and prasadam following the sacred pooja.',
    },
  },

  // Deeply authentic Gruhapravesam rituals
  rituals: [
    {
      id: 'gomatha-pravesham',
      title: {
        te: 'గోమాత పూజ & సింహద్వార ప్రవేశం',
        en: 'Gomatha Pooja & Simhadwara Pravesham',
      },
      subtitle: {
        te: 'సమస్త దేవతల ఆశీర్వాదంతో తొలి అడుగు',
        en: 'Invoking Auspicious Abundance',
      },
      timeSlot: null,
      isTimeConfirmed: false,
      dateStr: {
        te: '16 నవంబర్ 2026',
        en: '16 November 2026',
      },
      significance: {
        te: 'గోమాతలో సకల దేవతలు కొలువై ఉంటారు. గృహంలోకి గోప్రవేశం సర్వదోష నివారిణి, అష్టైశ్వర్య ప్రదాయిని.',
        en: 'Welcoming the sacred Gomatha through the threshold sanctifies every corner with positive energy and divine abundance.',
      },
      description: {
        te: 'సింహద్వారానికి మామిడాకులు, పసుపు-కుంకుమల అలంకరణ అనంతరం గోమాత సమక్షంలో ప్రవేశం.',
        en: 'Adorning the Simhadwaram with fresh mango leaves and turmeric, stepping into the sanctified threshold.',
      },
      iconName: 'cow',
    },
    {
      id: 'palu-ponginchadam',
      title: {
        te: 'పాలు పొంగించే వేడుక (క్షీర భాండం)',
        en: 'Palu Ponginchadam (Milk Boiling Ritual)',
      },
      subtitle: {
        te: 'ఆనందం, సమృద్ధి నిరంతరం పొంగిపొరలాలని...',
        en: 'The Eternal Overflow of Joy & Prosperity',
      },
      timeSlot: null,
      isTimeConfirmed: false,
      dateStr: {
        te: '16 నవంబర్ 2026',
        en: '16 November 2026',
      },
      significance: {
        te: 'నూతన పాత్రలో పాలు తూర్పు/ఈశాన్య దిక్కుగా పొంగడం సుఖశాంతులు, సంపదలకు ప్రతీక.',
        en: 'Fresh milk boiling over to the north-east in a brass pot is the quintessential omen of overflowing wealth and joy.',
      },
      description: {
        te: 'నూతన వంటశాలలో పాలు పొంగించి ఇష్టదైవానికి నైవేద్యం సమర్పించి తీపి ప్రసాదం పంపిణీ.',
        en: 'Boiling milk on the new hearth, offering the sacred ksheera prasadam to the Almighty, and sharing sweet blessings.',
      },
      iconName: 'milk',
    },
    {
      id: 'vasthu-homam',
      title: {
        te: 'వాస్తు శాంతి & నవగ్రహ హోమం',
        en: 'Vastu Shanti & Navagraha Homam',
      },
      subtitle: {
        te: 'అష్టదిక్పాలకుల అనుగ్రహం & గృహ శాంతి',
        en: 'Consecrating the Eight Directions',
      },
      timeSlot: null,
      isTimeConfirmed: false,
      dateStr: {
        te: '16 నవంబర్ 2026',
        en: '16 November 2026',
      },
      significance: {
        te: 'గృహ నిర్మాణంలో కలిగే సమస్త వాస్తు దోషాల నివారణకు అగ్నిహోత్ర సమక్షంలో నిర్వహించే పవిత్ర యజ్ఞం.',
        en: 'Sacred fire oblation appeasing Vastu Purusha and Navagrahas to harmonize energy throughout the structure.',
      },
      description: {
        te: 'వేద మంత్రోచ్ఛారణల నడుమ పూర్ణాహుతి మరియు గృహ రక్షా బంధనం.',
        en: 'Chanting of ancient Vedic mantras followed by the auspicious Poornahuti.',
      },
      iconName: 'flame',
    },
    {
      id: 'satyanarayana-swamy-pooja',
      title: {
        te: 'శ్రీ సత్యనారాయణ స్వామి వ్రతం',
        en: 'Sri Satyanarayana Swamy Vratam',
      },
      subtitle: {
        te: 'నూతన గృహంలో దివ్య శాంతి & దీర్ఘాయుష్షు',
        en: 'Pooja of Eternal Divine Grace',
      },
      timeSlot: null,
      isTimeConfirmed: false,
      dateStr: {
        te: '16 నవంబర్ 2026',
        en: '16 November 2026',
      },
      significance: {
        te: 'గృహస్థ జీవనంలో సత్యం, ధర్మం, శాంతి నిలవాలని స్వామివారిని పూజించి ప్రసాదం స్వీకరించడం.',
        en: 'Family Thanksgiving prayer invoking peace, good health, and righteousness for generations.',
      },
      description: {
        te: 'వ్రత కథా పఠనం, మంగళ హారతులు మరియు స్వామివారి ప్రసాద వితరణ.',
        en: 'Sacred katha recitation, Mangala Harati, and sharing of divine rava prasadam.',
      },
      iconName: 'bell',
    },
  ],

  // House highlights to showcase homeownership
  houseFeatures: [
    {
      id: 'simhadwaram-f',
      title: { te: 'చెక్కడపు టేకు సింహద్వారం', en: 'Carved Teak Simhadwaram' },
      subtitle: { te: 'మంగళ తోరణాలు & ఇత్తడి గంటలు', en: 'Mango Toranam & Brass Temple Bells' },
      description: {
        te: 'లక్ష్మీ-గణపతుల రూపాలతో రూపుదిద్దుకున్న పవిత్ర ప్రవేశ ద్వారం, నిరంతరం శుభాన్ని ఆహ్వానించేలా రూపొందించబడింది.',
        en: 'Hand-carved teak entrance door with Lakshmi and Ganesha motifs, adorned with brass bells welcoming guests.',
      },
      iconName: 'pooja',
      tag: { te: 'ప్రవేశం', en: 'Entrance' },
    },
    {
      id: 'tulasi-kota-f',
      title: { te: 'తులసి కోట & ముంగిలి', en: 'Courtyard & Sacred Tulasi Kota' },
      subtitle: { te: 'బియ్యప్పిండి ముగ్గులు & దీపాలు', en: 'Traditional Muggu & Evening Deepams' },
      description: {
        te: 'ఇంటి మధ్యలో నిత్యం దీపం వెలిగే పవిత్ర తులసి కోట, నిండుదనాన్ని మరియు సాత్విక వాతావరణాన్ని చేకూరుస్తుంది.',
        en: 'The spiritual heart of our home with a dedicated Tulasi shrine bathed in morning sunlight.',
      },
      iconName: 'tulasi',
      tag: { te: 'ప్రాంగణం', en: 'Courtyard' },
    },
    {
      id: 'pooja-mandir-f',
      title: { te: 'పూజా మందిరం (ఈశాన్యం)', en: 'Pooja Mandiram (North-East)' },
      subtitle: { te: 'నిత్య ధ్యానం & దైవ సన్నిధి', en: 'A Sanctuary of Daily Serenity' },
      description: {
        te: 'ఈశాన్య దిశలో శాస్త్రోక్తంగా తీర్చిదిద్దిన దేవుడి గది, ప్రశాంతతను మరియు ఆధ్యాత్మిక శక్తిని నింపుతుంది.',
        en: 'Vastu-aligned sanctum in the North-East providing tranquility, prayer, and contemplation.',
      },
      iconName: 'pooja',
      tag: { te: 'ఈశాన్యం', en: 'Sanctum' },
    },
    {
      id: 'kitchen-hearth-f',
      title: { te: 'నూతన వంటశాల (ఆగ్నేయం)', en: 'The Hearth & Kitchen (Agni)' },
      subtitle: { te: 'పాలు పొంగే పవిత్ర స్థానం', en: 'Where Milk Will Boil & Feasts Begin' },
      description: {
        te: 'ఆగ్నేయ కోణంలో నిర్మించబడిన వంటశాల — ఇక్కడ తొలిసారి పాలు పొంగించి అన్నలక్ష్మికి వందనాలు అర్పిస్తాము.',
        en: 'The culinary hearth where the sacred milk boiling ceremony begins, spreading aromas of warmth and hospitality.',
      },
      iconName: 'kitchen',
      tag: { te: 'వంటశాల', en: 'Hearth' },
    },
  ],

  // Building journey from blueprint to Gruhapravesam
  journey: [
    {
      stage: { te: 'సంకల్పం & స్థల పూజ', en: 'Vision & Foundation' },
      title: { te: 'మా కలల సంకల్పం', en: 'Laying the Sacred Stone' },
      description: {
        te: 'సొంత ఇల్లు కట్టుకోవాలనే కలలతో పెద్దల ఆశీర్వాదంతో భూమి పూజ నిర్వహించాము.',
        en: 'With our elders’ blessings, we broke ground on our dream home with sacred Bhumi Pooja.',
      },
      icon: '🌱',
    },
    {
      stage: { te: 'వాస్తు రీత్యా నిర్మాణం', en: 'Architectural Blueprint' },
      title: { te: 'ఇటుక ఇటుక పేర్చి...', en: 'Brick by Brick with Love' },
      description: {
        te: 'సాంప్రదాయ వాస్తు నియమాలను పాటిస్తూ, ప్రతి గదిలోనూ సహజ వెలుతురు, గాలి ప్రసరించేలా నిర్మించాము.',
        en: 'Designed with traditional Vastu Shastra principles to ensure natural sunlight and positive energy.',
      },
      icon: '🏛️',
    },
    {
      stage: { te: 'సింహద్వారం & గృహ శోభ', en: 'Simhadwaram & Detailing' },
      title: { te: 'మంగళ తోరణాల హంగులు', en: 'Carving the Threshold' },
      description: {
        te: 'చెక్క చెక్కడాలు, పసుపు పూసిన గడప, ఇత్తడి దీపాలు అమర్చి గృహప్రవేశానికి ముస్తాబు చేశాము.',
        en: 'Carved teak doors, yellow turmeric threshold, and brass fittings completed for the auspicious day.',
      },
      icon: '🚪',
    },
    {
      stage: { te: 'గృహప్రవేశం (16 నవంబర్ 2026)', en: 'Gruhapravesam Day' },
      title: { te: 'పవిత్ర తొలి అడుగు', en: 'Stepping Across the Threshold' },
      description: {
        te: 'మీ సమక్షంలో, దైవ సమక్షంలో పాలు పొంగించి నూతన గృహంలోకి అడుగుపెడుతున్నాము.',
        en: 'Stepping into our home, boiling the sacred milk, and receiving the blessings of our loved ones.',
      },
      icon: '🪔',
    },
  ],

  weddingWebsiteUrl: 'https://bikas-bhargavi-wedding.onrender.com/',
};

export const uiContent = {
  te: {
    omGanesh: '॥ శ్రీ గణేశాయ నమః • వాస్తు దేవతాయ నమః ॥',
    subInvocation: 'గృహే లక్ష్మీః నివసతి నిత్యం • గృహే శాంతిః ప్రవర్ధతే',
    doorScreen: {
      tag: 'సింహద్వారం • శుభ ప్రవేశం',
      mainHeading: 'మా నూతన గృహంలోకి స్వాగతం',
      subHeading: 'బికాస్ & భార్గవి ల గృహప్రవేశ మహోత్సవం',
      dateText: 'సోమవారం, 16 నవంబర్ 2026',
      instruction: 'గంట మోగించి సింహద్వారం తెరిచి నూతన గృహంలోకి ప్రవేశించండి',
      enterBtn: 'సింహద్వారం తెరవండి 🔔',
      openedStatus: 'నూతన గృహంలోకి సాదర స్వాగతం!',
    },
    nav: {
      entrance: 'సింహద్వారం',
      abode: 'మా ఇల్లు',
      rituals: 'పూజా విధులు',
      invitation: 'ఆహ్వానం',
      features: 'గృహ విశేషాలు',
      journey: 'మా ప్రయాణం',
      venue: 'చిరునామా',
      blessings: 'ఆశీస్సులు',
    },
    hero: {
      eyebrow: 'శుభప్రదమైన గృహప్రవేశ వేడుక',
      title: 'మా గృహప్రవేశం',
      subtitle: 'ఇటుకలు, రాళ్లతో నిర్మించిన ఇల్లు కాదు... మా కలలు, పెద్దల దీవెనలతో సాకారమైన ప్రేమ నిలయం!',
      homeownersBadge: 'గృహ యజమానులు: బికాస్ & భార్గవి',
      dateLabel: 'గృహప్రవేశ శుభ దినం',
      countdownTitle: 'గృహప్రవేశ వేడుకకు మిగిలిన సమయం',
      days: 'రోజులు',
      hours: 'గంటలు',
      mins: 'నిమిషాలు',
      secs: 'సెకన్లు',
      eventPassed: 'గృహప్రవేశ వేడుక పవిత్రంగా ప్రారంభమైనది!',
    },
    invitation: {
      tag: 'ఆత్మీయ ఆహ్వానం',
      title: 'మా నూతన గృహ ప్రవేశానికి సాదర స్వాగతం',
      subtitle: 'మీ పాదధూళితో మా ఇంటిని పునీతం చేయవలసిందిగా కోరుతున్నాము',
      salutation: 'ఆత్మీయులైన బంధుమిత్రులకు, పెద్దలకు నమస్కారములు,',
      p1: 'భగవంతుని దివ్య అనుగ్రహంతో, తల్లిదండ్రుల ఆశీర్వాదాలతో మేము కలలుగన్న నూతన గృహ నిర్మాణం పూర్తయినది. ఈ శుభవేళ నిర్వహించబడు మా "గృహప్రవేశ మహోత్సవానికి" మిమ్మల్ని, మీ కుటుంబ సభ్యులను మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.',
      p2: 'మా నూతన గడప దాటి లోనికి అడుగుపెడుతున్న ఈ పవిత్ర తరుణంలో మీ అమూల్యమైన రాక, మీ నిండు మనస్సుతో ఇచ్చే ఆశీర్వాదాలు మా గృహంలో ఎల్లప్పుడూ ఆనందం, శాంతిని నింపుతాయి.',
      shloka: '॥ శుభం భవతు • కళ్యాణం ఆయురారోగ్య సంపదః ॥',
      shlokaMeaning: 'నూతన గృహం సమస్త శుభాలను, ఆయురారోగ్య సంపదలను ప్రసాదించుగాక!',
      hostedBy: 'ఇట్లు మీ రాకకై ఎదురుచూచు నూతన గృహస్థులు',
      familyGreeting: 'మరియు జెనా, దిద్ది కుటుంబ సభ్యులు',
    },
    rituals: {
      tag: 'గృహప్రవేశ పవిత్ర విధువులు',
      title: 'నాలుగు సాంప్రదాయ శుభ కార్యక్రమాలు',
      subtitle: 'శాస్త్రోక్తంగా నిర్వహించబడు పూజలు & ముహూర్త వివరాలు',
      dateBadge: '16 నవంబర్ 2026 (ఖరారైన తేదీ)',
      timePendingNote: 'పురోహితుల ద్వారా ముహూర్త నిర్ణయం జరుగుతున్నది. సమయం త్వరలో నవీకరించబడును.',
      timePendingBadge: 'సమయం త్వరలో...',
      significanceLabel: 'శాస్త్ర ప్రాముఖ్యత:',
    },
    features: {
      tag: 'గృహ దర్శనం',
      title: 'మా కలల నిలయ విశేషాలు',
      subtitle: 'ప్రతి మూల సాంప్రదాయం మరియు వెచ్చదనం కలగలిసి...',
    },
    journey: {
      tag: 'నిర్మాణ ప్రయాణం',
      title: 'కల నుండి గృహప్రవేశం వరకు',
      subtitle: 'మా నూతన నిలయం రూపుదిద్దుకున్న క్రమం',
    },
    venue: {
      tag: 'గృహ వేదిక & మార్గం',
      title: 'మా ఇంటికి ఎలా చేరుకోవాలి?',
      subtitle: 'శ్రీ నిలయం — మా సరికొత్త చిరునామా',
      statusNotice: 'కుటుంబ సభ్యుల నుండి ఖచ్చితమైన చిరునామా & గూగుల్ మ్యాప్స్ లొకేషన్ వివరాలు త్వరలోనే ఇక్కడ నవీకరించబడతాయి.',
      statusBadge: 'చిరునామా ఖరారు కావలసి ఉంది',
      directionsPending: 'మ్యాప్ వివరాలు త్వరలో రానున్నాయి',
      copyBtn: 'చిరునామా కాపీ చేయండి',
      copiedBtn: 'కాపీ చేయబడింది!',
    },
    blessings: {
      tag: 'మీ పవిత్ర ఆశీస్సులు',
      title: 'అక్షతలు & పుష్ప వర్షంతో ఆశీర్వదించండి',
      subtitle: 'గృహస్థ జీవనంలోకి అడుగిడుతున్న మాకు మీ దీవెనలే రక్ష',
      showerBtn: 'అక్షతలు & మంగళ పుష్ప వర్షం కురిపించండి 🌸',
      bellRingBtn: 'మంగళ గంట మోగించండి 🔔',
      shareWhatsApp: 'వాట్సాప్‌లో ఆహ్వానం పంపండి',
      addToCalendar: 'క్యాలెండర్‌లో తేదీని సేవ్ చేసుకోండి',
      thankYou: 'మా గృహప్రవేశాన్ని మీ రాకతో ఆశీర్వదించినందుకు హృదయపూర్వక ధన్యవాదాలు.',
      signature: 'ప్రేమతో — బికాస్ & భార్గవి',
    },
    footer: {
      tagline: 'శ్రీ నిలయం • గృహప్రవేశ వేడుక 2026',
      builtNote: 'సాంప్రదాయ తెలుగు గృహప్రవేశ సంస్కృతితో రూపొందించబడింది',
    },
  },

  en: {
    omGanesh: '|| Sri Ganeshayanamaha • Vastu Devataya Namaha ||',
    subInvocation: 'May this new home be blessed with eternal peace, harmony and abundance',
    doorScreen: {
      tag: 'Simhadwaram • Auspicious Threshold',
      mainHeading: 'Welcome to Our New Home',
      subHeading: 'Gruhapravesam Ceremony of Bikas & Bhargavi',
      dateText: 'Monday, 16 November 2026',
      instruction: 'Ring the temple bell and open the sacred doorway to step inside our home',
      enterBtn: 'Open Simhadwaram & Enter 🔔',
      openedStatus: 'Welcome to our sanctuary!',
    },
    nav: {
      entrance: 'Simhadwaram',
      abode: 'Our Home',
      rituals: 'Sacred Rituals',
      invitation: 'Invitation',
      features: 'Home Highlights',
      journey: 'The Journey',
      venue: 'Directions',
      blessings: 'Blessings',
    },
    hero: {
      eyebrow: 'Auspicious Gruhapravesam Celebration',
      title: 'Our Gruhapravesam',
      subtitle: 'A house is built of bricks and stone, but a home is sculpted with love, dreams, and sacred blessings.',
      homeownersBadge: 'New Homeowners: Bikas & Bhargavi',
      dateLabel: 'Gruhapravesam Date',
      countdownTitle: 'Countdown to Stepping into Our Home',
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
      eventPassed: 'The Gruhapravesam celebrations have commenced!',
    },
    invitation: {
      tag: 'Warm Invitation',
      title: 'Welcoming You to Our New Sanctuary',
      subtitle: 'Your gracious footsteps will sanctify our threshold with warmth and peace',
      salutation: 'Dearest Family, Elders, and Beloved Friends,',
      p1: 'By the divine grace of the Almighty and the heartfelt blessings of our elders, our dream of creating a home filled with light and warmth has come true. We are overjoyed to invite you and your family to grace our Gruhapravesam ceremony.',
      p2: 'As we cross this new threshold, kindle the sacred hearth, and boil the auspicious milk, your gracious presence and heartfelt blessings will turn this house into a home.',
      shloka: '|| Shubham Bhavatu • Kalyanam Ayurarogya Sampadah ||',
      shlokaMeaning: 'May this abode resonate with eternal health, harmony, and prosperity!',
      hostedBy: 'Warmly hosted by the new homeowners',
      familyGreeting: 'Together with the Jena & Diddi Families',
    },
    rituals: {
      tag: 'Sacred Gruhapravesam Ceremonies',
      title: 'The Four Pillars of Our Housewarming',
      subtitle: 'Traditional Telugu rituals consecrating our threshold and hearth',
      dateBadge: '16 November 2026 (Confirmed Date)',
      timePendingNote: 'Exact auspicious muhurtham time is currently being formalized by family priests. Will be updated shortly.',
      timePendingBadge: 'Timing to be announced...',
      significanceLabel: 'Sacred Significance:',
    },
    features: {
      tag: 'Home Tour',
      title: 'Highlights of Our New Abode',
      subtitle: 'Where traditional warmth meets peaceful modern living',
    },
    journey: {
      tag: 'Our Building Journey',
      title: 'From Blueprint to Threshold',
      subtitle: 'How our dream home took shape step by step',
    },
    venue: {
      tag: 'Venue & Directions',
      title: 'Finding Your Way to Our Doorstep',
      subtitle: 'Sri Nilayam — Our New Abode',
      statusNotice: 'Exact venue address and Google Maps directions will be updated here as soon as family arrangements are finalized.',
      statusBadge: 'Address to be announced',
      directionsPending: 'Directions coming soon',
      copyBtn: 'Copy Address',
      copiedBtn: 'Address Copied!',
    },
    blessings: {
      tag: 'Blessings & Well-Wishes',
      title: 'Shower Your Blessings on Our New Threshold',
      subtitle: 'Your prayers and love are the bedrock of our new beginning',
      showerBtn: 'Shower Akshatalu & Petals 🌸',
      bellRingBtn: 'Ring the Temple Bell 🔔',
      shareWhatsApp: 'Share on WhatsApp',
      addToCalendar: 'Save to Calendar',
      thankYou: 'Thank you for being part of our story and blessing our new beginning.',
      signature: 'With love & gratitude — Bikas & Bhargavi',
    },
    footer: {
      tagline: 'Sri Nilayam • Gruhapravesam Ceremony 2026',
      builtNote: 'Crafted with authentic South Indian Gruhapravesam traditions',
    },
  },
};
