export type Language = 'te' | 'en';

export interface BilingualText {
  te: string;
  en: string;
}

export interface CeremonyScheduleItem {
  id: string;
  title: BilingualText;
  subtitle?: BilingualText;
  dateStr: BilingualText;
  /**
   * exactTime: null or string if confirmed.
   * If null, UI shows "Awaiting Panchangam / Muhurtham Timing" or hides exact time.
   */
  time: BilingualText | null;
  isTimeConfirmed: boolean;
  description: BilingualText;
  iconName: 'home' | 'sun' | 'flame' | 'sparkles' | 'utensils';
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
  };
  eventDate: {
    isoDate: string; // '2026-11-16'
    dayOfWeek: BilingualText;
    fullDate: BilingualText;
    teluguTithiPending: boolean; // Muhurtham Panchangam tithi note
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
  ceremonies: CeremonyScheduleItem[];
  weddingWebsiteUrl: string;
  contactNumbers: string[];
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

  // VENUE: Configurable placeholder until family confirms exact address
  venue: {
    isConfirmed: false,
    name: {
      te: 'శ్రీ నిలయం (నూతన గృహం)',
      en: 'Our New Home',
    },
    addressLine1: {
      te: 'వేదిక వివరాలు త్వరలో కుటుంబ సభ్యులచే తెలియజేయబడతాయి',
      en: 'Address details to be shared soon upon family confirmation',
    },
    addressLine2: {
      te: 'రాజమండ్రి / విశాఖపట్నం పరిసరాలు',
      en: 'Rajahmundry / Visakhapatnam region',
    },
    city: {
      te: 'ఆంధ్రప్రదేశ్',
      en: 'Andhra Pradesh',
    },
    landmark: {
      te: 'రవాణా మార్గం వివరాలు త్వరలోనే పొందుపరచబడతాయి',
      en: 'Directions & landmarks will be updated shortly',
    },
    // Keep null or Google Maps search link when confirmed
    googleMapsUrl: null,
  },

  // MEAL / PRASADAM: Configurable placeholder (hidden by default since unconfirmed)
  meal: {
    isConfirmed: false,
    title: {
      te: 'తీర్థ ప్రసాదములు & విందు',
      en: 'Teertha Prasadam & Lunch',
    },
    timing: null, // e.g. '12:30 PM onwards' when confirmed
    description: {
      te: 'గృహప్రవేశ పూజానంతరం బంధుమిత్రులకు అన్నప్రసాదం ఏర్పాటు చేయబడును.',
      en: 'Traditional festive lunch and prasadam will follow the sacred ceremonies.',
    },
  },

  // CEREMONIES: Schedule with confirmed date and unconfirmed exact times
  ceremonies: [
    {
      id: 'vasthu-pooja',
      title: {
        te: 'గోపూజ & వాస్తు హోమం',
        en: 'Go Pooja & Vastu Homam',
      },
      subtitle: {
        te: 'గృహ శాంతి & వాస్తు దేవతా పూజ',
        en: 'Consecration & Vastu Blessings',
      },
      dateStr: {
        te: '16 నవంబర్ 2026',
        en: '16 November 2026',
      },
      time: null, // Awaiting Muhurtham
      isTimeConfirmed: false,
      description: {
        te: 'నూతన గృహంలోకి గోమాత ప్రవేశం, వాస్తు హోమం మరియు గణపతి పూజ నిర్వహించబడును.',
        en: 'Auspicious entry of Gomatha, Ganapathi Pooja, and Vastu Homam to sanctify our new threshold.',
      },
      iconName: 'flame',
    },
    {
      id: 'ksheera-abhishekam',
      title: {
        te: 'పాలు పొంగించడం & ప్రవేశం',
        en: 'Milk Boiling & Auspicious Entry',
      },
      subtitle: {
        te: 'క్షీరాభిషేకం & సుముహూర్త ప్రవేశం',
        en: 'Traditional Ksheera Pravesham',
      },
      dateStr: {
        te: '16 నవంబర్ 2026',
        en: '16 November 2026',
      },
      time: null, // Awaiting Muhurtham
      isTimeConfirmed: false,
      description: {
        te: 'సంప్రదాయబద్ధంగా నూతన పాత్రలో పాలు పొంగించి ఇష్టదైవానికి నివేదన మరియు గృహ ప్రవేశం.',
        en: 'Boiling fresh milk in the new kitchen to symbolize boundless prosperity, joy, and divine grace.',
      },
      iconName: 'home',
    },
    {
      id: 'satyanarayana-vratam',
      title: {
        te: 'శ్రీ సత్యనారాయణ స్వామి వ్రతం',
        en: 'Sri Satyanarayana Swamy Vratam',
      },
      subtitle: {
        te: 'దివ్య ఆశీస్సుల వేడుక',
        en: 'Divine Gratitude & Blessings Pooja',
      },
      dateStr: {
        te: '16 నవంబర్ 2026',
        en: '16 November 2026',
      },
      time: null, // Awaiting Muhurtham
      isTimeConfirmed: false,
      description: {
        te: 'గృహంలో సుఖసంతోషాలు, ఆయురారోగ్యాలు వర్ధిల్లాలని దైవ సమక్షంలో విశేష సత్యనారాయణ వ్రతం.',
        en: 'Sacred worship and katha seeking the supreme blessings of Lord Satyanarayana for our family.',
      },
      iconName: 'sparkles',
    },
  ],

  weddingWebsiteUrl: 'https://bikas-bhargavi-wedding.onrender.com/',
  contactNumbers: [],
};

export const uiContent = {
  te: {
    omGanesh: 'ఓం శ్రీ గణేశాయ నమః',
    subInvocation: 'శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు',
    openingTitle: 'మా గృహప్రవేశ ఆహ్వాన పత్రిక',
    openInvitationBtn: 'ఆహ్వానాన్ని చూడండి',
    tapToEnter: 'పవిత్ర శుభలేఖను తెరవడానికి ఇక్కడ తాకండి',
    audioPlay: 'మంగళ వాయిద్యం ప్లే చేయండి',
    audioMute: 'సంగీతం నిశ్శబ్దం',
    langToggleLabel: 'భాష మార్చండి',
    nav: {
      hero: 'స్వాగతం',
      invitation: 'ఆహ్వానం',
      ceremony: 'పూజా వివరాలు',
      home: 'మా ఇల్లు',
      gallery: 'జ్ఞాపకాలు',
      blessings: 'ఆశీస్సులు',
    },
    hero: {
      eyebrow: 'శుభముహూర్తం & గృహప్రవేశం',
      title: 'మా గృహప్రవేశ వేడుక',
      subHeadline: 'దైవ కృపతో, పెద్దల ఆశీస్సులతో నిర్మించుకున్న మా నూతన గృహంలోకి అడుగుపెడుతున్న శుభవేళ...',
      coupleLabel: 'నూతన దంపతులు',
      dateLabel: 'తేదీ',
      saveTheDate: 'తేదీ గుర్తుంచుకోండి',
      countdownLabel: 'గృహప్రవేశ వేడుకకు మిగిలిన సమయం',
      days: 'రోజులు',
      hours: 'గంటలు',
      minutes: 'నిమిషాలు',
      seconds: 'సెకన్లు',
      eventPassed: 'గృహప్రవేశ వేడుక వైభవంగా ప్రారంభమైనది!',
    },
    invitation: {
      sectionTitle: 'సాదర ఆహ్వానం',
      sectionSubtitle: 'మా నూతన గృహంలో మీ సమక్షమే మాకు శ్రీరామరక్ష',
      salutation: 'శ్రీయుతులు మరియు ఆత్మీయులైన బంధుమిత్రులకు,',
      p1: 'భగవత్ సంకల్పంతో, తల్లిదండ్రుల ఆశీర్వాదాలతో మేము నిర్మించుకున్న నూతన గృహప్రవేశ శుభ మహోత్సవానికి మిమ్మల్ని, మీ కుటుంబసభ్యులను హృదయపూర్వకంగా ఆహ్వానిస్తున్నాము.',
      p2: 'మా ఈ ఆనందకరమైన తరుణంలో మీరు విచ్చేసి, నూతన గృహాన్ని సందర్శించి, మమ్మల్ని నిండు మనస్సుతో ఆశీర్వదించాలని కోరుకుంటున్నాము.',
      quote: '"గృహే లక్ష్మీః నివసతి నిత్యం, గృహే శాంతిః ప్రవర్ధతే"',
      quoteMeaning: 'పవిత్రమైన మా గృహంలో మీ పాదధూళి పడి శాంతి, సమృద్ధి నిండాలని ప్రార్థిస్తూ...',
      withBestWishes: 'ఇట్లు మీ రాకను కోరు',
    },
    ceremony: {
      sectionTitle: 'పూజా కార్యక్రమ వివరాలు',
      sectionSubtitle: 'సాంప్రదాయ రీతిలో నిర్వహించబడు పవిత్ర వేడుకలు',
      confirmedBadge: 'ధృవీకరించబడిన తేదీ',
      dateCardLabel: 'శుభ దినం',
      timePendingNotice: 'ముహూర్త సమయం మరియు పంచాంగ తిథి వివరాలు కుటుంబ పూజారులచే నిర్ణయించబడుతున్నాయి. త్వరలోనే అప్‌డేట్ చేయబడును.',
      timePendingTag: 'సమయం త్వరలో...',
      auspiciousMuhurtham: 'శుభ ముహూర్తం',
    },
    venue: {
      sectionTitle: 'మా నూతన గృహం',
      sectionSubtitle: 'మా కలల నిలయం — శ్రీ నిలయం',
      statusNotice: 'వేదిక చిరునామా కుటుంబ సభ్యుల ద్వారా ధృవీకరణ పొందిన వెంటనే గూగుల్ మ్యాప్స్ సహా ఇక్కడ పొందుపరచబడుతుంది.',
      statusTag: 'చిరునామా ఖరారు కావలసి ఉంది',
      directionsBtn: 'గూగుల్ మ్యాప్స్ దిశలు',
      directionsPendingBtn: 'చిరునామా త్వరలో రానుంది',
      copyAddress: 'చిరునామా కాపీ చేయండి',
      addressCopied: 'చిరునామా కాపీ చేయబడింది!',
    },
    gallery: {
      sectionTitle: 'మా ప్రయాణ జ్ఞాపకాలు',
      sectionSubtitle: 'వివాహ బంధం నుండి నూతన గృహ ప్రవేశం వరకు...',
      caption1: 'వివాహ వేడుకలో బికాస్ మరియు భార్గవి',
      caption2: 'నూతన దంపతుల ఆనంద క్షణాలు',
      caption3: 'పవిత్ర హోమ ఆశీర్వాదాలు',
      caption4: 'నూతన గృహ ప్రవేశానికి ముందడుగు',
      viewWeddingSite: 'మా వివాహ ఆహ్వాన వెబ్‌సైట్ చూడండి',
    },
    blessings: {
      sectionTitle: 'మీ దివ్య ఆశీస్సులు',
      sectionSubtitle: 'మీరు విచ్చేసి మమ్మల్ని ఆశీర్వదించడమే మాకు లభించే గొప్ప బహుమతి',
      showerFlowerBtn: 'అక్షతలు & పుష్ప వర్షం కురిపించండి 🌸',
      thankYouNote: 'మా ఈ శుభకార్యంలో భాగస్వామ్యులై మా నూతన జీవితానికి శుభాకాంక్షలు తెలుపుతున్న ప్రతి ఒక్కరికీ హృదయపూర్వక ధన్యవాదాలు.',
      shareWhatsAppBtn: 'వాట్సాప్‌లో షేర్ చేయండి',
      addToCalendarBtn: 'క్యాలెండర్‌కు జోడించండి',
      calendarEventTitle: 'బికాస్ & భార్గవి గృహప్రవేశం',
      calendarEventDesc: 'బికాస్ & భార్గవి నూతన గృహప్రవేశ వేడుక (16 నవంబర్ 2026)',
      shareMessage: 'బికాస్ & భార్గవి గృహప్రవేశ ఆహ్వాన పత్రిక (16 నవంబర్ 2026). శుభలేఖను ఇక్కడ వీక్షించండి:',
      signature: 'హృదయపూర్వక నమస్కారాలతో,',
    },
    footer: {
      rights: 'గృహప్రవేశ ఆహ్వానం • బికాస్ & భార్గవి',
      builtWithLove: 'సాంప్రదాయ ఆంధ్ర సంస్కృతి & ప్రేమతో రూపకల్పన',
    },
  },

  en: {
    omGanesh: 'Om Sri Ganeshayanamaha',
    subInvocation: 'Srirasthu • Subhamasthu • Avighnamasthu',
    openingTitle: 'Gruhapravesam Invitation',
    openInvitationBtn: 'Open Invitation',
    tapToEnter: 'Tap here to reveal the auspicious invitation card',
    audioPlay: 'Play Mangala Vaadyam',
    audioMute: 'Mute Audio',
    langToggleLabel: 'Switch Language',
    nav: {
      hero: 'Welcome',
      invitation: 'Invitation',
      ceremony: 'Ceremonies',
      home: 'Our Home',
      gallery: 'Memories',
      blessings: 'Blessings',
    },
    hero: {
      eyebrow: 'Auspicious Gruhapravesam Ceremony',
      title: 'Our Gruhapravesam',
      subHeadline: 'With the divine grace of the Almighty and blessings of our beloved elders, we step into our new home...',
      coupleLabel: 'The Couple',
      dateLabel: 'Date',
      saveTheDate: 'Save The Date',
      countdownLabel: 'Countdown to the Auspicious Day',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Mins',
      seconds: 'Secs',
      eventPassed: 'The Gruhapravesam celebrations have commenced!',
    },
    invitation: {
      sectionTitle: 'Cordially Inviting You',
      sectionSubtitle: 'Your presence brings auspicious light and warmth into our home',
      salutation: 'Dearest Family, Elders & Friends,',
      p1: 'By the supreme grace of the Almighty and the heartfelt blessings of our parents, we have built a haven filled with hopes and dreams. We take immense joy in inviting you and your family to grace our Gruhapravesam ceremony.',
      p2: 'As we kindle the sacred hearth and cross the threshold of our new home, your gracious presence, warm wishes, and blessings will make this celebration truly complete.',
      quote: '"May this house be filled with joy, peace, harmony and divine abundance"',
      quoteMeaning: 'We seek your gracious presence and heartfelt blessings on this milestone day.',
      withBestWishes: 'Warmly invited by',
    },
    ceremony: {
      sectionTitle: 'Sacred Ceremony Schedule',
      sectionSubtitle: 'Traditional rituals to sanctify the threshold of our home',
      confirmedBadge: 'Confirmed Date',
      dateCardLabel: 'Auspicious Date',
      timePendingNotice: 'Panchangam Muhurtham timing is currently being formalized with family priests and will be announced soon.',
      timePendingTag: 'Timing to be announced',
      auspiciousMuhurtham: 'Muhurtham',
    },
    venue: {
      sectionTitle: 'Our New Abode',
      sectionSubtitle: 'A sanctuary of peace, love, and sacred beginnings',
      statusNotice: 'Exact venue address and Google Maps directions will be updated here as soon as family arrangements are finalized.',
      statusTag: 'Address to be announced',
      directionsBtn: 'Get Google Maps Directions',
      directionsPendingBtn: 'Location details coming soon',
      copyAddress: 'Copy Address',
      addressCopied: 'Address copied to clipboard!',
    },
    gallery: {
      sectionTitle: 'Memories of Our Journey',
      sectionSubtitle: 'From our wedding vows to the joyous step into our new home',
      caption1: 'Bikas & Bhargavi during their wedding vows',
      caption2: 'Joyous moments together',
      caption3: 'Sacred rituals and elders’ blessings',
      caption4: 'Embarking on the new chapter of life',
      viewWeddingSite: 'Visit our wedding website',
    },
    blessings: {
      sectionTitle: 'Showers of Blessings',
      sectionSubtitle: 'Your heartfelt prayers and love are our greatest treasure',
      showerFlowerBtn: 'Shower Akshatalu & Petals 🌸',
      thankYouNote: 'We thank our elders, relatives, and dear friends for being an inseparable part of our journey and showering us with infinite love.',
      shareWhatsAppBtn: 'Share on WhatsApp',
      addToCalendarBtn: 'Add to Calendar',
      calendarEventTitle: "Bikas & Bhargavi's Gruhapravesam Ceremony",
      calendarEventDesc: 'Housewarming ceremony of Bikas Jena & Bhargavi Diddi on 16 November 2026.',
      shareMessage: "Join us in celebrating Bikas & Bhargavi's Gruhapravesam (Housewarming Ceremony) on 16 November 2026! View invitation:",
      signature: 'With warm regards & love,',
    },
    footer: {
      rights: 'Gruhapravesam Invitation • Bikas & Bhargavi',
      builtWithLove: 'Crafted with traditional Telugu aesthetics and elegance',
    },
  },
};
