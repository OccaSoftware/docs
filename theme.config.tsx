import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>OccaSoftware</span>,
  project: {
    link: 'https://github.com/occasoftware',
  },
  chat: {
    link: 'https://www.occasoftware.com/discord',
  },
  docsRepositoryBase: 'https://github.com/occasoftware/docs',
  footer: {
    text: '© 2023 OccaSoftware',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – OccaSoftware'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.occasoftware.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'OccaSoftware'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Everything you need to build your game'}
        />
        <link rel="icon" href="img/favicon.ico" type="image/ico" />
      </>
    )
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: false,
  },
}

export default config
