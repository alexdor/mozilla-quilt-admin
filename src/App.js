import englishMessages from 'ra-language-english';
import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import { AdminCreate, AdminEdit, AdminList } from './Admin';
import authProvider from './helpers/authProvider';
import dataProvider from './helpers/dataProvider';
import { StoriesCreate, StoriesEdit, StoriesList } from './Stories';
import { UserCreate, UserEdit, UserList } from './Users';

const messages = {
  en: englishMessages
};
const i18nProvider = locale => messages[locale];
class App extends Component {
  render() {
    return (
      <div style={{ width: "100vw", position: "absolute", left: "0px" }}>
        <Admin
          locale="en"
          i18nProvider={i18nProvider}
          dataProvider={dataProvider}
          authProvider={authProvider}
          title="Mozilla Quilt"
        >
          <Resource
            name="admin/stories"
            list={StoriesList}
            edit={StoriesEdit}
            create={StoriesCreate}
          />
          <Resource
            name="admin/admins"
            list={AdminList}
            edit={AdminEdit}
            create={AdminCreate}
          />
          <Resource
            name="admin/users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
          />
        </Admin>
      </div>
    );
  }
}

export default App;
