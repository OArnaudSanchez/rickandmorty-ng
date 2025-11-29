import { Injectable } from "@angular/core";
import { NavigationModel } from "../models/navigation.model";

@Injectable({
    providedIn: 'root'
})
export class NavbarService{

    private readonly activeClass = 'sm:dark:text-blue-500';
    readonly navigationOptions: NavigationModel[] = [
        {
            title: 'Home',
            path: '/',
            activeClass: this.activeClass,
            isExactRoute: true
        },
        {
            title: 'Characters',
            path: '/characters',
            description: 'Browse the multiverse of Rick and Morty characters.',
            activeClass: '',
            isExactRoute: false
        },
        {
            title: 'Locations',
            path: '/locations',
            description: 'Discover planets, cities, and dimensions.',
            activeClass: this.activeClass,
            isExactRoute: false
        },
        {
            title: 'Episodes',
            path: '/episodes',
            description: 'Explore all episodes and plot details.',
            activeClass: this.activeClass,
            isExactRoute: false
        }
    ];

}