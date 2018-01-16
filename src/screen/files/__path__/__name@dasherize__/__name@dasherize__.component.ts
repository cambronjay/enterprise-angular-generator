import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Animations
import { slideInDownAnimation } from '../../app/app.animations';
// Common
import { AngularMaterialService, ErrorParseService, I<%= classify(name) %> } from '../../common';
// State
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as from<%= classify(name) %> from './state/<%=dasherize(name)%>.selectors';
import * as <%= classify(name) %>Action from './state/<%=dasherize(name)%>.actions';
import * as lgeApp from '../../app/state/app.actions';

@Component({
    selector: '<%=dasherize(name)%>-screen',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.scss'],
    animations: [slideInDownAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>ScreenComponent implements OnInit, OnDestroy {
    @Input() private pending$: Observable<boolean>;
    private pendingSubscription: Subscription;
    private pending: boolean;
    @Input() private error$: Observable<string | null>;
    private errorSubscription: Subscription;
    private error: string | null;
    @Input() private stateData$: Observable<I<%= classify(name) %> | null>;
    private stateDataSubscription: Subscription;
    private stateData: I<%= classify(name) %> | null;

    constructor(
        private store: Store<from<%= classify(name) %>.State>, 
        private ref: ChangeDetectorRef,
        private fb: FormBuilder, 
        private ams: AngularMaterialService,
        private errorParse: ErrorParseService
    ) {
        this.selectState();
        this.createForms();
    }


    ngOnInit() {
        this.startSubscriptions();
    }

    // Select state
    private selectState(): void {
            this.pending$ = this.store.select(from<%= classify(name) %>.get<%= classify(name) %>ScreenPending);
            this.stateData$ = this.store.select(from<%= classify(name) %>.get<%= classify(name) %>State);
            this.error$ = this.store.select(from<%= classify(name) %>.get<%= classify(name) %>ScreenError).skipWhile(error => error === undefined || error === null || error === '');
    }

    private displayLoader(pending: boolean): void {
        if (pending) {
          this.ams.showLoader("Loading");
        } else {
          this.ams.closeDialog().then(() => {
            if (this.error !== null && this.error !== undefined && this.error !== '') {
              this.displayError(this.error);
            }
          });
        }
      }
    
      private displayError(error: any): void {
        let errorMessage;
        if (this.errorParse.foundKeyWord(error, "CORPCOMMONWS")) {
          errorMessage = this.errorParse.translateCCError(error);
        } else {
          errorMessage = error instanceof Object ? error.message : error;
        }
        this.ams.showAlert("Loading Error", errorMessage);
        this.ams.alert.afterClosed().subscribe(result => {
          this.store.dispatch(new <%= classify(name) %>Action.<%= classify(name) %>ScreenErrorReset());
        });
      }
        
    // Create reactive forms
    private createForms(): void {

    }
    // Opens sidenav if on mobile
    private openSidenav(): void {
        this.store.dispatch(new lgeApp.OpenSidenav());
    }
    // Subscribe to state data and mark it for changes
    private startSubscriptions(): void {
        this.pendingSubscription = this.pending$
        .subscribe(data => {
            this.pending = data;
            this.displayLoader(this.pending);
            this.ref.markForCheck();
        });
        this.errorSubscription = this.error$
        .subscribe(data => {
            this.error = data;
            this.ref.markForCheck();
        });
        this.stateDataSubscription = this.stateData$
        .subscribe(data => {
            this.stateData = data;
            this.ref.markForCheck();
        });   
    }
    // Unsubscribe from state data changes
    private endSubscriptions(): void {
        this.pendingSubscription.unsubscribe();
        this.errorSubscription.unsubscribe();
        this.stateDataSubscription.unsubscribe();
    }
  
    ngOnDestroy() {
        this.endSubscriptions();
    }
    

}