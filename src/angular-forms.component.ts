import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { AngularForms } from '.';
import { Group } from './group';
import { Question, DependencyService } from './question';
import { ReactiveFormsFactory } from './factory';

@Component({
  selector: 'rb-angular-forms',
  templateUrl: require('file-loader!./angular-forms.component.html'),
  styleUrls: [require('file-loader!./angular-forms.component.css')],
  providers: [DependencyService]
})
export class AngularFormsComponent implements OnInit {

  public formGroup: FormGroup;
  public submitted: boolean = false;

  @Input() public groups: Group[] = [];
  @Input() public readOnly: boolean = false;

  public constructor(private dependencyService: DependencyService) { }

  public ngOnInit(): void {
    this.groups = AngularForms.fromJson(this.groups);
    this.formGroup = ReactiveFormsFactory.createFormGroupFromGroups(this.groups);
  }

  public hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    return this.dependencyService.hideQuestion(question, formGroup);
  }

  public getForm(): { valid: boolean, value: any } {
    this.submitted = true;

    return { valid: this.formGroup.valid, value: this.formGroup.value };
  }
}
