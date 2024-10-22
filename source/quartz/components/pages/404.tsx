import { i18n } from "../../i18n";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types";

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
  url.pathname += 'AZ-Halacha'; // Directly append to the pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={url.href}>{i18n(cfg.locale).pages.error.home}</a> 
    </article>
  );
};

export default (() => NotFound) satisfies QuartzComponentConstructor;
