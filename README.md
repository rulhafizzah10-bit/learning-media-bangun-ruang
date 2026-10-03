const shapeData = {
  kerucut: {
    label: 'Kerucut',
    defaultTarget: 'alas',
    concepts: {
      alas: {
        title: 'Alas Kerucut',
        badge: 'Konsep',
        text: 'Alas kerucut berbentuk lingkaran. Karena bagian bawah kerucut menutup dan menyerupai bidang datar berbentuk lingkaran, maka luas alas dihitung dengan rumus luas lingkaran.',
        formula: 'L = πr²',
        derivation: 'Lingkaran memiliki luas yang dihitung dari π × r × r. Karena jari-jari alas kerucut adalah r, maka luas alas adalah πr².',
        steps: [
          'Bagian alas adalah bidang datar yang menutup kerucut.',
          'Bidang itu berbentuk lingkaran.',
          'Luas lingkaran adalah πr².',
          'Karena alas kerucut sama dengan lingkaran, rumusnya juga πr².'
        ]
      },
      tinggi: {
        title: 'Tinggi Kerucut',
        badge: 'Tinggi',
        text: 'Tinggi kerucut adalah jarak tegak lurus dari titik puncak ke pusat alas. Tinggi ini membentuk segitiga siku-siku bersama jari-jari dan garis pelukis.',
        formula: 't = jarak puncak ke pusat alas',
        derivation: 'Jika dibuat garis dari titik puncak ke pusat alas, terbentuk segitiga siku-siku. Jarak itu disebut tinggi (t), dan digunakan untuk menghitung volume.',
        steps: [
          'Hubungkan puncak kerucut ke pusat alas.',
          'Garis itu tegak lurus terhadap alas.',
          'Garis ini disebut tinggi kerucut.',
          'Tinggi membantu kita menghitung volume dan garis pelukis.'
        ]
      },
      selimut: {
        title: 'Selimut Kerucut',
        badge: 'Luas',
        text: 'Selimut kerucut adalah permukaan lengkung yang membungkus bagian samping. Jika dibuka, selimut tersebut membentuk juring lingkaran.',
        formula: 'Lselimut = πrs',
        derivation: 'Luas selimut sama dengan luas juring lingkaran. Panjang busur juring tersebut sama dengan keliling alas, yaitu 2πr, dan jari-jari juringnya adalah s. Karena luas juring = 1/2 × panjang busur × jari-jari, hasilnya menjadi πrs.',
        steps: [
          'Selimut kerucut kalau dibuka akan membentuk juring.',
          'Panjang busur juring sama dengan keliling alas.',
          'Jari-jari juring sama dengan garis pelukis s.',
          'Maka luas selimut = 1/2 × 2πr × s = πrs.'
        ]
      },
      'garis-pelukis': {
        title: 'Garis Pelukis',
        badge: 'Hubungan',
        text: 'Garis pelukis (s) adalah sisi miring pada selimut kerucut. Garis ini menghubungkan titik puncak dengan titik pada keliling alas.',
        formula: 's² = r² + t²',
        derivation: 'Dengan tinggi (t) dan jari-jari (r), terbentuk segitiga siku-siku. Dengan teorema Pythagoras, s² = r² + t².',
        steps: [
          'Jari-jari, tinggi, dan garis pelukis membentuk segitiga siku-siku.',
          'Tinggi dan jari-jari adalah sisi tegak lurus.',
          'Garis pelukis adalah sisi miring.',
          'Dengan teorema Pythagoras, s² = r² + t².'
        ]
      },
      volume: {
        title: 'Volume Kerucut',
        badge: 'Volume',
        text: 'Volume kerucut adalah sepertiga volume tabung dengan jari-jari dan tinggi yang sama.',
        formula: 'V = 1/3 πr²t',
        derivation: 'Volume tabung adalah luas alas × tinggi = πr²t. Karena kerucut lebih runcing dan hanya menempati sebagian ruang, volumenya 1/3 dari tabung dengan ukuran yang sama.',
        steps: [
          'Volume tabung = luas alas × tinggi = πr²t.',
          'Kerucut memiliki bentuk yang runcing.',
          'Hasilnya adalah sepertiga ruang tabung yang sama.',
          'Jadi volume kerucut = 1/3 πr²t.'
        ]
      }
    },
    questions: {
      dasar: [
        { question: 'Alas kerucut berbentuk apa?', options: ['Segitiga', 'Lingkaran', 'Persegi', 'Trapesium'], answer: 1, explanation: 'Alas kerucut selalu berbentuk lingkaran, sehingga luas alas dihitung dengan rumus luas lingkaran.' },
        { question: 'Jika jari-jari alas kerucut 7 cm, luas alasnya adalah ...', options: ['154 cm²', '88 cm²', '44 cm²', '308 cm²'], answer: 0, explanation: 'L = πr² = 22/7 × 7 × 7 = 154 cm².' },
        { question: 'Garis pelukis kerucut biasanya dilambangkan dengan ...', options: ['r', 't', 's', 'p'], answer: 2, explanation: 'Garis pelukis pada kerucut dilambangkan dengan s.' }
      ],
      penerapan: [
        { question: 'Diketahui kerucut memiliki jari-jari 5 cm dan tinggi 12 cm. Hitung garis pelukisnya.', options: ['7 cm', '10 cm', '13 cm', '15 cm'], answer: 2, explanation: 's² = r² + t² = 25 + 144 = 169, maka s = 13 cm.' },
        { question: 'Sebuah kerucut memiliki jari-jari 7 cm dan garis pelukis 25 cm. Luas selimutnya adalah ...', options: ['154 cm²', '440 cm²', '550 cm²', '616 cm²'], answer: 2, explanation: 'Lselimut = πrs = 22/7 × 7 × 25 = 550 cm².' },
        { question: 'Volume kerucut dengan r = 6 cm dan t = 14 cm adalah ...', options: ['264 cm³', '528 cm³', '616 cm³', '792 cm³'], answer: 1, explanation: 'V = 1/3 πr²t = 1/3 × 22/7 × 36 × 14 = 528 cm³.' }
      ],
      kritis: [
        { question: 'Jika dua kerucut memiliki tinggi sama, tetapi jari-jari satu dua kali lipat dari yang lain, perbandingan volume mereka adalah ...', options: ['1 : 2', '1 : 4', '1 : 8', '2 : 1'], answer: 1, explanation: 'Volume berbanding lurus dengan r². Jika r menjadi 2 kali, volume menjadi 4 kali. Jadi perbandingan volume = 1 : 4.' },
        { question: 'Kerucut dan tabung memiliki jari-jari yang sama. Jika tinggi kerucut sama dengan tinggi tabung, maka volume kerucut dibanding volume tabung adalah ...', options: ['1 : 2', '1 : 3', '2 : 3', '3 : 1'], answer: 1, explanation: 'Volume kerucut = 1/3 πr²t, volume tabung = πr²t, jadi perbandingan volume kerucut : tabung = 1 : 3.' },
        { question: 'Sebuah kerucut memiliki luas selimut 220 cm² dan jari-jari 7 cm. Panjang garis pelukisnya adalah ...', options: ['5 cm', '10 cm', '15 cm', '20 cm'], answer: 1, explanation: 'Lselimut = πrs = 22/7 × 7 × s = 22s. Jadi s = 220 / 22 = 10 cm.' }
      ],
      cerita: [
        { question: 'Sebuah tenda pramuka berbentuk kerucut dengan jari-jari 3 m dan tinggi 4 m. Berapa luas bahan yang diperlukan untuk membuat selimut tenda, tanpa alas?', options: ['15π m²', '18π m²', '20π m²', '24π m²'], answer: 0, explanation: 's² = 3² + 4² = 25, maka s = 5. Luas selimut = πrs = π × 3 × 5 = 15π m².' },
        { question: 'Sebuah es krim berbentuk kerucut dengan diameter 7 cm dan tinggi 12 cm. Volume es krim itu adalah ...', options: ['154 cm³', '308 cm³', '462 cm³', '616 cm³'], answer: 0, explanation: 'r = 3,5 cm. V = 1/3 πr²t = 1/3 × 22/7 × 12,25 × 12 ≈ 154 cm³.' },
        { question: 'Botol minuman berbentuk tabung, tetapi tutupnya berbentuk kerucut. Jika tinggi kerucut 9 cm dan jari-jari 3 cm, volume kerucut tersebut adalah ...', options: ['27π cm³', '18π cm³', '9π cm³', '6π cm³'], answer: 0, explanation: 'V = 1/3 πr²t = 1/3 × π × 9 × 9 = 27π cm³.' }
      ]
    }
  },
  tabung: {
    label: 'Tabung',
    defaultTarget: 'selimut',
    concepts: {
      alas: {
        title: 'Alas Tabung',
        badge: 'Konsep',
        text: 'Alas dan tutup tabung berbentuk lingkaran. Kedua lingkaran sejajar dan sama besar.',
        formula: 'Lalas = πr²',
        derivation: 'Karena alas tabung berbentuk lingkaran, luas alas sama dengan luas lingkaran dengan jari-jari r.',
        steps: [
          'Alas tabung adalah lingkaran.',
          'Luas lingkaran adalah πr².',
          'Karena alas tabung adalah lingkaran, rumusnya sama.',
          'Jadi luas alas tabung = πr².'
        ]
      },
      selimut: {
        title: 'Selimut Tabung',
        badge: 'Luas',
        text: 'Selimut tabung adalah permukaan melengkung yang menghubungkan alas dan tutup. Jika dibuka, selimut tabung akan membentuk persegi panjang.',
        formula: 'Lselimut = 2πrt',
        derivation: 'Panjang persegi panjang sama dengan keliling alas, yaitu 2πr, sedangkan lebarnya adalah tinggi tabung t. Jadi luasnya = 2πr × t.',
        steps: [
          'Ketika selimut tabung dibuka, akan membentuk persegi panjang.',
          'Panjang persegi panjang = keliling alas = 2πr.',
          'Lebarnya = tinggi tabung = t.',
          'Luas = 2πr × t = 2πrt.'
        ]
      },
      volume: {
        title: 'Volume Tabung',
        badge: 'Volume',
        text: 'Volume tabung sama dengan luas alas dikali tinggi.',
        formula: 'V = πr²t',
        derivation: 'Tabung dapat dipahami sebagai banyak lingkaran dengan luas πr² yang ditumpuk sampai tinggi t. Jadi volume = luas alas × tinggi.',
        steps: [
          'Luas alas tabung = πr².',
          'Tabung adalah tumpukan banyak lingkaran.',
          'Setiap lingkaran ditumpuk sampai tinggi t.',
          'Volume = luas alas × tinggi = πr²t.'
        ]
      }
    },
    questions: {
      dasar: [
        { question: 'Bentuk alas tabung adalah ...', options: ['Segitiga', 'Lingkaran', 'Persegi', 'Belah ketupat'], answer: 1, explanation: 'Alas dan tutup tabung berbentuk lingkaran.' },
        { question: 'Rumus luas selimut tabung adalah ...', options: ['2πr²', '2πrt', 'πr²t', '1/3 πr²t'], answer: 1, explanation: 'Selimut tabung = keliling alas × tinggi = 2πr × t = 2πrt.' },
        { question: 'Volume tabung dapat dihitung dengan rumus ...', options: ['πr²t', '2πrt', '4/3 πr³', 'πrs'], answer: 0, explanation: 'Volume tabung = luas alas × tinggi = πr²t.' }
      ],
      penerapan: [
        { question: 'Sebuah kaleng berbentuk tabung dengan jari-jari 7 cm dan tinggi 20 cm. Luas selimutnya adalah ...', options: ['440 cm²', '880 cm²', '1540 cm²', '3080 cm²'], answer: 1, explanation: 'Lselimut = 2πrt = 2 × 22/7 × 7 × 20 = 880 cm².' },
        { question: 'Volume tabung dengan r = 3 cm dan t = 10 cm adalah ...', options: ['90π cm³', '60π cm³', '30π cm³', '45π cm³'], answer: 0, explanation: 'V = πr²t = π × 9 × 10 = 90π cm³.' },
        { question: 'Jika diameter tabung 14 cm dan tinggi 12 cm, luas alasnya adalah ...', options: ['44 cm²', '154 cm²', '308 cm²', '616 cm²'], answer: 1, explanation: 'r = 7 cm, maka L = πr² = 22/7 × 49 = 154 cm².' }
      ],
      kritis: [
        { question: 'Dua tabung memiliki tinggi sama. Jika jari-jari tabung A dua kali jari-jari tabung B, maka perbandingan volume A : B adalah ...', options: ['1 : 2', '2 : 1', '4 : 1', '1 : 4'], answer: 2, explanation: 'Karena volume tabung bergantung pada r², jika r menjadi 2 kali lipat, volume menjadi 4 kali lipat.' },
        { question: 'Sebuah tabung mempunyai luas selimut 132 cm² dan tinggi 7 cm. Jari-jari tabung tersebut adalah ...', options: ['2 cm', '3 cm', '4 cm', '6 cm'], answer: 1, explanation: '2πrt = 132. Maka 2 × 22/7 × r × 7 = 44r = 132, sehingga r = 3 cm.' },
        { question: 'Tabung A dan B memiliki jari-jari sama, tetapi tinggi A dua kali tinggi B. Perbandingan volume A : B adalah ...', options: ['1 : 2', '2 : 1', '1 : 4', '4 : 1'], answer: 1, explanation: 'Volume tabung berbanding lurus dengan tinggi, jadi jika tinggi dua kali lipat, volume juga dua kali lipat.' }
      ],
      cerita: [
        { question: 'Sebuah drum berbentuk tabung berdiameter 28 cm dan tinggi 40 cm. Volume drum tersebut adalah ...', options: ['8800 cm³', '24640 cm³', '30800 cm³', '61600 cm³'], answer: 2, explanation: 'r = 14 cm. V = πr²t = 22/7 × 196 × 40 = 24640 cm³.' },
        { question: 'Sebuah gelas berbentuk tabung dengan tinggi 12 cm dan jari-jari 3 cm. Berapa volume air yang dapat ditampung gelas tersebut?', options: ['108π cm³', '72π cm³', '36π cm³', '24π cm³'], answer: 0, explanation: 'V = πr²t = π × 9 × 12 = 108π cm³.' },
        { question: 'Sebuah kaleng susu memiliki jari-jari 5 cm dan tinggi 12 cm. Luas permukaan kaleng tersebut adalah ...', options: ['170π cm²', '340π cm²', '85π cm²', '120π cm²'], answer: 0, explanation: 'Lpermukaan = 2πr(r+t) = 2π × 5 × (5+12) = 170π cm².' }
      ]
    }
  },
  bola: {
    label: 'Bola',
    defaultTarget: 'luas',
    concepts: {
      luas: {
        title: 'Luas Permukaan Bola',
        badge: 'Luas',
        text: 'Permukaan bola adalah seluruh kulit luar yang membentuk lengkungan. Karena bentuknya bulat, luas permukaan bola dipengaruhi oleh jari-jari.',
        formula: 'L = 4πr²',
        derivation: 'Luas permukaan bola dapat diturunkan dari konsep daerah yang menutup seluruh ruang bola. Hasilnya adalah 4πr².',
        steps: [
          'Permukaan bola membentuk lengkungan yang tertutup.',
          'Semua titik pada permukaan berjarak sama dari pusat.',
          'Luas permukaan bola berkaitan dengan empat kali luas lingkaran.',
          'Maka luas permukaan = 4πr².'
        ]
      },
      volume: {
        title: 'Volume Bola',
        badge: 'Volume',
        text: 'Volume bola adalah banyak ruang yang ditempati oleh benda berbentuk bola.',
        formula: 'V = 4/3 πr³',
        derivation: 'Volume bola diperoleh dari pengolahan geometris dan integral; hasilnya adalah 4/3 πr³.',
        steps: [
          'Volume bola didapat dari bentuk geometri yang dibangun dari jari-jari.',
          'Volume berbanding dengan pangkat tiga jari-jari.',
          'Konstanta yang muncul pada bola adalah 4/3.',
          'Jadi volume bola = 4/3 πr³.'
        ]
      }
    },
    questions: {
      dasar: [
        { question: 'Bola memiliki bentuk yang ...', options: ['Berbidang datar', 'Bulat sempurna', 'Bujur sangkar', 'Segitiga'], answer: 1, explanation: 'Bola memiliki seluruh permukaan yang berbentuk lengkungan dan jarak semua titik ke pusat sama.' },
        { question: 'Rumus luas permukaan bola adalah ...', options: ['πr²', '2πr²', '4πr²', '4/3 πr³'], answer: 2, explanation: 'Luas permukaan bola = 4πr².' },
        { question: 'Volume bola dinyatakan dengan rumus ...', options: ['πr²t', '4πr²', '4/3 πr³', '2πr'], answer: 2, explanation: 'Volume bola = 4/3 πr³.' }
      ],
      penerapan: [
        { question: 'Jika jari-jari bola 7 cm, luas permukaannya adalah ...', options: ['154 cm²', '308 cm²', '616 cm²', '1232 cm²'], answer: 2, explanation: 'L = 4πr² = 4 × 22/7 × 49 = 616 cm².' },
        { question: 'Volume bola dengan jari-jari 3 cm adalah ...', options: ['12π cm³', '18π cm³', '24π cm³', '36π cm³'], answer: 3, explanation: 'V = 4/3 πr³ = 4/3 × π × 27 = 36π cm³.' },
        { question: 'Jika diameter bola 10 cm, maka volume bola adalah ...', options: ['250π/3 cm³', '500π/3 cm³', '1000π/3 cm³', '125π cm³'], answer: 1, explanation: 'r = 5. V = 4/3 π × 125 = 500π/3 cm³.' }
      ],
      kritis: [
        { question: 'Jika jari-jari bola menjadi dua kali lipat, maka luas permukaan bola menjadi ...', options: ['2 kali', '4 kali', '8 kali', '16 kali'], answer: 1, explanation: 'Luas permukaan bergantung pada r², jadi jika r menjadi 2 kali, luas menjadi 4 kali.' },
        { question: 'Perbandingan volume dua bola dengan jari-jari 1 cm dan 2 cm adalah ...', options: ['1 : 2', '1 : 4', '1 : 8', '2 : 1'], answer: 2, explanation: 'Volume bola berbanding dengan r³. Jadi 1³ : 2³ = 1 : 8.' },
        { question: 'Jika luas permukaan sebuah bola 36π cm², maka jari-jarinya adalah ...', options: ['2 cm', '3 cm', '4 cm', '6 cm'], answer: 1, explanation: '4πr² = 36π ⇒ r² = 9 ⇒ r = 3 cm.' }
      ],
      cerita: [
        { question: 'Sebuah bola basket memiliki jari-jari 10 cm. Berapa volume udara di dalam bola tersebut?', options: ['400π/3 cm³', '4000π/3 cm³', '2000π/3 cm³', '1000π/3 cm³'], answer: 1, explanation: 'V = 4/3 π × 10³ = 4000π/3 cm³.' },
        { question: 'Kelompok siswa membuat balon berbentuk bola dengan diameter 14 cm. Luas permukaan balon tersebut adalah ...', options: ['154π cm²', '196π cm²', '308π cm²', '616π cm²'], answer: 1, explanation: 'r = 7, L = 4πr² = 4π × 49 = 196π cm².' },
        { question: 'Jika sebuah bola memiliki volume 288π cm³, maka jari-jari bola tersebut adalah ...', options: ['3 cm', '4 cm', '5 cm', '6 cm'], answer: 3, explanation: '4/3 πr³ = 288π ⇒ r³ = 216 ⇒ r = 6 cm.' }
      ]
    }
  }
};

const state = {
  sessionId: '',
  currentShape: 'kerucut',
  currentTarget: 'alas',
  level: 'penerapan',
  currentQuestionIndex: 0,
  selectedAnswer: null,
  answered: false
};

const doc = document;

function getSessionIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('sessionId') || '';
}

function generateSessionId() {
  return `scan-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
}

function updateSessionId() {
  const url = new URL(window.location.href);
  if (!state.sessionId) {
    state.sessionId = getSessionIdFromUrl() || generateSessionId();
  }

  url.searchParams.set('sessionId', state.sessionId);
  window.history.replaceState({}, '', url);

  const sessionNode = document.getElementById('sessionId');
  if (sessionNode) sessionNode.textContent = state.sessionId.slice(0, 12);

  const qrUrl = `${window.location.origin}${window.location.pathname}?sessionId=${state.sessionId}`;
  const qrImage = document.getElementById('qrImage');
  if (qrImage) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrUrl)}&size=180x180&format=png`;
  }
}

function renderShapeButtons() {
  const container = document.getElementById('shapeButtons');
  if (!container) return;

  container.innerHTML = '';

  Object.entries(shapeData).forEach(([shapeKey, shape]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `shape-btn ${state.currentShape === shapeKey ? 'active' : ''}`;
    button.textContent = shape.label;
    button.addEventListener('click', () => {
      state.currentShape = shapeKey;
      state.currentTarget = shape.defaultTarget;
      renderShapeButtons();
      showConcept(state.currentTarget);
      renderQuestion();
    });
    container.appendChild(button);
  });
}

function renderConceptSteps(concept) {
  const stepsNode = document.getElementById('conceptSteps');
  if (!stepsNode || !concept.steps) return;

  stepsNode.innerHTML = concept.steps.map((item) => `<li>${item}</li>`).join('');
}

function showConcept(target) {
  const shape = shapeData[state.currentShape];
  const concept = shape.concepts[target];
  if (!concept) return;

  state.currentTarget = target;
  document.getElementById('shapeName').textContent = shape.label;
  document.getElementById('conceptTitle').textContent = concept.title;
  document.getElementById('conceptBadge').textContent = concept.badge;
  document.getElementById('conceptText').textContent = concept.text;
  document.getElementById('conceptFormula').textContent = concept.formula;
  document.getElementById('conceptDerivation').textContent = concept.derivation;
  renderConceptSteps(concept);

  document.querySelectorAll('.focus-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.target === target);
  });

  const pointGroups = document.querySelectorAll('.point-group');
  pointGroups.forEach((group) => {
    const active = group.dataset.target === target;
    const ring = group.querySelector('.point-ring');
    if (ring) {
      ring.style.fill = active ? 'rgba(157, 241, 202, 0.14)' : 'rgba(255,255,255,0.12)';
      ring.style.stroke = active ? '#9df1ca' : 'rgba(104, 213, 255, 0.8)';
    }
  });
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function randomFromSeed(seed, min, max) {
  const x = Math.sin(seed) * 10000;
  return min + (x - Math.floor(x)) * (max - min);
}

function chooseQuestion(level) {
  const pool = shapeData[state.currentShape].questions[level];
  const seed = hashString(`${state.sessionId}-${state.currentShape}-${level}`);
  const index = Math.abs(Math.floor(randomFromSeed(seed, 0, pool.length))) % pool.length;
  state.currentQuestionIndex = index;
  return pool[index];
}

function renderQuestion() {
  const shape = shapeData[state.currentShape];
  const pool = shape.questions[state.level];
  const question = pool[state.currentQuestionIndex] || chooseQuestion(state.level);

  document.getElementById('questionText').textContent = question.question;
  const optionsNode = document.getElementById('answerOptions');
  optionsNode.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.dataset.index = String(index);

    button.addEventListener('click', () => {
      if (state.answered) return;
      state.selectedAnswer = Number(index);
      document.querySelectorAll('.answer-option').forEach((optionNode) => {
        optionNode.classList.toggle('selected', Number(optionNode.dataset.index) === state.selectedAnswer);
      });
    });

    optionsNode.appendChild(button);
  });

  const feedback = document.getElementById('feedback');
  feedback.className = 'feedback hidden';
  feedback.textContent = '';
  state.selectedAnswer = null;
  state.answered = false;
}

function checkAnswer() {
  const currentQuestion = shapeData[state.currentShape].questions[state.level][state.currentQuestionIndex];
  const feedback = document.getElementById('feedback');

  if (state.selectedAnswer === null) {
    feedback.textContent = 'Pilih salah satu jawaban terlebih dahulu.';
    feedback.className = 'feedback error';
    feedback.classList.remove('hidden');
    return;
  }

  const isCorrect = state.selectedAnswer === currentQuestion.answer;
  feedback.classList.remove('hidden');

  if (isCorrect) {
    feedback.textContent = `Benar! ${currentQuestion.explanation}`;
    feedback.className = 'feedback success';
  } else {
    feedback.textContent = `Jawabanmu belum tepat. ${currentQuestion.explanation}`;
    feedback.className = 'feedback error';
  }

  state.answered = true;

  document.querySelectorAll('.answer-option').forEach((optionNode) => {
    const optionIndex = Number(optionNode.dataset.index);
    if (optionIndex === currentQuestion.answer) {
      optionNode.classList.add('correct');
    }
    if (optionIndex === state.selectedAnswer && optionIndex !== currentQuestion.answer) {
      optionNode.classList.add('wrong');
    }
  });
}

function changeLevel(level) {
  state.level = level;

  document.querySelectorAll('.level-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.level === level);
  });

  const badge = document.getElementById('levelBadge');
  if (badge) {
    badge.textContent = level.charAt(0).toUpperCase() + level.slice(1);
  }

  const pool = shapeData[state.currentShape].questions[level];
  state.currentQuestionIndex = Math.abs(hashString(`${state.sessionId}-${state.currentShape}-${level}-${Date.now()}`)) % pool.length;
  renderQuestion();
}

function init() {
  updateSessionId();
  renderShapeButtons();
  showConcept(state.currentTarget);
  changeLevel('penerapan');

  document.querySelectorAll('.focus-btn').forEach((button) => {
    button.addEventListener('click', () => showConcept(button.dataset.target));
  });

  document.querySelectorAll('.level-btn').forEach((button) => {
    button.addEventListener('click', () => changeLevel(button.dataset.level));
  });

  document.getElementById('newSessionBtn').addEventListener('click', () => {
    state.sessionId = generateSessionId();
    updateSessionId();
    changeLevel(state.level);
    showConcept(state.currentTarget);
  });

  document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
  document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    const pool = shapeData[state.currentShape].questions[state.level];
    state.currentQuestionIndex = (state.currentQuestionIndex + 1) % pool.length;
    renderQuestion();
  });
}

init();

window.addEventListener('load', () => {
  const qrImage = document.getElementById('qrImage');
  if (qrImage) qrImage.alt = `QR code untuk sesi ${state.sessionId}`;
});

