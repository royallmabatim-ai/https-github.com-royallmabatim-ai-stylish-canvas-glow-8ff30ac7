import { env } from '@/config/env';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const initializeAnalytics = (): void => {
  if (!env.ENABLE_ANALYTICS) {
    console.debug('Analytics disabled');
    return;
  }

  // Load Google Analytics
  if (env.GA_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${env.GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]): void {
      (window.dataLayer as unknown[]).push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', env.GA_ID, {
      page_path: window.location.pathname,
    });
  }

  // Load Google Tag Manager
  if (env.GTM_ID) {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${env.GTM_ID}');
    `;
    document.head.appendChild(script);
  }
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  if (!env.ENABLE_ANALYTICS || !window.gtag) {
    console.debug('Analytics event:', { category, action, label, value });
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackPageView = (path: string, title?: string): void => {
  if (!env.ENABLE_ANALYTICS || !window.gtag) {
    console.debug('Analytics page view:', { path, title });
    return;
  }

  window.gtag('config', env.GA_ID || '', {
    page_path: path,
    page_title: title,
  });
};

export const trackConversion = (
  conversionId: string,
  conversionLabel: string,
  value?: number
): void => {
  if (!env.ENABLE_ANALYTICS || !window.gtag) {
    console.debug('Analytics conversion:', { conversionId, conversionLabel, value });
    return;
  }

  window.gtag('event', 'conversion', {
    allow_custom_scripts: true,
    send_to: `${conversionId}/${conversionLabel}`,
    value: value,
    currency: 'KES',
  });
};

// Track quote form submission
export const trackQuoteSubmission = (productType: string, location: string): void => {
  trackEvent('quote', 'submit', `${productType} - ${location}`);
};

// Track product view
export const trackProductView = (productName: string, productPrice?: number): void => {
  trackEvent('product', 'view', productName, productPrice);
};

// Track cart action
export const trackAddToCart = (productName: string, quantity: number): void => {
  trackEvent('cart', 'add', productName, quantity);
};

// Track checkout
export const trackCheckout = (totalAmount: number): void => {
  trackEvent('checkout', 'start', '', totalAmount);
};

// Track purchase
export const trackPurchase = (orderId: string, totalAmount: number): void => {
  trackEvent('purchase', 'complete', orderId, totalAmount);
};
