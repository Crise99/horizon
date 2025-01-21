export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Nuria&Cristian",
  // Your website's title and description (meta fields)
  title:
    "Bienvenidos a la boda de Nuria y Cristian",
  description:
    "En esta web podrás encontrar toda la informacion necesaria para el dia de nuestra boda",
  useViewTransitions: true,
  // Your information!
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Cosmic Themes logo",
  },
};

export default siteData;
