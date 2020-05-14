

import {ContactNamePipe} from './contact-name.pipe';
import {Contact} from '../models/contact';

describe('Pipe: ContactName', () => {
  let pipe: ContactNamePipe;
  beforeEach(() => {
    pipe = new ContactNamePipe();
  });

  it('should concatenate a contact name', () => {
    const contact = {} as Contact;
    contact.email = 'email';
    contact.firstName = 'first';
    contact.surname = 'last';
    expect(pipe.transform(contact)).toEqual('first last');
  });
});
