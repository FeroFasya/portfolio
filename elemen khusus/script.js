// Bikin Elemen Custom <my-button>
class MyButton extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <button style="
          background: #007BFF; 
          color: white; 
          border: none; 
          border-radius: 5px; 
          padding: 10px 20px; 
          font-size: 16px;
        ">
          Tekan Aku!
        </button>
      `;
      // Tambahkan interaksi saat tombol ditekan
      this.querySelector('button').addEventListener('click', () => {
        alert('Halo dari elemen custom!');
      });
    }
  }
  customElements.define('my-button', MyButton);
  
  // Bikin Elemen Custom <my-card>
  class MyCard extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <style>
          .card {
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            padding: 20px;
            margin: 10px 0;
            background: #f9f9f9;
          }
          .card h2 {
            margin: 0 0 10px;
          }
        </style>
        <div class="card">
          <h2>Ini Kartu Custom</h2>
          <p>Kamu bisa menambahkan gaya sesukamu di sini.</p>
        </div>
      `;
    }
  }
  customElements.define('my-card', MyCard);

  // Bikin Elemen Custom <my-badge>
class MyBadge extends HTMLElement {
  constructor() {
    super();
    // Simpan nilai default badge
    this.count = 0;
  }

  connectedCallback() {
    this.render();
  }

  // Fungsi untuk merender ulang isi badge
  render() {
    this.innerHTML = `
      <style>
        .badge {
          display: inline-block;
          background-color: #ff6347;
          color: white;
          border-radius: 12px;
          padding: 5px 10px;
          font-size: 14px;
          font-weight: bold;
        }
      </style>
      <div class="badge">${this.count}</div>
    `;
  }

  // Tambahin fungsi buat update badge
  updateCount(newCount) {
    this.count = newCount;
    this.render(); // Render ulang tampilan dengan nilai baru
  }
}
customElements.define('my-badge', MyBadge);

// Contoh Pemakaian Badge Dinamis
setTimeout(() => {
  const badge = document.querySelector('my-badge');
  badge.updateCount(10); // Update angka badge jadi 10
}, 2000);

// contoh MOOD ring
class MoodRing extends HTMLElement {
  constructor() {
    super();
    this.moods = {
      pagi: '#FFD700', // Kuning cerah
      siang: '#00BFFF', // Biru terang
      sore: '#FF8C00', // Jingga
      malam: '#4B0082', // Ungu gelap
    };
  }

  connectedCallback() {
    this.render();
    setInterval(() => this.updateMood(), 1000); // Update mood tiap 1 detik
  }

  getCurrentMood() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'pagi';
    if (hour >= 12 && hour < 17) return 'siang';
    if (hour >= 17 && hour < 21) return 'sore';
    return 'malam';
  }

  render() {
    const mood = this.getCurrentMood();
    this.innerHTML = `
      <style>
        .ring {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: ${this.moods[mood]};
          border: 3px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          color: white;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
      </style>
      <div class="ring">${mood.toUpperCase()}</div>
    `;
  }

  updateMood() {
    this.render(); // Render ulang untuk update warna
  }
}

customElements.define('mood-ring', MoodRing);

// time benderr
class TimeBender extends HTMLElement {
  constructor() {
    super();
    this.futures = [
      "Makan mie instan tapi lupa sendok",
      "Scroll TikTok terlalu lama",
      "Mengubah rencana hidup jadi main game",
      "Ketiduran di tengah Zoom meeting",
      "Nonton anime 5 episode tanpa jeda",
      "Cinta datang tiba-tiba... atau tagihan listrik!",
      "Ketemu mantan di supermarket",
      "Lupa bawa dompet",
      "Mendapat ide genial di tengah malam",
      "Ketemu orang yang sama",
      "Mendapat paket misterius",
      "Mendapat telepon dari nomor tak dikenal",
      "Mendapat email dari pangeran Nigeria",
      "Mendapat undangan kencan buta",
      "Mendapat pesan dari diri sendiri di masa depan",
      "Mendapat pesan dari diri sendiri di masa lalu",
      "Mendapat pesan dari alien",
      "Mendapat pesan dari hewan peliharaan",
      "Mendapat pesan dari tanaman",
      "Mendapat pesan dari batu",
      "Mendapat pesan dari angin",
      "Mendapat pesan dari matahari",
      "aku sayang orang tiba tiba",
      "aku sayang orang yang aku benci",
      "aku sayang orang yang aku cintai",
      
    ];
  }

  connectedCallback() {
    this.render();
    setInterval(() => this.updateTime(), 5000); // Update setiap 5 detik
  }

  // Algoritma buat waktu sekarang dan waktu "5 menit ke depan"
  getTimeFuture() {
    const now = new Date();
    const future = new Date(now.getTime() + 5 * 60 * 1000); // Tambah 5 menit
    return { now, future };
  }

  // Algoritma ramalan
  getPrediction() {
    const randomIndex = Math.floor(Math.random() * this.futures.length);
    return this.futures[randomIndex];
  }

  // Render elemen dengan waktu dan ramalan
  render() {
    const { now, future } = this.getTimeFuture();
    const prediction = this.getPrediction();

    this.innerHTML = `
      <style>
        .time-bender {
          border: 2px solid #4CAF50;
          border-radius: 10px;
          padding: 15px;
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
        .time-bender p {
          margin: 5px 0;
        }
        .prediction {
          margin-top: 10px;
          color: #007BFF;
          font-style: italic;
        }
      </style>
      <div class="time-bender">
        <p><strong>Waktu Sekarang:</strong> ${now.toLocaleTimeString()}</p>
        <p><strong>Waktu 5 Menit ke Depan:</strong> ${future.toLocaleTimeString()}</p>
        <p class="prediction"><strong>Ramalan:</strong> ${prediction}</p>
      </div>
    `;
  }

  updateTime() {
    this.render(); // Render ulang untuk update waktu & ramalan
  }
}

customElements.define('time-bender', TimeBender);


class TransformerBox extends HTMLElement {
  constructor() {
    super();
    this.state = {
      transformations: ['circle', 'square', 'ellipse', 'hexagon'],
      colors: ['#FF6347', '#7CFC00', '#1E90FF', '#FFD700'],
    };
    this.currentTransformation = 0; // Default starting shape
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', () => this.transform());  // Tambahkan interaksi klik
  }

  // Fungsi untuk memilih dan merender efek transformasi
  transform() {
    // Algoritma perubahan
    this.currentTransformation = (this.currentTransformation + 1) % this.state.transformations.length;
    this.render(); // Rerender elemen dengan bentuk baru
  }

  // Algoritma untuk memilih warna acak
  getRandomColor() {
    const randomIndex = Math.floor(Math.random() * this.state.colors.length);
    return this.state.colors[randomIndex];
  }

  // Render elemen dengan perubahan bentuk dan warna
  render() {
    const transformShape = this.state.transformations[this.currentTransformation];
    const bgColor = this.getRandomColor();  // Memilih warna acak

    this.innerHTML = `
      <style>
        .transformer {
          width: 200px;
          height: 200px;
          background-color: ${bgColor};
          transition: all 1s ease; /* Animasi perubahan bentuk */
        }
        .square {
          border-radius: 0;
        }
        .circle {
          border-radius: 50%;
        }
        .ellipse {
          border-radius: 50% / 30%;
        }
        .hexagon {
          width: 200px;
          height: 200px;
          background-color: transparent;
          position: relative;
        }
        .hexagon:before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-top: 115px solid ${bgColor};
          top: -115px;
        }
        .hexagon:after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 115px solid ${bgColor};
          bottom: -115px;
        }
      </style>
      <div class="transformer ${transformShape}">
        <p>Transformasi di-klik!</p>
        <p style="color: white; text-align: center; font-size: 16px;">Bentuk: ${transformShape}</p>
      </div>
    `;
  }
}

customElements.define('transformer-box', TransformerBox);


//  Kinderfer
class Kinderfer extends HTMLElement {
  constructor() {
    super();
    this.images = [
      'https://placekitten.com/200/300', 
      'https://placebear.com/200/300', 
      


    ];
    this.lights = ['🔮', '✨', '⚡', '🌟', '💥'];
    this.state = {
      content: 'Pencet aku buat lihat keajaiban! ✨',
      currentImage: this.images[0],
      currentLight: this.lights[0],
    };
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', () => this.magicChange());
  }

  // Fungsi untuk mengambil gambar acak
  getRandomImage() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  // Fungsi untuk mengambil efek ajaib acak
  getRandomLight() {
    return this.lights[Math.floor(Math.random() * this.lights.length)];
  }

  // Fungsi yang digerakkan saat klik
  magicChange() {
    const randomImage = this.getRandomImage();
    const randomLight = this.getRandomLight();

    this.state.currentImage = randomImage;
    this.state.currentLight = randomLight;
    this.state.content = `Efek Ajaib: ${randomLight} - Klik lagi buat lihat yang lain!`;

    this.render(); // Rerender elemen untuk menunjukkan perubahan
  }

  // Render tampilan elemen dengan konten baru
  render() {
    this.innerHTML = `
      <style>
        .kinderfer {
          background-color: #FFF;
          border: 2px dashed #FF69B4;
          border-radius: 15px;
          padding: 20px;
          width: 250px;
          text-align: center;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .kinderfer:hover {
          transform: scale(1.05);
        }
        img {
          width: 100%;
          border-radius: 10px;
          margin-top: 10px;
        }
      </style>
      <div class="kinderfer">
        <p>${this.state.content}</p>
        <img src="${this.state.currentImage}" alt="random image" />
        <p><em>Temukan Keajaiban Baru!</em></p>
      </div>
    `;
  }
}
customElements.define("kin-der-fer", Kinderfer); // menggunakan "-"

// Ferdaily
class Ferdaily extends HTMLElement {
  constructor() {
    super();
    this.quotes = [
      "Hari baru, semangat baru! 🔥",
      "Fokus dan tetap produktif! 💪",
      "Lakukan yang terbaik setiap hari.",
      "Kesulitan adalah kesempatan untuk tumbuh.",
      "Percaya diri, kamu bisa!",
    ];
    this.state = {
      color: "#FF5733", // Awal warna oranye
    };
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', () => this.changeContent());
  }

  // Fungsi untuk pilih kutipan acak
  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }

  // Fungsi untuk mengubah warna dan kutipan
  changeContent() {
    const newQuote = this.getRandomQuote();
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Warna acak menggunakan HSL

    this.state.color = randomColor; // Ubah warna
    this.render(newQuote); // Ubah kutipan
  }

  // Render elemen dengan warna baru dan kutipan baru
  render(quote = "Klik untuk mendapatkan kutipan baru!") {
    this.innerHTML = `
      <style>
        .ferdaily {
          background-color: ${this.state.color};
          color: #FFF;
          border-radius: 20px;
          padding: 30px;
          font-family: 'Arial', sans-serif;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: all 0.5s ease;
        }
        .ferdaily:hover {
          transform: scale(1.1); /* Efek hover untuk bikin interaktif */
        }
      </style>
      <div class="ferdaily">
        <p>${quote}</p>
        <p><em>Klik untuk mendapatkan motivasi baru! 🌟</em></p>
      </div>
    `;
  }
}

customElements.define("fer-daily", Ferdaily); // menggunakan "-"



  