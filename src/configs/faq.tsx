'use client';
import { siteConfig } from '@/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

// Define a type for FAQ item
export interface FAQItem {
  title: string;
  content: JSX.Element;
}

// Define the faqData array with the FAQItem type
export const faqData: FAQItem[] = [
  {
    title: 'Who are you?',
    content: (
      <>
        Hai! 👋 Saya Teuku Rizal Adi Pangestu, pengembang Web Developers yang sangat menyukai coding. Saya membuat solusi inovatif menggunakan berbagai teknologi seperti Html, Css, Php, MySql, Next.js, Node.js, Python, TypeScript, dan GenAI. Saya juga mendalami berbagai Database apapun dan selalu ingin mempelajari alat dan teknik baru.
        <br className="mb-2" />
        For more about me, check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        !
      </>
    )
  },
  {
    title: 'What technologies do you use?',
    content: (
      <>
        Saya adalah pengembang Web Developers yang berfokus pada teknologi front-end dan back-end. Saya kebanyakan menggunakan alat seperti Html, Css, Php, Next.js, TypeScript, Node.js, Python (Django, Flask, FastAPI), MongoDB, dan SQL untuk proyek rutin saya. Saya juga mendalami Generative AI, Machine Learning, dan Data Science untuk membangun aplikasi Web Developers yang lebih cerdas dan berbasis data.
        <br className="mb-2" />
        Untuk detail lebih lanjut tentang tumpukan teknologi dan proyek saya, silakan periksa{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'Can we hire you?',
    content: (
      <>
        Ya, saat ini saya sedang mencari lowongan kerja! Jangan ragu untuk menghubungi saya melalui email atau Linkedin jika Anda tertarik untuk mempekerjakan saya atau berkolaborasi dalam proyek-proyek menarik.
        <br className="mb-2" />
        You can contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            {' '}
            Linkedin{' '}
            <Link
              href={`mailto:${siteConfig.social.linkedin}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.linkedin}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'How can I collaborate with you?',
    content: (
      <>
        Anda dapat menghubungi saya melalui email atau. Saya terbuka untuk berkolaborasi dalam proyek atau ide. Jangan ragu untuk menghubungi saya melalui:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            Discord:{' '}
            <Link
              href={siteConfig.social.discord}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Axeelyn's Server
            </Link>
          </li>
        </ul>
        <br className="mb-2" />
        Untuk detail lebih lanjut, Anda dapat memeriksa informasi kontak saya di{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'Do you work on open-source projects?',
    content: (
      <>
        Ya, saya berkontribusi pada proyek sumber terbuka! Anda dapat menjelajahi repositori dan kontribusi berkelanjutan saya di GitHub saya. Jangan ragu untuk berkontribusi atau melihat karya saya!
        <br className="mb-2" />
        Visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>{' '}
        for more.
      </>
    )
  },
  {
    title: 'What is your approach to new technologies?',
    content: (
      <>
        Saya selalu bersemangat mempelajari teknologi baru! Saya biasanya memulai dengan
        membangun proyek kecil untuk memahami dasar-dasarnya sebelum mendalaminya lebih dalam. Saya fokus pada penerapan alat yang meningkatkan alur kerja saya dan membantu saya
        membangun aplikasi yang lebih baik.
        <br className="mb-2" />
        Untuk informasi lebih lanjut tentang perjalanan teknologi saya, kunjungi{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'How can I support your work?',
    content: (
      <>
        Anda dapat mendukung saya dengan memberi bintang pada repositori saya, berkontribusi pada proyek sumber terbuka, atau sekadar mengikuti pekerjaan saya di GitHub. Berbagi umpan balik atau menyebarkan informasi juga membantu!
        <br className="mb-2" />
        Selain itu, Anda dapat mendukung saya secara langsung melalui:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            <Link
              href={siteConfig.social.kofi}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ko-fi
            </Link>{' '}
            – Belikan saya kopi dan dukung pekerjaan saya hahaha !
          </li>
          <li>
            <Link
              href={siteConfig.social.sponsor}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Sponsors
            </Link>{' '}
            – Sponsor me on GitHub to show your support!
          </li>
        </ul>
        <br className="mb-2" />
        Visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>{' '}
        to get started.
      </>
    )
  },
  {
    title: 'Do you offer freelance services?',
    content: (
      <>
        Yes, I am available for freelance work. Please contact me{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          via email
        </Link>{' '}
        or{' '}
        <Link
          href={siteConfig.social.discord}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Link>{' '}
        untuk mendiskusikan detail proyek Anda. Saya akan senang untuk menjajaki bagaimana kita dapat
        berkolaborasi!
        <br className="mb-2" />
        Anda dapat menghubungi saya melalui informasi kontak yang tersedia di{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title:
      "I tried to contact you but haven't received a response, what happened?",
    content: (
      <>
        Saya minta maaf jika saya melewatkan pesan Anda atau jika saya lambat merespons.
        Terkadang, pesan terlewat, atau saya mungkin sedang sibuk dengan tugas lain. Jika saya melewatkan pesan Anda secara tidak sengaja, jangan ragu untuk menghubungi saya lagi.
        <br className="mb-2" />
        Untuk mendapatkan respons yang lebih cepat, Anda juga dapat membuat pemberitahuan melalui{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}/${siteConfig.social.github}/discussions`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Discussion
        </Link>{' '}
        atau buka masalah di saya{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}/${siteConfig.social.github}/issues`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </Link>
        . Saya mencoba untuk mengikuti diskusi dan isu secara lebih aktif.
      </>
    )
  }
];
