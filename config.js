/**
 * ============================================================
 *  ARTI'S 20TH BIRTHDAY CELEBRATION CONFIGURATION
 * ============================================================
 *  Customize all text, dates, photos, and music right here!
 * ============================================================
 */

const CONFIG = {
  // Birthday Girl's Information
  name: "Arti",
  nickname: "My Love", // "Cutie", "Princess", "Jaan", "Angel"
  birthdayDate: "2026-10-01T00:00:00", // 1st October 2026
  celebratingAge: 20, // Celebrating her 20th milestone!

  // Hero Tagline & Cute Subtitle
  heroTagline: "Happy 20th Birthday to the most radiant girl in the universe! ✨ Every day with you is pure magic.",

  // Loading Screen Messages
  loading: {
    title: "Preparing Something Special for Arti...",
    quote: "“In all the world, there is no heart for me like yours.”",
    buttonText: "Open Arti's Surprise 💌✨"
  },

  // ============================================================
  // CUSTOM BACKGROUND MUSIC
  // ============================================================
  // HOW TO ADD YOUR OWN SONG:
  // 1. Copy your audio file into the "assets/" folder and name it "music.mp3"
  //    (C:\Users\DELL\.gemini\antigravity\scratch\arti-birthday\assets\music.mp3)
  // 2. Change "title" and "artist" below to match your song!
  // OR paste any direct MP3 audio URL in "url"!
  // ============================================================
  music: {
    title: "I Think They Call This Love", // Change to Arti's favorite song title
    artist: "Ed Sheeran",         // Change to artist name
    url: "assets/music.mp3",            // Local file or direct online audio link
    autoPlayPrompt: true
  },

  // Milestones (Celebrating 20 Years!)
  milestones: [
    { number: "20", label: "Years of Pure Radiance" },
    { number: "7,305", label: "Days of Being Wonderful" },
    { number: "∞", label: "Reasons Why I Love You" },
    { number: "100%", label: "My Heart Belongs to You" }
  ],

  // Interactive Birthday Cake (3 Candles)
  cake: {
    candleCount: 3,
    flavor: "Sweet Strawberry Cream & Rose Velvet",
    wishText: "Make a wish for your 20th year and blow out the 3 candles, Arti! 🎂✨",
    afterBlowWish: "Happy 20th Birthday, my love! May this milestone year bring you endless joy, love, and your wildest dreams! 💖🥂"
  },

  // ============================================================
  // POLAROID MEMORY LANE GALLERY (PRE-SET CODE IMAGE SOURCES)
  // ============================================================
  // Put your images in the "assets/" folder:
  //   assets/photo1.jpg, assets/photo2.jpg, assets/photo3.jpg, etc.
  // Or type any direct file path / web URL below!
  // ============================================================
  memories: [
    {
      title: "Your Breathtaking Smile",
      date: "Forever Favorite",
      description: "The smile that makes my entire world light up in an instant.",
      image: "assets/photo1.jpg"
    },
    {
      title: "cuteness overloaded",
      date: "everytime",
      description: "just can't take my eyes off you.",
      image: "assets/photo2.jpg"
    },
    {
      title: "Candid Sweetness",
      date: "Little Moments",
      description: "The funny faces, soft giggles, and purest moments of you.",
      image: "assets/photo3.jpg"
    },
    {
      title: "perfect beauty",
      date: "thank you babe",
      description: "love you then, now and forever.",
      image: "assets/photo4.jpg"
    },
    {
      title: "Golden Hour Glow",
      date: "Always Beautiful",
      description: "my smart, very funny, intelligent, beautiful and tough friend.",
      image: "assets/photo5.jpg"
    },
    {
      title: "Entering 20",
      date: "A Magical Chapter",
      description: "Here is to celebrating your 20th birthday and a lifetime more.",
      image: "assets/photo6.jpg"
    }
  ],

  // "Why I Adore You, Arti" Cards
  reasons: [
    {
      icon: "✨",
      title: "That Contagious smile",
      description: "The way your entire face lights up and your eyes crinkle whenever something genuinely amuses you. It's my favorite sound in the whole world."
    },
    {
      icon: "🌸",
      title: "Your Beautiful, Empathetic Soul",
      description: "You care so deeply and sincerely for everyone around you. The softness you bring to this rough world is something rare, delicate, and profoundly magnetic."
    },
    {
      icon: "☕",
      title: "Our Quiet Moments",
      description: "Whether we are talking about life at 12 AM , simply being in your presence feels like coming home."
    },
    {
      icon: "🍯",
      title: "The Cute Quirks",
      description: "That one meeting may have been short, but somehow your smile, your energy, and the little moments we shared stayed with me."
    },
    {
      icon: "🌙",
      title: "My Safe Place",
      description: "Among all the chaos around me, there's something about you that feels like a quiet little corner of peace I never knew I needed. 🌙"
    },
    {
      icon: "💫",
      title: "Your Radiant Ambition",
      description: "Watching you care about your dreams and work hard with such grace and kindness makes me fall for you more every single day."
    }
  ],

  // Sealed Romantic Love Letter
  letter: {
    greeting: "Dearest Arti,",
    body: `Happy 20th Birthday to my favorite human in the entire universe! 💖

Turning 20 is such a gorgeous milestone, and I could not be prouder of the kind, smart, breathtaking woman you are. 

I love everything about you, I am not a guy who says that lightly. I thought love was a stupid stuff that idiots felt but you have a hold on my Heart. I could not stop loving you more than I could stop breathing. Thank you for being my peace, my biggest smile, and my safe place.

On this 1st of October, I wish you all the happiness, warmth, and dreams your sweet heart can hold. May your twenties be filled with endless laughter, exciting adventures, and unforgettable memories.

I'm hopelessly, irretrievably in love with you, today and always.`,
    closing: "With all my love & whole heart,",
    signature: "Yours Forever ❤️"
  },

  // Interactive Surprise Box / VIP Date Pass
  surprise: {
    boxTitle: "A Special 20th Birthday Treat!",
    tapPrompt: "Tap the pink ribbon to unwrap your gift! 🎁",
    unwrappedTitle: "🎉 Guaranteed VIP Birthday Celebration Pass!",
    message: "This pass entitles Arti to an all-expenses-paid dream birthday date: your favorite food, unlimited desserts, cute surprises, and whatever makes you happiest! No expiration date, redeemable anytime. 🥂✨",
    couponCode: "ARTI-TURNS-20-VIP"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
