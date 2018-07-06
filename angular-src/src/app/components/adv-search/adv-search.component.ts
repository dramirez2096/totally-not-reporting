import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CategorySelection } from '../../interfaces/category-selection';
import { IDynamicRequest } from '../../interfaces/dynamic-request';
@Component({
    selector: 'app-adv-search',
    templateUrl: './adv-search.component.html',
    styleUrls: [ './adv-search.component.scss' ]
})

export class AdvSearchComponent implements OnInit {
    @ViewChild('searchForm') private _searchForm: NgForm;

    public searchCategory: CategorySelection[] = [{
        name: 'Budget',
        ref: 'budget',
        type: 'number'
    }, {
        name: 'Original Title',
        ref: 'original_title',
        type: 'text'
    }, {
        name: 'Overview',
        ref: 'overview',
        type: 'text'
    }, {
        name: 'Popularity',
        ref: 'original_title',
        type: 'number'
    }, {
        name: 'Release Year',
        ref: 'release_date',
        type: 'number'
    }, {
        name: 'Revenue',
        ref: 'revenue',
        type: 'number'
    }, {
        name: 'Run Time',
        ref: 'run_time',
        type: 'number'
    }, {
        name: 'Tag Line',
        ref: 'tag_line',
        type: 'text'
    }, {
        name: 'Title',
        ref: 'title',
        type: 'text'
    }, {
        name: 'Vote Average',
        ref: 'vote_average',
        type: 'number'
    }, {
        name: 'Vote Count',
        ref: 'vote_count',
        type: 'number'
    }];
    fullFormGroup: FormGroup;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    droppedItems = [];

    public selectedCategory: CategorySelection;
    public categoryValueNum: number;
    public requestedColumns: IDynamicRequest = {
        adult: false,
        budget: false,
        movie_id: false,
        original_title: false,
        overview: false,
        popularity: false,
        release_date: false,
        revenue: false,
        runtime: false,
        tagline: false,
        title: false,
        vote_average: false,
        vote_count: false
    };

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
      this.fullFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
    }


    public submit(value) {
        this.droppedItems.forEach(item => {
          this.requestedColumns[item.ref] = true;
        });
        console.log('submitting...', value, this.requestedColumns);
        if (value.returnType === 'table') {
            this.tableSearch(value);
        } else if (value.returnType === 'cards') {
            this.cardSearch(value);
        }
      }

    onItemDrop(e: any) {
      this.droppedItems.push(e.dragData);
      console.log(this.droppedItems);
    }


    reset(value) {
      this.removeItem(value, this.droppedItems);
    }

    removeItem(item: any, list: Array<any>) {
      const index = list.map(function (e) {
        return e.name;
      }).indexOf(item.name);
      list.splice(index, 1);
    }

    public tableSearch(value) {

    }

    public cardSearch(value) {

    }
}
