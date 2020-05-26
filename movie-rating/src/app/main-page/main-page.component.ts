import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MovieService} from '../services/movie.service';
import {IgxCarouselComponent, IgxListComponent, IListItemClickEventArgs, ISlideEventArgs} from "igniteui-angular";
import {Movie} from "../models/Movie";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(router: RouterModule, private service: MovieService) { }
  @ViewChild(IgxCarouselComponent, { static: true })
  public carousel: IgxCarouselComponent;

  @ViewChild(IgxListComponent, {static: true})
  public list: IgxListComponent;
  currentIndex;
  slides;

  ngOnInit() {
    this.getSlides();

    this.slides.onItemClicked.subscribe((args: IListItemClickEventArgs) => {
      this.currentIndex = args.item.index;
      this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.onSlideChanged.subscribe((args: ISlideEventArgs) => {
      this.currentIndex = args.slide.index;
    });
  }

  getSlides() {
    this.slides = this.service.getSortedMovies().slice(0, 5);
  }

  public slideStyle(image: string) {
    return  {
      background: `url(${image})`,
      backgroundSize: 'cover'
    };
  }

}
