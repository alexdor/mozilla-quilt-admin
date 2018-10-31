import React from 'react';
import { Create, Datagrid, DisabledInput, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin';

export const ImagesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="links" />
      <EditButton />
    </Datagrid>
  </List>
);

const ImagesTitle = ({ record }) => {
  return <span>Image {record ? `"${record.id}"` : ""}</span>;
};

export const ImagesEdit = props => (
  <Edit title={<ImagesTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="links" />
    </SimpleForm>
  </Edit>
);

export const ImagesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="links" />
    </SimpleForm>
  </Create>
);
