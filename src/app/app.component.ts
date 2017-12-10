import { Component } from '@angular/core';

// this @component is decorating a class that we are exporting
// export class AppComponent
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'gallery';
    subtitle = 'Latest photographs';
}
