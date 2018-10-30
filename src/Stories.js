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
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const TagsField = ({ record }) => (
  <ul>
    {((record || {}).tags || []).map(item => (
      <li key={item}>{`${item}, `}</li>
    ))}
  </ul>
);

export const StoriesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <BooleanField source="published" />
      <TextField source="country" />
      <TextField source="type" />
      <TextField source="work_on" />
      <TextField source="im_able" />
      <TextField source="picture" />
      <TextField source="user_name" />
      <ReferenceField
        label="User"
        source="user_id"
        reference="admin/users"
        allowEmpty
      >
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

const StoriesTitle = ({ record }) => {
  return <span>Story {record ? `"${record.id}"` : ""}</span>;
};

export const StoriesEdit = props => (
  <Edit title={<StoriesTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <BooleanInput source="published" />
      <TextInput source="country" />
      <TextInput source="type" />
      <TextInput source="work_on" />
      <TextInput source="im_able" />
      <TextInput source="picture" />
      <TextInput source="user_name" />
      <ReferenceInput
        label="User"
        source="user_id"
        reference="admin/users"
        allowEmpty
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const StoriesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <BooleanInput source="published" />
      <TextInput source="country" />
      <TextInput source="type" />
      <TextInput source="work_on" />
      <TextInput source="im_able" />
      <TextInput source="picture" />
      <TextInput source="user_name" />
      <ReferenceInput
        label="User"
        source="user_id"
        reference="admin/users"
        allowEmpty
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
