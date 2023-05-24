import { Component } from '@angular/core';
@Component({
  selector: 'bs-home',
  template: `
<div class="ui container">
<h1>Home</h1>
    <p>Willkommen im KWM Padlet!</p>
    <p>Hier können Padlets und dazugehörige Einträge erstellt, bearbeitet und gelöscht werden.</p>
<a routerLink="../padlets" class="ui tiny button bluebutton">
Zur Padletübersicht</a>
</div>
`,
  styles: []
})
export class HomeComponent { }
