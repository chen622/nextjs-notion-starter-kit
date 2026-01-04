import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c04740c7863b40f0b183b6b62818fbfa',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '晨茗的闪念胶囊',
  domain: 'notion.ccm.ink',
  author: 'Chenming C',

  // open graph metadata (optional)
  description: '这里是 Chenming C 的个人博客 「闪念胶囊」，用于记录他脑子中保存不住的知识。',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'chen622',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/interview': 'Interview-4a5685991d47471bb09701bd9f0e1cb2',
    '/awesome-tools': 'Awesome-Tools-3a43edca524f48f28fc21ed667392445'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: "Home 🏠",
      pageId: 'c04740c7863b40f0b183b6b62818fbfa'
    },
    // {
    //   title: "Interview 🎙️",
    //   pageId: 'Interview-4a5685991d47471bb09701bd9f0e1cb2'
    // },
    {
      title: 'Tools 🔧',
      pageId: 'Awesome-Tools-3a43edca524f48f28fc21ed667392445'
    }
  ]
})
