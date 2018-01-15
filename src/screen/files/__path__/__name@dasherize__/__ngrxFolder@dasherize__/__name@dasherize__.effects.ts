import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import { Database } from '@ngrx/db';
import { Load<%= classify(name) %>State, Load<%= classify(name) %>StateSuccess, Load<%= classify(name) %>StateFail, <%= classify(name) %>ActionTypes } from './<%=dasherize(name)%>.actions';
import { I<%= classify(name) %> } from '../../../interfaces/interfaces';

@Injectable()
export class <%= classify(name) %>Effects {

  @Effect()
  load<%= classify(name) %>State$: Observable<Action> = this.actions$
    .ofType(<%= classify(name) %>ActionTypes.Load<%= classify(name) %>State)
    .startWith(new Load<%= classify(name) %>State())
    .switchMap(() =>
    // You can pull from offline state here or get data from a server via an api
    // An example of inserting data into offline state can be found in login.effects.ts
      this.db.query('<%=dasherize(name)%>')
        .map((state: I<%= classify(name) %>) => new Load<%= classify(name) %>StateSuccess(state))
        .catch(error => Observable.of(new Load<%= classify(name) %>StateFail(error)))
    );

  constructor(
    private actions$: Actions,
    private db: Database
  ) { }
}