import React from 'react';
import { Create, Datagrid, DisabledInput, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin';

export const AdminList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField type="email" source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

const AdminTitle = ({ record }) => {
  return <span>Admin {record ? `"${record.email}"` : ""}</span>;
};

export const AdminEdit = props => (
  <Edit title={<AdminTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput type="email" source="email" />
      <TextInput type="password" source="password" />
    </SimpleForm>
  </Edit>
);

export const AdminCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput type="email" source="email" />
      <TextInput type="password" source="password" />
    </SimpleForm>
  </Create>
);
