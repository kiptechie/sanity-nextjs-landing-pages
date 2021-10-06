export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615d58762ec38ea66b12d7a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6qaz4tzr',
                  apiId: 'bf9da4bf-9b7a-45f7-81a6-9d8010794934'
                },
                {
                  buildHookId: '615d58778e3dc5aee1a18e65',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iiyfiurf',
                  apiId: '6332c29f-fb01-4b10-a4bc-cb391dabb0c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kiptechie/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iiyfiurf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
