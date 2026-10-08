import { SuratTugasDocument, SchoolProfile, Employee } from "../types";

export const getInitialSuratTugas = (
  schoolProfile: SchoolProfile,
  employees: Employee[]
): SuratTugasDocument[] => {
  const emp1 = employees.find((e) => e.nama.includes("Rahmawati")) || employees[1] || employees[0];
  const emp2 = employees.find((e) => e.nama.includes("Permana")) || employees[7] || employees[0];
  const emp3 = employees.find((e) => e.nama.includes("Sartika")) || employees[3] || employees[0];
  const emp4 = employees.find((e) => e.nama.includes("Sri Wahyuni")) || employees[5] || employees[0];
  const emp5 = employees.find((e) => e.nama.includes("Budi Santoso")) || employees[4] || employees[0];

  return [
    {
      id: "st-2025-001",
      nomor: "800 / 012 / SD.1 / DISDIKBUD / 2025",
      judul: "Surat Tugas Mengikuti Bimbingan Teknis Implementasi Kurikulum Merdeka dan AI dalam Pembelajaran",
      dasarHukum: [
        "Surat Kepala Dinas Pendidikan dan Kebudayaan Kota Pendidikan Nomor 421/1045/Disdikbud/2025 perihal Pemanggilan Peserta Bimtek Kurikulum Merdeka dan AI Pendidikan.",
        `Program Kerja dan Rencana Kegiatan Anggaran Sekolah (RKAS) ${schoolProfile.nama || "SD Negeri 1 Merdeka Belajar"} Tahun Anggaran 2025.`,
      ],
      pegawaiDitugaskan: [
        {
          id: emp1?.id || "p-1",
          nama: emp1?.nama || "Siti Rahmawati, S.Pd.",
          nip: emp1?.nip || "19850314 200902 2 003",
          pangkatGolongan: emp1?.pangkat && emp1?.golongan ? `${emp1.pangkat}, ${emp1.golongan}` : "Penata Muda Tk. I, III/b",
          jabatan: emp1?.jabatan || "Guru Kelas I",
          unitKerja: schoolProfile.nama || "SD Negeri 1 Merdeka Belajar",
        },
        {
          id: emp2?.id || "p-2",
          nama: emp2?.nama || "Rian Permana, S.Pd.",
          nip: emp2?.nip || "19951102 202321 1 005",
          pangkatGolongan: emp2?.pangkat && emp2?.golongan ? `${emp2.pangkat}, ${emp2.golongan}` : "Ahli Pertama, IX (PPPK)",
          jabatan: emp2?.jabatan || "Guru PJOK",
          unitKerja: schoolProfile.nama || "SD Negeri 1 Merdeka Belajar",
        },
      ],
      untukKeperluan: "Mengikuti kegiatan Bimbingan Teknis Implementasi Kurikulum Merdeka (IKM) dan Pemanfaatan Artificial Intelligence (AI) untuk Efisiensi Pembelajaran Tingkat Sekolah Dasar se-Kota Pendidikan.",
      hariTanggal: "Senin s/d Rabu, 20 - 22 Oktober 2025",
      waktu: "08.00 WIB s/d 15.30 WIB",
      tempat: "Aula Pertemuan Graha Widya Dinas Pendidikan dan Kebudayaan Kota Pendidikan",
      bebanBiaya: `Biaya transport dan akomodasi dibebankan pada DPA-BOSP ${schoolProfile.nama || "SD Negeri 1 Merdeka Belajar"} Tahun Anggaran 2025.`,
      keteranganLain: "Setelah melaksanakan tugas, wajib menyampaikan laporan hasil kegiatan dan mendiseminasikannya dalam forum Kelompok Kerja Guru (KKG) Satuan Pendidikan.",
      tempatTetap: schoolProfile.desa || "Kota Pendidikan",
      tanggalTetap: "17 Oktober 2025",
      kepalaSekolah: {
        nama: schoolProfile.kepalaSekolah.nama,
        nip: schoolProfile.kepalaSekolah.nip,
        pangkat: schoolProfile.kepalaSekolah.pangkat,
        golongan: schoolProfile.kepalaSekolah.golongan,
        jabatan: schoolProfile.kepalaSekolah.jabatan,
      },
      status: "selesai",
      createdAt: "2025-10-17T08:00:00.000Z",
      updatedAt: "2025-10-17T08:30:00.000Z",
    },
    {
      id: "st-2025-002",
      nomor: "800 / 018 / SD.1 / DISDIKBUD / 2025",
      judul: "Surat Tugas Pembimbingan dan Pendampingan Siswa dalam Lomba Seni FLS2N Tingkat Kota",
      dasarHukum: [
        "Petunjuk Teknis Festival dan Lomba Seni Siswa Nasional (FLS2N) Jenjang SD Tingkat Kota Pendidikan Tahun 2025.",
        "Hasil Rapat Koordinasi Kelompok Kerja Kepala Sekolah (K3S) Kota Pendidikan tanggal 10 Oktober 2025.",
      ],
      pegawaiDitugaskan: [
        {
          id: emp3?.id || "p-3",
          nama: emp3?.nama || "Dewi Sartika, S.Pd., Gr.",
          nip: emp3?.nip || "19940718 202012 2 015",
          pangkatGolongan: emp3?.pangkat && emp3?.golongan ? `${emp3.pangkat}, ${emp3.golongan}` : "Penata, III/c",
          jabatan: emp3?.jabatan || "Guru Kelas III",
          unitKerja: schoolProfile.nama || "SD Negeri 1 Merdeka Belajar",
        },
      ],
      untukKeperluan: "Melaksanakan tugas sebagai Pembimbing dan Pendamping Siswa Perwakilan Satuan Pendidikan dalam Festival Lomba Seni Siswa Nasional (FLS2N) Cabang Menyanyi Solo dan Tari Kreasi Tingkat Kota.",
      hariTanggal: "Kamis, 24 Oktober 2025",
      waktu: "07.30 WIB s/d Selesai",
      tempat: "Gedung Kesenian Cakrawala Kota Pendidikan",
      bebanBiaya: `Dibebankan pada Anggaran Ekstrakurikuler dan Kesiswaan BOSP ${schoolProfile.nama || "SD Negeri 1 Merdeka Belajar"}.`,
      keteranganLain: "Menjaga keselamatan, sportivitas, dan nama baik satuan pendidikan selama kegiatan berlangsung.",
      tempatTetap: schoolProfile.desa || "Kota Pendidikan",
      tanggalTetap: "22 Oktober 2025",
      kepalaSekolah: {
        nama: schoolProfile.kepalaSekolah.nama,
        nip: schoolProfile.kepalaSekolah.nip,
        pangkat: schoolProfile.kepalaSekolah.pangkat,
        golongan: schoolProfile.kepalaSekolah.golongan,
        jabatan: schoolProfile.kepalaSekolah.jabatan,
      },
      status: "selesai",
      createdAt: "2025-10-22T08:00:00.000Z",
      updatedAt: "2025-10-22T08:15:00.000Z",
    },
    {
      id: "st-2025-003",
      nomor: "800 / 025 / SD.1 / DISDIKBUD / 2025",
      judul: "Surat Tugas Pengawas Ruang Asesmen Nasional Berbasis Komputer (ANBK) Silang Antar Sekolah",
      dasarHukum: [
        "Peraturan Kepala Badan Standar, Kurikulum, dan Asesmen Pendidikan Kemendikbudristek tentang POS Pelaksanaan Asesmen Nasional.",
        "Surat Edaran Dinas Pendidikan dan Kebudayaan Kota Pendidikan perihal Penetapan Pengawas Silang ANBK Jenjang Sekolah Dasar Tahun 2025.",
      ],
      pegawaiDitugaskan: [
        {
          id: emp4?.id || "p-4",
          nama: emp4?.nama || "Sri Wahyuni, S.Pd., M.Pd.",
          nip: emp4?.nip || "19800620 200501 2 008",
          pangkatGolongan: emp4?.pangkat && emp4?.golongan ? `${emp4.pangkat}, ${emp4.golongan}` : "Pembina, IV/a",
          jabatan: emp4?.jabatan || "Guru Kelas V",
          unitKerja: schoolProfile.nama || "SD Negeri 1 Merdeka Belajar",
        },
        {
          id: emp5?.id || "p-5",
          nama: emp5?.nama || "Budi Santoso, S.Pd.",
          nip: emp5?.nip || "19820510 200604 1 012",
          pangkatGolongan: emp5?.pangkat && emp5?.golongan ? `${emp5.pangkat}, ${emp5.golongan}` : "Penata Tk. I, III/d",
          jabatan: emp5?.jabatan || "Guru Kelas IV",
          unitKerja: schoolProfile.nama || "SD Negeri 1 Merdeka Belajar",
        },
      ],
      untukKeperluan: "Melaksanakan tugas sebagai Pengawas Ruang Asesmen Nasional Berbasis Komputer (ANBK) Gelombang II secara Silang Antar Satuan Pendidikan di SD Negeri 2 Merdeka.",
      hariTanggal: "Senin s/d Selasa, 27 - 28 Oktober 2025",
      waktu: "07.30 WIB s/d 13.00 WIB",
      tempat: "Laboratorium Komputer SD Negeri 2 Merdeka",
      bebanBiaya: "Sesuai petunjuk teknis pelaksanaan ANBK tahun anggaran berjalan.",
      keteranganLain: "Hadir 30 menit sebelum sesi asesmen dimulai dan mematuhi seluruh tata tertib pengawas ANBK.",
      tempatTetap: schoolProfile.desa || "Kota Pendidikan",
      tanggalTetap: "25 Oktober 2025",
      kepalaSekolah: {
        nama: schoolProfile.kepalaSekolah.nama,
        nip: schoolProfile.kepalaSekolah.nip,
        pangkat: schoolProfile.kepalaSekolah.pangkat,
        golongan: schoolProfile.kepalaSekolah.golongan,
        jabatan: schoolProfile.kepalaSekolah.jabatan,
      },
      status: "selesai",
      createdAt: "2025-10-25T09:00:00.000Z",
      updatedAt: "2025-10-25T09:00:00.000Z",
    },
  ];
};
