export type Language = 'en' | 'te' | 'kn';

export interface StoryboardSectionContent {
  entrance: {
    heading: string;
    subheading: string;
    openBtn: string;
  };
  nav: {
    brand: string;
    home: string;
    ourStory: string;
    details: string;
    location: string;
    switchLangTooltip: string;
    musicPlayTooltip: string;
    musicMuteTooltip: string;
    replayTooltip: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitleLine1: string;
    subtitleLine2: string;
    secondarySubtitle: string;
    date: string;
  };
  story: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    p1: string;
    p2: string;
  };
  details: {
    eyebrow: string;
    title: string;
    dateDay: string;
    dateFull: string;
    timeLabel: string;
    timeValue: string;
  };
  location: {
    eyebrow: string;
    title: string;
    subtitle: string;
    venueName: string;
    address: string;
    mapBtn: string;
    mapUrl: string;
    noticeText: string;
    discreetNote: string;
  };
  invitation: {
    eyebrow: string;
    title: string;
    quoteLine1: string;
    quoteLine2: string;
    message: string;
    signOff: string;
    coupleNames: string;
  };
  footer: {
    closingQuote: string;
    brand: string;
    date: string;
    subnote: string;
  };
}

export const storyboardContent: Record<Language, StoryboardSectionContent> = {
  en: {
    entrance: {
      heading: 'A New\nChapter Begins...',
      subheading: 'Welcome to Our New Home',
      openBtn: 'OPEN THE DOOR →',
    },
    nav: {
      brand: 'Bikas & Bhargavi',
      home: 'Home',
      ourStory: 'Our Story',
      details: 'Details',
      location: 'Location',
      switchLangTooltip: 'Switch to Telugu',
      musicPlayTooltip: 'Play Music',
      musicMuteTooltip: 'Mute Music',
      replayTooltip: 'Experience Entrance Again',
    },
    hero: {
      eyebrow: 'OUR HOUSE WARMING',
      titleLine1: 'A Home',
      titleLine2: 'Full of Love',
      subtitleLine1: 'We warmly invite you to celebrate',
      subtitleLine2: 'the beginning of our new home',
      secondarySubtitle: 'Join us as we step into this beautiful new chapter together.',
      date: 'Monday, 16 November 2026',
    },
    story: {
      eyebrow: 'OUR STORY',
      titleLine1: 'A Place to',
      titleLine2: 'Call Home',
      p1: 'Every home has a story, and ours is built with dreams, blessings and the love of family and friends.',
      p2: 'We are delighted to invite you to be a part of this special milestone in our journey.',
    },
    details: {
      eyebrow: 'THE CELEBRATION',
      title: 'House Warming',
      dateDay: 'Monday',
      dateFull: '16 November 2026',
      timeLabel: 'Lunch Time',
      timeValue: 'From 12:30 PM',
    },
    location: {
      eyebrow: 'THE LOCATION',
      title: 'Come Home',
      subtitle: 'We would be happy to have you with us at our new home.',
      venueName: 'SS Serenity',
      address: 'Sarjapura, Bengaluru',
      mapBtn: 'Open in Google Maps →',
      mapUrl:
        'https://www.google.com/maps/place/SS+Serenity+Sarjapura/@12.8642697,77.7840246,17z/data=!4m6!3m5!1s0x3bae72e3e197070b:0x3b66476d8bfb646a!8m2!3d12.8643028!4d77.7863933!16s%2Fg%2F11yg_ffc8s?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D',
      noticeText: 'Opening SS Serenity in Google Maps...',
      discreetNote: 'SS Serenity, Sarjapura, Bengaluru',
    },
    invitation: {
      eyebrow: 'OUR INVITATION',
      title: "You're Invited",
      quoteLine1: 'To our new home,',
      quoteLine2: 'Your presence is our blessing',
      message:
        'We warmly invite you to join us for our House Warming ceremony and seek your blessings as we begin this new chapter in our lives.',
      signOff: 'With love,',
      coupleNames: 'Bikas & Bhargavi',
    },
    footer: {
      closingQuote: 'May our new home be blessed with eternal love, peace, and abundance.',
      brand: 'Bikas & Bhargavi',
      date: '16 November 2026',
      subnote: 'House Warming Ceremony • 2026',
    },
  },
  te: {
    entrance: {
      heading: 'నూతన\nఆరంభం...',
      subheading: 'మా కొత్త ఇంటికి స్వాగతం',
      openBtn: 'ద్వారం తెరవండి →',
    },
    nav: {
      brand: 'బికాస్ & భార్గవి',
      home: 'ప్రారంభం',
      ourStory: 'మా కథ',
      details: 'వివరాలు',
      location: 'చిరునామా',
      switchLangTooltip: 'ఇంగ్లీష్‌లోకి మార్చండి',
      musicPlayTooltip: 'సంగీతం వినండి',
      musicMuteTooltip: 'సంగీతం నిలిపివేయండి',
      replayTooltip: 'ప్రారంభం మరలా చూడండి',
    },
    hero: {
      eyebrow: 'మా గృహప్రవేశం',
      titleLine1: 'ప్రేమతో నిండిన',
      titleLine2: 'మా నిలయం',
      subtitleLine1: 'మా కొత్త ఇంటి గృహప్రవేశ మహోత్సవానికి',
      subtitleLine2: 'మిమ్మల్ని మరియు మీ కుటుంబాన్ని సాదరంగా ఆహ్వానిస్తున్నాము',
      secondarySubtitle: 'మా నూతన ప్రయాణంలో మీరందరూ భాగస్వాములు కావాలని మనస్ఫూర్తిగా కోరుకుంటున్నాము.',
      date: 'సోమవారం, 16 నవంబర్ 2026',
    },
    story: {
      eyebrow: 'మా కథ',
      titleLine1: 'కలల గృహం',
      titleLine2: 'మా నిలయం',
      p1: 'ప్రతి ఇంటికీ ఒక అందమైన కథ ఉంటుంది. మా ఇల్లు కలలు, పెద్దల దీవెనలు మరియు కుటుంబం, స్నేహితుల ప్రేమతో నిర్మించబడింది.',
      p2: 'మా జీవితంలో ఈ పవిత్ర మైలురాయిని మీతో కలిసి జరుపుకోవడానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము.',
    },
    details: {
      eyebrow: 'శుభ మహోత్సవం',
      title: 'గృహప్రవేశం',
      dateDay: 'సోమవారం',
      dateFull: '16 నవంబర్ 2026',
      timeLabel: 'భోజన సమయం',
      timeValue: 'మధ్యాహ్నం 12:30 నుండి',
    },
    location: {
      eyebrow: 'వేదిక',
      title: 'మా ఇంటికి రండి',
      subtitle: 'మా కొత్త ఇంట్లో మిమ్మల్ని చూడటం మాకెంతో ఆనందం.',
      venueName: 'ఎస్.ఎస్ సెరెనిటీ',
      address: 'సర్జాపుర, బెంగళూరు',
      mapBtn: 'గూగుల్ మ్యాప్స్‌లో చూడండి →',
      mapUrl:
        'https://www.google.com/maps/place/SS+Serenity+Sarjapura/@12.8642697,77.7840246,17z/data=!4m6!3m5!1s0x3bae72e3e197070b:0x3b66476d8bfb646a!8m2!3d12.8643028!4d77.7863933!16s%2Fg%2F11yg_ffc8s?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D',
      noticeText: 'గూగుల్ మ్యాప్స్ మార్గం తెరవబడుతుంది...',
      discreetNote: 'ఎస్.ఎస్ సెరెనిటీ, సర్జాపుర, బెంగళూరు',
    },
    invitation: {
      eyebrow: 'ఆహ్వానం',
      title: 'మీకు సాదర ఆహ్వానం',
      quoteLine1: 'మా గృహప్రవేశానికి',
      quoteLine2: 'మీ సాన్నిధ్యం మా ఆనందం',
      message:
        'మా గృహప్రవేశ మహోత్సవంలో పాల్గొని, మా నూతన జీవితానికి మీ అమూల్యమైన ఆశీస్సులను అందించవలసిందిగా మనస్ఫూర్తిగా కోరుతున్నాము.',
      signOff: 'ప్రేమతో,',
      coupleNames: 'బికాస్ & భార్గవి',
    },
    footer: {
      closingQuote: 'మా నూతన గృహానికి మీ ఆశీస్సులే మాకు కొండంత బలం.',
      brand: 'బికాస్ & భార్గవి',
      date: '16 నవంబర్ 2026',
      subnote: 'గృహప్రవేశ మహోత్సవం • 2026',
    },
  },
  kn: {
    entrance: {
      heading: 'ಹೊಸ\nಆರಂಭ...',
      subheading: 'ನಮ್ಮ ಹೊಸ ಮನೆಗೆ ಸುಸ್ವಾಗತ',
      openBtn: 'ಬಾಗಿಲು ತೆರೆಯಿರಿ →',
    },
    nav: {
      brand: 'ಬಿಕಾಸ್ & ಭಾರ್ಗವಿ',
      home: 'ಪ್ರಾರಂಭ',
      ourStory: 'ನಮ್ಮ ಕಥೆ',
      details: 'ವಿವರಗಳು',
      location: 'ಸ್ಥಳ',
      switchLangTooltip: 'ಭಾಷೆ ಬದಲಾಯಿಸಿ',
      musicPlayTooltip: '',
      musicMuteTooltip: '',
      replayTooltip: 'ಪ್ರಾರಂಭವನ್ನು ಮತ್ತೆ ವೀಕ್ಷಿಸಿ',
    },
    hero: {
      eyebrow: 'ನಮ್ಮ ಗೃಹಪ್ರವೇಶ',
      titleLine1: 'ಪ್ರೀತಿಯಿಂದ ತುಂಬಿದ',
      titleLine2: 'ನಮ್ಮ ಮನೆ',
      subtitleLine1: 'ನಮ್ಮ ಹೊಸ ಮನೆಯ ಗೃಹಪ್ರವೇಶ ಮಹೋತ್ಸವಕ್ಕೆ',
      subtitleLine2: 'ನಿಮ್ಮನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ಪ್ರೀತಿಯಿಂದ ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ',
      secondarySubtitle: 'ನಮ್ಮ ಈ ನೂತನ ಪಯಣದಲ್ಲಿ ನಿಮ್ಮ ಆಶೀರ್ವಾದ ಸದಾ ಇರಲಿ ಎಂದು ಬಯಸುತ್ತೇವೆ.',
      date: 'ಸೋಮವಾರ, 16 ನವೆಂಬರ್ 2026',
    },
    story: {
      eyebrow: 'ನಮ್ಮ ಕಥೆ',
      titleLine1: 'ಕನಸಿನ ಗೂಡು',
      titleLine2: 'ನಮ್ಮ ಮನೆ',
      p1: 'ಪ್ರತಿಯೊಂದು ಮನೆಗೂ ಒಂದು ಸುಂದರ ಕಥೆ ಇರುತ್ತದೆ. ನಮ್ಮ ಮನೆ ಕನಸುಗಳು, ಹಿರಿಯರ ಆಶೀರ್ವಾದ ಮತ್ತು ಕುಟುಂಬ ಹಾಗೂ ಸ್ನೇಹಿತರ ಪ್ರೀತಿಯಿಂದ ನಿರ್ಮಾಣವಾಗಿದೆ.',
      p2: 'ನಮ್ಮ ಜೀವನದ ಈ ಪವಿತ್ರ ಕ್ಷಣದಲ್ಲಿ ನೀವು ಭಾಗಿಯಾಗಿ ನಮಗೆ ಶುಭ ಹಾರೈಸಬೇಕಾಗಿ ಪ್ರೀತಿಯಿಂದ ವಿನಂತಿಸುತ್ತೇವೆ.',
    },
    details: {
      eyebrow: 'ಶುಭ ಸಮಾರಂಭ',
      title: 'ಗೃಹಪ್ರವೇಶ',
      dateDay: 'ಸೋಮವಾರ',
      dateFull: '16 ನವೆಂಬರ್ 2026',
      timeLabel: 'ಊಟದ ಸಮಯ',
      timeValue: 'ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ',
    },
    location: {
      eyebrow: 'ಸ್ಥಳ',
      title: 'ನಮ್ಮ ಮನೆಗೆ ಬನ್ನಿ',
      subtitle: 'ನಮ್ಮ ಹೊಸ ಮನೆಯಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸಲು ನಾವು ಕಾತರರಾಗಿದ್ದೇವೆ.',
      venueName: 'ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ',
      address: 'ಸರ್ಜಾಪುರ, ಬೆಂಗಳೂರು',
      mapBtn: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ →',
      mapUrl:
        'https://www.google.com/maps/place/SS+Serenity+Sarjapura/@12.8642697,77.7840246,17z/data=!4m6!3m5!1s0x3bae72e3e197070b:0x3b66476d8bfb646a!8m2!3d12.8643028!4d77.7863933!16s%2Fg%2F11yg_ffc8s?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D',
      noticeText: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ ತೆರೆಯಲಾಗುತ್ತಿದೆ...',
      discreetNote: 'ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ, ಸರ್ಜಾಪುರ, ಬೆಂಗಳೂರು',
    },
    invitation: {
      eyebrow: 'ಆಹ್ವಾನ',
      title: 'ನಿಮಗೆ ಆದರದ ಸುಸ್ವಾಗತ',
      quoteLine1: 'ನಮ್ಮ ಗೃಹಪ್ರವೇಶಕ್ಕೆ',
      quoteLine2: 'ನಿಮ್ಮ ಆಗಮನವೇ ನಮಗೆ ಸಂತೋಷ',
      message:
        'ನಮ್ಮ ಗೃಹಪ್ರವೇಶ ಮಹೋತ್ಸವದಲ್ಲಿ ಪಾಲ್ಗೊಂಡು, ನಮ್ಮ ನೂತನ ಗೃಹಸ್ಥ ಜೀವನಕ್ಕೆ ನಿಮ್ಮ ಅಮೂಲ್ಯ ಆಶೀರ್ವಾದಗಳನ್ನು ನೀಡಬೇಕಾಗಿ ಹೃತ್ಪೂರ್ವಕವಾಗಿ ಪ್ರಾರ್ಥಿಸುತ್ತೇವೆ.',
      signOff: 'ಪ್ರೀತಿಯಿಂದ,',
      coupleNames: 'ಬಿಕಾಸ್ & ಭಾರ್ಗವಿ',
    },
    footer: {
      closingQuote: 'ನಮ್ಮ ನೂತನ ಮನೆ ಸದಾ ಪ್ರೀತಿ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯಿಂದ ಕೂಡಿರಲಿ.',
      brand: 'ಬಿಕಾಸ್ & ಭಾರ್ಗವಿ',
      date: '16 ನವೆಂಬರ್ 2026',
      subnote: 'ಗೃಹಪ್ರವೇಶ ಮಹೋತ್ಸವ • 2026',
    },
  },
};

export interface BilingualText {
  te: string;
  en: string;
  kn?: string;
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
    isConfirmed: true,
    name: {
      te: 'ఎస్.ఎస్ సెరెనిటీ (మా కొత్త ఇల్లు)',
      en: 'SS Serenity (Our New Home)',
      kn: 'ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ (ನಮ್ಮ ಹೊಸ ಮನೆ)',
    },
    addressLine1: {
      te: 'ఎస్.ఎస్ సెరెనిటీ, సర్జాపుర',
      en: 'SS Serenity, Sarjapura',
      kn: 'ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ, ಸರ್ಜಾಪುರ',
    },
    addressLine2: {
      te: 'బెంగళూరు',
      en: 'Bengaluru, Karnataka',
      kn: 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ',
    },
    city: {
      te: 'బెంగళూరు, కర్ణాటక',
      en: 'Bengaluru, Karnataka',
      kn: 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ',
    },
    landmark: {
      te: 'ఎస్.ఎస్ సెరెనిటీ, సర్జాపుర',
      en: 'SS Serenity, Sarjapura',
      kn: 'ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ, ಸರ್ಜಾಪುರ',
    },
    googleMapsUrl:
      'https://www.google.com/maps/place/SS+Serenity+Sarjapura/@12.8642697,77.7840246,17z/data=!4m6!3m5!1s0x3bae72e3e197070b:0x3b66476d8bfb646a!8m2!3d12.8643028!4d77.7863933!16s%2Fg%2F11yg_ffc8s?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D',
  },

  meal: {
    isConfirmed: true,
    title: {
      te: 'విందు భోజనం',
      en: 'Celebratory Lunch',
      kn: 'ವಿಶೇಷ ಭೋಜನ',
    },
    timing: {
      te: 'మధ్యాహ్నం 12:30 నుండి',
      en: 'From 12:30 PM',
      kn: 'ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ',
    },
    description: {
      te: 'ఆత్మీయ బంధుమిత్రులకు సాంప్రదాయ విందు భోజనం.',
      en: 'Traditional celebratory lunch with family and friends.',
      kn: 'ಆತ್ಮೀಯ ಬಂಧು-ಮಿತ್ರರಿಗೆ ವಿಶೇಷ ಭೋಜನ.',
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
      stage: { te: 'గృహప్రవేశం (16 నవంబర్ 2026)', en: 'House Warming Day' },
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
      subtitle: 'శాస్త్రోక్తంగా నిర్వహించబడు పూజలు & భోజన వివరాలు',
      dateBadge: '16 నవంబర్ 2026 (ఖరారైన తేదీ)',
      timePendingNote: 'మధ్యాహ్నం 12:30 నుండి విందు భోజనం ప్రారంభం.',
      timePendingBadge: 'భోజనం: 12:30 PM',
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
      subtitle: 'ఎస్.ఎస్ సెరెనిటీ, సర్జాపుర — మా సరికొత్త చిరునామా',
      statusNotice: 'వేదిక: ఎస్.ఎస్ సెరెనిటీ, సర్జాపుర. గూగుల్ మ్యాప్స్ ద్వారా మార్గాన్ని చూడవచ్చు.',
      statusBadge: 'వేదిక ఖరారైనది',
      directionsPending: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
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
      subHeading: 'House Warming Ceremony of Bikas & Bhargavi',
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
      eyebrow: 'Auspicious House Warming Celebration',
      title: 'Our House Warming',
      subtitle: 'A house is built of bricks and stone, but a home is sculpted with love, dreams, and sacred blessings.',
      homeownersBadge: 'New Homeowners: Bikas & Bhargavi',
      dateLabel: 'House Warming Date',
      countdownTitle: 'Countdown to Stepping into Our Home',
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
      eventPassed: 'The House Warming celebrations have commenced!',
    },
    invitation: {
      tag: 'Warm Invitation',
      title: 'Welcoming You to Our New Sanctuary',
      subtitle: 'Your gracious footsteps will sanctify our threshold with warmth and peace',
      salutation: 'Dearest Family, Elders, and Beloved Friends,',
      p1: 'By the divine grace of the Almighty and the heartfelt blessings of our elders, our dream of creating a home filled with light and warmth has come true. We are overjoyed to invite you and your family to grace our House Warming ceremony.',
      p2: 'As we cross this new threshold, kindle the sacred hearth, and boil the auspicious milk, your gracious presence and heartfelt blessings will turn this house into a home.',
      shloka: '|| Shubham Bhavatu • Kalyanam Ayurarogya Sampadah ||',
      shlokaMeaning: 'May this abode resonate with eternal health, harmony, and prosperity!',
      hostedBy: 'Warmly hosted by the new homeowners',
      familyGreeting: 'Together with the Jena & Diddi Families',
    },
    rituals: {
      tag: 'Sacred House Warming Ceremonies',
      title: 'The Four Pillars of Our Housewarming',
      subtitle: 'Traditional Telugu rituals consecrating our threshold and hearth',
      dateBadge: '16 November 2026 (Confirmed Date)',
      timePendingNote: 'Lunch will be served from 12:30 PM onwards.',
      timePendingBadge: 'Lunch: From 12:30 PM',
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
      subtitle: 'SS Serenity, Sarjapura — Our New Abode',
      statusNotice: 'SS Serenity, Sarjapura. Open in Google Maps for live directions.',
      statusBadge: 'Venue Confirmed',
      directionsPending: 'Open in Google Maps',
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
      tagline: 'Sri Nilayam • House Warming Ceremony 2026',
      builtNote: 'Crafted with authentic South Indian House Warming traditions',
    },
  },

  kn: {
    omGanesh: '॥ ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ • ವಾಸ್ತು ದೇವತಾಯ ನಮಃ ॥',
    subInvocation: 'ನಮ್ಮ ನೂತನ ಗೃಹವು ಶಾಂತಿ, ಸಮೃದ್ಧಿ ಮತ್ತು ಸುಖ-ಸಂತೋಷಗಳಿಂದ ಕೂಡಿರಲಿ',
    doorScreen: {
      tag: 'ಸಿಂಹದ್ವಾರ • ಶುಭ ಪ್ರವೇಶ',
      mainHeading: 'ನಮ್ಮ ಹೊಸ ಮನೆಗೆ ಸುಸ್ವಾಗತ',
      subHeading: 'ಬಿಕಾಸ್ & ಭಾರ್ಗವಿ ಅವರ ಗೃಹಪ್ರವೇಶ ಮಹೋತ್ಸವ',
      dateText: 'ಸೋಮವಾರ, 16 ನವೆಂಬರ್ 2026',
      instruction: 'ಸಿಂಹದ್ವಾರ ತೆರೆದು ಹೊಸ ಮನೆಗೆ ಪ್ರವೇಶಿಸಿ',
      enterBtn: 'ಸಿಂಹದ್ವಾರ ತೆರೆಯಿರಿ 🔔',
      openedStatus: 'ನಮ್ಮ ಹೊಸ ಮನೆಗೆ ಆದರದ ಸುಸ್ವಾಗತ!',
    },
    nav: {
      entrance: 'ಸಿಂಹದ್ವಾರ',
      abode: 'ನಮ್ಮ ಮನೆ',
      rituals: 'ಪೂಜಾ ವಿಧಿಗಳು',
      invitation: 'ಆಹ್ವಾನ',
      features: 'ಮನೆಯ ಮುಖ್ಯಾಂಶಗಳು',
      journey: 'ನಮ್ಮ ಪಯಣ',
      venue: 'ಸ್ಥಳ',
      blessings: 'ಆಶೀರ್ವಾದ',
    },
    hero: {
      eyebrow: 'ಶುಭ ಗೃಹಪ್ರವೇಶ ಮಹೋತ್ಸವ',
      title: 'ನಮ್ಮ ಗೃಹಪ್ರವೇಶ',
      subtitle: 'ಪ್ರೀತಿ, ಕನಸು ಮತ್ತು ಹಿರಿಯರ ಆಶೀರ್ವಾದದಿಂದ ನಿರ್ಮಾಣವಾದ ನಮ್ಮ ಮನೆಗೆ ಸುಸ್ವಾಗತ.',
      homeownersBadge: 'ನೂತನ ಗೃಹಸ್ಥರು: ಬಿಕಾಸ್ & ಭಾರ್ಗವಿ',
      dateLabel: 'ಗೃಹಪ್ರವೇಶ ದಿನಾಂಕ',
      countdownTitle: 'ಗೃಹಪ್ರವೇಶಕ್ಕೆ ಇನ್ನುಳಿದ ಸಮಯ',
      days: 'ದಿನಗಳು',
      hours: 'ಗಂಟೆಗಳು',
      mins: 'ನಿಮಿಷಗಳು',
      secs: 'ಸೆಕೆಂಡುಗಳು',
      eventPassed: 'ಗೃಹಪ್ರವೇಶ ಮಹೋತ್ಸವ ಆರಂಭವಾಗಿದೆ!',
    },
    invitation: {
      tag: 'ಆದರದ ಆಹ್ವಾನ',
      title: 'ನಮ್ಮ ಹೊಸ ಮನೆಗೆ ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸುತ್ತಿದ್ದೇವೆ',
      subtitle: 'ನಿಮ್ಮ ಪಾದಸ್ಪರ್ಶದಿಂದ ನಮ್ಮ ಹೊಸ ಮನೆ ಪಾವನವಾಗಲಿ',
      salutation: 'ಆತ್ಮೀಯ ಬಂಧು-ಮಿತ್ರರೇ ಮತ್ತು ಹಿರಿಯರೇ,',
      p1: 'ದೇವರ ಕೃಪೆ ಮತ್ತು ಹಿರಿಯರ ಆಶೀರ್ವಾದದಿಂದ ನಮ್ಮ ಕನಸಿನ ಮನೆ ನನಸಾಗಿದೆ. ನಮ್ಮ ಗೃಹಪ್ರವೇಶ ಸಮಾರಂಭಕ್ಕೆ ನಿಮ್ಮನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ಪ್ರೀತಿಯಿಂದ ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ.',
      p2: 'ನಾವು ಈ ಹೊಸ ಮನೆಯ ಹೊಸ್ತಿಲನ್ನು ದಾಟಿ ಹೊಸ ಜೀವನ ಆರಂಭಿಸುವಾಗ ನಿಮ್ಮ ಅಮೂಲ್ಯ ಆಶೀರ್ವಾದ ನಮಗೆ ಶ್ರೀರಕ್ಷೆಯಾಗಿರಲಿ.',
      shloka: '॥ ಶುಭಂ ಭವತು • ಕಲ್ಯಾಣಂ ಆಯುರಾರೋಗ್ಯ ಸಂಪದಃ ॥',
      shlokaMeaning: 'ಈ ಮನೆಯು ಸದಾ ಶಾಂತಿ, ನೆಮ್ಮದಿ ಮತ್ತು ಸಮೃದ್ಧಿಯಿಂದ ಬೆಳಗಲಿ!',
      hostedBy: 'ನೂತನ ಗೃಹಸ್ಥರು',
      familyGreeting: 'ಜೇನಾ ಮತ್ತು ದಿದ್ದಿ ಕುಟುಂಬ ವರ್ಗ',
    },
    rituals: {
      tag: 'ಪವಿತ್ರ ಗೃಹಪ್ರವೇಶ ವಿಧಿಗಳು',
      title: 'ಗೃಹಪ್ರವೇಶದ ಪ್ರಮುಖ ಆಚರಣೆಗಳು',
      subtitle: 'ಸಾಂಪ್ರದಾಯಿಕ ಪೂಜೆ ಮತ್ತು ಹೋಮ-ಹವನಗಳು',
      dateBadge: '16 ನವೆಂಬರ್ 2026',
      timePendingNote: 'ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ ಭೋಜನದ ವ್ಯವಸ್ಥೆ ಮಾಡಲಾಗಿದೆ.',
      timePendingBadge: 'ಊಟ: 12:30 PM',
      significanceLabel: 'ಧಾರ್ಮಿಕ ಮಹತ್ವ:',
    },
    features: {
      tag: 'ಮನೆಯ ಪರಿಚಯ',
      title: 'ನಮ್ಮ ಹೊಸ ಮನೆಯ ಮುಖ್ಯಾಂಶಗಳು',
      subtitle: 'ಸಾಂಪ್ರದಾಯಿಕ ಮತ್ತು ಆಧುನಿಕತೆಯ ಸುಂದರ ಸಂಗಮ',
    },
    journey: {
      tag: 'ನಮ್ಮ ಪಯಣ',
      title: 'ಕನಸಿನಿಂದ ನನಸಿನವರೆಗೆ',
      subtitle: 'ನಮ್ಮ ಮನೆ ನಿರ್ಮಾಣವಾದ ಸುಂದರ ಹಂತಗಳು',
    },
    venue: {
      tag: 'ಸ್ಥಳ ಮತ್ತು ಮಾರ್ಗ',
      title: 'ನಮ್ಮ ಮನೆಯ ವಿಳಾಸ',
      subtitle: 'ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ, ಸರ್ಜಾಪುರ — ನಮ್ಮ ಹೊಸ ನೆಲೆ',
      statusNotice: 'ಸ್ಥಳ: ಎಸ್.ಎಸ್ ಸೆರೆನಿಟಿ, ಸರ್ಜಾಪುರ. ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಮೂಲಕ ಮಾರ್ಗ ವೀಕ್ಷಿಸಿ.',
      statusBadge: 'ಸ್ಥಳ ಖಚಿತವಾಗಿದೆ',
      directionsPending: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ',
      copyBtn: 'ವಿಳಾಸ ನಕಲಿಸಿ',
      copiedBtn: 'ನಕಲಿಸಲಾಗಿದೆ!',
    },
    blessings: {
      tag: 'ಶುಭ ಹಾರೈಕೆಗಳು',
      title: 'ನಿಮ್ಮ ಹಾರೈಕೆ ಮತ್ತು ಆಶೀರ್ವಾದವಿರಲಿ',
      subtitle: 'ನಿಮ್ಮ ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದ ನಮ್ಮ ಜೀವನಕ್ಕೆ ಶ್ರೀರಕ್ಷೆ',
      showerBtn: 'ಅಕ್ಷತೆ ಮತ್ತು ಪುಷ್ಪವೃಷ್ಟಿ ಸುರಿಸಿ 🌸',
      bellRingBtn: 'ಗಂಟೆ ಬಾರಿಸಿ 🔔',
      shareWhatsApp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ',
      addToCalendar: 'ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ಸೇರಿಸಿ',
      thankYou: 'ನಮ್ಮ ಗೃಹಪ್ರವೇಶಕ್ಕೆ ನಿಮ್ಮ ಶುಭ ಹಾರೈಕೆಗಳಿಗೆ ಹೃತ್ಪೂರ್ವಕ ಧನ್ಯವಾದಗಳು.',
      signature: 'ಪ್ರೀತಿಯಿಂದ — ಬಿಕಾಸ್ & ಭಾರ್ಗವಿ',
    },
    footer: {
      tagline: 'ಶ್ರೀ ನಿಲಯ • ಗೃಹಪ್ರವೇಶ ಸಮಾರಂಭ 2026',
      builtNote: 'ಸಾಂಪ್ರದಾಯಿಕ ದಕ್ಷಿಣ ಭಾರತೀಯ ಸಂಸ್ಕೃತಿಯೊಂದಿಗೆ ರೂಪಿಸಲಾಗಿದೆ',
    },
  },
};
