import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


// interface FavoriteChangedEventArgs{
//   newValue: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(newValue: FavoriteChangedEventArgs) {
    console.log("Favorite changed ", FavoriteChangedEventArgs);
  }

}
