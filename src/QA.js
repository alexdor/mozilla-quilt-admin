import React from 'react';
import { Create, Datagrid, DisabledInput, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin';

export const QandAList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

const QandATitle = ({ record }) => {
  return <span>Q and A {record ? `"${record.id}"` : ""}</span>;
};

export const QandAEdit = props => (
  <Edit title={<QandATitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const QandACreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
