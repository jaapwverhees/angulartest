import {Component} from '@angular/core';
import {Contact} from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [
    {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
    {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
    {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
  ];
  contactNotEdited = true;
  newContact = {} as Contact;
  contactToEdit = {} as Contact;

  addContact() {
    this.contacts.push(this.newContact);
    this.newContact = {} as Contact;
  }

  deleteContact(index) {
    this.contacts.splice(index, 1);
  }

  editContact(index) {
    this.contactNotEdited = false;
    this.contactToEdit = this.contacts[index];
    this.deleteContact(index);
  }
  addEditedContact(){
    this.contacts.push(this.contactToEdit);
    this.contactToEdit = {} as Contact;
    this.contactNotEdited = true;
  }
}
