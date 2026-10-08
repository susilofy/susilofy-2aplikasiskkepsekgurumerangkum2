// Official default Kop Surat - Standar Resmi Tata Naskah Dinas Pendidikan
// SD Negeri 1 Merdeka Belajar (Contoh Resmi Satuan Pendidikan)

const svgKop = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 215" width="1000" height="215">
  <rect width="1000" height="215" fill="#ffffff"/>
  
  <!-- Left Logo: Tut Wuri Handayani / Pendidikan Kemendikbud -->
  <g transform="translate(30, 15) scale(0.95)">
    <polygon points="50,5 92,35 76,85 24,85 8,35" fill="#0b4d8c" stroke="#f59e0b" stroke-width="3"/>
    <path d="M 22,48 Q 36,36 50,48 Q 64,36 78,48 Q 50,75 22,48 Z" fill="#ffffff" opacity="0.95"/>
    <path d="M 28,52 Q 40,44 50,52 Q 60,44 72,52 Q 50,72 28,52 Z" fill="#f59e0b"/>
    <path d="M 50,22 C 54,30 56,36 50,44 C 44,36 46,30 50,22 Z" fill="#dc2626"/>
    <circle cx="50" cy="34" r="3.5" fill="#fef08a"/>
    <path d="M 32,70 Q 50,65 50,73 Q 50,65 68,70 L 68,77 Q 50,72 50,80 Q 50,72 32,77 Z" fill="#ffffff"/>
    <path d="M 33,71 L 33,76 Q 50,71 50,78 Q 50,71 67,76 L 67,71 Q 50,67 50,74 Q 50,67 33,71 Z" fill="#f59e0b"/>
    <text x="50" y="102" font-family="Arial, Helvetica, sans-serif" font-size="8.5" font-weight="bold" fill="#0b4d8c" text-anchor="middle">TUT WURI HANDAYANI</text>
  </g>

  <!-- Right Logo: Lambang Pendidikan Nasional / Daerah -->
  <g transform="translate(875, 15) scale(0.95)">
    <polygon points="50,5 92,35 76,85 24,85 8,35" fill="#047857" stroke="#f59e0b" stroke-width="3"/>
    <circle cx="50" cy="46" r="26" fill="#ffffff" opacity="0.95"/>
    <polygon points="50,25 54,37 67,37 57,45 61,57 50,49 39,57 43,45 33,37 46,37" fill="#f59e0b" stroke="#b45309" stroke-width="0.8"/>
    <path d="M 32,60 Q 50,55 50,62 Q 50,55 68,60 L 68,66 Q 50,62 50,68 Q 50,62 32,66 Z" fill="#0b4d8c"/>
    <rect x="20" y="80" width="60" height="12" rx="3" fill="#1e293b"/>
    <text x="50" y="89" font-family="Arial, Helvetica, sans-serif" font-size="7.5" font-weight="bold" fill="#f8fafc" text-anchor="middle">KOTA PENDIDIKAN</text>
    <text x="50" y="103" font-family="Arial, Helvetica, sans-serif" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">DINAS DIKBUD</text>
  </g>

  <!-- Typography: Header Kop Dinas Pendidikan Resmi -->
  <g font-family="'Times New Roman', Times, serif" text-anchor="middle">
    <!-- Baris 1: PEMERINTAH KOTA PENDIDIKAN -->
    <text x="500" y="42" font-size="23" font-weight="bold" fill="#000000" letter-spacing="1.5">
      PEMERINTAH KOTA PENDIDIKAN
    </text>

    <!-- Baris 2: DINAS PENDIDIKAN DAN KEBUDAYAAN -->
    <text x="500" y="72" font-size="22" font-weight="bold" fill="#000000" letter-spacing="0.8">
      DINAS PENDIDIKAN DAN KEBUDAYAAN
    </text>

    <!-- Baris 3: SATUAN PENDIDIKAN FORMAL SD NEGERI 1 MERDEKA BELAJAR -->
    <text x="500" y="108" font-size="26" font-weight="900" fill="#000000" letter-spacing="1.1">
      SATUAN PENDIDIKAN FORMAL SD NEGERI 1 MERDEKA BELAJAR
    </text>

    <!-- Baris 4: Alamat Lengkap Satuan Pendidikan -->
    <text x="500" y="137" font-family="Arial, Helvetica, sans-serif" font-size="14.5" font-style="italic" fill="#1e293b">
      Jalan Merdeka Raya No. 45, Kel. Sukamaju, Kec. Cempaka, Kota Pendidikan (10520)
    </text>

    <!-- Baris 5: Kontak & Identitas Digital -->
    <text x="500" y="160" font-family="Arial, Helvetica, sans-serif" font-size="13.5" fill="#334155">
      Email: sdn1merdekabelajar@sch.id | Telp: (021) 555-0123 | NPSN: 20104567
    </text>
  </g>

  <!-- Double Border Line (Garis Ganda Tebal-Tipis Kop Resmi Dinas) -->
  <line x1="30" y1="186" x2="970" y2="186" stroke="#000000" stroke-width="4.5" stroke-linecap="square"/>
  <line x1="30" y1="194" x2="970" y2="194" stroke="#000000" stroke-width="1.5" stroke-linecap="square"/>
</svg>`;

export const defaultKopSuratSDN1MerdekaBelajar = `data:image/svg+xml;utf8,${encodeURIComponent(svgKop)}`;

// Alias untuk menjaga backward compatibility dengan file import lama
export const defaultKopSuratSDN3LoloanTimur = defaultKopSuratSDN1MerdekaBelajar;
