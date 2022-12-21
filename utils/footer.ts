import IList from "~~/ts/interfaces/IList"

export const footerList:IList[] = [
    {
        name: 'Branding',
        items: [
            {
                name: 'About',
                url: '/about',
                external: false,
                key: 'about',
                icon: undefined
            }
        ]
    },
    {
        name: 'Sources',
        items: [
            {
                name: 'API source code',
                url: '',
                external: true,
                key: 'api-source-code',
                icon: 'github'
            },
            {
                name: 'UI source code', 
                url: '',
                external: true,
                key: 'ui-source-code',
                icon: 'github'
            }
        ]
    }
]