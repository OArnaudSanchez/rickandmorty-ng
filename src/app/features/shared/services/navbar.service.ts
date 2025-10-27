import { Injectable } from "@angular/core";


export interface NavigationModel{
    title: string;
    path: string;
    activeClass: string;
    description?: string;
    icon?: string;
    isExactRoute?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class NavbarService{

    readonly navigationOptions: NavigationModel[] = [
        {
            title: 'Home',
            path: '/',
            activeClass: 'sm:dark:text-blue-500',
            isExactRoute: true
        },
        {
            title: 'Characters',
            path: '/characters',
            description: 'Browse the multiverse of Rick and Morty characters.',
            activeClass: 'sm:dark:text-blue-500',
            isExactRoute: false
        },
        {
            title: 'Locations',
            path: '/locations',
            description: 'Discover planets, cities, and dimensions.',
            activeClass: 'sm:dark:text-blue-500',
            isExactRoute: false
        },
        {
            title: 'Episodes',
            path: '/episodes',
            description: 'Explore all episodes and plot details.',
            activeClass: 'sm:dark:text-blue-500',
            isExactRoute: false
        }
    ];

}