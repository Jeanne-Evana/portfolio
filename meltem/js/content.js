/**
 * All site copy lives here. Edit this file to change wording, names, links and placeholders.
 * British English, no contracted forms.
 *
 * PLACEHOLDERS still to replace:
 *   site.email, site.linkedin, mentor.links.linkedin,
 *   fellows[0] bio/photo/links, form.endpoint
 */
window.MELTEM = {
  site: {
    wordmark: 'Meltem',
    name: 'Meltem Art Fellowship',
    email: '[email]',
    emailHref: 'mailto:EMAIL_PLACEHOLDER',
    linkedinLabel: 'LinkedIn',
    linkedinHref: 'LINKEDIN_PLACEHOLDER',
    tagline: 'Guided self-exploration of art, engaging through research and practice.',
    footerNote: 'An independent, unpaid and fully remote mentorship programme.',
    footerPhrase: {
      lang: 'tr',
      text: 'Damlaya damlaya göl olur.',
      translation: 'Drop by drop, a lake is made.',
    },
    formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  },

  nav: [
    { id: 'home', href: 'index.html', label: 'Home' },
    { id: 'team', href: 'team.html', label: 'Team' },
    { id: 'fellowship', href: 'fellowship.html', label: 'The Fellowship' },
  ],
  cta: { href: 'index.html#interest', label: 'Express your interest' },

  pages: {
    home: {
      metaTitle: 'Meltem Art Fellowship',
      metaDescription:
        'A mentored, flexible and fully remote art fellowship, rooted in Rome. Guided self-exploration through research and practice. First cohort from January 2027.',
    },
    team: {
      metaTitle: 'Team — Meltem Art Fellowship',
      metaDescription:
        'Meet the mentor and the pilot cohort of the Meltem Art Fellowship, a small team building the programme we would have loved to find ourselves.',
    },
    fellowship: {
      metaTitle: 'The Fellowship — Meltem Art Fellowship',
      metaDescription:
        'How the Meltem Art Fellowship works: an unpaid, fully remote programme for discovery and practice, with a flagship project, collaborations, mentor meetings and a graduation piece.',
    },
  },

  home: {
    welcome: [
      { lang: 'fr', text: 'Bienvenue' },
      { lang: 'it', text: 'Benvenuti' },
      { lang: 'tr', text: 'Hoş geldiniz' },
    ],
    title: 'Meltem Art Fellowship',
    oneLiner: 'Guided self-exploration of art, engaging through research and practice.',
    subline:
      'Rooted in Rome and fully remote. A mentored, flexible fellowship, with the first cohort starting in January 2027.',
    heroButtons: [
      { href: '#interest', label: 'Express your interest', kind: 'primary' },
      { href: 'fellowship.html', label: 'See how it works', kind: 'ghost' },
    ],
    pillarsHeading: 'Three ways of working',
    pillars: [
      {
        lang: 'tr',
        title: 'Merak',
        translation: 'curiosity, the wish to find out',
        verb: 'Explore',
        body: 'Spend time with art that moves you, whether exhibitions, films, books or music. Note down what you see, what you feel and what you learn.',
      },
      {
        lang: 'it',
        title: 'Abbozzo',
        translation: 'a first rough sketch',
        verb: 'Practise',
        body: 'Build a flagship project with a clear goal, and collaborate with others. Ideally it is linked to an art competition or open call, but the real aim is to make something that matters to you.',
      },
      {
        lang: 'fr',
        title: 'Chemin faisant',
        translation: 'along the way',
        verb: 'Reflect',
        body: 'Meet your mentor, receive honest and kind feedback, and watch your own progress take shape through your log and statistics.',
      },
    ],
    takeawaysHeading: 'What you take away',
    takeaways: [
      'A certificate of completion',
      'An overview of your hours and progress',
      'A reference letter from your mentor',
      'Guidance and feedback',
      'A line for your CV and LinkedIn',
      'A way to see, and value, the time you spend on art',
    ],
    whyHeading: 'Why “Meltem”?',
    whyBody:
      'The meltem is the summer wind that crosses the Mediterranean, from the Aegean to the Italian coast. It carries things from shore to shore. We like the idea of art travelling in the same way, between people, languages and places. The name is also a Turkish given name, which suits a programme shaped by a French mentor, a Turkish fellow and a home in Rome.',
    noteHeading: 'A personal note',
    noteBody:
      'I started this fellowship because I know how much it helps to have someone beside you while you find your direction. I will read your work carefully, give you honest and generous feedback, and be there throughout. You bring the curiosity; I will bring the time and the care.',
    noteSign: 'Jeanne',
    form: {
      heading: 'Join the pilot cohort, January 2027',
      subphrases: [
        { lang: 'fr', text: 'Dites-nous' },
        { lang: 'it', text: 'Raccontateci' },
        { lang: 'tr', text: 'Bize anlatın' },
      ],
      subTranslation: 'Tell us about yourself',
      fields: [
        { name: 'name', label: 'Full name', type: 'text', required: true, autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
        {
          name: 'location',
          label: 'Country and city',
          type: 'text',
          required: true,
          autocomplete: 'address-level2',
        },
        {
          name: 'art',
          label: 'What kind of art are you drawn to?',
          type: 'textarea',
          required: true,
        },
        {
          name: 'work',
          label: 'A link to your work or a profile',
          type: 'url',
          required: false,
          optional: true,
          autocomplete: 'url',
        },
        {
          name: 'why',
          label: 'Why this fellowship?',
          type: 'textarea',
          required: true,
        },
      ],
      checkbox:
        'I understand that this fellowship is unpaid, independent and fully remote.',
      submit: 'Send my interest',
      successHtml:
        'Thank you, <span lang="fr">merci</span>, <span lang="it">grazie</span>, <span lang="tr">teşekkürler</span>. We will be in touch by email soon.',
      error:
        'Something went wrong whilst sending. Please try again, or write to us by email.',
      endpointHint:
        'The form endpoint is still a placeholder. Replace site.formEndpoint in js/content.js with your Formspree or Netlify Forms address.',
    },
  },

  team: {
    introPhrases: [
      { lang: 'fr', text: 'Ensemble' },
      { lang: 'it', text: 'Insieme' },
      { lang: 'tr', text: 'Birlikte' },
    ],
    introTranslation: 'together',
    intro:
      'We are a small pilot team, building the programme we would have loved to find ourselves.',
    mentorHeading: 'Mentor',
    mentor: {
      name: 'Jeanne Vincendeau',
      photo: 'assets/portraits/jeanne.svg',
      photoAlt: 'Portrait placeholder for Jeanne Vincendeau',
      bio: 'Jeanne Vincendeau is a researcher working on AI governance, international security, political violence and global governance, exploring how intelligent technologies shape political power. She is also an artist whose work is mostly analogue and ephemeral. She has guided research projects for some time, and she is delighted to bring that care to art.',
      links: [
        { label: 'Portfolio', href: 'https://jeanne-evana.github.io/portfolio/' },
        { label: 'LinkedIn', href: 'LINKEDIN_PLACEHOLDER' },
      ],
    },
    futureMentors:
      'As the programme grows, we hope that some alumni will come back to guide future cohorts.',
    cohortHeading: 'Pilot cohort (2026–27)',
    fellows: [
      {
        name: 'Eylül Korkmaz',
        photo: 'assets/portraits/eylul.svg',
        photoAlt: 'Portrait placeholder for Eylül Korkmaz',
        bio: '[bio]',
        placeholder: false,
        links: [{ label: 'Profile', href: 'LINK_PLACEHOLDER' }],
      },
      {
        name: 'A fellow to be announced',
        photo: 'assets/portraits/fellow.svg',
        photoAlt: 'Placeholder portrait for a fellow yet to be announced',
        bio: 'This place is waiting for someone curious. If that sounds like you, you are welcome to write to us.',
        placeholder: true,
        links: [],
      },
      {
        name: 'A fellow to be announced',
        photo: 'assets/portraits/fellow.svg',
        photoAlt: 'Placeholder portrait for a fellow yet to be announced',
        bio: 'Another seat at the table. The pilot cohort is small on purpose, so that each person can be met with care.',
        placeholder: true,
        links: [],
      },
      {
        name: 'A fellow to be announced',
        photo: 'assets/portraits/fellow.svg',
        photoAlt: 'Placeholder portrait for a fellow yet to be announced',
        bio: 'A third place, still open. Bring a question you cannot put down, and we will see where it leads.',
        placeholder: true,
        links: [],
      },
    ],
  },

  fellowship: {
    intro:
      'Meltem is a guided, self-directed fellowship for people who want to explore art more seriously, both by looking and by making. It is fully remote, so you can take part from wherever you are, and it adapts to your life. Pace yourself:',
    proverb: {
      lang: 'it',
      text: 'Chi va piano va sano e va lontano.',
      translation: 'Whoever goes gently goes safely, and goes far.',
    },
    stepsHeading: 'How it works',
    steps: [
      {
        title: 'Flagship project',
        body: 'A personal project with a clear goal, ideally connected to an art competition or open call.',
      },
      {
        title: 'Collaborations',
        body: 'Work with the mentor, other fellows or other creatives.',
      },
      {
        title: 'Meetings',
        body: 'Regular check-ins with your mentor, at least 30 minutes a month, and more whenever you would like them.',
      },
      {
        title: 'Graduation project',
        body: 'A closing piece that marks the end of your fellowship. Collaboration time counts towards your practice hours.',
      },
    ],
    logsHeading: 'Discovery and practice',
    logs: [
      {
        title: 'Learning log',
        body: 'You record each piece of art you engage with: what it was, how long you spent, its type, your group, the context, the technique and your analysis, and how it made you feel.',
      },
      {
        title: 'Practice log',
        body: 'You record the time you spend on your own projects and collaborations. Activities that sit between art and other fields can count too, at a rate agreed with your mentor.',
      },
    ],
    stats:
      'A statistics page shows the total, and how your time was shared across types and groups.',
    timeHeading: 'Time commitment',
    timeBody:
      'Flexible, with a minimum of 100 hours in total: at least 50 hours of learning and at least 50 hours of practice, plus mentor meetings.',
    receiveHeading: 'What you receive',
    receive: [
      'A certificate of completion',
      'An overview of your performance',
      'A reference letter',
      'Guidance and feedback',
      'A line on your CV and LinkedIn',
      'A way to make the time you give to art visible',
    ],
    qaHeading: 'Questions you may have',
    qa: [
      {
        q: 'Is the fellowship paid?',
        a: 'No. It is unpaid, and there are no fees either. We would rather be completely clear about this from the start. What you receive is guidance, structure and recognition of the work you do.',
      },
      {
        q: 'Is it an internship or a degree?',
        a: 'Neither. It is an independent, mentored programme. When you complete it, you receive a certificate of completion and a reference letter, but not an academic qualification.',
      },
      {
        q: 'Is it really fully remote?',
        a: 'Yes. Everything happens online, so you can join from anywhere. Time zones are no obstacle, as we will find meeting times that suit you.',
      },
      {
        q: 'Do I need a background in art?',
        a: 'No formal training is needed. Curiosity and a willingness to practise are what matter most.',
      },
      {
        q: 'How long does it last?',
        a: 'It is flexible and follows your availability, with a minimum of 100 hours. Some people will take a few months, others a little longer, and both are fine.',
      },
      {
        q: 'How are hours counted?',
        a: 'Through a shared spreadsheet log. You report your own learning and practice time, and your mentor reports the meeting time.',
      },
      {
        q: 'What is a flagship project?',
        a: 'A project with a clear goal, such as a piece for a competition or open call. If it is accepted, published or exhibited, that is wonderful, but the real value lies in the process.',
      },
      {
        q: 'What kind of feedback will I receive?',
        a: 'Honest, specific and kind. We will talk about your ideas as well as your technique.',
      },
      {
        q: 'Who owns my work?',
        a: 'You do, always.',
      },
      {
        q: 'How do I apply?',
        a: 'Fill in the expression of interest form on the home page. We will read every message personally.',
      },
    ],
    closing: {
      lang: 'fr',
      text: 'Petit à petit, l’oiseau fait son nid.',
      translation: 'Little by little, the bird builds its nest.',
    },
  },
};
