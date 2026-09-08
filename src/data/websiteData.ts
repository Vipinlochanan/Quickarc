import { ServiceItem, ProjectItem, TestimonialItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Quick Arc',
  tagline: 'Light Fabrication and Repairs',
  subheading: 'Mobile Welding & Light Fabrication Townsville',
  phone: '+61 488 439 467',
  phoneRaw: '61488439467',
  email: 'quickarctownsville@gmail.com',
  address: '6 Fitzgerald Cres, Kirwan, Queensland 4817',
  googleMapsUrl: 'https://maps.google.com/?q=6+Fitzgerald+Cres,+Kirwan,+Queensland+4817',
  abn: '18 940 631 015',
  whatsappNumber: '61489159093',
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeH1HdX3tghCSNXDiYvZZ5ZwuClm5uCVgQK0iT5b1g_vHGv6yRItY_PXCIWiUzRdslIwgpRw1Kz6vyFNaRHaK2iTwZRXqBgeln3OY9zPYhMlQZ6Fsd0U2dmFrHjGIeq7wb3YRSUiefWg8mFrToalLnUKXUZaBA0qZRptsFvg9mjY5U4fCsCpK3g2uPDbE02akpXhB3qvQ513UccleftPZTCk0QTzKbOforFsUcgczv5gD5HZ6B1jm52LJlAh5Tb6gWuF_H8qYK4mU',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7F8hpeajsV9eS46R-uPbHcX9apREazHoPy_BIgSD8CkrWDeGW3A8CEkkQ0OHZjtYItVd4EUCAjUl9g0gWE5-e-Gt7i6dVAA3KRClFKXENlXu_qpq3emOLZrPCEZfc-oM5PZ-wVgL-s0-WN-PQjgBgC4od7D7cGhKi6gInRpI3oEMicOAOpe7PyZ7vnv9FNdeHpWxbHBOuDPT8Sfvv4IVCME3Tx8zJq0zwSI5-FH-MoIjTKLu_YScIZEK-TBbfClBtuVXZcxrZT2E',
  aboutImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7VXsXVtYkPHMfCpH79Stp8K6zNUIWpBuRp24aE2hU8ZbbjJf0PWrqB4-q0MHNeb0U7ye4Dd-1So8hN3UUg9GWjOUPhR2vqCdhYD7XPAsgSVpjeG4GKRs2j2Msh1GBVPRRo2u03gcv8aumuB64o2XhbjBTipwbWoAXlz-Qf7bRK5lUhsBq0yb-4P5h3m1qhpd3CdfecnVWqEgc8LgoOZBT0mLl1UReT65kV62LTCCs4c2QQdK_pp-iOhXtdIMGoCV4RxXT_7c-1tRg-w',
  whatsappIcon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa_pdR3G4dN-Rwb-f-Rr70Atuj_bOdB3XzmkWB8ddAZfu2OXoYJIRCLCF-jEI8OG5G85mhRp_wu9O809cumzdtdlJRs5-iXpWhnG5PZKyieG_BNA9MyeKAShbUrIfvt11XovTRc5b0782m4Mb-PIgWkK7PqIVQzvTRNM6Zbzs6q_27fISTYeYHl1CPY5348YRfv6JKQvPg2bc3orrzzzn1M9hyb06neLtjj0qnfkBPHFQaM0NBPj-rQ6DNVfO6hjZllqnjSo5pBUs',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'trailer',
    title: 'Trailer Works',
    description: 'Trailer frame structural repairs, modifications, extensions and aluminium welding.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlUq79NLtA42uukZ--Yg6QHJoQGayyiXhL6t-tGI3XLpbELp4J69kvCZm-6q8BfY5v52EWV0h_KlBnF43hHlOb0hZTk93ibWGOZKBptSmh-oCv8F6J1FHL-ttrJIvVC7aMfFl7SDWTsZcdkUxUxyX5KNt6jKBb4I4ZFLR3TzW-nnzIyksxB__vi1AYdzBzB7wxAzevbN3EVqxgfZQGfWlJzTrQ0gUy-PpHJG9Kf7cW78ViJ_a2AKNIfmdb2QHBWqT5Gdw7LlWjXY4rA',
    tags: ['MIG & TIG', 'Aluminium Welding', 'Frame Extensions', 'Rust Repairs']
  },
  {
    id: 'gate-grill',
    title: 'Gate and Grill Works',
    description: 'We build metal doors, window grills, garden grills, gates — and restore them too.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA92MX7Nfpl1FZgqYDGA0fY2RXzytAiE-yz4TkZQOdoOJ23IYU3wwcY8GEwLCSsE2k_qCMW9cgES95XHTPx_XMm-TjL909PvdcX0CFk8RrRwulLrWA3GsG40fDavVpg_yMEqLuZWhM-3pWfH0sLBxg7kRDWivUwu7XsXYMod1dWW3WZlOEOoEtnRt-mY_xdwD8c1agQQ7mN8O-1jKNEiylSrK-YQzmldu5nbHDZHd_yMu6BqjwxWYKF0IQl3DNQM9jxnvbyhFO-OKcUww',
    tags: ['Custom Gates', 'Window Grills', 'Security Doors', 'Restoration']
  },
  {
    id: 'pet-cage',
    title: 'Pet Cage',
    description: 'We build and repair all types of metal cage with custom dimensions and strong structural mesh.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA7RwNSoClZO382H7PUPywL3sSZR8_K0H-ztOgwJMf_JkMpJKKh_vd68va9QGVMtcH31WZXcaIAHkHbrfYXS-LzxevWmPypGush7vGPiqRgcc88-kGl5TiCamxtPnjRTuHsiimVBcPHdGNfWudRfyvGckxpfxZ_4TzxqPgQ6sLMA2I6MngujEVK_gFuRmjNofRIF9XDhGYWsrgycpP643HvE4sWkZY54avDPA2PnrFCG3RuxDs3e4YuVNt4ufkJ7DPCiz11fFdDi8',
    tags: ['Custom Sizing', 'Heavy Mesh', 'Dog Enclosures', 'Ute Cages']
  },
  {
    id: 'play-area',
    title: 'Restore Play Area',
    description: 'Playground equipment repairs, modifications and extensions welding work to ensure safety.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPt9ppBTofoF2Wv2l3oEk4VgDJ6fHOrtINftFPD9xH7I-ZN_LU7MPHH0z7AGdMrx7Nhe71XL58aw8a-_GGpS5w5SBOur_p0bN9uU9DcOnpR1UGmg3Ys6ncsEtLIfC58TTwUdp4wujHPwnu2GyFm_ffle2ZQqYdSbvgGJnAgSuJCbOpR7LVWPlNi6uvVLr060hiQUeO8-PfJtPVNVhrIXWR35R4wXHSTVZw8O01H1eOQHsYJMbgZmmf9nIJWGBwCfHJDrsrMC6ZqLM',
    tags: ['Safety Reinforcement', 'Park Equipment', 'Swing Frames', 'Custom Extensions']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'railing-restoration',
    title: 'Railing Restoration',
    category: 'Balustrades & Railings',
    description: 'Complete rust removal and structural reinforcement for residential railings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkMDRK-mkAxrderRyLSNl0XfPWunITmoxYf_S73y_5oElezQ31PhgnKp1HFUOnxoIrsbcv7lYxhC5GJ2f0Se9zz71HHMXHD7oFY4bn4zHBwR4c9HCoXoImW-9RfqBk1A2HHYzYG8fqJsB7hNuEC1YTJWJKw-aAnN8oa0k-njCftAmIg8delifCtrsqGjAw4ej0jj5PO10NwbgQ68nHSKkQhvUxiBvelsEd_tf4BVi_XkKNXwh2jBYGBQ-EZNkGrJcIRLltKEKjbVQ',
    beforeAfter: true
  },
  {
    id: 'custom-gates',
    title: 'Custom Gates',
    category: 'Gates & Fencing',
    description: 'Handcrafted timber and steel frame gates designed for durability and style.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmxuIXGUOFpqE2nGx8vCLuzZ-aFWi8d-0dQojT7cFOxEnoVWqZo4K1jFicdst05MqX5RTZw_G2BwSNyanhBeFxhHAI_VYQ3ZWFzXEUW2gmv-DGH1StPSI2hcZogn4aOFWv92i4g0Oc_b7d5GcSWnc56hkOpWPJ1CqoIVhxlysOADk7mlPJUpc_-CbTujQb5Q22lAs5bHA_laTJiMrWQRAojmVdchFJxPOXjdBcfAJL5_PQoKeBvmUo-PDR3qQB14j8xEM4Bfp9uKM'
  },
  {
    id: 'deck-safety-rails',
    title: 'Deck Safety Rails',
    category: 'On-site Balustrades',
    description: 'On-site welding and installation of high-quality safety balustrades.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA39YcW2JXG-7PGcOMstkfCNf1-8OhsfVzxeFhyY1-dYxH98NnY5EPCMSdQyz3jyi7mzBjWaItYWDqPsG6OsNoi7y-CRe_m6us5Be_rruuxqfCap7G_Be2lfhuP96vFHj27wNogJYv0V8bpzbnq-xI4yjp7Lpj1gwLYS7egY_aTbLbwISg6W56fTV00c73SUaBdskX52S6-VxKeCAKDs0knqVzhrZCJHKJPOY0fHOoohLLrXsai0jxvmGheMdmyjRUAth3rIJ4kTFg',
    beforeAfter: true
  },
  {
    id: 'trailer-repairs',
    title: 'Trailer Repairs',
    category: 'Mobile Trailer Repair',
    description: 'Structural welding and frame modifications for heavy-duty trailers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqjF4n43Uwmyzj7e3siesaF8s2eb8FTigonQgQ7p6DJu7rOncA2lxyCZBgGZw1On1wAqas1AFeowJ91xqxw96gKH_hxOk-yY_AffWKpRiqA1IM_3_gv8EiImnuOCvjibws1D56qs8Pi9IHaw5BrF1Y2JuAt6jZ2QHYl_9S7jRae-vkkqujWf5EWBaX-f0aQ4l09NB7Q8du-uv3tDPj7CCwzan1vVBEnsNjKhkYQCWXy9P5n9ic-9uckzrCAi5Pi-HWhry3pEC-HJM',
    beforeAfter: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Dave M.',
    location: 'Kirwan, Townsville',
    rating: 5,
    comment: 'Quick Arc came out to my place to fix my boat trailer frame that cracked. He brought generator power and completed clean, rock-solid welds right in my driveway. Highly recommended!',
    serviceUsed: 'Trailer Repair'
  },
  {
    id: 't2',
    name: 'Sarah K.',
    location: 'Aitkenvale, Townsville',
    rating: 5,
    comment: 'Had custom metal side gates built for extra security. Punctual, professional, and very clean welds. The timber and steel combination looks fantastic.',
    serviceUsed: 'Custom Gates'
  },
  {
    id: 't3',
    name: 'Graham B.',
    location: 'Bohle Plains',
    rating: 5,
    comment: 'Welded a custom heavy mesh cage for our ute. Fair pricing, quick turn-around, and great trade craftsmanship. Will definitely call Quick Arc again.',
    serviceUsed: 'Pet / Ute Cage Fabrication'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you bring your own power generator on-site?',
    answer: 'Yes! Quick Arc is fully equipped for mobile operations, including generator power for remote sites or locations without accessible power outlets.'
  },
  {
    question: 'What types of welding do you perform?',
    answer: 'We specialise in MIG, TIG, Arc, and Aluminium welding, as well as structural steel modifications and rust restoration.'
  },
  {
    question: 'Which areas in Greater Townsville do you serve?',
    answer: 'We service all suburbs across Greater Townsville including Kirwan, Thuringowa, Douglas, Aitkenvale, Bohle Plains, Bushland Beach, and surrounding regional areas.'
  },
  {
    question: 'How quickly can I get a quote?',
    answer: 'You can submit a request via our website form, email, or direct WhatsApp message with photos/details of your project to receive a fast free quote.'
  }
];
