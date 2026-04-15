import { useEffect } from 'react';

interface SeoMeta {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
}

export const useSeo = (meta: SeoMeta): void => {
  useEffect(() => {
    // Update title
    if (meta.title) {
      document.title = `${meta.title} | Boma Mabati Factory`;
    }

    // Update meta tags
    const updateMeta = (name: string, content: string): void => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateProperty = (property: string, content: string): void => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (meta.description) {
      updateMeta('description', meta.description);
    }

    if (meta.keywords) {
      updateMeta('keywords', meta.keywords);
    }

    if (meta.robots) {
      updateMeta('robots', meta.robots);
    }

    // Open Graph tags
    if (meta.ogTitle) {
      updateProperty('og:title', meta.ogTitle);
    }
    if (meta.ogDescription) {
      updateProperty('og:description', meta.ogDescription);
    }
    if (meta.ogImage) {
      updateProperty('og:image', meta.ogImage);
    }
    if (meta.ogType) {
      updateProperty('og:type', meta.ogType);
    }

    // Twitter tags
    if (meta.twitterCard) {
      updateMeta('twitter:card', meta.twitterCard);
    }
    if (meta.twitterTitle) {
      updateMeta('twitter:title', meta.twitterTitle);
    }
    if (meta.twitterDescription) {
      updateMeta('twitter:description', meta.twitterDescription);
    }
    if (meta.twitterImage) {
      updateMeta('twitter:image', meta.twitterImage);
    }

    // Canonical link
    if (meta.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', meta.canonical);
    }
  }, [meta]);
};

export const generateSchemaMarkup = (data: Record<string, unknown>): string => {
  return JSON.stringify(data);
};
