import { writeFileSync } from 'node:fs';

// Match the public analytics settings already used by the root layout.
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const analytics = [];
if (gaId && /^G-[A-Z0-9]+$/.test(gaId)) {
  analytics.push(`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});var ga=document.createElement('script');ga.async=true;ga.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(${JSON.stringify(gaId)});document.head.appendChild(ga);`);
}
if (gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId)) {
  analytics.push(`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var gtm=document.createElement('script');gtm.async=true;gtm.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(${JSON.stringify(gtmId)});document.head.appendChild(gtm);`);
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/corporate',
        destination: '/lp',
        permanent: false,
      },
    ];
  },
};

export default (phase) => {
  if (phase === 'phase-production-build' || phase === 'phase-development-server') {
    writeFileSync(new URL('./public/naritai-lp/analytics.js', import.meta.url), analytics.join('\n') || '// Analytics is not configured.\n');
  }
  return nextConfig;
};
