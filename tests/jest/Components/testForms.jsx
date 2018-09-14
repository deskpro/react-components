import React from 'react';
import renderer from 'react-test-renderer';
import {
  Form,
  Checkbox,
  Colorpicker,
  CustomSelect,
  Datepicker,
  Datetimepicker,
  Group,
  HiddenFields,
  Input,
  Label,
  Radio,
  SearchButton,
  SearchInline,
  SearchSelect,
  SearchSubmit,
  Select,
  Tag,
  TagInput,
  TagSet,
  Textarea,
  Toggle
} from 'Components/Forms/index';

// https://github.com/facebook/react/issues/7740#issuecomment-247335106
const createNodeMock = () => ({
  addEventListener: () => {}
});

describe('>>> Forms --- Snapshot', () => {
  it('+++capturing Snapshot of Checkbox', () => {
    const renderedValue = renderer.create(<Checkbox className="test-class" value="test" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of ColorPicker', () => {
    const renderedValue = renderer.create(<Colorpicker className="test-class" value="test" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of CustomSelect', () => {
    const inputRenderer = () => (
      '12 countries'
    );
    const renderedValue = renderer.create(<CustomSelect className="test-class" inputRenderer={inputRenderer}>
      <div />
    </CustomSelect>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Datepicker', () => {
    const renderedValue = renderer.create(
      <Datepicker className="test-class" name="date1" value="01/01/2018" />,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Datetimepicker', () => {
    const renderedValue = renderer.create(
      <Datetimepicker className="test-class" name="date2" value="01/01/2018 12:34" />,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Form', () => {
    const renderedValue = renderer.create(<Form className="test-class">
      <input name="input1" />
    </Form>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Group', () => {
    const renderedValue = renderer.create(<Group className="test-class" label="Test">
      <input name="input1" />
    </Group>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of HiddenFields', () => {
    const renderedValue = renderer.create(<HiddenFields className="test-class" labelShow="Test Show" labelHide="Test Hide" opened>
      <input name="input1" />
    </HiddenFields>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Input', () => {
    const renderedValue = renderer.create(<Input className="test-class" name="input1" value="test" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Label', () => {
    const renderedValue = renderer.create(<Label className="test-class">Test</Label>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Radio', () => {
    const renderedValue = renderer.create(<Radio className="test-class" name="radio1" value="test" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of SearchButton', () => {
    const renderedValue = renderer.create(
      <SearchButton className="test-class" results={[]} />,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of SearchInline', () => {
    const renderedValue = renderer.create(<SearchInline className="test-class" results={[]} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of SearchSelect', () => {
    const renderedValue = renderer.create(<SearchSelect className="test-class" results={[]} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of SearchSubmit', () => {
    const renderedValue = renderer.create(<SearchSubmit className="test-class" results={[]} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Select', () => {
    const options = [
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' }
    ];
    const renderedValue = renderer.create(<Select className="test-class" options={options} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Tag', () => {
    const renderedValue = renderer.create(<Tag className="test-class" editable>Test</Tag>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of TagInput', () => {
    const renderedValue = renderer.create(<TagInput className="test-class" tags={['test1', 'test2']} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of TagSet', () => {
    const renderedValue = renderer.create(
      <TagSet className="test-class" name="tags1" tags={['test1', 'test2']} />,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Textarea', () => {
    const renderedValue = renderer.create(<Textarea className="test-class" name="textarea1" value="test" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Toggle', () => {
    const renderedValue = renderer.create(<Toggle className="test-class" name="radio1" value="test" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
