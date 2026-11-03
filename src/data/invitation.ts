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
      date: 'Sunday, 15 November 2026',
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
      dateDay: 'Sunday',
      dateFull: '15 November 2026',
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
      date: '15 November 2026',
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
      date: 'ఆదివారం, 15 నవంబర్ 2026',
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
      dateDay: 'ఆదివారం',
      dateFull: '15 నవంబర్ 2026',
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
      coupleNames: 'బಿಕాస్ & భార్గవి',
    },
    footer: {
      closingQuote: 'మా నూతన గృహానికి మీ ఆశీస్సులే మాకు కొండంత బలం.',
      brand: 'బికాస్ & భార్గవి',
      date: '15 నవంబర్ 2026',
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
      date: 'ಭಾನುವಾರ, 15 ನವೆಂಬರ್ 2026',
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
      dateDay: 'ಭಾನುವಾರ',
      dateFull: '15 ನವೆಂಬರ್ 2026',
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
      date: '15 ನವೆಂಬರ್ 2026',
      subnote: 'ಗೃಹಪ್ರವೇಶ ಮಹೋತ್ಸವ • 2026',
    },
  },
};
