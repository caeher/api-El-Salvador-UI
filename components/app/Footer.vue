<script setup lang="ts">
import { IList } from '~~/ts/interfaces/IList';
const lists: IList[] = [
    {
        name: 'Branding',
        items: [
            {
                name: 'About us',
                key: 'about-us'
            },
            {
                name: 'Contact',
                key: 'contact'
            }
        ]
    },
    {
        name: 'Services',
        items: [
            {
                name: 'Illustration',
                key: 'illustration'
            },
            {
                name: 'Web Designing',
                key: 'web-designing'
            }, 
            {
                name: 'Mobile Design',
                key: 'mobile-design'
            },
            {
                name: 'Development',
                key: 'development'
            },
            {
                name: 'SEO',
                key: 'seo'
            }
        ]
    },
    {
        name: 'Follow',
        items: [
            {
                name: 'Facebook',
                key: 'facebook'
            },
            {
                name: 'Instagram',
                key: 'instagram'
            },
            {
                name: 'Twitter',
                key: 'twitter'
            },
            {
                name: 'LinkedIn',
                key: 'LinkedId'
            }
        ]
    }
]
</script>

<template>
    <footer class="py-16 px-3 sm:px-5 md:px-6 lg:px-24 xl:px-32 bg-white dark:bg-slate-900">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
            <template
                v-for="list in lists">
                <AppVerticalList 
                    :list="list"/>
            </template>
        </div>
    </footer>
</template>