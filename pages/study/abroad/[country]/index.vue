<script setup lang="ts">
const route = useRoute();

const items = {
  uk: {
    image: "/university/uk/hero.png",
    title: "Chevening (United Kingdom 🇬🇧)",
    description:
      "The UK government's scholarship program for master's students, allowing them to study at top UK universities.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full tuition fee coverage",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend (~£1500)",
      },
      flight: {
        enabled: true,
        title: "Flight to the UK",
      },
      health: {
        enabled: true,
        title: "Visa and health insurance costs",
      },
      language: {
        enabled: false,
        title: "",
      },
      dormitory: {
        enabled: false,
        title: "",
      },
      meal: {
        enabled: false,
        title: "",
      },
    },
    admission:
      "📌 Admission chances: High if you have leadership experience, volunteer work, and strong recommendations.",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Apply through chevening.org (September-November)",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "High school diploma/Bachelor's degree\nRecommendation letters\nMotivation letter\nLanguage certificate (TOPIK or IELTS)",
      },
      third: {
        id: 3,
        title: "Submit",
        text: "Attend an interview at the UK embassy",
      },
    },
    flag: "/university/uk/flag.png",
    top_universities: {
      title: "Top Universities in the UK",
      description:
        "The UK is home to some of the world's most prestigious institutions, offering strong programs in Business,  Law, and Science.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 London School of Economics (LSE)",
        image: "/university/uk/1.png",
      },
      {
        id: 2,
        name: "🏛 University of Cambridge",
        image: "/university/uk/2.png",
      },
      {
        id: 3,
        name: "🏛 Imperial College London",
        image: "/university/uk/3.png",
      },
      {
        id: 4,
        name: "🏛 University of Edinburgh",
        image: "/university/uk/4.png",
      },
      {
        id: 5,
        name: "🏛 University of Oxford",
        image: "/university/uk/5.png",
      },
      {
        id: 6,
        name: "🏛 King's College London",
        image: "/university/uk/6.png",
      },
    ],
    list: "List of universities in the United Kingdom",
  },
  germany: {
    image: "/university/germany/hero.png",
    title: "DAAD (Germany 🇩🇪)",
    description:
      "The German Academic Exchange Service (DAAD) offers scholarships for bachelor's, master's, PhD students, and researchers.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full / partial tuition fee",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend from €861 ",
      },
      flight: {
        enabled: true,
        title: "Flight to Germany and back",
      },
      health: {
        enabled: true,
        title: "Health insurance",
      },
      language: {
        enabled: false,
        title: "",
      },
      dormitory: {
        enabled: false,
        title: "",
      },
      meal: {
        enabled: false,
        title: "",
      },
    },
    admission:
      "📌 Admission chances: High if you have a strong academic background and motivation.",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Choose between the university track or embassy track",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "Bachelor's diploma\n2 recommendation letters\nCV\nMotivation essay\nIELTS 6.5+",
      },
      third: {
        id: 3,
        title: "Interview",
        text: "Submit the application online (usually by October–November)",
      },
    },
    flag: "/university/germany/flag.png",
    top_universities: {
      title: "Top Universities in Germany",
      description:
        "Germany is known for its tuition-free education and excellence in Engineering, Medicine, and Humanities, making it a top study destination.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 Technical University of Munich (TUM)",
        image: "/university/germany/1.png",
      },
      {
        id: 2,
        name: "🏛 Heidelberg University",
        image: "/university/germany/2.png",
      },
      {
        id: 3,
        name: "🏛 Humboldt University of Berlin",
        image: "/university/germany/3.png",
      },
      {
        id: 4,
        name: "🏛 RWTH Aachen University",
        image: "/university/germany/4.png",
      },
      {
        id: 5,
        name: "🏛 University of Freiburg",
        image: "/university/germany/5.png",
      },
      {
        id: 6,
        name: "🏛 University of Stuttgart",
        image: "/university/germany/6.png",
      },
    ],
    list: "List of universities in Germany",
  },
  korea: {
    image: "/university/korea/hero.png",
    title: "GKS (South Korea 🇰🇷)",
    description:
      "The Global Korea Scholarship (GKS) is a government-funded program for international students applying for bachelor's, master's, and PhD programs in South Korea.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full tuition fee coverage",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend (~$800)",
      },
      flight: {
        enabled: true,
        title: "Round-trip airfare",
      },
      health: {
        enabled: true,
        title: "Visa and health insurance costs",
      },
      language: {
        enabled: true,
        title: "1-year Korean language course",
      },
      dormitory: {
        enabled: false,
        title: "",
      },
      meal: {
        enabled: false,
        title: "",
      },
    },
    admission:
      "📌 Admission chances: High if you have a strong GPA (3.5+), research experience, and extracurricular activities.",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Choose between the university track or embassy track",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "High school diploma/Bachelor's degree\nRecommendation letters\nMotivation letter\nLanguage certificate (TOPIK or IELTS)",
      },
      third: {
        id: 3,
        title: "Submit",
        text: "Submit your application (February–March) via studyinkorea.go.kr",
      },
    },
    flag: "/university/korea/flag.png",
    top_universities: {
      title: "Top Universities in South Korea",
      description:
        "South Korea's universities lead in Technology, AI, and Design, supported by strong industry connections and research opportunities.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 Yonsei University",
        image: "/university/korea/1.png",
      },
      {
        id: 2,
        name: "🏛 Korea University",
        image: "/university/korea/2.png",
      },
      {
        id: 3,
        name: "🏛 KAIST",
        image: "/university/korea/3.png",
      },
      {
        id: 4,
        name: "🏛 Hanyang University",
        image: "/university/korea/4.png",
      },
      {
        id: 5,
        name: "🏛 Sungkyunkwan University (SKKU)",
        image: "/university/korea/5.png",
      },
      {
        id: 6,
        name: "🏛 POSTECH",
        image: "/university/korea/6.png",
      },
    ],
    list: "List of universities in South Korea",
  },
  china: {
    image: "/university/china/hero.png",
    title: "CSC (China 🇨🇳)",
    description:
      "The Chinese Government Scholarship (CSC) offers full scholarships for international students.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full tuition fee coverage",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend (¥2500-3500)",
      },
      flight: {
        enabled: true,
        title: "Health insurance",
      },
      health: {
        enabled: false,
        title: "",
      },
      language: {
        enabled: false,
        title: "",
      },
      dormitory: {
        enabled: true,
        title: "Dormitory accommodation",
      },
      meal: {
        enabled: false,
        title: "",
      },
    },
    admission:
      "📌 Admission chances: High if you have strong academic achievements and knowledge of Chinese.",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Choose a university from the official list at campuschina.org",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "Diploma and academic transcripts\nCV and motivation letter\nRecommendation letters\nMedical certificate\nLanguage certificate (HSK for Chinese-taught, IELTS for English-taught programs)",
      },
      third: {
        id: 3,
        title: "Submit",
        text: "Submit the online application (January–April)",
      },
    },
    flag: "/university/china/flag.png",
    top_universities: {
      title: "Top Universities in China",
      description:
        "China's universities excel in Technology, Engineering, and International Business, with strong government funding for global scholars.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 Tsinghua University",
        image: "/university/china/1.png",
      },
      {
        id: 2,
        name: "🏛 Peking University",
        image: "/university/china/2.png",
      },
      {
        id: 3,
        name: "🏛 Fudan University",
        image: "/university/china/3.png",
      },
      {
        id: 4,
        name: "🏛 Shanghai Jiao Tong University",
        image: "/university/china/4.png",
      },
      {
        id: 5,
        name: "🏛 Wuhan University",
        image: "/university/china/5.png",
      },
      {
        id: 6,
        name: "🏛 Nanjing University",
        image: "/university/china/6.png",
      },
    ],
    list: "List of universities in China",
  },
  eu: {
    image: "/university/eu/hero.png",
    title: "Erasmus Mundus (European Union 🇪🇺)",
    description:
      "Erasmus Mundus Joint Master Degrees (EMJMD) allow students to study in 2–3 different European countries within a single master’s or PhD program.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full tuition fee coverage",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend (~£1400)",
      },
      flight: {
        enabled: true,
        title: "Travel and relocation allowance",
      },
      health: {
        enabled: true,
        title: "Visa and health insurance costs",
      },
      language: {
        enabled: false,
        title: "",
      },
      dormitory: {
        enabled: false,
        title: "",
      },
      meal: {
        enabled: false,
        title: "",
      },
    },
    admission:
      "📌 Admission Chances: Competitive but higher with a GPA 3.5+, research or volunteer experience, and a strong motivation letter—plus, applying to 3 Erasmus Mundus programs boosts your chances!",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Choose a program from the official Erasmus Mundus Catalogue",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "Bachelor's diploma and transcripts\nCV (resume)\nMotivation letter\nRecommendation letters\nEnglish proficiency certificate (IELTS 6.5+)",
      },
      third: {
        id: 3,
        title: "Submit",
        text: "Submit an application (Deadlines: December–February)",
      },
    },
    flag: "/university/eu/flag.png",
    top_universities: {
      title: "Top Universities in European Union",
      description:
        "Erasmus Mundus offers fully funded master's programs across multiple European countries, specializing in Sustainability, Engineering, and Social Sciences, with an emphasis on mobility and cultural exchange.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 University of Copenhagen (Denmark)",
        image: "/university/eu/1.png",
      },
      {
        id: 2,
        name: "🏛 University of Amsterdam (Netherlands)",
        image: "/university/eu/2.png",
      },
      {
        id: 3,
        name: "🏛 Lund University (Sweden)",
        image: "/university/eu/3.png",
      },
      {
        id: 4,
        name: "🏛 KU Leuven (Belgium)",
        image: "/university/eu/4.png",
      },
      {
        id: 5,
        name: "🏛 University of Barcelona (Spain)",
        image: "/university/eu/5.png",
      },
      {
        id: 6,
        name: "🏛 University of Porto (Portugal)",
        image: "/university/eu/6.png",
      },
    ],
    list: "List of universities in European Union",
  },
  bolashak: {
    image: "/university/bolashak/hero.png",
    title: "Bolashak Scholarship (🇰🇿)",
    description:
      "Bolashak is a Kazakhstani government-funded scholarship that allows students, researchers, and professionals to study abroad in top universities worldwide. It aims to develop highly qualified specialists for Kazakhstan.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full tuition fee coverage",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend",
      },
      flight: {
        enabled: true,
        title: " Round-trip airfare",
      },
      health: {
        enabled: true,
        title: "Visa and health insurance costs",
      },
      language: {
        enabled: false,
        title: "",
      },
      dormitory: {
        enabled: true,
        title: "Accommodation expenses",
      },
      meal: {
        enabled: false,
        title: "",
      },
    },
    admission:
      "📌 Higher admission chances with GPA 3.0+, priority sector work experience, and a commitment to work in Kazakhstan for 5 years.",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Check the list of approved universities and programs on bolashak.gov.kz",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "Bachelor's diploma and transcripts\nCV (resume)\nMotivation letter\nRecommendation letters\nEnglish proficiency certificate (IELTS 6.5+) or relevant language test",
      },
      third: {
        id: 3,
        title: "Interview",
        text: "English exam\nPsychological test\nInterview with the commission",
      },
    },
    flag: "/university/bolashak/flag.png",
    top_universities: {
      title: "Top Universities by Bolashak",
      description:
        "Bolashak funds top-tier international education in fields like STEM, Business, and Public Administration, requiring scholars to return and contribute to Kazakhstan’s development.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 Harvard University (USA)",
        image: "/university/kazakhstan/1.png",
      },
      {
        id: 2,
        name: "🏛 Stanford University (USA)",
        image: "/university/kazakhstan/2.png",
      },
      {
        id: 3,
        name: "🏛 University of Toronto (Canada)",
        image: "/university/kazakhstan/3.png",
      },
      {
        id: 4,
        name: "🏛 University of Melbourne (Australia)",
        image: "/university/kazakhstan/4.png",
      },
      {
        id: 5,
        name: "🏛 University of Tokyo (Japan)",
        image: "/university/kazakhstan/5.png",
      },
      {
        id: 6,
        name: "🏛 National University of Singapore (Singapore)",
        image: "/university/kazakhstan/6.png",
      },
    ],
    list: "List of universities by Bolashak",
  },
  hungary: {
    image: "/university/hungary/hero.png",
    title: "Stipendium Hungaricum (Hungary 🇭🇺)",
    description:
      "The Stipendium Hungaricum is a Hungarian government-funded scholarship that also collaborates with Bolashak, allowing Kazakhstani students to study at top Hungarian universities.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full tuition fee coverage",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend(up to €120) ",
      },
      flight: {
        enabled: false,
        title: "",
      },
      health: {
        enabled: true,
        title: "Visa and health insurance costs",
      },
      language: {
        enabled: false,
        title: "",
      },
      dormitory: {
        enabled: true,
        title: "Accommodation expenses",
      },
      meal: {
        enabled: false,
        title: "",
      },
    },
    admission:
      "📌 Admission chances: High if you have a strong GPA (3.0+), a clear motivation, and good academic performance",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Find your program on stipendiumhungaricum.hu",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "Diploma and transcripts\nMotivation letter\nRecommendation letters\nIELTS (usually 5.5+)\nMedical certificate",
      },
      third: {
        id: 3,
        title: "Apply",
        text: "Apply online (Deadline: January)",
      },
    },
    flag: "/university/hungary/flag.png",
    top_universities: {
      title: "Top Universities in Hungary",
      description:
        "Hungary provides top-tier education in Medicine, Engineering, and Agriculture, with full scholarships for international students.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 Eötvös Loránd University (ELTE)",
        image: "/university/hungary/1.png",
      },
      {
        id: 2,
        name: "🏛 Budapest University of Technology and Economics (BME)",
        image: "/university/hungary/2.png",
      },
      {
        id: 3,
        name: "🏛 University of Szeged",
        image: "/university/hungary/3.png",
      },
      {
        id: 4,
        name: "🏛 Semmelweis University",
        image: "/university/hungary/4.png",
      },
      {
        id: 5,
        name: "🏛 Corvinus University of Budapest",
        image: "/university/hungary/5.png",
      },
      {
        id: 6,
        name: "🏛 University of Debrecen",
        image: "/university/hungary/6.png",
      },
    ],
    list: "List of universities in Hungary",
  },
  italy: {
    image: "/university/italy/hero.png",
    title: "DSU (Italy 🇮🇹)",
    description:
      "The DSU Regional Scholarship provides financial aid for international students in Italy.",
    covers: {
      tuition: {
        enabled: true,
        title: "Full tuition fee coverage",
      },
      stipend: {
        enabled: true,
        title: "Monthly stipend(up to €120)",
      },
      flight: {
        enabled: false,
        title: "",
      },
      health: {
        enabled: false,
        title: "",
      },
      language: {
        enabled: false,
        title: "",
      },
      dormitory: {
        enabled: true,
        title: "Accommodation expenses",
      },
      meal: {
        enabled: true,
        title: "Free meals at university canteens",
      },
    },
    admission:
      "📌 Admission chances: Higher if you meet ISEE financial requirements, submit documents on time, and apply to multiple universities.",
    appliment: {
      first: {
        id: 1,
        title: "Apply",
        text: "Choose an Italian university that participates in DSU",
      },
      second: {
        id: 2,
        title: "Prepare documents",
        text: "Family income certificate (ISEE)\nAcademic transcripts & diploma\nValid passport\nUniversity admission letter\nMotivation letter (sometimes required)",
      },
      third: {
        id: 3,
        title: "Interview",
        text: "Submit your DSU application online (June–September)",
      },
    },
    flag: "/university/italy/flag.png",
    top_universities: {
      title: "Top Universities in Italy",
      description:
        "Italy offers affordable, high-quality education, especially in Architecture, Arts, and Economics, alongside rich cultural experiences.",
    },
    universities: [
      {
        id: 1,
        name: "🏛 University of Bologna",
        image: "/university/italy/1.png",
      },
      {
        id: 2,
        name: "🏛 Sapienza University of Rome",
        image: "/university/italy/2.png",
      },
      {
        id: 3,
        name: "🏛 Politecnico di Milano",
        image: "/university/italy/3.png",
      },
      {
        id: 4,
        name: "🏛 University of Padua",
        image: "/university/italy/4.png",
      },
      {
        id: 5,
        name: "🏛 University of Turin",
        image: "/university/italy/5.png",
      },
      {
        id: 6,
        name: "🏛 Bocconi University",
        image: "/university/italy/6.png",
      },
    ],
    list: "List of universities in Italy",
  },
};

const data = items[route.params.country as keyof typeof items];
</script>

<template>
  <div class="space-y-8">
    <section class="relative h-[80vh] w-full overflow-hidden">
      <NuxtImg
        :src="data.image"
        class="absolute left-0 right-0 top-0 -z-50 h-full w-full object-cover"
      />

      <div
        class="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]"
      >
        <div class="space-y-4 text-white">
          <h2 class="text-5xl font-semibold">{{ data.title }}</h2>
          <p class="text-lg font-normal">{{ data.description }}</p>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-20 p-20">
      <h2 class="text-center text-4xl font-bold">What does it cover?</h2>

      <div class="m-auto grid w-full max-w-6xl grid-cols-2 gap-10">
        <div v-for="(item, index) in data.covers" :key="index">
          <div
            v-if="item.enabled && index === 'tuition'"
            class="relative rounded bg-[#DE6161] p-2 text-center text-white"
          >
            <NuxtImg
              src="/Hat.png"
              class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
            />
            <p>{{ item.title }}</p>
          </div>

          <div
            v-if="item.enabled && index === 'stipend'"
            class="relative rounded bg-[#DE6161] p-2 text-center text-white"
          >
            <NuxtImg
              src="/Money.png"
              class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
            />
            <p>{{ item.title }}</p>
          </div>

          <div
            v-if="item.enabled && index === 'flight'"
            class="relative rounded bg-[#DE6161] p-2 text-center text-white"
          >
            <NuxtImg
              src="/Plane.png"
              class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
            />
            <p>{{ item.title }}</p>
          </div>

          <div
            v-if="item.enabled && index === 'health'"
            class="relative rounded bg-[#DE6161] p-2 text-center text-white"
          >
            <NuxtImg
              src="/Sick.png"
              class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
            />
            <p>{{ item.title }}</p>
          </div>

          <div
            v-if="item.enabled && index === 'language'"
            class="relative rounded bg-[#DE6161] p-2 text-center text-white"
          >
            <NuxtImg
              src="/university/korea/flag.png"
              class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
            />
            <p>{{ item.title }}</p>
          </div>

          <div
            v-if="item.enabled && index === 'dormitory'"
            class="relative rounded bg-[#DE6161] p-2 text-center text-white"
          >
            <NuxtImg
              src="/Dormitory.png"
              class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
            />
            <p>{{ item.title }}</p>
          </div>

          <div
            v-if="item.enabled && index === 'meal'"
            class="relative rounded bg-[#DE6161] p-2 text-center text-white"
          >
            <NuxtImg
              src="/Meal.png"
              class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
            />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div class="w-full rounded-lg bg-[#D3DEFF] p-6 text-center">
        <p>{{ data.admission }}</p>
      </div>
    </section>

    <section class="flex flex-col gap-20 p-20">
      <h2 class="text-center text-4xl font-bold">How to apply?</h2>

      <div class="flex items-center justify-center gap-10">
        <div class="h-40 w-40 rounded-full border border-indigo-500 p-4">
          <div
            class="flex h-full w-full items-center justify-center rounded-full bg-indigo-500 text-2xl text-white"
          >
            1
          </div>
        </div>
        <hr class="border-1 w-[20%] border-black" />
        <div class="h-40 w-40 rounded-full border border-pink-500 p-2">
          <div
            class="flex h-full w-full items-center justify-center rounded-full bg-pink-500 text-2xl text-white"
          >
            2
          </div>
        </div>
        <hr class="border-1 w-[20%] border-black" />
        <div class="h-40 w-40 rounded-full border border-teal-500 p-2">
          <div
            class="flex h-full w-full items-center justify-center rounded-full bg-teal-500 text-2xl text-white"
          >
            3
          </div>
        </div>
      </div>

      <div class="flex items-center justify-around gap-16">
        <div
          v-for="item in data.appliment"
          :key="item.id"
          class="flex max-w-64 flex-col items-center"
        >
          <h4 class="text-lg font-semibold">{{ item.title }}</h4>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-20 p-20">
      <div class="space-y-10">
        <h2 class="flex items-center justify-center gap-4 text-4xl font-bold">
          <NuxtImg :src="data.flag" class="w-24" />
          {{ data.top_universities.title }}
        </h2>

        <p class="text-center text-lg font-normal">
          {{ data.top_universities.description }}
        </p>
      </div>

      <div class="grid grid-cols-3 gap-24">
        <div
          v-for="university in data.universities"
          :key="university.id"
          class="flex flex-col gap-4 text-center"
        >
          <div class="h-64 overflow-hidden rounded-xl">
            <NuxtImg
              :src="university.image"
              class="h-full w-full object-cover"
            />
          </div>
          <p class="text-center text-lg font-normal">{{ university.name }}</p>
        </div>
      </div>
    </section>

    <div class="flex justify-center pb-20">
      <UiButton variant="soft" class="w-1/2">
        {{ data.list }}
      </UiButton>
    </div>
  </div>
</template>
