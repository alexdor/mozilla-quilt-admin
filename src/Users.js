import React from 'react';
import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="surname" />
      <TextField source="name" />
      <BooleanField source="anonymous" />
      <BooleanField source="receive_email_update" />
      <TextField source="email" />
      <TextField source="picture" />
      <TextField source="country" />
      <EditButton />
    </Datagrid>
  </List>
);
const UserTitle = ({ record }) => {
  return <span>Post {record ? `"${record.email}"` : ""}</span>;
};
export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput type="email" source="email" />
      <TextInput source="surname" />
      <TextInput source="name" />
      <BooleanInput source="anonymous" />
      <BooleanInput source="receive_email_update" />
      <TextInput source="picture" />
      <TextInput source="country" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput type="email" source="email" />
      <TextInput source="surname" />
      <TextInput source="name" />
      <BooleanInput source="anonymous" />
      <BooleanInput source="receive_email_update" />
      <TextInput source="picture" />
      <TextInput source="country" />
    </SimpleForm>
  </Create>
);
