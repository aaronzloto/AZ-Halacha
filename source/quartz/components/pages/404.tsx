import { i18n } from "../../i18n"
<<<<<<< HEAD
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
<<<<<<< HEAD
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
  url.pathname += 'AZ-Halacha'; // Directly append to the pathname
=======
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname
  baseDir += '/AZ-Halacha'
>>>>>>> parent of bc61fd7 (Update 404.tsx)

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
=======

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"



const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {

  // If baseUrl contains a pathname after the domain, use this as the home link

  const url = new URL(`https://aaronzloto.github.io/AZ-Halacha ?? "example.com"}`)

  const baseDir = url.pathname 





  return (

    <article class="popover-hint">

      <h1>404</h1>

      <p>{i18n(cfg.locale).pages.error.notFound}</p>

      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>

    </article>

  )

}

>>>>>>> 5f598c9457533c0442fa0c0e420ab9b779f04c10
