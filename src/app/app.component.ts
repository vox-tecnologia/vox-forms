import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public customForm: Array<any> = [
    {
        "description": "Group Name",
        "questions": []
    },
    {
        "description": "Ungrouped",
        "questions": [{
            "Entity Group": {
                "customType": "aCustomType",
                "fieldType": "datatable",
                "questions": [
                    {
                        "A question description": {
                            "fieldType": "select",
                            "options": ["Option 1", "Option 2"],
                            "defaultOption": "Option 1"
                        },
                        "Another question description": {
                            "fieldType": "text",
                            "placeholder": "A example of value",
                            "mask": "##",
                            "validators": [
                                { "minLength": 1, "message": "You should have at least 1 character" },
                                { "required": true, "message": "This field should not be empty" }
                            ]
                        }
                    }
                ]
            },
            "A select question description": {
                "fieldType": "select",
                "options": ["Option 1", "Option 2"]
            },
            "A free text description": {
                "fieldType": "text",
                "exemplo": "A example of value",
                "mascara": "##.##.##",
                "validators": [
                    { "minLength": 1, "message": "You should have at least 1 character" },
                    { "required": true, "message": "This field should not be empty" }
                ]
            }
        }]
    }
  ];
}
