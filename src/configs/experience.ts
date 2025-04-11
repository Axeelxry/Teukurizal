'use client';
import { siteConfig } from '@/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'I am Looking for Job Opportunities | Now',
    description:
      "Saat ini saya sedang mencari lowongan kerja di berbagai bidang. Mari terhubung dengan Linkedln saya!",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'Teuku Rizal Technologies | Feb. 2025 - Present',
    description:
      'Saya juga gemar membangun website, design, dan service perangkat keras atau lunak yang mengutamakan pengembang di Teuku Rizal Technologies untuk meningkatkan produktivitas dan skill saya.',
    startDate: 'Nov 2025',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.github_organisation
  },
  {
    title: 'Axeelyn 2026 | Oct. 2024 - Nov. 2026',
    description:
      'Saya suka berpartisipasi atau sebagai pengelola dan penulis konten dalam acara apapun yang saya ikuti. Berkontribusi pada proyek sumber terbuka dan menulis konten teknis maupun media sosial pada platform Tiktok, Youtube, instagram dan Hashnode.',
    startDate: 'Oct 2024',
    endDate: 'Nov 2026',
    isActive: false,
    
  },
  {
    title: 'CodSoft - Data Science Internship in school institutions | Sep. 2023 - Oct. 2023',
    description:
      'Magang pada Ilmu Data dengan kecepatan belajar mandiri, tempat saya memperoleh pengalaman praktis dalam aplikasi ilmu data menggunakan Python, sql, html, css, php, node.js, next.js, laravel. Saya juga berkontribusi pada proyek sumber terbuka dan mengelola repositori di GitHub saya sendiri.',
    startDate: 'Sep 2023',
    endDate: 'Oct 2023',
    companyUrl: siteConfig.other.codsoft
  },
  {
    title: 'my work experience | PT EDVAN MEDISOURCE - Jan. 2019 - 2020',
    description:
      'Pada project kerja saya di PT EDVAN MEDISOURCE mendapat bagian dalam pembuatan Masker H1 and H2 dari proses pembuatan masker sampai pemasangan tali masker',
    startDate: 'Jan 2019',
    endDate: 'Feb 2020',
    
  },
  {
    title: 'my work experience  | PT ACE ENGINEERING CONSTRUCTION INDONESIA - Feb. 2020 - 2021',
    description:
      'Project kerja saya pada PT ACE ENGINEERING CONSTRUCTION INDONESIA adalah menuliskan hasil data barang Input atau Output lalu pencatatan data perhari/minggu/bulan untuk pembelanjaan dan pelaporan stock barang ke Logistic.',
    startDate: 'Feb 2020',
    endDate: 'Mar 2021',
    isActive: true,
    companyUrl: siteConfig.baseUrl + '/blog'
  },
  {
    title: 'Course One Class Toefl | Bahasa Inggris - Jun. 2024 - Jul. 2025',
    description:
      'Pengalaman belajar kursus bahasa Inggris dengan metode pembelajaran yang mudah dipahami dan efektif.',
    startDate: 'Jun 2024',
    endDate: 'Jul 2025',
    isActive: true,
    companyUrl: siteConfig.social.github
  }
];
