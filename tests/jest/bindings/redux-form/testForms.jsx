import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {
  Form,
  Input,
  Checkbox,
  Datepicker,
  Radio,
  Select,
  Textarea,
  TagSet,
  FieldGroup
} from 'bindings/redux-form/index';

// https://github.com/facebook/react/issues/7740#issuecomment-247335106
const createNodeMock = () => ({
  addEventListener: () => {}
});
const mockStore = configureStore();

describe('>>> redux-form --- Snapshot', () => {
  it('+++capturing Snapshot of Input', () => {
    const renderedValue = renderer.create(<Provider store={mockStore()}>
      <Form name="test">
        <Input name="input1" />
      </Form>
                                          </Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Checkbox', () => {
    const renderedValue = renderer.create(<Provider store={mockStore()}>
      <Form name="test">
        <Checkbox name="checkbox1" />
      </Form>
    </Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Datepicker', () => {
    const renderedValue = renderer.create(
      <Provider store={mockStore()}>
        <Form name="test">
          <Datepicker name="date1" />
        </Form>
      </Provider>,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Radio', () => {
    const renderedValue = renderer.create(<Provider store={mockStore()}>
      <Form name="test">
        <Radio name="radio1" />
      </Form>
    </Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Select', () => {
    const renderedValue = renderer.create(<Provider store={mockStore()}>
      <Form name="test">
        <Select name="select1" options={[]} />
      </Form>
    </Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Textarea', () => {
    const renderedValue = renderer.create(<Provider store={mockStore()}>
      <Form name="test">
        <Textarea name="textarea1" />
      </Form>
    </Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of TagSet', () => {
    const renderedValue = renderer.create(
      <Provider store={mockStore()}>
        <Form name="test">
          <TagSet editable name="tagset1" tags={['tag1', 'tag2']} />
        </Form>
      </Provider>,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of FieldGroup', () => {
    const renderedValue = renderer.create(
      <Provider store={mockStore()}>
        <Form name="test">
          <FieldGroup label="test" meta={{ touched: false }}>
            <Input name="input1" />
          </FieldGroup>
        </Form>
      </Provider>,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
